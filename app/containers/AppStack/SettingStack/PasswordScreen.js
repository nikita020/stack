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
import ViewContainer from '../../../components/ViewContainer'
import { styles } from '../../../components/styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Button from '../../../components/Button'
import { colorViolet, colorWhite, windowHeight, windowWidth } from '../../../../constants'

export default class PasswordScreen extends Component {

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
      <KeyboardAwareScrollView
        style={{flex: 1, width: windowWidth, backgroundColor: colorViolet}}
      >
        <ViewContainer style={{paddingBottom: windowHeight * 0.1}}>
          <View style={{height: windowHeight * 0.3, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/password-icon.png')}
              style={{
                height: 0.2 * windowWidth,
                width: 0.2 * windowWidth
              }}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <Text style={styles.labelInput}>Old Password</Text>
            <TextInput
              style={[styles.input, {color: colorWhite}]}
              onChangeText={(text) => this.setState({oldPassword: text})}
              secureTextEntry
              underlineColorAndroid={'transparent'}
              autoCorrect={false}
              value={this.state.oldPassword}/>
          </View>

          <View style={{marginBottom: 15}}>
            <Text style={styles.labelInput}>New Password</Text>
            <TextInput
              style={[styles.input, {color: colorWhite}]}
              secureTextEntry
              autoCorrect={false}
              onEndEditing={(text) => this.setState({newPassword: text})}
              underlineColorAndroid={'transparent'}
              value={this.state.newPassword}/>
          </View>

          <View style={{marginBottom: 15}}>
            <Text style={styles.labelInput}>New Password</Text>
            <TextInput
              style={[styles.input, {color: colorWhite}]}
              secureTextEntry
              autoCorrect={false}
              onEndEditing={(text) => this.setState({repeatNewPassword: text})}
              underlineColorAndroid={'transparent'}
              value={this.state.repeatNewPassword}/>
          </View>

          <Button
            style={styles.vw90}
            onPress={() => this.props.navigation.navigate({routeName: 'PasswordSuccess'})}
            title={'CHANGE'}
          />

          <Image style={styles.backgroundBottom} source={require('../../../assets/bgr-bottom-2.png')}
                 resizeMode={'contain'}/>
        </ViewContainer>
      </KeyboardAwareScrollView>
    )
  }
}
