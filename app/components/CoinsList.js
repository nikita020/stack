import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native'
import * as Progress from 'react-native-progress'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import ViewContainer from './ViewContainer'
import { styles } from './styles'
import API from '../lib/api'
import firebase from 'react-native-firebase'
import * as constants from '../../constants'

const limit = 5

export default class CoinsList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      indeterminate: false,
      progress: 0,
      coins: constants.coinDetail,
      loading: false
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
    // this.setState({ loading: true })
    // this.startLoadingWallet()
    //   .then(coins => {
    //     const displayedCoins = coins
    //       .map(coin => {
    //         coin.displayed = true;
    //         return coin;
    //       });
    //     this.setState({ coins: displayedCoins, loading: false });
    //   })
    //   .catch(() => this.setState({ coins: [], loading: false }))
  // }

  // componentDidMount () {
  //   this.animate()
  // }

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
      <View style={{
        flex: 1,
        justifyContent: 'center',
        // justifyContent: 'space-around',
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

  renderCoins = () => {
    console.log('this.state.coins', this.state.coins)
    const limitItems = this.props.limit || limit
    const rightArrow = this.props.rightArrow
    return (
      <View style={{marginBottom: constants.windowHeight * 0.05}}>
        {
          this.state.coins
            .slice(0, limitItems)
            .filter(coin => coin.displayed)
            .map((l, i) => (
              <TouchableHighlight
                underlayColor={constants.colorViolet3}
                onPress={(l)=>this.props.onPress(l)}
                key={i}
              >
                <View style={styles.coinsItemContainer}>
                  <View style={i === limitItems - 1 ? [styles.coinsItem, {borderBottomWidth: 0}] : styles.coinsItem}>
                    <View style={styles.coinsItemLeft}>
                      <Image source={constants.coinLogos[l.symbol]} style={styles.coinsAvatar}/>
                      <View style={styles.coinsItemName}>
                        <Text style={[styles.textWhite, {textAlign: 'left'}]}>{l.symbol}</Text>
                        <Text style={[styles.textVioletVerySmall, {textAlign: 'left'}]}>{l.name}</Text>
                      </View>
                    </View>
                    {
                      !rightArrow
                        ?
                        <View style={styles.coinsItemRight}>
                          <Progress.Circle
                            progress={this.state.progress}
                            indeterminate={this.state.indeterminate}
                            size={14}
                            color={constants.colorWhite}
                            thickness={2}
                            unfilledColor={constants.colorViolet2}
                            borderWidth={0}
                          />
                          <Text style={styles.textVioletVerySmall}>
                            30%
                          </Text>
                        </View>
                        :
                        <View style={styles.coinsItemRight}>
                          <View style={[styles.buttonCircle, {borderColor: constants.colorViolet4}]}>
                            <SimpleLineIcons name={'arrow-right'} size={12} color={constants.colorWhite}/>
                          </View>
                        </View>
                    }
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
      <ViewContainer style={styles.backgroundTransparent}>
        {this.state.loading ? this.renderLoading() : this.renderCoins()}
      </ViewContainer>
    )
  }
}

