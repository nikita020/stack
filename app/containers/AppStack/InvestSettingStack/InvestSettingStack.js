import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Icons from 'react-native-vector-icons/Ionicons'
import InvestSettingScreen from './InvestSettingScreen'
import { styles } from '../../../components/styles'
import * as constants from '../../../../constants'

export default InvestSettingScreenStackNavigator = createStackNavigator({
  InvestSettingScreen: {
    screen: InvestSettingScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Invest Settings',
      headerLeft: (
        <View style={styles.iconHeaderComponent}>
          <Icons
            onPress={() => navigation.goBack()}
            name='ios-arrow-back'
            style={styles.iconHeaderLeft}
            size={36}
            color={'white'}
          />
        </View>
      ),
      headerStyle: [styles.headerStyle, {backgroundColor: constants.headerColorDarkBlue}],
      headerTitleStyle: styles.titleHeader
    })
  }
})
