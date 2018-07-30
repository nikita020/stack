import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  Image
} from 'react-native'
import { styles } from '../../../components/styles'
import Icons from 'react-native-vector-icons/Ionicons'
import IconFA from 'react-native-vector-icons/FontAwesome'
import Card from '../../../components/Card'
import * as constants from '../../../../constants'
import ButtonCustom from '../../../components/Button'

export default class CardTab extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      accountName: 'Plaid Savings',
      institutionName: 'Chase',
    }
    this._onBank = this._onBank.bind(this)
  }

  _onBank () {
    this.props.navigation.navigate('PlaidLinkTracking')
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
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            paddingVertical: 30
          }}>
            <Image source={require('../../../assets/tracked-cards-icon.png')} style={{height: 0.2 * constants.windowWidth,
              width: 0.2 * constants.windowWidth}}/>
            <Text style={{fontSize: 21, color: 'white', textAlign: 'center', paddingVertical: 20}}>Your tracked
              cards</Text>
            <Text style={[styles.vw90, styles.textVioletSmall]}>
              {`These are the cards that we track to determine your spare-change. These are not charged, all ofthe funding comes from your funding account. You can have multiple tracked cards.`}
            </Text>
            <ButtonCustom
              style={{marginTop: 30, ...styles.vw90}}
              onPress={this._onBank}
              disabled={this.props.submitButtonDisabled}
              title='ADD A CARD'
            />
          </View>
          <ScrollView style={{marginHorizontal: 20, marginVertical: 30}}>
            <Card
              headerBackgroundColor={constants.colorBlue}
              bodyBackgroundColor={constants.colorBlue2}
              headerTitle={(
                <Text style={{color: 'white', fontSize: 18}}>Master Card</Text>
              )}
              headerFunction={(
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: constants.windowWidth * 0.2
                }}>
                  <IconFA name={'cc-mastercard'} size={26} color={'white'}/>
                  <IconFA name={'trash'} size={26} color={constants.colorGreen2}
                          onPress={() => this.props.navigation.navigate({routeName: 'RemoveCard'})}/>
                </View>
              )}
              bodyLeft={(
                <Text style={{color: constants.colorGray2, fontSize: 18}}>******* 9815</Text>
              )}
              bodyRight={(
                <Text style={{color: 'white', fontSize: 26, fontWeight: 'bold'}}>$672.05</Text>
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
