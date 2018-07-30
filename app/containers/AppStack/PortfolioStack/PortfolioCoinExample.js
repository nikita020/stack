import React, { Component } from 'react'
import {
  Text,
  View,
  Alert,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native'
import ViewContainer from './../../../components/ViewContainer'
import ScrollContainer from './../../../components/ScrollContainer'

import { styles } from './../../../components/styles'
import CircularProgressCoin from '../../../components/CircularProgressCoin'

import Button from '../../../components/Button'

import * as constants from '../../../../constants'

export default class PortfolioCoinExample extends Component {
  static navigationOptions = ({navigation}) => ({
    title: Platform.OS === 'ios' ? <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        width: constants.windowWidth / 2,
        backgroundColor: 'transparent'
      }}>
        <Text
          style={styles.textWhite}>{navigation.state.params.coinData.name ? navigation.state.params.coinData.name : 'Bitcoin'}</Text>
        <Text
          style={styles.textOpacitySmall}>{navigation.state.params.coinData.symbol ? navigation.state.params.coinData.symbol : 'BTC'}</Text>
      </View>
      : `${navigation.state.params.coinData.name ? navigation.state.params.coinData.name : 'Bitcoin'} - ${navigation.state.params.coinData.symbol ? navigation.state.params.coinData.symbol : 'BTC'}`,
  })

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {

    return (
      <ViewContainer>
        <View style={{flex: 1, alignItems: 'center', alignContent: 'stretch', width: constants.windowWidth}}>
          <View style={{
            backgroundColor: constants.headerColorViolet,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            width: constants.windowWidth
          }}>
            <Image source={require('../../../assets/btc.png')} style={{width: 50, height: 50}}/>
          </View>

          <ScrollContainer style={styles.backgroundTransparent}>
            <View style={{flex: 1, alignItems: 'center', width: constants.windowWidth, justifyContent: 'flex-start'}}>
              <ImageBackground
                style={{width: constants.windowWidth, height: constants.windowWidth * (944 / 1125)}}
                resizeMode={'cover'}
                source={require('../../../assets/6.png')}>
                <View style={{height: 70}}/>
                <CircularProgressCoin progress={25}/>
              </ImageBackground>

              <Text style={[styles.vw90, styles.textViolet, {marginBottom: 40}]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam noconsectetur adipiscing elit am no
              </Text>

              <Button
                style={{...styles.vw90, marginBottom: 50}}
                onPress={() => this.props.navigation.navigate({
                  routeName: 'HoldingExample',
                  params: {coinData: this.props.navigation.state.params.coinData}
                })}
                title='MORE DETAILS'
              />
            </View>
          </ScrollContainer>
        </View>
        <Image style={styles.backgroundBottom} source={require('../../../assets/bgr-bottom-2.png')}
               resizeMode={'contain'}/>
      </ViewContainer>
    )
  }
}
