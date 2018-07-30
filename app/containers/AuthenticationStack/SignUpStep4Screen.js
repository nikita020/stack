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
} from 'react-native'
import { styles } from '../../components/styles'
import Button from '../../components/Button'

import * as constants from '../../../constants'
import ViewContainer from '../../components/ViewContainer'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default class SignUpStep4Screen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
    }
  }

  render () {
    const {onPress} = this.props

    return (
      <ViewContainer>
        <Image
          style={ [styles.backgroundTop, {height: 1169 / 1125 * constants.windowWidth}] }
          source={ require('../../assets/sign-up-4-bgr.png') } resizeMode={ 'contain' }
        />
        <View style={styles.signUpStep4}>
          <Text style={ [styles.textWhite, styles.vw90]}> Stack invests your spare change automatically for you by rounding up your
            everyday purchases. </Text>
          <Text style={ [styles.textViolet, styles.vw90] }> Please connect your bank account to enable this feature. </Text>
          <Button
            btnBlue={ true }
            // onPress={ () => this.props.navigation.navigate('SelectYourBank') }
            onPress={ () => onPress() }
            disabled={ this.state.submitButtonDisabled }
            title='CONNECT YOUR BANK'
          />
          <SimpleLineIcons name={ 'lock' } size={20} style={styles.backgroundTransparent} color={constants.colorViolet1}/>
          <Text style={ [styles.textVioletSmall, styles.vw90] }>Stack does not save your bank login. All information is secured with
            256-bit encryption.</Text>
        </View>
        <Image style={ styles.backgroundBottom } source={ require('../../assets/bgr-bottom-1.png') }
               resizeMode={ 'contain' }/>
      </ViewContainer>

    )
  }
}
