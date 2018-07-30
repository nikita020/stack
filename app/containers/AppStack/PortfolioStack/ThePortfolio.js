import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import CoinsList from '../../../components/CoinsList'

import { styles } from '../../../components/styles'

import Button from '../../../components/Button'
import * as constants from '../../../../constants'
import ScrollContainer from '../../../components/ScrollContainer'
import ViewContainer from '../../../components/ViewContainer'

export default class ThePortfolio extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {onSubmit} = this.props

    return (
      <ViewContainer>
        <View style={ {flex: 1, alignItems: 'center', alignContent: 'stretch', width: constants.windowWidth} }>
          <ScrollContainer style={ styles.backgroundTransparent }>
            <View style={ {flex: 1, alignItems: 'center', width: constants.windowWidth, justifyContent: 'flex-start'} }>
              <Text style={ [styles.vw90, styles.textWhite, {marginVertical: 30}] }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
              <Text style={ [styles.vw90, styles.textViolet, {marginBottom: 30}] }>
                Donec massa leo, aliquam sed tortor ut, consequat iaculis quam. Sed faucibus vel dui a porttitor. Donec nec diam ut purus ultricies malesuada.
              </Text>
              <CoinsList limit={5} onPress={() => this.props.navigation.navigate('PortfolioCoinExample')} rightArrow={true}/>
              <View style={{marginBottom: 40}}/>
            </View>
          </ScrollContainer>
        </View>
        <Image style={ styles.backgroundBottom } source={ require('../../../assets/bgr-bottom-2.png') }
               resizeMode={ 'contain' }/>
      </ViewContainer>
    )
  }
}
