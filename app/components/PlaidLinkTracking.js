import React, { Component } from 'react';
import PlaidAuthenticator from 'react-native-plaid-link';
import firebase from 'react-native-firebase';
import { NavigationActions } from 'react-navigation';
import Config from 'react-native-config';

export default class PlaidLinkTracking extends React.Component {


    constructor(props){
      super(props);
      this.onMessage = this.onMessage.bind(this);
    }

  render() {
    return(
      <PlaidAuthenticator
            onMessage={this.onMessage}
            publicKey="ecb7147babec8f380f6a6ef4a337d4"
            env="sandbox"
            product="transactions"
            webhook={ `${Config.FIREBASE_URL}/transaction_webhook?user_id=${global.user.uid}`}
              />
            )
          }

//TODO when exiting plaid link, it should navigate to previous page, also fix navigation
  onMessage = (data) => {
      if(data.action == 'plaid_link-undefined::exit'){
        this.props.navigation.dispatch(NavigationActions.back())
      } else {
        if(data.metadata && data.metadata.public_token){
               fetch(`${Config.FIREBASE_URL}/get_access_tokens`, {
                   method: 'POST',
                   headers: {
                       'Content-Type': 'application/json',
                   },
                   body: JSON.stringify({
                       'public_token': data.metadata.public_token,
                       'account_id': data.metadata.account.id,
                       'user_id': global.user.uid,
                       'account_name': data.metadata.account.name,
                       'institution_name': data.metadata.institution.name,
                       'institution_id': data.metadata.institution.institution_id,
                   }),
               }).then(response => {
                   console.log("Success");
                   console.log(response);
               }).catch(response => {
                   console.log("Error");
                   console.log(response);
               });
             }
           }
         }
       }
