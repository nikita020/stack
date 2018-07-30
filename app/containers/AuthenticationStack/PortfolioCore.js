import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import CoinsList from '../../components/CoinsList'

import { styles } from '../../components/styles'

import Button from '../../components/Button'
import * as constants from '../../../constants'
import ScrollContainer from '../../components/ScrollContainer'

export default class PortfolioCore extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {onSubmit} = this.props

    return (
      <ScrollContainer>
        <Image style={ [styles.backgroundTop, {height: 1498/1125 * constants.windowWidth}] } source={ require('../../assets/sky-1.png') }
               resizeMode={ 'contain' }/>
        <View style={ [styles.containerCenter, {marginBottom: constants.windowWidth * 0.35}] }>
          <Text style={ [styles.textWhiteBig, {marginTop: constants.windowHeight * 0.1}] }>The Core Portfolio</Text>
          <TouchableOpacity style={styles.infoTip} onPress={() => this.props.navigation.navigate('ThePortfolio')}>
            <FontAwesomeIcon name={'info-circle'} color={constants.colorGreen} size={20}/>
          </TouchableOpacity>
          <Text style={ [styles.textVioletSmall, styles.vw90] }> Click the Stock name for addition details </Text>
          <Image
            style={ [styles.imgContain, {height: 707 / 1125 * constants.windowWidth, marginVertical: constants.windowHeight * 0.05}] }
            source={ require('../../assets/porfolio-core.png') }
          />
          <CoinsList
            limit={5}
            onPress={(param) => this.props.navigation.navigate({routeName: 'PortfolioCoinExample', params: {coinData: param}})}
            // navigation={this.props.navigation}
          />
          <Button
            btnBlue={true}
            // onPress={ () => this.props.navigation.navigate('PortfolioAssign') }
            onPress={ onSubmit }
            disabled={ this.state.submitButtonDisabled }
            title='CHOOSE THE CORE PORTFOLIO'
          />
        </View>
        <Image style={ styles.backgroundBottom } source={ require('../../assets/bgr-bottom-2.png') }
               resizeMode={ 'contain' }/>
      </ScrollContainer>
    )
  }
}
