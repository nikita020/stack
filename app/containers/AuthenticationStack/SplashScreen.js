import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native'
import ViewContainer from '../../components/ViewContainer'
import { styles } from '../../components/styles'
import Button from '../../components/Button'
import { windowWidth } from '../../../constants'

export default class SplashScreen extends Component {

  render () {
    return (
      <ViewContainer>
        <Image style={[styles.backgroundTop, {height: 1040 / 1125 * windowWidth}]}
               source={require('../../assets/bgr-top-1.png')} resizeMode={'contain'}/>

        <Image style={styles.logoStack} source={require('../../assets/logo-s.png')} resizeMode={'contain'}/>

        <View style={styles.authenticationText}>
          <Text style={styles.authenticationTextBig}> Cryptocurrency investing, </Text>
          <Text style={styles.authenticationTextSmall}> simplified. </Text>
        </View>

        <Button
          style={styles.vw90}
          onPress={() => this.props.navigation.navigate({routeName: 'LoginScreen'})}
          title='SIGN IN'
        />

        <View style={styles.signUpTextBox}>
          <Text style={styles.textVioletSmall}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUpScreen')}>
            <Text style={styles.textWhiteSmall}> Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Image style={styles.backgroundBottom} source={require('../../assets/bgr-bottom-1.png')}
               resizeMode={'contain'}/>
      </ViewContainer>

    )
  }
}
