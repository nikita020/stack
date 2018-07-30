import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import { MenuButton } from '../../components/HeaderButtons'
import Icons from 'react-native-vector-icons/Ionicons'
import * as config from '../../../constants'
import TodayTab from './HomeStack/TodayTab'

export const HeaderNavigationOption = ({navigation}) => ({
  screen: TodayTab,
  navigationOptions: (navigation) => ({
    headerLeft: (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Icons
          onPress={() => navigation.openDrawer()}
          name='ios-menu'
          style={{paddingLeft: 20}}
          size={36}
          color={'white'}
        />
      </View>
    ),
    headerStyle: {
      backgroundColor: config.headerColorViolet,
      borderBottomWidth: 0
    },
    headerTitleStyle: {
      color: 'white',
      // marginBottom: 15,
      fontSize: 20,
      alignSelf: 'center'
    },
    headerRight: (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Icons
          onPress={() => navigation.openDrawer()}
          name='ios-notifications'
          style={{paddingRight: 20}}
          size={36}
          color={'white'}
        />
      </View>
    )
  })
})
