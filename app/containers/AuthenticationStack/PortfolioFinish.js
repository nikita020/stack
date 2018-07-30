import React, { Component } from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'
import ViewContainer from '../../components/ViewContainer'

import { styles } from '../../components/styles'

import Button from '../../components/Button'
import * as constants from '../../../constants'

export default class PortfolioFinish extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {onSubmit} = this.props
    return (
      <ViewContainer style={styles.backgroundWhite}>
        <View style={styles.spaceAroundContainer}>
          <Text style={ styles.textVioletBig }>Welcome!</Text>

          <Image style={ [styles.logoStack, {marginTop: 0}] } source={ require('../../assets/logo-2.png') } resizeMode={ 'contain' }/>

          <Text style={ [styles.textViolet2, styles.vw90] }> We are glad to have you on board! </Text>

          <Text style={ [styles.textGray, styles.vw90] }> Explore our resources and platform to learn more on how maximize your stack </Text>

          <Button
            btnBlue={true}
            // onPress={ () => this.props.navigation.navigate('PortfolioAssign') }
            // onPress={ () => this.props.navigation.navigate('PinRegisterScreen') }
            onPress={onSubmit}
            disabled={ this.state.submitButtonDisabled }
            title='CONTINUE'
          />

        </View>
        <Image style={ [styles.backgroundBottom, {height: 429 / 1125 * constants.windowWidth}] } source={ require('../../assets/bgr-bottom-grey.png') }
               resizeMode={ 'contain' }/>
      </ViewContainer>
    )
  }
}
