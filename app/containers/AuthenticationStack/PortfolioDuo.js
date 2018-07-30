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
import { windowHeight } from '../../../constants'

export default class PortfolioDuo extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {onSubmit} = this.props

    return (
      <ScrollContainer>
        <Image style={ [styles.backgroundTop, {height: 1435/1125 * constants.windowWidth}] } source={ require('../../assets/sky-3.png') }
               resizeMode={ 'contain' }/>
        <View style={ [styles.containerCenter, {marginBottom: constants.windowWidth * 0.35}] }>
          <Text style={ [styles.textWhiteBig, {marginTop: windowHeight * 0.1}] }>The Duo Portfolio</Text>
          <TouchableOpacity style={styles.infoTip} onPress={() => this.props.navigation.navigate('ThePortfolio')}>
            <FontAwesomeIcon name={'info-circle'} color={constants.colorGreen} size={20}/>
          </TouchableOpacity>
          <Text style={ [styles.textVioletSmall, styles.vw90] }> Click the Stock name for addition details </Text>
          <Image
            style={ [styles.imgContain, {height: 700 / 1200 * constants.windowWidth, marginVertical: windowHeight * 0.05}] }
            source={ require('../../assets/duo-portfolio.png') }
          />
          <CoinsList
            limit={2}
            onPress={(param) => this.props.navigation.navigate({routeName: 'PortfolioCoinExample', params: {coinData: param}})}
            // navigation={this.props.navigation}
          />
          <Button
            btnBlue={true}
            // onPress={ () => this.props.navigation.navigate('PortfolioAssign') }
            onPress={ onSubmit }
            disabled={ this.state.submitButtonDisabled }
            title='CHOOSE THE DUO PORTFOLIO'
          />
        </View>
        <Image style={ styles.backgroundBottom } source={ require('../../assets/bgr-bottom-2.png') }
               resizeMode={ 'contain' }/>
      </ScrollContainer>
    )
  }
}
