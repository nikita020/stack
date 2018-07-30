import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Platform
} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import ViewContainer from '../../../components/ViewContainer'
import { styles } from '../../../components/styles'
import API from '../../../lib/api'
import firebase from 'react-native-firebase'
import ScrollContainer from '../../../components/ScrollContainer'
import {
  coinColors, colorWhite, windowHeight, colorViolet2, coinLogos, headerColorViolet, colorViolet1,
  windowWidth, colorViolet3, coinDetail
} from '../../../../constants'

export default class HoldingsTab extends Component {

  constructor (props) {
    super(props)
    this.state = {
      currentSelected: null,
      coins: coinDetail,
      loading: false
    }
    this.searchTermChanged = this.searchTermChanged.bind(this)
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

  searchTermChanged (searchTerm) {
    const coinsDisplayed = this.state.coins
      .map(coin => {
        if (coin.name.toLowerCase().includes(searchTerm.toLowerCase())
          || coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())) {
          coin.displayed = true
        }
        else {
          coin.displayed = false
        }
        return coin
      })
    this.setState({coins: coinsDisplayed})
  }

  renderLoading () {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'transparent'
      }}>
        <View style={{backgroundColor: 'transparent'}}>
          <ActivityIndicator size="large" color="#000000"/>
          <Text style={{color: 'white', paddingTop: 10, backgroundColor: 'transparent'}}> Loading... </Text>
        </View>
      </View>
    )
  }

  renderCoins () {
    console.log('this.state.coins', JSON.stringify(this.state.coins))
    const {currentSelected} = this.state
    return (
      <View style={{marginBottom: windowHeight * 0.05}}>
        {
          this.state.coins
            .filter(coin => coin.displayed)
            .map((l, i) => (
              <TouchableHighlight
                underlayColor={colorViolet3}
                onPress={() => {
                  if (i !== currentSelected) {
                    this.setState({currentSelected: i})
                  }
                  else {
                    this.setState({currentSelected: null})
                  }
                  this.props.navigation.navigate({routeName: 'HoldingExample', params: {coinData: l}})
                }}>
                <View style={currentSelected === i ? styles.coinsItemContainerActive : styles.coinsItemContainer}>
                  <View
                    style={i === this.state.coins.length - 1 ? [styles.coinsItem, {borderBottomWidth: 0}] : styles.coinsItem}>
                    <View style={styles.coinsItemLeft}>
                      <Image source={coinLogos[l.symbol]} style={styles.coinsAvatar}/>
                      <View style={styles.coinsItemName}>
                        <Text style={[styles.textWhite, {textAlign: 'left'}]}>{l.symbol}</Text>
                        <Text style={[styles.textVioletVerySmall, {textAlign: 'left'}]}>{l.name}</Text>
                      </View>
                    </View>

                    <View style={[styles.coinsItemRightCustom, {justifyContent: 'flex-end'}]}>
                      <Text style={[styles.authenticationTextSmall, {textAlign: 'right'}]}>
                        {l.amount + ' ' + l.symbol}
                      </Text>
                      <Text style={[styles.textVioletVerySmall, {textAlign: 'right'}]}>
                        {'$' + (l.price * l.amount).toFixed(2).toLocaleString()}
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

  render () {
    return (
      <ViewContainer>
        <View style={[styles.vw100, {
          backgroundColor: headerColorViolet,
          paddingVertical: 15,
          justifyContent: 'center',
          alignItems: 'center'
        }]}>
          <View style={[styles.vw90, styles.searchBox]}>
            <View style={styles.searchBoxIcon}>
              <Icons name={'ios-search'} size={26} color={colorViolet1}/>
            </View>
            <TextInput
              style={[styles.searchInput, {width: (windowWidth * 0.9) - 40}]}
              onChangeText={this.searchTermChanged}
              placeholder={'Look up a coin...'}
              underlineColorAndroid={'transparent'}
              placeholderTextColor={colorViolet1}
            />
          </View>
        </View>
        <ScrollContainer style={styles.backgroundTransparent}>
          {this.state.loading ? this.renderLoading() : this.renderCoins()}
        </ScrollContainer>

        <Image style={styles.backgroundBottom} source={require('../../../assets/bgr-bottom-2.png')}
               resizeMode={'contain'}/>
      </ViewContainer>
    )
  }
}
