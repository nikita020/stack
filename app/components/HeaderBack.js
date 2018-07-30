import React from 'react'
import {
  View,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { NavigationActions } from 'react-navigation'
import Icons from 'react-native-vector-icons/FontAwesome'

export const MenuButtonBack = (props) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Icons
        onPress={() => {props.navigation.navigate('Settings')}}
        name='chevron-left'
        style={{paddingLeft: 35}}
        size={36}
        color={"white"}
      />
    </View>
  )
}
