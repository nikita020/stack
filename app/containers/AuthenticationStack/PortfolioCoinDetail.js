import React, { Component } from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import CoinsListCustom from '../../components/CoinsListCustom'

import { styles } from '../../components/styles'

import Button from '../../components/Button'
import * as constants from '../../../constants'
import { windowHeight } from '../../../constants'
import ViewContainer from '../../components/ViewContainer'

export default class PortfolioCoinDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {onSubmit} = this.props

    return (
      <ViewContainer>
        <View style={ [styles.containerCenter, {marginBottom: constants.windowWidth * 0.35}] }>
          <Text style={ [styles.textWhiteBig, {marginTop: windowHeight * 0.1}] }>Custom Portfolio</Text>
          <FontAwesomeIcon name={'info-circle'} color={constants.colorGreen} size={20} style={styles.infoTip}/>
          <Text style={ [styles.textVioletSmall, styles.vw90] }> Click the Stock name for addition details </Text>
          <CoinsListCustom limit={4}/>
          <Button
            style={{marginBottom: 20}}
            // btnBlue={true}
            // onPress={ () => this.props.navigation.navigate('PortfolioAssign') }
            onPress={ () => console.log('custom') }
            disabled={ this.state.submitButtonDisabled }
            title='SET UP THIS PORTFOLIO'
          />
          <Button
            style={{marginBottom: 20}}
            btnBlue={true}
            // onPress={ () => this.props.navigation.navigate('PortfolioAssign') }
            onPress={ onSubmit }
            disabled={ this.state.submitButtonDisabled }
            title='CHOOSE THE DUO PORTFOLIO'
          />
          <Text style={ [styles.textVioletSmall, styles.vw90] }> There are more options for this portfolio in Settings. </Text>
        </View>
        <Image style={ styles.backgroundBottom } source={ require('../../assets/bgr-bottom-2.png') }
               resizeMode={ 'contain' }/>
      </ViewContainer>
    )
  }
}
