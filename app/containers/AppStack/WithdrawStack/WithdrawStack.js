import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Icons from 'react-native-vector-icons/Ionicons'
import WithdrawScreen from './WithdrawScreen'
import { styles } from '../../../components/styles'
import { headerColorDarkBlue } from '../../../../constants'
import HomeNotifications from '../HomeStack/HomeNotifications'

export default WithdrawScreenStackNavigator = createStackNavigator({
  WithdrawScreen: {
    screen: WithdrawScreen,
    navigationOptions: ({navigation}) => ({
      headerLeft: (
        <View style={styles.iconHeaderComponent}>
          <Icons
            onPress={() => navigation.openDrawer()}
            name='ios-menu'
            style={styles.iconHeaderLeft}
            size={36}
            color={'white'}
          />
        </View>
      ),
      headerTitleStyle: styles.titleHeader,
      headerRight: (
        <View style={styles.iconHeaderComponent}>
          <Icons
            onPress={() => navigation.navigate({routeName: 'HomeNotifications'})}
            name='ios-notifications'
            style={styles.iconHeaderRight}
            size={36}
            color={'white'}
          />
        </View>
      )
    })
  },
  HomeNotifications: {
    screen: HomeNotifications
  }
})
