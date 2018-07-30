import React from 'react'
import { Platform } from 'react-native'
import firebase from 'react-native-firebase'

export default class Logout extends React.Component {

  signOutUser = async () => {
    try {
      await firebase.auth().signOut()
      this.props.navigation.navigate('AuthenticationStack')
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount () {
    this.signOutUser()
  }

  render () {
    return null
  }
}
