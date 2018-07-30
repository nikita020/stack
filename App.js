import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native'
import { Provider, connect } from 'react-redux'
import { initializeListeners } from 'react-navigation-redux-helpers'
import { PersistGate } from 'redux-persist/lib/integration/react'
import SplashScreen from 'react-native-smart-splash-screen'
// import { store } from './redux/app-redux'
import configureStore, { navigationPropConstructor } from './redux/store'
import MainStack from './app/containers/MainStack'
import Drawer from './app/components/Drawer'

import * as constants from './constants'

console.disableYellowBox = true

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={{backgroundColor}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

class App extends Component {

  componentDidMount () {
    initializeListeners('root', this.props.nav)
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
    })
  }

  render () {
    const navigation = navigationPropConstructor(
      this.props.dispatch,
      this.props.nav
    )
    console.log(this.props.nav)
    return (
      <View style={{flex: 1}}>
        <MyStatusBar backgroundColor={constants.colorViolet} barStyle="light-content"/>
        {/*<Testing/>*/}
        <MainStack navigation={navigation}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({nav: state.nav})
const RootNavigationStack = connect(mapStateToProps)(App)

const Root = () => (
  <Provider store={configureStore.store}>
    <PersistGate persistor={configureStore.persistor}>
      <View style={{flex: 1}}>
        <RootNavigationStack/>
        <Drawer/>
      </View>
    </PersistGate>
  </Provider>
)

export default Root
