import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import PinLoginScreen from './PinLoginScreen'

const PinLoginStackNavigator = StackNavigator({
    PinLoginScreen: {
      screen: PinLoginScreen,
      navigationOptions: {
        gesturesEnabled: false,
      },
    }
  },
  {headerMode: 'none'}
)

export default PinLoginStackNavigator
