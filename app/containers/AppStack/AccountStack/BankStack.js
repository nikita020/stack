import React from 'react'
import {View, TouchableOpacity, Image} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import BankTab from './BankTab'
import Icons from 'react-native-vector-icons/Ionicons'
import { MenuButtonBack } from '../../../components/HeaderBack'
import { styles } from '../../../components/styles'
import SelectYourBank from './SelectYourBank'
import BankCredentials from './BankCredentials'
import BankCredentialsSelectAccount from './BankCredentialsSelectAccount'
import { colorViolet3, windowWidth } from '../../../../constants'

export default BankScreenScreenNavigator = createStackNavigator({
  BankScreen: {
    screen: BankTab,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Bank',
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
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.titleHeader
    })
  },
})
