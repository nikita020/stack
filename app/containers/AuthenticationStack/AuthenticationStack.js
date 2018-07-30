import React from 'react'
import { View, Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { withMappedNavigationProps } from 'react-navigation-props-mapper'
import Icons from 'react-native-vector-icons/Ionicons'
import PrologueScreen from './PrologueScreen'
import SignUpScreen from './SignUpScreen'
import PinRegisterScreen from './PinRegisterScreen'
// import SignUpStep3Screen from './SignUpStep3Screen'
// import SignUpStep4Screen from './SignUpStep4Screen'
import LoginScreen from './LoginScreen'
import PinLoginScreen from './PinLoginScreen'
import PortfolioChoose from './PortfolioChoose'
import PortfolioAssign from './PortfolioAssign'
import PlaidLinkFunding from '../../components/PlaidLinkFunding'
import SplashScreen from './SplashScreen'
import ForgotPasswordScreen from './ForgotPasswordScreen'

import PortfolioFinish from './PortfolioFinish'
import PortfolioCustomSetUp from './PortfolioCustomSetUp'
import PortfolioAddCurrency from './PortfolioAddCurrency'
import PortfolioCoinExample from './PortfolioCoinExample'
import ThePortfolio from './ThePortfolio'

import SelectYourBank from './SelectYourBank'
import BankCredentials from './BankCredentials'
import BankCredentialsSelectAccount from './BankCredentialsSelectAccount'
import { styles } from '../../components/styles'

import * as constants from '../../../constants'
const AuthenticationStackNavigator = createStackNavigator({
    PrologueScreen: {
      screen: PrologueScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    SignUpScreen: {
      screen: SignUpScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    PinRegisterScreen: {
      screen: PinRegisterScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    PinLoginScreen: {
      screen: PinLoginScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    ForgotPasswordScreen: {
      screen: ForgotPasswordScreen,
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
        headerStyle: {
          borderBottomWidth: 0,
          elevation: 0,
          ...Platform.select({
            android: {
              marginTop: constants.statusBarHeight
            }
          })
        },
        headerTransparent: true,
        gesturesEnabled: false,
      }),
    },
    PortfolioFinish: {
      screen: PortfolioFinish,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    PlaidLinkFunding: {
      screen: withMappedNavigationProps(PlaidLinkFunding),
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    PortfolioChoose: {
      screen: PortfolioChoose,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    PortfolioAssign: {
      screen: PortfolioAssign,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    PortfolioCustomSetUp: {
      screen: PortfolioCustomSetUp,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    PortfolioAddCurrency: {
      screen: PortfolioAddCurrency,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    PortfolioCoinExample: {
      screen: PortfolioCoinExample,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    ThePortfolio: {
      screen: ThePortfolio,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    SelectYourBank: {
      screen: SelectYourBank,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    BankCredentials: {
      screen: BankCredentials,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    BankCredentialsSelectAccount: {
      screen: BankCredentialsSelectAccount,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    }
  }
)

export default AuthenticationStackNavigator
