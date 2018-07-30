import React, { Component } from 'react'
import { Platform } from 'react-native'
import firebase from 'react-native-firebase'

export default class MainStack extends Component {

  componentWillMount () {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      global.user = user
      this.authSubscription()
      // If user has completed step 1 & 2 of the signup process
      if (user && user.displayName) {
        this.props.navigation.navigate('PinLoginStack')
      }
      else {
        // TODO: Delete user ?
        this.props.navigation.navigate('AuthenticationStack')
      }
    })
  }

  render () {
    console.log(this.props)
    // TODO: Add loading screen
    return null
  }
}
