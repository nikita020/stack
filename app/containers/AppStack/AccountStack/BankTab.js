import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'
import { Button, Icon, CheckBox } from 'react-native-elements'
import IconFA from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/Ionicons'
import { styles } from '../../../components/styles'
import ViewContainerWithHeader from '../../../components/ViewContainerWithHeader'
import * as constants from '../../../../constants'
import ButtonCustom from '../../../components/Button'

import Card from '../../../components/Card'
import { windowWidth } from '../../../../constants'
import { windowHeight } from '../../../../constants'

export default class BankTab extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      accountName: 'Plaid Savings',
      institutionName: 'Chase',
    }
    this._onBank = this._onBank.bind(this)
  }

//TODO add bank information and pull it from firebase
  componentWillMount () {
  }

  _onBank () {
    this.props.navigation.navigate('SelectYourBankSetting')
  }

  render () {
    return (
      <View
        style={{
          flex: 1,
          width: constants.windowWidth,
          backgroundColor: constants.colorViolet,
          height: constants.windowHeight
        }}
      >
        <View style={{flex: 1}}>
          <View style={{
            backgroundColor: constants.headerColorViolet,
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            paddingVertical: 30,
            height: windowHeight * 0.55
          }}>
            <Image source={require('../../../assets/funding-account-icon.png')} style={{height: 0.2*windowWidth, width: 0.2*windowWidth}}/>
            <Text style={{fontSize: 21, color: 'white', textAlign: 'center'}}>Your funding
              account</Text>
            <Text style={[styles.vw90, styles.textVioletSmall]}>{`This account is the one that funds all of your investment. Withdraws are also deposited into here as well. You can only have one funding account.`}</Text>
            <ButtonCustom
              style={{...styles.vw90}}
              onPress={this._onBank}
              disabled={this.props.submitButtonDisabled}
              title='Change your bank'
            />
          </View>
          <ScrollView style={{marginHorizontal: 20, marginVertical: 30}}>
            <Card
              headerTitle={(
                <Image source={require('../../../assets/dbs-bank-logo.png')}
                       style={{width: windowWidth * 0.3, height: 20}} resizeMode={'contain'}
                />
              )}
              headerFunction={(
                <IconFA name={'trash'} size={26} color={constants.colorGray2} onPress={() => this.props.navigation.navigate({routeName: 'RemoveBank'})}/>
              )}
              bodyLeft={(
                <Text style={{color: constants.colorGray2, fontSize: 18}}>*********** 9815</Text>
              )}
              bodyRight={(
                <Text style={{color: constants.colorViolet, fontSize: 26, fontWeight: 'bold'}}>$672.05</Text>
              )}
            />
          </ScrollView>
        </View>
        <Image style={styles.backgroundBottom} source={require('../../../assets/bgr-bottom-2.png')}
               resizeMode={'contain'}/>
      </View>
    )
  }
}
