import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert,
  Image
} from 'react-native'
import ViewContainer from './ViewContainer'
import { styles } from './styles'
import firebase from 'react-native-firebase'
import { Card, Icon, Button, CheckBox } from 'react-native-elements'
import GridLayout from 'react-native-layout-grid'
import { createOneTimeDepositPopup } from '../lib/invest'
import ButtonCustom from './Button'
import NumberPadCustom from './NumberPadCustom'

export default class PinNumberPad extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.setCustomDeposit = this.setCustomDeposit.bind(this)
  }

  changeValue = (item) => {
    if (this.state.value.length < 4) {
      this.setState({
        value: this.state.value + item.name
      })
    }
    if (item.action === 'delete' && this.state.value.length > 0) {
      this.setState({value: this.state.value.substring(0, this.state.value.length - 1)})
    }
  }

  setCustomDeposit () {
    if (this.state.value > 5000) {
      Alert.alert(
        'Sorry!',
        'Please enter a value lower than $5,000.',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        {cancelable: true}
      )
    }
    else if (this.state.value < 5) {
      Alert.alert(
        'Sorry!',
        'Please enter a value greater than $5.',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        {cancelable: true}
      )
    }
    else {
      createOneTimeDepositPopup(this.state.value)
    }
  }

  renderPinValue (value) {
    let elements = []

    for (let i = 0; i < 4; i++) {
      if (value && i < value.length) {
        elements.push(<View style={ styles.activeDotElement } key={ i }/>)
      }
      else {
        elements.push(<View style={ styles.dotElement } key={ i }/>)
      }
    }

    return <View style={ styles.dotsBox }>{ elements }</View>
  }

  render () {

    return (
      <ViewContainer>
        <View style={ styles.pinContainer }>
          <View style={ styles.pinRegisterContainer }>
            <Text style={ styles.textWhite }>{this.props.title}</Text>
            <View style={ styles.pinRegisterValue }>
              { this.renderPinValue(this.state.value) }
            </View>
            <View style={ styles.gridView }>
              <NumberPadCustom isString={true} changeValue={this.changeValue}/>
            </View>

            <ButtonCustom
              style={ styles.vw90 }
              onPress={ this.props.onSubmit }
              disabled={ this.props.submitButtonDisabled }
              title='CONTINUE'
            />
            <View style={ styles.signUpTextBox }>
              <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
                <Text style={ styles.cancelText }> Cancel </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Image style={ styles.backgroundBottom } source={ require('../assets/bgr-bottom-2.png') }
               resizeMode={ 'contain' }/>
      </ViewContainer>
    )
  }
}
