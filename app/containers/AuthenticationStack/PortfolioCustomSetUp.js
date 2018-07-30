import React, { Component } from 'react'
import {
  Text,
  View,
  Alert,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'
import ViewContainer from './../../components/ViewContainer'
import ScrollContainer from './../../components/ScrollContainer'

import Icons from 'react-native-vector-icons/Ionicons'
import { styles } from './../../components/styles'

import Slider from '../../components/SliderCustom'
import { VictoryPie } from 'victory-native'
import Svg from 'react-native-svg'

import Button from '../../components/Button'

import { coinColors, windowHeight, colorViolet3, windowWidth, statusBarHeight } from '../../../constants'
import * as constants from '../../../constants'

const coinLogos = {
  'BTC': require('../../assets/btc.png'),
  'ETH': require('../../assets/eth.png'),
  'XRP': require('../../assets/xrp.png'),
  'BCH': require('../../assets/bch.png'),
}

const listCoins = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    percent: 25,
    state: 'customBTC'
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    percent: 25,
    state: 'customETH'
  },
  {
    symbol: 'XRP',
    name: 'Ripple',
    percent: 25,
    state: 'customXRP'
  },
  {
    symbol: 'BCH',
    name: 'Bitcoin Cash',
    percent: 25,
    state: 'customBCH'
  }
]

export default class PortfolioCustomSetUp extends React.Component {
  static navigationOptions = {title: 'Custom Portfolio'}

  constructor (props) {
    super(props)
    this.state = {
      currentPortfolio: '',
      customBTC: 25,
      customETH: 25,
      customXRP: 25,
      customBCH: 25,
      swiperEnabled: true,
    }
    this.startSlider = this.startSlider.bind(this)
    this.endSlider = this.endSlider.bind(this)
  }

  startSlider () {
    this.setState({
      swiperEnabled: false
    })
  }

  endSlider () {
    this.setState({
      swiperEnabled: true
    })
  }

  //TODO Assign more colors, change portfolio weights
  //TODO Create Pop-ups to learn more about portfolio

  renderRow () {
    return (
      <View style={ {marginBottom: windowHeight * 0.05} }>
        {
          listCoins.map((l, i) => (
            <View style={ styles.coinsItemContainer }>
              <View style={ [styles.vw90, {borderBottomWidth: 1, borderBottomColor: colorViolet3}] }>
                <View style={ [styles.coinsItem, {borderBottomWidth: 0}] }>
                  <View style={ styles.coinsItemLeft }>
                    <View style={ {
                      width: 10,
                      height: 10,
                      backgroundColor: coinColors[l.symbol],
                      marginRight: 10,
                      borderRadius: 5
                    } }/>
                    <Image source={ coinLogos[l.symbol] } style={ styles.coinsAvatar }/>
                    <View style={ styles.coinsItemName }>
                      <Text style={ [styles.textWhite, {textAlign: 'left'}] }>{ l.symbol }</Text>
                      <Text style={ [styles.textVioletVerySmall, {textAlign: 'left'}] }>{ l.name }</Text>
                    </View>
                  </View>
                  <View style={ styles.coinsItemRight }>
                    <Icons name={ 'ios-more' } size={ 20 } color={ constants.colorViolet1 }/>
                  </View>
                </View>
                <View style={ [styles.vw90, {marginBottom: 15}] }>
                  <Slider
                    value={ this.state[l.state] }
                    onValueChange={ (value) => {
                      let state = this.state
                      state[l.state] = value
                      this.setState({...state})
                    } }
                    maximumValue={ 100 }
                    step={ 1 }
                    onSlidingStart={ this.startSlider }
                    onSlidingComplete={ this.endSlider }
                    minimumValue={ 0 }
                    animateTransitions={ true }
                    minimumTrackTintColor={ constants.colorViolet4 }
                    thumbTintColor={ 'transparent' }
                    style={ {position: 'relative'} }
                    trackStyle={ {height: 42, borderRadius: 6} }
                    thumbStyle={ {width: 142 / 265 * 74, height: 74, position: 'absolute', top: 1} }
                    thumbImage={ require('../../assets/coin-thumb-slide-2.png') }
                    thumbImageMax={ require('../../assets/coin-thumb-slide.png') }
                    text={ this.state[l.state] + '%' }
                    textStyle={ {
                      position: 'absolute',
                      right: 0,
                      bottom: 5,
                      width: (142 / 265 * 74),
                      color: constants.colorWhite,
                      fontWeight: '500',
                      fontFamily: 'Avenir',
                      fontSize: 12,
                      textAlign: 'center'
                    } }
                    thumbTouchSize={ {
                      width: (142 / 265 * 74),
                      height: 76
                    } }
                  />
                </View>
              </View>
            </View>
          ))
        }
      </View>
    )
  }

