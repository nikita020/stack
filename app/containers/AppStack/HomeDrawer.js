import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import HomeStack from './HomeStack/HomeStack'
import InvestStack from './InvestStack/InvestStack'
import WithdrawStack from './WithdrawStack/WithdrawStack'
import SettingStack from './SettingStack/SettingStack'
import PerformanceStack from './PerformanceStack/PerformanceStack'
import HoldingStack from './HoldingStack/HoldingStack'
import Logout from './Logout'

import * as constants from '../../../constants'
import HomeMenu from './HomeStack/HomeMenu'
// TODO is this really the best way to link HomeStack to the Drawer ?
export default HomeDrawer = createDrawerNavigator({
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: 'Home',
        lockMode: 'locked-closed'
      }
    },
    Invest: {
      screen: InvestStack,
      navigationOptions: {
        drawerLabel: 'Invest'
      }
    },
    Holdings: {
      screen: HoldingStack,
      navigationOptions: {
        drawerLabel: 'Holdings'
      }
    },
    Performance: {
      screen: PerformanceStack,
      navigationOptions: {
        drawerLabel: 'Performance'
      }
    },
    Withdraw: {
      screen: WithdrawStack,
      navigationOptions: {
        drawerLabel: 'Withdraw'
      }
    },
    Settings: {
      screen: SettingStack,
      navigationOptions: ({navigation}) => ({
        drawerLabel: 'Settings'
      })
    },
    Logout: {
      screen: Logout,
      navigationOptions: {
        drawerLabel: () => null,
      }
    }
  },
  {
    contentComponent: HomeMenu,
    drawerWidth: constants.windowWidth
  }
)
