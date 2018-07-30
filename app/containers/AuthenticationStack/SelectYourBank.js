import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import { Card, Button, Icon, ButtonGroup, SearchBar, List, ListItem } from 'react-native-elements'
import ViewContainer from '../../components/ViewContainer'
import { styles } from '../../components/styles'
import ScrollContainer from '../../components/ScrollContainer'
import {
  coinColors, colorWhite, windowHeight, colorViolet2, coinLogos, headerColorViolet, colorViolet1,
  windowWidth, colorViolet3, listBanks, colorViolet, statusBarHeight
} from '../../../constants'

export default class SelectYourBank extends React.Component {
  static navigationOptions = {
    title: 'Holdings',
    tabBarIcon: ({tintColor}) => <Icon name="account-balance-wallet" color={ tintColor }/>
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  getSize = (imageUrl) => {
    return {width, height} = Image.resolveAssetSource(imageUrl);
  }

  renderBanks () {
    return (
      <View style={ {marginBottom: windowHeight * 0.05} }>
        {
          listBanks.map((l, i) => (
            <TouchableHighlight
              underlayColor={ '#d7d8d2' }
              onPress={ () => {
                this.props.navigation.navigate('BankCredentials')
              } }>
              <View style={ styles.coinsItemContainer }>
                <View style={ [styles.coinsItem, {borderBottomWidth: 0, paddingVertical: 25}] }>
                  <View style={ styles.coinsItemLeft }>
                    <Text style={ [styles.textViolet, {color: colorViolet, textAlign: 'left'}] }>{ l.name }</Text>
                  </View>
                  <View style={ [styles.coinsItemRightCustom, {justifyContent: 'flex-end'}] }>
                    <Image source={ l.logo } style={ {height: 20, width: 20*(this.getSize(l.logo).width/this.getSize(l.logo).height)} } resizeMode={ 'contain' }/>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          ))
        }
      </View>
    )
  }

  render () {
    return (
      <ViewContainer>
        <View style={ [styles.customHeaderContainer, {height: 44 + statusBarHeight, backgroundColor: colorViolet3}] }>
          <View style={ styles.customHeaderContent }>
            <View style={ styles.customHeaderRightBtn }>
              <TouchableOpacity
                activeOpacity={ 0.8 }
                onPress={ () => {
                  this.props.navigation.goBack()
                } }>
                <Image
                  style={ {width: 20, height: 20, marginRight: 0.05*windowWidth} }
                  source={ require('../../assets/cross.png') }
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={ [styles.vw100, {
          backgroundColor: colorViolet3,
          paddingBottom: 15,
          justifyContent: 'center',
          alignItems: 'center'
        }] }>
          <Text style={ [styles.textWhite, {paddingBottom: 20}] }>Select your Bank</Text>
          <View style={ [styles.vw90, styles.searchBox] }>
            <View style={ styles.searchBoxIcon }>
              <Icons name={ 'ios-search' } size={ 26 } color={ colorViolet1 }/>
            </View>
            <TextInput
              style={ [styles.searchInput, {width: (windowWidth * 0.9) - 40, paddingLeft: 0}] }
              onChangeText={ this.searchTermChanged }
              placeholder={ 'Search' }
              placeholderTextColor={ colorViolet1 }
              underlineColorAndroid={'transparent'}
            />
          </View>
        </View>
        <ScrollContainer style={ styles.backgroundWhite }>
          { this.renderBanks() }
        </ScrollContainer>

        { /*<Image style={ styles.backgroundBottom } source={ require('../../../assets/bgr-bottom-2.png') }*/ }
        { /*resizeMode={ 'contain' }/>*/ }
      </ViewContainer>
    )
  }
}
