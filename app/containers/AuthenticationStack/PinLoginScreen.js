import React, { Component } from 'react'
// import { Button } from 'react-native-elements'
import { StackActions, NavigationActions } from 'react-navigation'
import PinNumberPad from '../../components/PinNumberPad'

export default class PinLoginScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      pin: '',
      submitButtonDisabled: false
    }
  }

  render () {
    return <PinNumberPad
      title={'Enter your PIN'}
      onSubmit={() => this.props.navigation.navigate('HomeStack')}
      submitButtonDisabled={this.state.submitButtonDisabled} {...this.props}
    />
  }
}
