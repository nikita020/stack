import firebase from 'react-native-firebase';
import Config from 'react-native-config';

const API = {
    // We use this because fetch does not fail if it receives a failed HTTP code
    // This allows to trigger 'catch' in the Promise chain upon failed HTTP response
    handleErrors(response) {
        if (!response.ok) {
            throw Error(response._bodyText);
        }
        return response;
    },

    custom_fetch(request, body) {
        return fetch(this.FIREBASE_URL + request, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(this.handleErrors)
    },

    FIREBASE_URL: Config.FIREBASE_URL,

    get_transactions(uid, limit) {
        return firebase.database().ref('/users/' + uid + '/transactions')
            .once('value')
            .then( snapshot => {
                let all_transactions = snapshot.val()
                if (all_transactions) {
                    let transactions_arr = Object.keys(all_transactions).map((key) => all_transactions[key])
                    if(!limit) limit = transactions_arr.length + 1
                    let transactions = transactions_arr
                        .filter( (transaction) => transaction.amount > 0 )
                        .sort( (t1,t2) => (t1.date > t2.date) ? -1 : 1  )
                        .slice(0, limit)
                    return transactions
                } else {
                    return []
                }
            });
    },

    create_dwolla_account(state) {
        return this.custom_fetch('/create_dwolla_account', {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            user_id: state.uid
        })
    },

    check_transaction(user_id, transaction_id, checked) {
        return this.custom_fetch('/check_transaction', {
            user_id,
            transaction_id,
            checked 
        })
    },

    getChangeMultiplier() {
        return firebase.database().ref('/users/' + global.user.uid + '/settings/changeMultiplier')
            .once('value')
    },

    setChangeMultiplier(changeMultiplier) {
        return firebase.database().ref('/users/' + global.user.uid + '/settings/changeMultiplier')
            .set(changeMultiplier)
    },

    createOneTimeDeposit(amount) {
        return this.custom_fetch('/createOneTimeDeposit', {
            userId: global.user.uid,
            amount: amount,
            // FIXME: This variable is to test the failure cases in the UI. 
            // Remove when payment is done in the backend
            fail:false 
        });
    },

    createRecurringDeposit(amount, frequency) {
        return this.custom_fetch('/createRecurringDeposit', {
            userId: global.user.uid,
            amount: amount,
            frequency: frequency,
            fail:false 
        });
    },

    getCoinPrices() {
        return this.custom_fetch('/getCoinPrices')
            .then(data => data.json())
    }
}

export default API
