import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Icons from 'react-native-vector-icons/Ionicons'
import PortfolioScreen from './PortfolioScreen'
import { styles } from '../../../components/styles'

export default PorfolioScreenStackNavigator = createStackNavigator({
  PortfolioScreen: {
    screen: PortfolioScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Portfolio',
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
  }
})
