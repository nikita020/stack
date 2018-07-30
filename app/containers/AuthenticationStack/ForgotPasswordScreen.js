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
  TouchableWithoutFeedback
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import ViewContainer from '../../components/ViewContainer'
import { styles } from '../../components/styles'
import Button from '../../components/Button'
import * as constants from '../../../constants'

export default class ForgotPasswordScreen extends Component {
  //TODO: Add toast
  constructor (props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  render () {
    return (
      <ViewContainer>
        <KeyboardAwareScrollView contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={[styles.textWhiteBig, {marginBottom: 20}]}>Forgot Password?</Text>
          <Text
            style={[styles.textVioletSmall, styles.vw90]}>
            {`Enter the email address you used when you joined and we'll send you instructions to reset your password.`}
          </Text>

          <Image style={styles.imgContain} source={require('../../assets/forgot-password-img.png')}/>
          <View style={styles.containerCenter}>
            <TextInput
              style={styles.input}
              placeholder={'Email address'}
              placeholderTextColor={constants.colorViolet1}
              keyboardAppearance='dark'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              spellCheck={false}
              keyboardType='email-address'
              underlineColorAndroid={'transparent'}
              onChangeText={(text) => this.setState({email: text})}
            />
            <Button
              style={styles.vw90}
              onPress={() => this.props.navigation.navigate({routeName: 'LoginScreen'})}
              title='SEND REQUEST INSTRUCTIONS'
            />
          </View>
        </KeyboardAwareScrollView>
        <Image style={styles.backgroundBottom} source={require('../../assets/bgr-bottom-2.png')}
               resizeMode={'contain'}/>
      </ViewContainer>
    )
  }
}
