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

export default class Prologue extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <ViewContainer>
        <View style={styles.spaceAroundContainer}>
          <Text style={styles.textWhiteBig}>Good morning!</Text>

          <Image
            style={[styles.imgContain, {height: 595 / 1057 * constants.windowWidth}]}
            source={require('../../assets/Prologue-bgr.png')}
          />

          <Text style={[styles.textViolet, styles.vw90]}> Ut ligula massa, pharetra eleifend ultrices non, consectetur
            non odio. Nunc elit tellus, tincidunt id purus a, luctus volutpat lectus. </Text>

          <Button
            btnBlue={true}
            onPress={() => this.props.navigation.navigate({routeName: 'SplashScreen'})}
            disabled={this.state.submitButtonDisabled}
            title='GET STARTED'
          />

          <View style={styles.signUpTextBox}>
            <Text style={styles.textVioletSmall}>Already have an account? </Text>
            <TouchableOpacity onPress={() =>
              this.props.navigation.navigate({routeName: 'LoginScreen'})
            }>
              <Text style={styles.textWhiteSmall}> Sign In </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image style={styles.backgroundBottom} source={require('../../assets/bgr-bottom-1.png')}
               resizeMode={'contain'}/>
      </ViewContainer>

    )
  }
}
