import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import Svg, { Circle } from 'react-native-svg'
import { VictoryPie } from 'victory-native'

import * as Progress from 'react-native-progress'

import ViewContainer from './ViewContainer'
import { styles } from './styles'
import API from '../lib/api'
import firebase from 'react-native-firebase'
import { coinColors, colorViolet2, colorWhite, windowHeight, coinLogos, colorViolet3 } from '../../constants'

const limit = 5

const listCoins = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    percent: 25
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    percent: 20
  },
  {
    symbol: 'XRP',
    name: 'Ripple',
    percent: 20
  },
  {
    symbol: 'BCH',
    name: 'Bitcoin Cash',
    percent: 35
  }
]

export default class CoinsListCustom extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      indeterminate: true,
      progress: 0,
      coins: [],
      currentPortfolio: '',
      customBTC: 25,
      customETH: 20,
      customXRP: 20,
      customBCH: 35,
      customBCC: 0,
      customLTC: 0,
      customADA: 0,
      customXLM: 0,
      customNEO: 0,
      customEOS: 0,
      customIOTA: 0,
      customDASH: 0,
      customXMR: 0,
      customLSK: 0,
      customETC: 0,
      customTRX: 0,
      customQTUM: 0,
      customBTG: 0,
      customICX: 0,
      customOMG: 0,
      customZEC: 0,
      customNANO: 0,
      customSTEEM: 0,
      swiperEnabled: true,
    }
  }

  animate = () => {
    let progress = 0
    this.setState({progress})
    setTimeout(() => {
      this.setState({indeterminate: false, progress: 0.3})
    }, 500)
  }

  // componentWillMount () {
  //   this.setState({loading: true})
  //   this.startLoadingWallet()
  //     .then(coins => {
  //       const displayedCoins = coins
  //         .map(coin => {
  //           coin.displayed = true
  //           return coin
  //         })
  //       this.setState({coins: displayedCoins, loading: false})
  //     })
  //     .catch(() => this.setState({coins: [], loading: false}))
  // }

  componentDidMount () {
    this.animate()
  }

  // static navigationOptions = {
  //   title: 'Holdings',
  //   tabBarIcon: ({ tintColor }) => <Icon name="account-balance-wallet" color={tintColor} />
  // }

  startLoadingWallet () {
    const walletPromise = firebase.database().ref(`/users/${global.user.uid}/wallet`)
      .once('value')
      .then(snapshot => snapshot.val())
      .catch(() => [])
    const coinInfoPromise = API.getCoinPrices()

    return Promise.all([walletPromise, coinInfoPromise])
      .then(data => {
        const wallet = data[0]
        const infos = data[1]
        const coins = infos
          .map(coinInfo => {
            const amount = wallet[coinInfo.symbol]
            if (amount) {
              coinInfo.amount = amount
            }
            return coinInfo
          })
          .filter(coinInfo => coinInfo.amount && coinInfo.amount > 0)
          .sort((ca, cb) => cb.amount * cb.price - ca.amount * ca.price)

        return coins
      })
  }

  renderLoading () {
    return (
      <View style={ {
        flex: 1,
        justifyContent: 'center',
        // justifyContent: 'space-around',
        padding: 10,
        backgroundColor: 'transparent'
      } }>
        <View style={ {backgroundColor: 'transparent'} }>
          <ActivityIndicator size="large" color="#000000"/>
          <Text style={ {color: 'white', paddingTop: 10, backgroundColor: 'transparent'} }> Loading... </Text>
        </View>
      </View>
    )
  }

  renderCoins = () => {
    const limitItems = this.props.limit || limit
    return (
      <View style={ {marginBottom: windowHeight * 0.05} }>
        {
          listCoins.map((l, i) => (
            <TouchableHighlight underlayColor={colorViolet3} onPress={this.props.onPress} key={i}>
                <View style={ styles.coinsItemContainer }>
                  <View style={ i === limitItems - 1 ? [styles.coinsItem, {borderBottomWidth: 0}] : styles.coinsItem }>
                    <View style={ styles.coinsItemLeft }>
                      <View style={{width: 10, height: 10, backgroundColor: coinColors[l.symbol], marginRight: 10, borderRadius: 5}}/>
                      <Image source={ coinLogos[l.symbol] } style={ styles.coinsAvatar }/>
                      <View style={ styles.coinsItemName }>
                        <Text style={ [styles.textWhite, {textAlign: 'left'}] }>{ l.symbol }</Text>
                        <Text style={ [styles.textVioletVerySmall, {textAlign: 'left'}] }>{ l.name }</Text>
                      </View>
                    </View>
                    <View style={ styles.coinsItemRight }>
                      <Progress.Circle
                        progress={ l.percent/100 }
                        indeterminate={ this.state.indeterminate }
                        size={ 14 }
                        color={ colorWhite }
                        thickness={ 2 }
                        unfilledColor={ colorViolet2 }
                        borderWidth={ 0 }
                      />
                      <Text style={ styles.textVioletVerySmall }>
                        {l.percent}%
                      </Text>
                    </View>
                  </View>
                </View>
            </TouchableHighlight>
            ))
        }
      </View>
    )
  }

  renderChart = () => {
    let customData = []
    let colorScale = []

    listCoins.forEach((item, index) => {
      colorScale.push(coinColors[item.symbol])
      customData.push({
        x: item.symbol,
        y: item.percent
      })
    })
    console.log('colorScale', colorScale)
    return (
      <Svg width={ 180 } height={ 180 }>
        <VictoryPie
          standalone={ false }
          width={ 180 } height={ 180 }
          labels={ () => null }
          data={ customData }
          innerRadius={ 65 }
          colorScale={ colorScale }
        />
      </Svg>
    )
  }

  render () {
    return (
      <ViewContainer style={styles.backgroundTransparent}>
        { this.state.loading ? this.renderLoading() : [this.renderChart(), this.renderCoins()] }
      </ViewContainer>
    )
  }
}

