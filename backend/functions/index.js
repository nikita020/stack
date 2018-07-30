const moment = require('moment')
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.database()

var bodyParser = require('body-parser');
var express = require('express');
var plaid = require('plaid');
var dwolla = require('dwolla-v2');
const request = require('request');
const requestPromise = require('request-promise');

var plaidClient = new plaid.Client(
    '5a0cb68fbdc6a46838fe618b',
    '0cffeb135c7d4150478f4b89bad5c0',
    'ecb7147babec8f380f6a6ef4a337d4',
    plaid.environments.sandbox
);

var dwollaClient = new dwolla.Client({
  key: '2qto7LgLwQqgND40lt7gwpv5nYF4SVv89lhIbs44MYdoF1sLW9',
  secret: 'vzn3CNdQemOW552W0joUqmmI9rKMTCNRfYuMSv078k3I52adw2',
  environment: 'sandbox',
});

const coinSupported = ['BTC', 'ETH', 'XRP', 'BCH', 'LTC', 'ADA', 'XLM', 'NEO', 'EOS', 'MIOTA', 'DASH', 'XMR', 'LSK', 'ETC', 'TRX', 'QTUM', 'BTG', 'ICX', 'OMG', 'ZEC', 'NANO', 'STEEM'];
const coinSupportedRef = db.ref('/coinSupported');

// Convinence method to set what coins the Stack supports
exports.setSupportedCoins = functions.https.onRequest((req, res) => {
  coinSupportedRef
    .set(coinSupported)
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send())
})

exports.getCoinPrices = functions.https.onRequest((req,res) => {
  const coinPricesRef = db.ref('/coinPrices');
  const recentPricesPromise = coinPricesRef
    .once('value')
    .then(snapshot => {
      const coinPrices = snapshot.val();
      if (coinPrices && coinPrices.timestamp && (Date.now() / 1000 - coinPrices.timestamp) < 1000 * 3600 && coinPrices.list) {
        return coinPrices.list
      } else {
        return requestPromise('https://api.coinmarketcap.com/v2/ticker/?limit=100')
          .then(body => {
            const { data, metadata } = JSON.parse(body);
            const list = Object.keys(data)
              .map(key => data[key])
              .map(coin => {
                return {
                  name: coin.name,
                  symbol: coin.symbol,
                  price: coin.quotes.USD.price,
                }
              });
            coinPricesRef.set({
              timestamp: metadata.timestamp,
              list: list
            });
            return list;
          })
      }
    });

  const coinSupportedPromise = coinSupportedRef
    .once('value')
    .then(snapshot => snapshot.val());

  Promise.all([recentPricesPromise, coinSupportedPromise])
    .then(data  => {
      const coinInfo = data[0];
      const coinSupported = new Set(data[1]);
      const coinSupportedInfo = coinInfo.filter(coinInfo => coinSupported.has(coinInfo.symbol))
      res.status(200).send(coinSupportedInfo);
    })
    .catch(() => res.status(500).send())
})

exports.createOneTimeDeposit = functions.https.onRequest((req, res) => {
  let { userId, amount, fail } = req.body;
  console.log(userId, amount, fail);
  if (fail) {
    res.status(500).send();
  } else {
    res.status(200).send();
  }
})

exports.createRecurringDeposit = functions.https.onRequest((req, res) => {
  let { userId, amount, frequency, fail } = req.body;
  console.log(userId, amount, frequency, fail);
  if (fail) {
    res.status(500).send();
  } else {
    res.status(200).send();
  }
})

exports.check_transaction = functions.https.onRequest((request, response) => {
    let user_id = request.body.user_id
    let transaction_id = request.body.transaction_id
    db.ref('/users/' + user_id + '/transactions/' + transaction_id)
        .update({ 'checked': request.body.checked })
        .then( () => response.status(200).send(''))
        .catch( error => response.status(500).send(error))
})

exports.update_bank_state = functions.database.ref('/users/{user_id}/transactions/').onWrite(event => {
    let transactionsRef = event.data.ref;
    let bankRef = transactionsRef.parent.child('bank');
    let transactions = event.data.val()
    // TODO: do this in a more efficient way where checked transactions are remembered, and previous bank state is reused
    let transactions_arr = Object.keys(transactions).map((key) => transactions[key])
    return bankRef.transaction(current => {
        return transactions_arr
            .filter((transaction) => transaction.checked && !transaction.deposited)
            .map((transaction) => transaction.change )
            .reduce((amount1, amount2) => amount1 + amount2, 0)
    })
});

