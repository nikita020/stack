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

export default class PortfolioChoose extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <ViewContainer>
        <Image style={ [styles.backgroundTop, {height: 1489/1125 * constants.windowWidth}] } source={ require('../../assets/sky-2.png') }
               resizeMode={ 'contain' }/>
        <View style={styles.spaceAroundContainer}>
          <Text style={ styles.textWhiteBig }>You're almost there!</Text>

          <Image
            style={ [styles.imgContain, {height: 600 / 1100 * constants.windowWidth}] }
            source={ require('../../assets/rocket_img.png') }
          />

          <Text style={ [styles.textWhite, styles.vw90] }> Make the last step by choosing the portfolio that suits you, and start earning right now. </Text>

          <Text style={ [styles.textViolet, styles.vw90] }> We have prepared for you some of the most popular portfolios, but you also have the opportunity to make your own custom portfolio. </Text>

          <Button
            onPress={ () => this.props.navigation.navigate('PortfolioAssign') }
            // onPress={ () => this.props.navigation.navigate('PinRegisterScreen') }
            disabled={ this.state.submitButtonDisabled }
            title='CHOOSE PORTFOLIO'
          />

        </View>
        <Image style={ styles.backgroundBottom } source={ require('../../assets/bgr-bottom-1.png') }
               resizeMode={ 'contain' }/>
      </ViewContainer>
    )
  }
}
