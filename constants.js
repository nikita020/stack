import { Dimensions } from 'react-native'

export const windowHeight = Dimensions.get('window').height
export const windowWidth = Dimensions.get('window').width

export const statusBarHeight = 20

// colors
export const colorWhite = '#ffffff'
export const colorOpacity = 'rgba(255, 255, 255, 0.5)'
export const colorGreen = '#33e783'
export const colorGreen2 = '#32c98f'
export const colorViolet = '#260063'
export const colorViolet1 = '#96a4fd'
export const colorViolet2 = '#4a179c'
export const colorViolet3 = '#4c2db1'
export const colorViolet4 = '#592db1'
export const colorViolet5 = '#4d23a1'
export const colorViolet6 = '#2d1c8e'

export const colorVioletOpacity = 'rgba(38, 0, 98, 0.8)'

export const colorVioletPrimary1 = '#260063'
export const colorVioletPrimary2 = '#4c2db1'
export const colorVioletPrimary3 = '#592db1'
export const colorVioletSecondary1 = '#4d23a1'
export const colorVioletSecondary2 = '#9f96e4'
export const colorSecondaryViolet = '#96a4fd'
export const colorBluePrimary = '#3d5ef0'
export const colorBlueSecondary1 = '#2f4ac4'
export const colorBlueSecondary2 = '#96a4fd'
export const colorGreenPrimary = '#33e783'
export const colorGreenSecondary1 = '#28d48d'
export const colorGreenSecondary2 = '#c3ffe6'
export const colorSeaPrimary = '#43cfdc'
export const colorSeaSecondary1 = '#36bdca'
export const colorSeaSecondary2 = '#b5f3f9'

export const colorGray = '#c8cde1'
export const colorGray2 = '#acb2c9'
export const colorBlue = '#2f4ac4'
export const colorBlue2 = '#3d5ef0'
export const colorBlue3 = '#43cfdc'
export const colorBlue4 = '#36bdca'
export const colorBlue5 = '#263ca0'
export const headerColorViolet = '#4c2db1'
export const headerColorDarkBlue = '#3d5ef0'
export const cardBodyBackgroundColorDefault = '#e4e7f5'

export const coinDetail = [
  {
    'name': 'Bitcoin',
    'price': 9130.82,
    'symbol': 'BTC',
    'amount': 1.9,
    'displayed': true
  }, {
    'name': 'Bitcoin Cash',
    'price': 1448.17,
    'symbol': 'BCH',
    'amount': 4.6,
    'displayed': true
  }, {
    'name': 'Ethereum', 'price': 676.117, 'symbol': 'ETH', 'amount': 2.8, 'displayed': true
  }, {
    'name': 'Dash',
    'price': 471.157,
    'symbol': 'DASH',
    'amount': 2.3,
    'displayed': true
  }, {'name': 'Monero', 'price': 247.727, 'symbol': 'XMR', 'amount': 3.8, 'displayed': true}, {
    'name': 'Litecoin',
    'price': 149.175,
    'symbol': 'LTC',
    'amount': 5.5,
    'displayed': true
  }, {'name': 'NEO', 'price': 83.4311, 'symbol': 'NEO', 'amount': 8.2, 'displayed': true}, {
    'name': 'Zcash',
    'price': 289.914,
    'symbol': 'ZEC',
    'amount': 2.2,
    'displayed': true
  }, {'name': 'Bitcoin Gold', 'price': 74.381, 'symbol': 'BTG', 'amount': 8, 'displayed': true}, {
    'name': 'EOS',
    'price': 18.509,
    'symbol': 'EOS',
    'amount': 9.1,
    'displayed': true
  }, {
    'name': 'Qtum',
    'price': 21.7579,
    'symbol': 'QTUM',
    'amount': 7.6,
    'displayed': true
  }, {
    'name': 'Ethereum Classic',
    'price': 21.4069,
    'symbol': 'ETC',
    'amount': 5.1,
    'displayed': true
  }, {'name': 'Lisk', 'price': 14.1299, 'symbol': 'LSK', 'amount': 4.5, 'displayed': true}, {
    'name': 'ICON',
    'price': 4.30788,
    'symbol': 'ICX',
    'amount': 9,
    'displayed': true
  }, {'name': 'Nano', 'price': 8.22362, 'symbol': 'NANO', 'amount': 3.8, 'displayed': true}, {
    'name': 'OmiseGO',
    'price': 16.8287,
    'symbol': 'OMG',
    'amount': 1.3,
    'displayed': true
  }, {'name': 'Steem', 'price': 3.97157, 'symbol': 'STEEM', 'amount': 4.7, 'displayed': true}, {
    'name': 'Stellar',
    'price': 0.436635,
    'symbol': 'XLM',
    'amount': 7.3,
    'displayed': true
  }, {'name': 'Ripple', 'price': 0.851813, 'symbol': 'XRP', 'amount': 3.7, 'displayed': true}, {
    'name': 'IOTA',
    'price': 2.21735,
    'symbol': 'MIOTA',
    'amount': 1.2,
    'displayed': true
  }, {'name': 'Cardano', 'price': 0.370964, 'symbol': 'ADA', 'amount': 6.4, 'displayed': true}, {
    'name': 'TRON',
    'price': 0.0903797,
    'symbol': 'TRX',
    'amount': 6.9,
    'displayed': true
  }
]

