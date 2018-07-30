import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Icons from 'react-native-vector-icons/Ionicons'
import SettingScreen from './SettingScreen'
import { styles } from '../../../components/styles'
import ProfileScreen from '../ProfileStack/ProfileScreen'
import PortfolioScreen from '../PortfolioStack/PortfolioScreen'
import PortfolioCustomSetUp from '../PortfolioStack/PortfolioCustomSetUp'
import PortfolioAddCurrency from '../PortfolioStack/PortfolioAddCurrency'
import PortfolioCoinExample from '../PortfolioStack/PortfolioCoinExample'
import ThePortfolio from '../PortfolioStack/ThePortfolio'

import InvestSettingScreen from '../InvestSettingStack/InvestSettingScreen'
import * as constants from '../../../../constants'
import BankTab from '../AccountStack/BankTab'
import BankCredentials from '../AccountStack/BankCredentials'
import BankCredentialsSelectAccount from '../AccountStack/BankCredentialsSelectAccount'
import SelectYourBank from '../AccountStack/SelectYourBank'

import CardTab from '../AccountStack/CardTab'
import PasswordScreen from './PasswordScreen'
import PasswordSuccessPopup from './PasswordSuccessPopup'
import OldPINScreen from './OldPINScreen'
import NewPINScreen from './NewPINScreen'
import RepeatPINScreen from './RepeatPINScreen'
import PINSuccessPopup from './PINSuccessPopup'
import LegalScreen from './LegalScreen'
import RemoveBankPopup from '../AccountStack/RemoveBankPopup'
import RemoveCardPopup from '../AccountStack/RemoveCardPopup'
import NotificationScreen from './NotificationScreen'
import NotificationDetailScreen from './NotificationDetailScreen'
import HomeNotifications from '../HomeStack/HomeNotifications'
import HoldingExample from '../HoldingStack/HoldingExample'

export default SettingScreenStackNavigator = createStackNavigator({
  SettingScreen: {
    screen: SettingScreen,
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
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Profile',
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
      headerTitleStyle: styles.titleHeader
    })
  },
  PortfolioHomeScreen: {
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
  },
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
      headerTitleStyle: styles.titleHeader
    })
  },
  Bank: {
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

  SelectYourBankSetting: {
    screen: SelectYourBank,
    navigationOptions: ({navigation}) => ({
      headerTitle: '',
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
      headerStyle: [styles.headerStyle, {backgroundColor: constants.colorViolet3}],
      headerTitleStyle: styles.titleHeader
    })
  },
  BankCredentialsSetting: {
    screen: BankCredentials,
    navigationOptions: ({navigation}) => ({
      headerTitleStyle: styles.titleHeader,
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
    })
  },
  BankCredentialsSelectAccountSetting: {
    screen: BankCredentialsSelectAccount,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Select your Account',
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

  Card: {
    screen: CardTab,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Cards',
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
  Password: {
    screen: PasswordScreen,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Password',
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
  PasswordSuccess: {
    screen: PasswordSuccessPopup,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Password',
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
  },
  OldPINScreen: {
    screen: OldPINScreen,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  NewPINScreen: {
    screen: NewPINScreen,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  RepeatPINScreen: {
    screen: RepeatPINScreen,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  PINSuccess: {
    screen: PINSuccessPopup,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'PIN',
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
  },
  LegalScreen: {
    screen: LegalScreen,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Legal',
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
  RemoveBank: {
    screen: RemoveBankPopup,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Remove Bank',
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
  RemoveCard: {
    screen: RemoveCardPopup,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Remove Card',
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
  },
  NotificationScreen: {
    screen: NotificationScreen,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Notifications',
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
  NotificationDetailScreen: {
    screen: NotificationDetailScreen,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Notifications',
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
  PortfolioCustomSetUp: {
    screen: PortfolioCustomSetUp,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Custom Portfolio',
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
      headerTitleStyle: styles.titleHeader,
    })
  },
  PortfolioAddCurrency: {
    screen: PortfolioAddCurrency,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Add Currency',
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
      headerTitleStyle: styles.titleHeader,
    })
  },
  PortfolioCoinExample: {
    screen: PortfolioCoinExample,
    navigationOptions: ({navigation}) => ({
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
      headerTitleStyle: styles.titleHeader,
    })
  },
  ThePortfolio: {
    screen: ThePortfolio,
    navigationOptions: ({navigation}) => ({
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
      title: 'The Portfolio',
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.titleHeader,
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
      headerTitleStyle: {justifyContent: 'center', alignItems: 'center', marginVertical: 0, padding: 0, color: constants.colorWhite},
      headerStyle: [styles.headerStyle, {backgroundColor: constants.headerColorDarkBlue}],
    })
  },
  HomeNotifications: {
    screen: HomeNotifications
  }
})
