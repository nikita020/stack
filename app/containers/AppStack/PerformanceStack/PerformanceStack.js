import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Icons from 'react-native-vector-icons/Ionicons'
import { styles } from '../../../components/styles'
import PerformanceScreen from './PerformanceScreen'
import HistoryScreen from './HistoryScreen'
import HistoryDetailScreen from './HistoryDetailScreen'
import configureStore, { navigationPropConstructor } from '../../../../redux/store'
import appActions from '../../../../redux/actions/appActions'
import { colorGreen, colorViolet3 } from '../../../../constants'

export default PerformanceScreenStackNavigator = createStackNavigator({
  PerformanceScreen: {
    screen: PerformanceScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Performance',
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
          <TouchableOpacity onPress={() => navigation.navigate('HistoryScreen')}>
            <Text style={[styles.authenticationTextSmall, styles.iconHeaderRight]}>History</Text>
          </TouchableOpacity>
        </View>
      )
    })
  },
  HistoryScreen: {
    screen: HistoryScreen,
    navigationOptions: ({navigation}) => ({
      title: 'History',
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
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.titleHeader,
      headerRight: (
        <View style={ styles.iconHeaderComponent }>
          <TouchableOpacity onPress={ () => configureStore.store.dispatch(appActions.toggleFiltersModal()) }>
            <Text style={ [styles.authenticationTextSmall, styles.iconHeaderRight] }>Filter</Text>
          </TouchableOpacity>
        </View>
      )
    })
  },
  HistoryDetailScreen: {
    screen: HistoryDetailScreen,
    navigationOptions: ({navigation}) => ({
      title: 'History',
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
      headerStyle: [styles.headerStyle, {backgroundColor: colorViolet3}],
      headerTitleStyle: styles.titleHeader,
      headerRight: (
        <View style={ [styles.iconHeaderComponent, {marginRight: 20, borderWidth: 1, borderColor: colorGreen, borderRadius: 4, paddingHorizontal: 5}] }>
          <Icons name={'ios-checkmark'} size={18} color={colorGreen} style={{lineHeight: 18}}/>
          <Text style={ [styles.textGreenVerySmall, {paddingLeft: 5, lineHeight: 18}] }>Approved</Text>
        </View>
      )
    })
  }
})
