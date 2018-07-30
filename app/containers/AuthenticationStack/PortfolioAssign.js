import React, { Component } from 'react'
import {
  Text,
  View,
  Alert,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Platform
} from 'react-native'
import ViewContainer from '../../components/ViewContainer'
import { styles } from '../../components/styles'
import Swiper from 'react-native-swiper'
import firebase from 'react-native-firebase'

import PortfolioCore from './PortfolioCore'
import PortfolioDuo from './PortfolioDuo'
import PortfolioCustom from './PortfolioCustom'
import PortfolioFinish from './PortfolioFinish'
import { windowWidth } from '../../../constants'

export default class PortfolioAssign extends Component {
  constructor (props) {
    super(props)
    this.state = {
      progress: .833,
      portfolioType: '',
      customBTC: 25,
      customETH: 25,
      customLTC: 25,
      customNEO: 25,
      swiperEnabled: true,
    }
    this._onSubmitA = this._onSubmitA.bind(this)
    this._onSubmitB = this._onSubmitB.bind(this)
    this._continue = this._continue.bind(this)
    this._onSubmitF = this._onSubmitF.bind(this)
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

  _continue () {
    this.props.navigation.navigate('HomeStack')
  }

  //TODO set portfolio values and update to firebase
  _onSubmitA () {
    if (this._confettiView) {
      this._confettiView.startConfetti()
    }

    this.setState({
      portfolioType: 'A'
    })
    this.refs.rSlide.scrollBy(1)
    this.setState({
      progress: this.state.progress + .167,
    })
  }

  _onSubmitB () {
    if (this._confettiView) {
      this._confettiView.startConfetti()
    }

    this.setState({
      portfolioType: 'B'
    })
    firebase.database().ref('/users/' + global.user.uid + '/portfolio').update({
      portfolioType: 'B',
      btcAmount: 0,
      ethAmount: 0,
      ltcAmount: 0,
    })
    this.refs.rSlide.scrollBy(1)
    this.setState({
      progress: this.state.progress + .167,
    })
  }

  _onSubmitF () {
    if (this._confettiView) {
      this._confettiView.startConfetti()
    }

    this.setState({
      portfolioType: 'F'
    })
    firebase.database().ref('/users/' + global.user.uid + '/portfolio').update({
      portfolioType: 'F',
      btcAmount: 0,
      ethAmount: 0,
      ltcAmount: 0,
    })
    this.refs.rSlide.scrollBy(1)
    this.setState({
      progress: this.state.progress + .167,
    })
  }

//TODO re-set up porfolios
//TODO Create Pop-ups to learn more about portfolio

  render () {
    let customData = [
      {x: 'BTC', y: this.state.customBTC},
      {x: 'ETH', y: this.state.customETH},
      {x: 'LTC', y: this.state.customLTC},
      {x: 'NEO', y: this.state.customNEO}
    ]

    if (isNaN((this.state.customBTC) / (this.state.customBTC + this.state.customETH + this.state.customLTC + this.state.customNEO)) === true) {
      var percentBTC = 0
      var percentETH = 0
      var percentLTC = 0
      var percentNEO = 0
    }
    else {
      var percentBTC = (this.state.customBTC) / (this.state.customBTC + this.state.customETH + this.state.customLTC + this.state.customNEO) * 100
      var percentETH = (this.state.customETH) / (this.state.customBTC + this.state.customETH + this.state.customLTC + this.state.customNEO) * 100
      var percentLTC = (this.state.customLTC) / (this.state.customBTC + this.state.customETH + this.state.customLTC + this.state.customNEO) * 100
      var percentNEO = (this.state.customNEO) / (this.state.customBTC + this.state.customETH + this.state.customLTC + this.state.customNEO) * 100
    }

    const sampleData = [
      {x: 'BTC', y: 40.75},
      {x: 'ETH', y: 21.86},
      {x: 'XRP', y: 10.6},
      {x: 'BCC', y: 6.13},
      {x: 'LTC', y: 2.87},
      {x: 'ADA', y: 2.49},
      {x: 'XLM', y: 2},
      {x: 'NEO', y: 2.55},
      {x: 'EOS', y: 1.6},
      {x: 'IOTA', y: 1.39},
      {x: 'DASH', y: 1.32},
      {x: 'XMR', y: 1.08},
      {x: 'LSK', y: .9},
      {x: 'ETC', y: .8},
      {x: 'TRX', y: .76},
      {x: 'QTUM', y: .58},
      {x: 'BTG', y: .56},
      {x: 'ICX', y: .43},
      {x: 'OMG', y: .40},
      {x: 'ZEC', y: .37},
      {x: 'NANO', y: .29},
      {x: 'STEEM', y: .27},
    ]

    const sampleDataB = [
      {x: 'BTC', y: (2 / 3)},
      {x: 'ETH', y: (1 / 3)},
    ]

    return (
      <ViewContainer>

        <Swiper
          style={Platform.OS === 'android' ? {flex: 1, width: windowWidth} : {}}
          showsPagination={false}
          ref={'rSlide'}
          scrollEnabled={false}
          loop={false}
        >
          <Swiper
            style={Platform.OS === 'android' ? {flex: 1, width: windowWidth} : {}}
            showsPagination={true}
            ref={'c'}
            loop={false}
            dotColor='#ffffff'
            activeDotColor='#2bbd7e'
            scrollEnabled={this.state.swiperEnabled}
          >

            <View style={styles.formsPortfolio}>
              <PortfolioCore onSubmit={this._onSubmitA} navigation={this.props.navigation}/>
            </View>

            <View style={styles.formsPortfolio}>
              <PortfolioDuo onSubmit={this._onSubmitA} navigation={this.props.navigation}/>
            </View>

            <View style={styles.formsPortfolio}>
              <PortfolioCustom onSubmit={this._onSubmitF} navigation={this.props.navigation}/>
            </View>

          </Swiper>

          <View style={styles.formsPortfolio}>
            <PortfolioFinish onSubmit={this._continue} navigation={this.props.navigation}/>
          </View>

        </Swiper>
      </ViewContainer>
    )
  }
}
