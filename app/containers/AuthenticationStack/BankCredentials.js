import React, { Component } from 'react'
import {
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import ViewContainer from '../../components/ViewContainer'
import { styles } from '../../components/styles'
import Button from '../../components/Button'

import * as constants from '../../../constants'
import { statusBarHeight, windowWidth, colorViolet, headerColorDarkBlue, headerColorViolet } from '../../../constants'

export default class BankCredentials extends Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoading: false
    }
  }

  getSize = (imageUrl) => {
    return {width, height} = Image.resolveAssetSource(imageUrl)
  }

  authorization = () => {
    this.setState({isLoading: true})
    setTimeout(() => {
      this.props.navigation.navigate('BankCredentialsSelectAccount')
      this.setState({isLoading: false})
    }, 5000)
  }

  render () {
    const logoUrl = require('../../assets/logo-Deutsche-Bank.png')
    const logoSize = this.getSize(logoUrl)
    return (
      <ViewContainer>
        <View style={ {flex: 1, alignItems: 'center', alignContent: 'stretch', width: windowWidth} }>
          <View style={ [
            styles.customHeaderContainer,
            {
              height: 44 + statusBarHeight,
              backgroundColor: this.state.isLoading ? headerColorDarkBlue : headerColorViolet
            }
          ] }>
            <View style={ styles.customHeaderContent }>
              <Text style={ styles.textWhite }>{ this.state.isLoading ? 'Authorization' : 'Enter your credentials' }</Text>
              {
                this.state.isLoading
                ?
                <View style={ styles.customHeaderRightBtn }>
                  <TouchableOpacity
                    activeOpacity={ 0.8 }
                    onPress={ () => console.log('clicked')}>
                    <Image
                      style={ [styles.closeIcon, {marginRight: 0.05*windowWidth}] }
                      source={ require('../../assets/cross.png') }
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                :
                null
              }
            </View>
          </View>
          <ViewContainer style={ {...styles.backgroundWhite, justifyContent: 'flex-start'} }>
            <Image style={ [styles.logoStack, {
              height: logoSize.height / logoSize.width * (0.25 * windowWidth),
              marginBottom: 30,
              marginTop: 30
            }] } source={ logoUrl } resizeMode={ 'contain' }/>

            <Text style={ [styles.textWhiteBig, {color: colorViolet, marginBottom: 30}] }>Deutsche Bank</Text>

            <KeyboardAvoidingView style={ styles.containerCenter } behavior="position">

              <TextInput
                style={ [styles.input, {color: constants.colorBlue2, borderColor: constants.colorBlue2}] }
                placeholder={ 'Username or Email' }
                underlineColorAndroid={'transparent'}
                placeholderTextColor={ constants.colorBlue2 }
                keyboardAppearance='dark'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={ false }
                spellCheck={ false }
                keyboardType='email-address'
                onChangeText={ (text) => this.setState({email: text}) }
              />

              <TextInput
                style={ [styles.input, {color: constants.colorBlue2, borderColor: constants.colorBlue2}] }
                placeholder={ 'Password' }
                placeholderTextColor={ constants.colorBlue2 }
                keyboardAppearance='dark'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={ false }
                spellCheck={ false }
                secureTextEntry={ true }
                underlineColorAndroid={'transparent'}
                onChangeText={ (text) => this.setState({password: text}) }
              />

              <View style={{marginBottom: 25}}/>

              {
                this.state.isLoading
                ?
                [
                  <Text style={[styles.textWhiteSmall, {color: '#6f879b', marginBottom: 20}]}>Please wait</Text>,
                  <ActivityIndicator size="large" color={headerColorDarkBlue} />
                ]
                :
                <Button
                  btnBlue={ true }
                  style={ styles.vw90 }
                  onPress={ this.authorization }
                  // onPress={ this._onSubmit }
                  title='SUBMIT'
                />
              }


            </KeyboardAvoidingView>
            {
              !this.state.isLoading
              ?
              <View style={ [styles.signUpTextBox, {marginTop: 30}] }>
                <TouchableOpacity onPress={ () => console.log('Reset Password') }>
                  <Text style={ [styles.textWhite, {color: '#c9cee2'}] }>Reset Password</Text>
                </TouchableOpacity>
              </View>
              :
              null
            }
            <Image style={ [styles.backgroundBottom, {height: 429 / 1125 * windowWidth}] }
                   source={ require('../../assets/bgr-bottom-grey.png') }
                   resizeMode={ 'contain' }/>
          </ViewContainer>
        </View>
      </ViewContainer>
    )
  }
}
