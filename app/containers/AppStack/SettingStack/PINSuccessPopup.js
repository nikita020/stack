import React, { Component } from 'react'
import {
  View,
  ScrollView,
  DatePickerIOS,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import { styles } from '../../../components/styles'
import * as constants from '../../../../constants'

export default class PasswordSuccess extends Component {

//TODO Link to firebase, clean some stuff

  constructor (props) {
    super(props)
    this.state = {
      oldPassword: '',
      newPassword: '',
      repeatNewPassword: ''
    }
    this._focusPicker = this._focusPicker.bind(this)
  }

  _focusPicker () {
    Keyboard.dismiss()
    this.refs.rPicker.focus()
  }

  render () {
    return (
      <View
        style={{
          flex: 1,
          width: constants.windowWidth,
          backgroundColor: constants.colorViolet,
          height: constants.windowHeight
        }}
      >
        <View style={{flex: 1}}>
          <View style={{
            backgroundColor: constants.headerColorDarkBlue,
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            paddingVertical: 30
          }}>
            <Image source={require('../../../assets/pin-success-icons.png')} style={{height: 110, width: 100}}/>
            <Text style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 24,
              textAlign: 'center',
              paddingVertical: 30,
              lineHeight: 36
            }}>{`Your PIN has been \n changed successfully`}</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.popToTop({routeName: 'SettingScreen'})}
              style={{
                width: constants.windowWidth * 0.9,
                height: 50,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5
              }}>
              <Text style={{color: constants.headerColorDarkBlue, fontSize: 21, fontWeight: '700'}}>OK! THANKS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image style={styles.backgroundBottom} source={require('../../../assets/bgr-bottom-2.png')}
               resizeMode={'contain'}/>
      </View>
    )
  }
}