exports.transaction_webhook = functions.https.onRequest((request, response) => {
    if (!request.query.user_id) {
        let message = "Error: No user was specified"
        response.status(403).send(message)
    } else {
        let user_id = request.query.user_id
        console.log(request.body.webhook_code + ' request for user '+ user_id)
        switch (request.body.webhook_code) {
            case 'DEFAULT_UPDATE':
            case 'HISTORICAL_UPDATE':
                let item_id = request.body.item_id
                db.ref('/users/' + user_id + '/items/' + item_id)
                    .on("value", snapshot => {
                        let access_token = snapshot.val().accessToken
                        console.log('Transactions changed')
                        if (!access_token) {
                            console.log('Access token missing. Printing snapshot...:' + JSON.stringify(snapshot.val()))
                            return
                        }
                        let now = moment();
                        let today = now.format('YYYY-MM-DD');
                        let thirtyDaysAgo = now.subtract(30, 'days').format('YYYY-MM-DD');
                        plaidClient.getTransactions(access_token, thirtyDaysAgo, today, (error, res) => {
                            if (error)
                                console.log('ERROR:' + error)
                            let transactions_to_insert = res.transactions
                                .filter( transaction => transaction.amount >= 0)
                                .reduce( (acc, transaction) => {
                                    let t_id = transaction.transaction_id
                                    acc[t_id] = transaction
                                    acc[t_id].change = (Math.ceil(transaction.amount) - transaction.amount) || 1
                                    acc[t_id].checked = false
                                    acc[t_id].deposited = false
                                    return acc
                                }, {})
                            db.ref('/users/' + user_id + '/transactions/')
                                .set(transactions_to_insert, (error) => {
                                    if (!error)
                                        response.status(200).send('')
                                    else
                                        response.status(500).send(error)
                                })
                        })
                    })
                break
            default:
                response.status(400).send('');
                break
        }
    }
})

exports.get_access_tokens = functions.https.onRequest((request, response) => {
    PUBLIC_TOKEN = request.body.public_token ? request.body.public_token : request.query.public_token;
    USER_ID = request.body.user_id;
    ACCOUNT_ID = request.body.account_id;
    CUSTOMER_URL = request.body.customer_url;
    ACCOUNT_NAME = request.body.account_name;
    INSTITUTION_NAME = request.body.institution_name;
    INSTITUTION_ID = request.body.institution_id;
    // TODO: Promise instead of callback ? check doc
    plaidClient.exchangePublicToken(PUBLIC_TOKEN, function(error, tokenResponse) {
        // TODO: Test error handling (does it display Object [object] ?)
        if (error) {
            response.send(500).send(error);
        }
        ACCESS_TOKEN = tokenResponse.access_token;
        ITEM_ID = tokenResponse.item_id;
        let item = {}
        // TODO: Fix case
        item[ITEM_ID] = {
            itemId: ITEM_ID,
            accessToken: ACCESS_TOKEN,
            accountId: ACCOUNT_ID,
            accountName: ACCOUNT_NAME,
            institutionName: INSTITUTION_NAME,
            institutionID: INSTITUTION_ID,
        }
        // TODO: Test this case
        if(!CUSTOMER_URL) {
            db.ref('/users/' + USER_ID + '/items/')
                .set(item)
                .then( () => response.status(200).send('')  )
        } else {
            plaidClient.createProcessorToken(ACCESS_TOKEN, ACCOUNT_ID, 'dwolla', function(error, res){
                // TODO: Same here
                if (error) {
                    response.send(500).send(error);
                }
                PROCESSOR_TOKEN = res.processor_token;
                var requestBody = {
                    plaidToken: PROCESSOR_TOKEN,
                    name: ACCOUNT_NAME,
                }
                item[ITEM_ID].processorToken = PROCESSOR_TOKEN
                dwollaClient.auth.client()
                    .then( token => token.post(CUSTOMER_URL + '/funding-sources', requestBody) )
                    .then( res => {
                        db.ref('/users/' + USER_ID)
                            .update({ 'customerFundingUrl': res.headers.get('location') })
                            .then( () => {
                                db.ref('/users/' + USER_ID + '/items/')
                                    .set(item)
                                    .then( () => response.status(200).send('')  )
                            })
                    })
            });
        }
    })
});

