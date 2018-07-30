import React from 'react'
import { View, Image, Platform } from 'react-native'
import { createStackNavigator, createTabNavigator, createBottomTabNavigator } from 'react-navigation'
import RecurringScreen from './RecurringTab'
import OneTimeScreen from './OneTimeTab'
import StackScreen from './StackTab'
import Icons from 'react-native-vector-icons/Ionicons'
import { styles } from '../../../components/styles'
import * as constants from '../../../../constants'
import HomeNotifications from '../HomeStack/HomeNotifications'

const RecurringTab = createStackNavigator({
  Recurring: {
    screen: RecurringScreen,
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
      title: 'Recurring',
      headerStyle: navigation.state.params && navigation.state.params.numpad ? [styles.headerStyle, {backgroundColor: constants.colorBlue}] : styles.headerStyle,
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
  }
})

const OneTimeTab = createStackNavigator({
  OneTime: {
    screen: OneTimeScreen,
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
      title: 'One Time',
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
  }
})

const StackTab = createStackNavigator({
  Stack: {
    screen: StackScreen,
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
      title: 'Stack',
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
  }
})

const InvestScreenTabNavigator = createTabNavigator({
    RecurringTab: {
      screen: RecurringTab,
      navigationOptions: ({navigation}) => ({
        title: 'Recurring',
        tabBarIcon: ({tintColor}) => <Image resizeMode="contain" style={{height: 26, tintColor: tintColor}}
                                            source={require('../../../assets/recurring.png')}/>,
      })
    },
    OneTime: {
      screen: OneTimeTab,
      navigationOptions: ({navigation}) => ({
        title: 'One Time',
        tabBarIcon: ({tintColor}) => <Image resizeMode="contain" style={{height: 26, tintColor: tintColor}}
                                            source={require('../../../assets/one-time.png')}/>
      })
    },
    Stack: {
      screen: StackTab,
      navigationOptions: ({navigation}) => ({
        title: 'Stack',
        tabBarIcon: ({tintColor}) => <Image resizeMode="contain" style={{height: 22, tintColor: tintColor}}
                                            source={require('../../../assets/stack.png')}/>
      })
    }
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    backBehavior: 'none',
    initialRouteName: 'OneTime',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#ffffff',
      activeBackgroundColor: 'transparent',
      inactiveBackgroundColor: 'transparent',
      inactiveTintColor: constants.colorVioletSecondary2,
      style: styles.bottomTabNavigator,
      labelStyle: {marginTop: -10, fontSize: 13},
      labelStyle: {
        marginTop: Platform.OS === 'ios' ? -10 : 0,
        marginBottom: Platform.OS === 'ios' ? 0 : 5,
        fontSize: 13
      },
      tabStyle: {
        justifyContent: 'center',
        borderColor: constants.colorVioletSecondary2
      }
    },
  }
)

export default InvestScreenStackNavigator = createStackNavigator({
  InvestScreen: {
    screen: InvestScreenTabNavigator,
    navigationOptions: ({navigation}) => ({
      // headerLeft: (
      //   <View style={styles.iconHeaderComponent}>
      //     <Icons
      //       onPress={() => navigation.openDrawer()}
      //       name='ios-menu'
      //       style={styles.iconHeaderLeft}
      //       size={36}
      //       color={'white'}
      //     />
      //   </View>
      // ),
      // headerStyle: navigation.state.params && navigation.state.params.numpad ? [styles.headerStyle, {backgroundColor: constants.headerColorDarkBlue}] : styles.headerStyle,
      // headerTitleStyle: styles.titleHeader,
      // headerRight: (
      //   <View style={styles.iconHeaderComponent}>
      //     <Icons
      //       onPress={() => navigation.navigate({routeName: 'HomeNotifications'})}
      //       name='ios-notifications'
      //       style={styles.iconHeaderRight}
      //       size={36}
      //       color={'white'}
      //     />
      //   </View>
      // )
    })
  },
  HomeNotifications: {
    screen: HomeNotifications
  },
}, {
  headerMode: 'none'
})
