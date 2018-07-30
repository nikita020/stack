import React from 'react'
import { View, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import TodayTab from './TodayTab'
import HomeNotifications from './HomeNotifications'
import Icons from 'react-native-vector-icons/Ionicons'
import { styles } from '../../../components/styles'

export default HomeScreenStackNavigator = createStackNavigator({
  HomeScreenTab: {
    screen: TodayTab,
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
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.titleHeader,
      headerRight: (
        <View style={styles.iconHeaderComponent}>
          <Icons
            onPress={() => navigation.navigate('HomeNotifications')}
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

// const mapStateToProps = (state) => ({
//   visibleModal: state.drawer.visibleModal
// })
//
// const mapDispatchToPros = (dispatch) => ({
//   onToggleModal: () => dispatch(drawerActions.toggleDrawer())
// })
//
// export default connect(mapStateToProps, mapDispatchToPros)(HomeScreenStackNavigator)
