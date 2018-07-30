import React, { Component } from 'react'
import {
  Text,
  View,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback
} from 'react-native'
import ViewContainer from '../../components/ViewContainer'
import { styles } from '../../components/styles'
import firebase from 'react-native-firebase'
import Button from '../../components/Button'

import * as constants from '../../../constants'

export default class LoginScreen extends Component {
  //TODO: Add toast
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      progress: .5,
    }
    this._onSubmit = this._onSubmit.bind(this)
    this.renderContent = this.renderContent.bind(this)
  }

  _onSubmit () {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        var userData = user._user
        var userProfile = JSON.parse(userData.displayName)
        global.user = user
        this.props.navigation.navigate('HomeStack')
      })
      .catch(function (error) {
        console.log(error.code)
        console.log(error.message)
      })
  }

  renderContent () {
    return [
      <TextInput
        style={styles.input}
        placeholder={'Username or Email'}
        placeholderTextColor={constants.colorViolet1}
        keyboardAppearance='dark'
        returnKeyType='next'
        autoCapitalize='none'
        underlineColorAndroid={'transparent'}
        keyboardType='email-address'
        value={this.state.email}
        onChangeText={(text) => this.setState({email: text})}
      />,

      <TextInput
        style={styles.input}
        placeholder={'Password'}
        placeholderTextColor={constants.colorViolet1}
        keyboardAppearance='dark'
        returnKeyType='next'
        autoCapitalize='none'
        underlineColorAndroid={'transparent'}
        secureTextEntry={true}
        value={this.state.password}
        onChangeText={(text) => this.setState({password: text})}
      />,

      <Button
        style={styles.vw90}
        onPress={this._onSubmit}
        title='SUBMIT'
      />
    ]
  }

  render () {
    return (
      <TouchableWithoutFeedback>
        <ViewContainer>

          <Image style={[styles.backgroundTop, {height: 1040 / 1125 * constants.windowWidth}]}
                 source={require('../../assets/bgr-top-1.png')} resizeMode={'contain'}/>

          <Image style={styles.logoStack} source={require('../../assets/logo-s.png')} resizeMode={'contain'}/>

          {
            Platform.OS === 'ios'
              ?
              <KeyboardAvoidingView style={styles.containerCenter} behavior={'position'}>
                {this.renderContent()}
              </KeyboardAvoidingView>
              :
              <View style={styles.containerCenter} behavior="position">
                {this.renderContent()}
              </View>
          }


          <View style={styles.signUpTextBox}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPasswordScreen')}>
              <Text style={styles.textVioletSmall}>FORGOT PASSWORD</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signUpTextBox}>
            <Text style={styles.textVioletSmall}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUpScreen')}>
              <Text style={styles.textWhiteSmall}> Sign Up</Text>
            </TouchableOpacity>
          </View>

          <Image style={styles.backgroundBottom} source={require('../../assets/bgr-bottom-1.png')}
                 resizeMode={'contain'}/>
        </ViewContainer>
      </TouchableWithoutFeedback>
    )
  }
}