exports.create_dwolla_account = functions.https.onRequest((request, response) => {
    var first_name = request.body.firstName;
    var last_name = request.body.lastName;
    var email = request.body.email;
    var user_id = request.body.user_id;
    if (!email) {
        response.status(403).send('Wrong email')
    }
    var requestBody = {
      firstName: first_name,
      lastName: last_name,
      email: email,
    }
    dwollaClient.auth.client()
      .then(function(token) {
        return token.post('customers', requestBody)
      })
      .then(res => res.headers.get('location'))
      .then(function(res) {
          admin.database().ref('/users/' + user_id)
              .update({ customerUrl: res })
              .then( () => response.status(200).send(''))
       }).catch( (error) => response.status(500).send(error))
   });

//TODO REFACTOR USE WAYNES SCRIPT
  exports.buy_coin = functions.https.onRequest((request, response) => {
      USER_ID = request.body.user_id;
      DEPOSIT_AMOUNT = request.body.deposit_amount;
      var btcMarketPrice = 16000;
      var btcFee = .02 * btcMarketPrice;
      var btcMarket = btcMarketPrice + btcFee;

      var ethMarketPrice = 750;
      var ethFee = .02 * ethMarketPrice;
      var ethMarket = ethMarketPrice + ethFee;

      var ltcMarketPrice = 250;
      var ltcFee = .02 * ltcMarketPrice;
      var ltcMarket = ltcMarketPrice + ltcFee;

      var btcPercentageA = .5;
      var ethPercentageA = .25;
      var ltcPercentageA = .25;
      var btcPercentageB = .34;
      var ethPercentageB = .33;
      var ltcPercentageB = .33;

      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if(dd<10) {
        dd = '0'+dd
      }
      if(mm<10) {
        mm = '0'+mm
      }
      var currentDay = yyyy+'-'+mm+'-'+dd;
      STACK_FUNDING_SOURCE_ID = '3d7b781e-8406-490d-8b8e-52571506ecde';
      admin.database().ref('/users/' + USER_ID + '/portfolio').once('value', function(snapshot){
        PORTFOLIO_TYPE = snapshot.val().portfolioType;
        BTC_AMOUNT = snapshot.val().btcAmount;
        ETH_AMOUNT = snapshot.val().ethAmount;
        LTC_AMOUNT = snapshot.val().ltcAmount;
        switch (PORTFOLIO_TYPE) {
          case 'A':
          BTC_BUY_AMOUNT = (DEPOSIT_AMOUNT * btcPercentageA)/btcMarket;
          ETH_BUY_AMOUNT = (DEPOSIT_AMOUNT * ethPercentageA)/ethMarket;
          LTC_BUY_AMOUNT = (DEPOSIT_AMOUNT * ltcPercentageA)/ltcMarket;
          break;

          case 'B':
          BTC_BUY_AMOUNT = (DEPOSIT_AMOUNT * btcPercentageB)/btcMarket;
          ETH_BUY_AMOUNT = (DEPOSIT_AMOUNT * ethPercentageB)/ethMarket;
          LTC_BUY_AMOUNT = (DEPOSIT_AMOUNT * ltcPercentageB)/ltcMarket;
          break;
        }
        admin.database().ref('/users/' + USER_ID).once('value', function(snapshot){
          CUSTOMER_FUNDING_URL = snapshot.val().customerFundingUrl;
          var requestBody = {
            _links: {
              source: {
                href: CUSTOMER_FUNDING_URL,
              },
              destination: {
                href: 'https://api-sandbox.dwolla.com/funding-sources/' + STACK_FUNDING_SOURCE_ID
              }
            },
            amount: {
              currency: 'USD',
              value: DEPOSIT_AMOUNT
            },
            clearing: {
              destination: 'next-available'
            }
          };
          dwollaClient.auth.client()
          .then(function(token){
            return token.post('transfers', requestBody)
          })
          .then(res => res.headers.get('location'))
          .then(function(res) {
            return admin.database().ref('/users/' + USER_ID + '/deposits/').push().set({
                transactionUrl: res,
                date: currentDay,
                amount: DEPOSIT_AMOUNT
            });
          })
        })
        admin.database().ref('/users/' + USER_ID + '/portfolio').update({
          btcAmount: BTC_AMOUNT + BTC_BUY_AMOUNT,
          ethAmount: ETH_AMOUNT + ETH_BUY_AMOUNT,
          ltcAmount: LTC_AMOUNT + LTC_BUY_AMOUNT,
        })
      })
  });


