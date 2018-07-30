import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native'
import { connect } from 'react-redux'

import { styles } from '../../../components/styles'
import Button from '../../../components/Button'

import * as constants from '../../../../constants'
import ViewContainer from '../../../components/ViewContainer'
import ScrollContainer from '../../../components/ScrollContainer'

import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import appActions from '../../../../redux/actions/appActions'

const listCoins = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    value: '297.50',
    logo: require('../../../assets/btc.png')
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    value: '4.89 M',
    logo: require('../../../assets/eth.png')
  },
  {
    symbol: 'XRP',
    name: 'Ripple',
    value: '305.98',
    logo: require('../../../assets/xrp.png')
  },
  {
    symbol: 'BCH',
    name: 'Bitcoin Cash',
    value: '6.93 M',
    logo: require('../../../assets/bch.png')
  }
]

class HistoryDetailScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  renderItem = (item, index) => {
    return (
      <View style={ styles.historyCard } key={ index }>
        <View style={ [styles.historyCardContent, styles.vw90] }>
          <View style={ [styles.historyCardHead, {backgroundColor: item.colorHeader, paddingVertical: 0, height: 36}] }>
            <Text style={ styles.textWhiteSmall }>{ item.title }</Text>
          </View>
          <View style={ [styles.historyCardBody, {backgroundColor: item.colorBody, justifyContent: 'space-between'}] }>
            <View style={{flexDirection: 'row'}}>
              <SimpleLineIcons name={ 'clock' } size={ 14 } color={ constants.colorWhite }/>
              <Text style={ [styles.textOpacitySmall, {paddingLeft: 10}] }>{ item.date }</Text>
            </View>

            <Text style={ styles.textWhiteSmall }>{ item.value }</Text>
          </View>
        </View>
      </View>
    )
  }

  renderHistoryRowItem = (item, index, noBorder) => {
    return (
      <View style={ [styles.historyRowItem, {
        width: (constants.windowWidth * 0.85) / 2,
        borderBottomWidth: noBorder === true ? 0 : 1
      }] } key={ index }>
        <View style={{flexDirection: 'row'}}>
          <Image style={ [styles.logoCoinSmall, {marginRight: 10}] } source={ item.logo }/>
          <Text style={ styles.textWhiteSmall }>{ item.symbol }</Text>
        </View>
        <Text style={ styles.textGreenSmall }>{ item.value }</Text>
      </View>
    )
  }

  renderListCoins = () => {
    let items = []

    listCoins.map((item, index) => {
      if (index % 2 === 0 || items.length === 0) {
        items.push([item])
      }
      else {
        items[items.length - 1].push(item)
      }
    })
    console.log('items', items)

    return items.map((item, index) =>
      <View style={ [styles.historyRow, styles.vw90] } key={ index }>
        {
          item.map((i, j) => this.renderHistoryRowItem(i, j, index === items.length - 1))
        }
      </View>
    )
  }

  render () {
    const listRoundUps = [
      {
        title: 'Round-Up',
        value: '$7.00',
        date: 'May 9, 2018',
        colorHeader: constants.colorViolet4,
        colorBody: constants.colorViolet5
      },
      {
        title: 'Round-Up',
        value: '$7.00',
        date: 'May 8, 2018',
        colorHeader: constants.colorBlue2,
        colorBody: constants.colorBlue
      },
    ]

    return ([
      <ViewContainer>
        <ScrollContainer style={ styles.backgroundTransparent }>
          <View style={ styles.historyDetailHeader }>
            <View style={ [styles.backgroundTop, {backgroundColor: constants.colorViolet3, bottom: 50}] }/>
            <Text style={ [styles.textOpacityVerySmall, {marginBottom: 20}] }>Deposit</Text>

            <Text style={ [styles.textWhiteBig, {marginBottom: 10}] }>$7<Text style={ styles.textOpacityBig }>.00</Text></Text>

            <View style={ [styles.historyCardBody, {marginBottom: 10}] }>
              <SimpleLineIcons name={ 'clock' } size={ 14 } color={ constants.colorWhite }/>
              <Text style={ [styles.textOpacitySmall, {paddingLeft: 10}] }>May 9, 2018</Text>
            </View>

            <View style={ [styles.historyCard, {marginBottom: 0}] }>
              <View style={ [styles.historyCardContent, styles.vw90] }>
                <View
                  style={ [styles.historyCardHead, {backgroundColor: constants.colorViolet5, paddingVertical: 10}] }>
                  <Text style={ styles.textWhiteSmall }>Bank Account</Text>
                </View>
                <View style={ [styles.historyCardBody, {backgroundColor: constants.colorViolet4, height: 50}] }>
                  <View style={ styles.dotOpacity }/>
                  <View style={ styles.dotOpacity }/>
                  <View style={ styles.dotOpacity }/>
                  <View style={ styles.dotOpacity }/>
                  <View style={ styles.dotOpacity }/>
                  <View style={ styles.dotOpacity }/>
                  <View style={ styles.dotOpacity }/>
                  <Text style={ [styles.textOpacitySmall, {marginLeft: 5}] }>0100</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={ [styles.historyDetailBody, {marginBottom: constants.windowWidth * 0.25}] }>

            <View style={ [styles.historyRow, styles.vw90] }>
              <View style={ [styles.historyRowItem, {width: (constants.windowWidth * 0.85) / 2}] }>
                <Text style={ styles.textWhiteSmall }>% GAIN/LOSS</Text>
                <Text style={ styles.textGreenSmall }>+50.5%</Text>
              </View>

              <View style={ [styles.historyRowItem, {width: (constants.windowWidth * 0.85) / 2}] }>
                <Text style={ styles.textWhiteSmall }>$ GAIN/LOSS</Text>
                <Text style={ styles.textGreenSmall }>+$3.4</Text>
              </View>
            </View>

            <Text style={ [styles.textWhite, {paddingVertical: 40}] }>Amount of Coins Bought</Text>

            { this.renderListCoins() }

            <View style={ styles.historyCardBox }>
              <View style={ styles.historyCardBoxTitle }>
                <Text style={ styles.textWhite }>Round-Ups</Text>
              </View>
              { listRoundUps.map((item, index) => this.renderItem(item, index)) }
            </View>

          </View>

          <Image style={ styles.backgroundBottom } source={ require('../../../assets/bgr-bottom-2.png') }
                 resizeMode={ 'contain' }/>
        </ScrollContainer>
      </ViewContainer>
    ])
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDetailScreen)

