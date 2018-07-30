import React from 'react'
import { createStackNavigator } from 'react-navigation'
import AuthenticationStack from './AuthenticationStack/AuthenticationStack'
import PinLoginStack from './AuthenticationStack/PinLoginStack'
import LoadingScreen from './LoadingScreen'
import HomeStack from './AppStack/HomeDrawer'

// TODO: Change animation between those screens
export default MainStackNavigator = createStackNavigator(
  {
    LoadingScreen: {
      screen: LoadingScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      }
    },
    PinLoginStack: {
      screen: PinLoginStack,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      }
    },
    AuthenticationStack: {
      screen: AuthenticationStack,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      }
    },
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      }
    }
  }
)
