import React from 'react'
import {
  View
} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

export const MenuButton = (props) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Icons
        onPress={() => {props.navigation.openDrawer()}}
        name={'ios-menu'}
        style={{paddingLeft: 35}}
        size={24}
        color={'white'}
      />
    </View>
  )
}
