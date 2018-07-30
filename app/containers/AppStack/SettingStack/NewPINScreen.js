import React, { Component } from 'react'
import {
  View,
  ScrollView,
  DatePickerIOS,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  Image,
  Text
} from 'react-native'

import PinNumberPad from '../../../components/PinNumberPad'

export default class NewPINScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pin: '',
      submitButtonDisabled: false
    }
  }
  render () {
    return (
      <PinNumberPad title={'Enter New PIN'} onSubmit={() => this.props.navigation.navigate('RepeatPINScreen')} submitButtonDisabled={this.state.submitButtonDisabled} {...this.props}/>
    )
  }
}