import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Icons from 'react-native-vector-icons/Ionicons'
import HoldingsTab from './HoldingsTab'
import HoldingExample from './HoldingExample'
import { styles } from '../../../components/styles'
import { colorWhite, headerColorDarkBlue } from '../../../../constants'
import HomeNotifications from '../HomeStack/HomeNotifications'

export default HoldingScreenStackNavigator = createStackNavigator({
  HoldingScreenTab: {
    screen: HoldingsTab,
    navigationOptions: ({navigation}) => ({
      title: 'Holdings',
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
      headerStyle: styles.headerStyle,
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
  HoldingExample: {
    screen: HoldingExample,
    navigationOptions: ({navigation}) => ({
      headerLeft: (
        <View style={styles.iconHeaderComponent}>
          <Icons
            onPress={() => {
              navigation.goBack()
            }}
            name='ios-arrow-back'
            style={styles.iconHeaderLeft}
            size={36}
            color={'white'}
          />
        </View>
      ),
      headerTitleStyle: {justifyContent: 'center', alignItems: 'center', marginVertical: 0, padding: 0, color: colorWhite},
      headerStyle: [styles.headerStyle, {backgroundColor: headerColorDarkBlue}],
    })
  },
  HomeNotifications: {
    screen: HomeNotifications
  }
})
