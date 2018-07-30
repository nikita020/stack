import React, { Component } from 'react'
import {
  Text,
  View,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Keyboard,
  TextInput,
  Platform
} from 'react-native'
import ViewContainer from '../../components/ViewContainer'
import { styles } from '../../components/styles'
import API from '../../lib/api.js'
import Swiper from 'react-native-swiper'
import firebase from 'react-native-firebase'
import Toast, { DURATION } from 'react-native-easy-toast'
import Button from '../../components/Button'

import SignUpStep3Screen from './SignUpStep3Screen'
import SignUpStep4Screen from './SignUpStep4Screen'

import * as constants from '../../../constants'

export default class SignUpScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      progress: .167,
      portfolioType: '',
      uid: ''
    }
    this._onSubmit = this._onSubmit.bind(this)
    this._onSubmitName = this._onSubmitName.bind(this)
    this._onBank = this._onBank.bind(this)
    this.next = this.next.bind(this)
    this.renderContent = this.renderContent.bind(this)
  }

  next () {
    this.refs.rSlide.scrollBy(1)
    this.setState({
      progress: this.state.progress + .167,
    })
  }

  _onSubmit () {
    this.setState({submitButtonDisabled: true})
    Keyboard.dismiss()
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        global.user = user
      })
      .then(this.next)
      .catch(function (error) {
          this.setState({submitButtonDisabled: false})
          this.refs.toastStepOne.show(error.message, 1000)
        }.bind(this)
      )
  }

  //TODO KEYBOARD DISMISS DOESNT WORK
  _onSubmitName () {
    Keyboard.dismiss()
    this.setState({uid: global.user.uid})
    if (this.state.firstName && this.state.lastName) {
      // Temporary, to test wallet screen
      const wallet = {
        'BTC': 1.9,
        'ETH': 2.8,
        'XRP': 3.7,
        'BCH': 4.6,
        'LTC': 5.5,
        'ADA': 6.4,
        'XLM': 7.3,
        'NEO': 8.2,
        'EOS': 9.1,
        'MIOTA': 1.2,
        'DASH': 2.3,
        'XMR': 3.8,
        'LSK': 4.5,
        'ETC': 5.1,
        'TRX': 6.9,
        'QTUM': 7.6,
        'BTG': 8,
        'ICX': 9.0,
        'OMG': 1.3,
        'ZEC': 2.2,
        'NANO': 3.8,
        'STEEM': 4.7,
      }
      let name = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        wallet: wallet,
      }
      this.setState({submitButtonNameDisabled: true})
      Keyboard.dismiss()
      firebase.database().ref('/users/' + global.user.uid)
        .update(name)
        .then(() => {
          firebase.auth().currentUser.updateProfile({
            displayName: JSON.stringify(name),
          }).then(user => {
            global.user = user
            API.create_dwolla_account(this.state)
              .then(this.next)
              .catch((error) => { throw Error(error.message) })
          }).catch(error => { throw Error(error.message) })
        }).catch(function (error) {
        this.setState({submitButtonNameDisabled: false})
        this.refs.toastStepTwo.show(error.message, 1000)
      }.bind(this))
      Keyboard.dismiss()
    }
  }

  _onBank () {
    this.props.navigation.navigate('PlaidLinkFunding')
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
        underlineColorAndroid={'transparent'}
        autoCapitalize='none'
        secureTextEntry={true}
        value={this.state.password}
        onChangeText={(text) => this.setState({password: text})}
      />,
      <Button
        style={styles.vw90}
        onPress={this._onSubmit}
        // onPress={ () => this.props.navigation.navigate('PinRegisterScreen') }
        disabled={this.state.submitButtonDisabled}
        title='SUBMIT'
      />
    ]
  }

  render () {
    return (
      <ViewContainer>
        <Swiper
          style={Platform.OS === 'android' ? {flex: 1, width: constants.windowWidth} : {}}
          showsPagination={false}
          ref={'rSlide'}
          scrollEnabled={false}
          loop={false}
        >
          <View style={styles.ViewContainer}>
            <Image style={[styles.backgroundTop, {height: 1040 / 1125 * constants.windowWidth}]}
                   source={require('../../assets/bgr-top-1.png')} resizeMode={'contain'}/>

            <Image style={styles.logoStack} source={require('../../assets/logo-s.png')} resizeMode={'contain'}/>
            {
              Platform.OS === 'ios'
                ?
                <KeyboardAvoidingView style={styles.containerCenter} behavior="position">
                  {this.renderContent()}
                </KeyboardAvoidingView>
                :
                <View style={styles.containerCenter} behavior="position">
                  {this.renderContent()}
                </View>
            }

            <View style={styles.signUpTextBox}>
              <Text style={styles.textVioletSmall}>Already have an account? </Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
                <Text style={styles.textWhiteSmall}> Sign In</Text>
              </TouchableOpacity>
            </View>
            <Toast ref="toastStepOne"/>
            <Image style={styles.backgroundBottom} source={require('../../assets/bgr-bottom-1.png')}
                   resizeMode={'contain'}/>
          </View>

          <View style={styles.forms}>
            <SignUpStep3Screen
              onChangeInput={(obj) => this.setState({...obj})}
              submitDisabled={this.state.submitButtonNameDisabled}
              onSubmit={this._onSubmitName}
              navigation={this.props.navigation}
            />
            <Toast ref="toastStepTwo"/>
          </View>

          <View style={styles.forms}>
            <SignUpStep4Screen
              onPress={() => this.props.navigation.navigate('SelectYourBank')}
              navigation={this.props.navigation}
            />
          </View>
        </Swiper>
      </ViewContainer>
    )
  }
}