  render () {
    let customData = [
      {x: 'BTC', y: this.state.customBTC},
      {x: 'ETH', y: this.state.customETH},
      {x: 'XRP', y: this.state.customXRP},
      {x: 'BCH', y: this.state.customBCH}
    ]
    let colorScale = []

    let percentBTC = 0
    let percentETH = 0
    let percentXRP = 0
    let percentBCH = 0

    if (isNaN((this.state.customBTC) / (this.state.customBTC + this.state.customETH + this.state.customXRP + this.state.customBCH)) === true) {
      percentBTC = 0
      percentETH = 0
      percentXRP = 0
      percentBCH = 0
    }
    else {
      percentBTC = (this.state.customBTC) / (this.state.customBTC + this.state.customETH + this.state.customXRP + this.state.customBCH) * 100
      percentETH = (this.state.customETH) / (this.state.customBTC + this.state.customETH + this.state.customXRP + this.state.customBCH) * 100
      percentXRP = (this.state.customXRP) / (this.state.customBTC + this.state.customETH + this.state.customXRP + this.state.customBCH) * 100
      percentBCH = (this.state.customBCH) / (this.state.customBTC + this.state.customETH + this.state.customXRP + this.state.customBCH) * 100
    }

    listCoins.forEach((item) => {
      colorScale.push(coinColors[item.symbol])
    })

    return (
      <ViewContainer>
        <View style={ {flex: 1, alignItems: 'center', alignContent: 'stretch', width: windowWidth} }>
          <View style={ [styles.customHeaderContainer, {height: 44 + statusBarHeight}] }>
            <View style={ styles.customHeaderContent }>
              <View style={ styles.customHeaderLeftBtn }>
                <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
                  <Icons
                    name='ios-arrow-back'
                    style={ styles.iconHeaderLeft }
                    size={ 36 }
                    color={ 'white' }
                  />
                </TouchableOpacity>
              </View>
              <Text style={ styles.customHeaderTitle }> Custom Portfolio </Text>
            </View>
          </View>
          <ScrollContainer style={styles.backgroundTransparent}>
            <View
              style={ [styles.containerCenter, {marginBottom: constants.windowWidth * 0.35, position: 'relative'}] }>
              <View style={ [styles.vw100, {
                backgroundColor: constants.headerColorViolet,
                height: 130,
                position: 'absolute',
                top: 0,
                left: 0
              }] }/>
              <Svg width={ 180 } height={ 180 }>
                <VictoryPie
                  standalone={ false }
                  width={ 180 } height={ 180 }
                  labels={ () => null }
                  data={ customData }
                  innerRadius={ 65 }
                  colorScale={ ['tomato', 'gold', 'cyan', '#2ecc71'] }
                />
              </Svg>
              { this.renderRow() }

              <Button
                onPress={ () => this.props.navigation.navigate('PortfolioAddCurrency') }
                // onPress={ () => console.log('clicked') }
                disabled={ this.state.submitButtonDisabled }
                title='ADD CURRENCY'
              />
            </View>

          </ScrollContainer>
          <Image style={ styles.backgroundBottom } source={ require('../../assets/bgr-bottom-2.png') }
                 resizeMode={ 'contain' }/>
        </View>
      </ViewContainer>
    )
  }
}