export const coinColors = {
  'BTC': '#F19019',
  'ETH': '#617DE8',
  'XRP': '#00AAE4',
  'BCH': '#8DC351',
  'LTC': '#CBC6C6',
  'ADA': '#3CC8C8',
  'XLM': '#14B6E7',
  'NEO': '#58BF00',
  'EOS': '#000000',
  'MIOTA': '#696969',
  'DASH': '#1C75BC',
  'XMR': '#FF6600',
  'LSK': '#0288D1',
  'ETC': '#669073',
  'TRX': '#000000',
  'QTUM': '#2E9AD0',
  'BTG': '#EBA809',
  'ICX': '#1FC5C9',
  'OMG': '#1A53F0',
  'ZEC': '#ECB244',
  'NANO': '#4A90E2',
  'STEEM': '#4BA2F2',
}

export const coinLogos = {
  'BTC': require('./app/assets/btc.png'),
  'ETH': require('./app/assets/eth.png'),
  'XRP': require('./app/assets/xrp.png'),
  'BCH': require('./app/assets/bch.png'),
  'LTC': require('./app/assets/ltc.png'),
  'ADA': require('./app/assets/ada.png'),
  'XLM': require('./app/assets/xlm.png'),
  'NEO': require('./app/assets/neo.png'),
  'EOS': require('./app/assets/eos.png'),
  'MIOTA': require('./app/assets/miota.png'),
  'DASH': require('./app/assets/dash.png'),
  'XMR': require('./app/assets/xmr.png'),
  'LSK': require('./app/assets/lsk.png'),
  'ETC': require('./app/assets/etc.png'),
  'TRX': require('./app/assets/trx.png'),
  'QTUM': require('./app/assets/qtum.png'),
  'BTG': require('./app/assets/btg.png'),
  'ICX': require('./app/assets/icx.png'),
  'OMG': require('./app/assets/omg.png'),
  'ZEC': require('./app/assets/zec.png'),
  'NANO': require('./app/assets/nano.png'),
  'STEEM': require('./app/assets/steem.png'),
}

export const listBanks = [
  {
    name: 'Metro Bank Austria',
    logo: require('./app/assets/metro-bank-logo.png')
  },
  {
    name: 'Deutsche Bank',
    logo: require('./app/assets/logo-Deutsche-Bank.png')
  },
  {
    name: 'United State Bank',
    logo: require('./app/assets/logo-bank-us.png')
  },
  {
    name: 'DBS Bank Panama',
    logo: require('./app/assets/logo-dbs-bank.png')
  },
  {
    name: 'Bank of China',
    logo: require('./app/assets/logo-china-bank.png')
  },
  {
    name: 'Key Bank Portugal',
    logo: require('./app/assets/logo-key-bank.png')
  },
  {
    name: 'Mandiri Syriah',
    logo: require('./app/assets/logo-mandiri-bank.png')
  },
]
