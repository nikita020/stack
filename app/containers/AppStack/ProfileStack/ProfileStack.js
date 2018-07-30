import React from 'react'
import { View } from 'react-native'
import { createStackNavigator, NavigationActions } from 'react-navigation'
import Icons from 'react-native-vector-icons/Ionicons'
import ProfileScreen from './ProfileScreen'
import * as constants from '../../../../constants'
import { styles } from '../../../components/styles'

export default ProfileScreenStackNavigator = createStackNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => (console.log(navigation),{
      title: 'Password',
      headerLeft: (
        <View style={styles.iconHeaderComponent}>
          <Icons
            onPress={() => {
              console.log(11111)
              navigation.dispatch(NavigationActions.navigate({
                routeName: 'Profile',
                params: {},
                action: NavigationActions.navigate({ routeName: 'Settings' })
              }))
            }}
            name='ios-arrow-back'
            style={styles.iconHeaderLeft}
            size={36}
            color={'white'}
          />
        </View>
      ),
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.titleHeader
    })
  }
})
