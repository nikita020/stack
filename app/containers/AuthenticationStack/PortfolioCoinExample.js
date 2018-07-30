import React, { Component } from 'react'
import {
  Text,
  View,
  Alert,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native'
import ViewContainer from './../../components/ViewContainer'
import ScrollContainer from './../../components/ScrollContainer'

import Icons from 'react-native-vector-icons/Ionicons'
import { styles } from './../../components/styles'
import CircularProgressCoin from '../../components/CircularProgressCoin'

import Button from '../../components/Button'

import { coinColors, windowHeight, colorViolet3, windowWidth, statusBarHeight } from '../../../constants'
import * as constants from '../../../constants'

export default class PortfolioCoinExample extends React.Component {
  static navigationOptions = {
    title: '',
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {

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
              <View style={ {
                justifyContent: 'center',
                alignItems: 'center',
                height: 44,
                width: windowWidth / 2,
                backgroundColor: 'transparent'
              } }>
                <Text style={ styles.textWhite }>Bitcoin</Text>
                <Text style={ styles.textOpacitySmall }>BTC</Text>
              </View>
            </View>
          </View>
          <View style={ {
            backgroundColor: constants.headerColorViolet,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            width: constants.windowWidth
          } }>
            <Image source={ require('../../assets/btc.png') } style={{width: 50, height: 50}}/>
          </View>

          <ScrollContainer style={ styles.backgroundTransparent }>
            <View style={ {flex: 1, alignItems: 'center', width: windowWidth, justifyContent: 'flex-start'} }>
              <ImageBackground
                style={ {width: windowWidth, height: windowWidth * (944 / 1125)} }
                resizeMode={ 'cover' }
                source={ require('../../assets/6.png') }>
                <View style={ {height: 70} }/>
                <CircularProgressCoin progress={ 25 }/>
              </ImageBackground>

              <Text style={ [styles.vw90, styles.textViolet, {marginBottom: 40}] }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam noconsectetur adipiscing elit am no
              </Text>

              <Button
                style={ {...styles.vw90, marginBottom: 50} }
                onPress={ () => console.log('more details') }
                // onPress={ this._onSubmit }
                title='MORE DETAILS'
              />
            </View>
          </ScrollContainer>
        </View>
        <Image style={ styles.backgroundBottom } source={ require('../../assets/bgr-bottom-2.png') }
               resizeMode={ 'contain' }/>
      </ViewContainer>
    )
  }
}
