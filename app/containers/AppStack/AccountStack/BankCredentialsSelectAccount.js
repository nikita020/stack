import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
} from 'react-native'
import ViewContainer from '../../../components/ViewContainer'
import { styles } from '../../../components/styles'
import Button from '../../../components/Button'

import * as constants from '../../../../constants'
import { statusBarHeight, windowWidth, colorViolet, headerColorDarkBlue, headerColorViolet } from '../../../../constants'

export default class BankCredentials extends Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  getSize = (imageUrl) => {
    return {width, height} = Image.resolveAssetSource(imageUrl)
  }

  render () {
    const logoUrl = require('../../../assets/logo-Deutsche-Bank.png')
    const logoSize = this.getSize(logoUrl)
    return (
      <ViewContainer>
        <View style={ {flex: 1, alignItems: 'center', alignContent: 'stretch', width: windowWidth} }>
          <ViewContainer style={ {...styles.backgroundWhite, justifyContent: 'flex-start'} }>
            <Image style={ [styles.logoStack, {
              height: logoSize.height / logoSize.width * (0.25 * windowWidth),
              marginBottom: 30,
              marginTop: 30
            }] } source={ logoUrl } resizeMode={ 'contain' }/>

            <Text style={ [styles.textWhiteBig, {color: colorViolet, marginBottom: 30}] }>Deutsche Bank</Text>

            <View style={ [styles.containerCenter, styles.vw100] }>

              <View style={ [styles.historyCard, {marginBottom: 10}] }>
                <View style={ [styles.historyCardContent, styles.vw90] }>
                  <View
                    style={ [styles.historyCardHead, {backgroundColor: constants.colorViolet5, paddingVertical: 10}] }>
                    <Text style={ styles.textWhiteSmall }>Plaid Checking</Text>
                  </View>
                  <View style={ [styles.historyCardBody, {
                    backgroundColor: constants.colorViolet4,
                    height: 50,
                    justifyContent: 'space-between'
                  }] }>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={ styles.dotOpacity }/>
                      <View style={ styles.dotOpacity }/>
                      <View style={ styles.dotOpacity }/>
                      <View style={ styles.dotOpacity }/>
                      <View style={ styles.dotOpacity }/>
                      <View style={ styles.dotOpacity }/>
                      <View style={ styles.dotOpacity }/>
                      <Text style={ [styles.textOpacitySmall, {marginLeft: 5}] }>0100</Text>
                    </View>
                    <Text style={styles.textWhite}>$100.00</Text>
                  </View>
                </View>
              </View>

              <View style={ [styles.historyCard, {marginBottom: 10}] }>
                <View style={ [styles.historyCardContent, styles.vw90] }>
                  <View
                    style={ [styles.historyCardHead, {backgroundColor: constants.colorBlue, paddingVertical: 10}] }>
                    <Text style={ styles.textWhiteSmall }>Plaid Saving</Text>
                  </View>
                  <View style={ [styles.historyCardBody, {
                    backgroundColor: constants.headerColorDarkBlue,
                    height: 50,
                    justifyContent: 'space-between'
                  }] }>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={ styles.dotOpacity }/>
                      <View style={ styles.dotOpacity }/>
                      <View style={ styles.dotOpacity }/>
                      <View style={ styles.dotOpacity }/>
                      <View style={ styles.dotOpacity }/>
                      <View style={ styles.dotOpacity }/>
                      <View style={ styles.dotOpacity }/>
                      <Text style={ [styles.textOpacitySmall, {marginLeft: 5}] }>9815</Text>
                    </View>
                    <Text style={styles.textWhite}>$672.05</Text>
                  </View>
                </View>
              </View>

              <View style={ {marginBottom: 25} }/>
              <Button
                btnBlue={ true }
                style={ styles.vw90 }
                onPress={ () => this.props.navigation.popToTop({routeName: 'SettingScreen'}) }
                // onPress={ this._onSubmit }
                title='CONTINUE'
              />
            </View>

            <Image style={ [styles.backgroundBottom, {height: 429 / 1125 * windowWidth}] }
                   source={ require('../../../assets/bgr-bottom-grey.png') }
                   resizeMode={ 'contain' }/>
          </ViewContainer>
        </View>
      </ViewContainer>
    )
  }
}
