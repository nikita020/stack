import API from './api'
import React from 'react';
import { Alert } from 'react-native';

function cancel() {
    console.log('Cancel Pressed')
}

function confirmOneTimeDeposit(amount) {
    API.createOneTimeDeposit(amount)
        .then(() => {
            Alert.alert(
                'Confirmation',
                `Your deposit of $${amount} has been sent`,
                [
                    {text: 'OK', style: 'default'},
                ],
            )
        })
        .catch(() => {
            Alert.alert(
                'Error',
                `Your deposit of $${amount} has failed. Please try again later or contact the support team.`,
                [
                    {text: 'OK', style: 'default'},
                ],
            )
        });
}

function confirmRecurringDeposit(amount, frequency) {
    API.createRecurringDeposit(amount, frequency)
        .then(() => {
            Alert.alert(
                'Confirmation',
                `Your deposit of $${amount.toLocaleString()} has been sent`,
                [
                    {text: 'OK', style: 'default'},
                ],
            )
        })
        .catch(() => {
            Alert.alert(
                'Error',
                `Your deposit of $${amount.toLocaleString()} has failed. Please try again later or contact the support team.`,
                [
                    {text: 'OK', style: 'default'},
                ],
            )
        });
}

export const createOneTimeDepositPopup = amount => {
    Alert.alert(
        'Great!',
        `Please confirm that you'd like to invest ${amount.toLocaleString()}`,
        [
            {text: 'Cancel', onPress: cancel , style: 'cancel'},
            {text: 'Confirm', onPress: () => confirmOneTimeDeposit(amount)},
        ],
        { cancelable: true }
    )
}

export const createRecurringDepositPopup = (amount, frequency) => {
    Alert.alert(
      'Great!',
      `Please confirm that you'd like to invest $${amount.toLocaleString()} ${frequency}.`,
      [
        {text: 'Cancel', onPress: () => cancel, style: 'cancel'},
        {text: 'Confirm', onPress: () => confirmRecurringDeposit(amount, frequency)},
      ],
      { cancelable: true }
    )
}