//TODO REFACTOR USE WAYNES SCRIPT
  exports.sell_coin = functions.https.onRequest((request, response) => {
    USER_ID = request.body.user_id;
    WITHDRAW_AMOUNT = request.body.withdraw_amount;
    var btcMarket = 16000;
    var ethMarket = 750;
    var ltcMarket = 250;
    var btcPercentageA = .5;
    var ethPercentageA = .25;
    var ltcPercentageA = .25;
    var btcPercentageB = .34;
    var ethPercentageB = .33;
    var ltcPercentageB = .33;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var currentDay = yyyy+'-'+mm+'-'+dd;
    if(dd<10) {
      dd = '0'+dd
    }
    if(mm<10) {
      mm = '0'+mm
    }
    STACK_FUNDING_SOURCE_ID = '3d7b781e-8406-490d-8b8e-52571506ecde';
    admin.database().ref('/users/' + USER_ID + '/portfolio').once('value', function(snapshot){
      PORTFOLIO_TYPE = snapshot.val().portfolioType;
      BTC_AMOUNT = snapshot.val().btcAmount;
      ETH_AMOUNT = snapshot.val().ethAmount;
      LTC_AMOUNT = snapshot.val().ltcAmount;
      switch (PORTFOLIO_TYPE) {
        case 'A':
        BTC_SELL_AMOUNT = (WITHDRAW_AMOUNT * btcPercentageA)/btcMarket;
        ETH_SELL_AMOUNT = (WITHDRAW_AMOUNT * ethPercentageA)/ethMarket;
        LTC_SELL_AMOUNT = (WITHDRAW_AMOUNT * ltcPercentageA)/ltcMarket;
        break;

        case 'B':
        BTC_SELL_AMOUNT = (WITHDRAW_AMOUNT * btcPercentageA)/btcMarket;
        ETH_SELL_AMOUNT = (WITHDRAW_AMOUNT * ethPercentageA)/ethMarket;
        LTC_SELL_AMOUNT = (WITHDRAW_AMOUNT * ltcPercentageA)/ltcMarket;
        break;
      }
      TOTAL_WITHDRAW = (BTC_SELL_AMOUNT * btcMarket) + (ETH_SELL_AMOUNT * ethMarket) + (LTC_SELL_AMOUNT * ltcMarket);
      admin.database().ref('/users/' + USER_ID).once('value', function(snapshot){
        CUSTOMER_FUNDING_URL = snapshot.val().customerFundingUrl;
        var requestBody = {
          _links: {
            source: {
              href: 'https://api-sandbox.dwolla.com/funding-sources/' + STACK_FUNDING_SOURCE_ID,
            },
            destination: {
              href: CUSTOMER_FUNDING_URL,
            }
          },
          amount: {
            currency: 'USD',
            value: TOTAL_WITHDRAW,
          },
          clearing: {
            destination: 'next-available'
          }
        };
        dwollaClient.auth.client()
        .then(function(token){
          return token.post('transfers', requestBody)
        })
        .then(res => res.headers.get('location'))
        .then(function(res) {
          return admin.database().ref('/users/' + USER_ID + '/withdraws/').push().set({
              transactionUrl: res,
              date: currentDay,
              amount: TOTAL_WITHDRAW,
            });
          })
        })
      admin.database().ref('/users/' + USER_ID + '/portfolio').update({
        btcAmount: BTC_AMOUNT - BTC_SELL_AMOUNT,
        ethAmount: ETH_AMOUNT - ETH_SELL_AMOUNT,
        ltcAmount: LTC_AMOUNT - LTC_SELL_AMOUNT,
      })
    })
  });
