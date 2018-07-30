import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Card, Button, Icon, CheckBox } from 'react-native-elements'
import ViewContainer from '../../../components/ViewContainer'
import ProgressBarBank from '../../../components/ProgressBarBank'
import CircularProgressBank from '../../../components/CircularProgressBank'
import IconCardLarge from '../../../components/IconCardLarge'
import CardWrapper from '../../../components/CardWrapper'
import API from '../../../lib/api'
import { createOneTimeDepositPopup } from '../../../lib/invest'
import * as constants from '../../../../constants'

export default class StackTab extends Component {

  constructor (props) {
    super(props)
    this.state = {
      transactions: [],
      investedAmount: 0
    }
    this.setTabBankState = this.setTabBankState.bind(this)
  }

  componentWillMount () {
    API.get_transactions(global.user.uid)
      .then(transactions => this.setState({transactions}))
  }

  setTabBankState (bankState) {
    this.setState({bankState})
  }

  calculateDepositAmount (bankState) {
    let maxBankState = 5
    if (!bankState || bankState > maxBankState || bankState < 0) {
      return 0
    } else {
      return maxBankState - bankState
    }
  }

  updateInvestedAnmount = (amount) => {
    this.setState({
      investedAmount: this.state.investedAmount + amount
    })
  }

  //TODO Sort transactions by date
  render () {
    var {investedAmount} = this.state

    return (
      <ViewContainer>

        <View style={{position: 'relative', paddingTop: 30}}>

          <View style={styles.progressContainer}>
            <CircularProgressBank
              progress={investedAmount}
              hasBackground={false}
              size={67}
              width={5}
              backgroundColor={'#2740B6'}
              progressTextStyle={styles.progressText}
              totalTextStyle={styles.progressTotalText}/>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Build your Stack</Text>
            <Text style={styles.cardDetail}>Reach the $5 minimum with your spare-change to make a deposit, or you can
              press the button below to instantly reach the minimum limit.</Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => createOneTimeDepositPopup(this.calculateDepositAmount(this.state.bankState))}>
              <View style={styles.buttonContainer}>
                <Image
                  style={styles.buttonBackground}
                  resizeMode="stretch"
                  source={require('../../../assets/btn-blue.png')}/>
                <Text style={styles.buttonText}>
                  INVEST NOW
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.bodyContentContainerStyle}>

          <View style={styles.iconCardContainer}>
            <IconCardLarge
              color={'blue'}
              title={'+$0.60'}
              bodyTitle={'$89.40'}
              bodyText={'For sparkfun'}
              onPress={this.updateInvestedAnmount}/>
          </View>

          <View style={styles.iconCardContainer}>
            <IconCardLarge
              color={'green'}
              title={'+$0.60'}
              bodyTitle={'$89.40'}
              bodyText={'For sparkfun'}
              onPress={this.updateInvestedAnmount}/>
          </View>

          <View style={styles.iconCardContainer}>
            <IconCardLarge
              color={'violet'}
              title={'+$0.60'}
              bodyTitle={'$89.40'}
              bodyText={'For sparkfun'}
              onPress={this.updateInvestedAnmount}/>
          </View>

          {
            this.state.transactions.map((item, index) => (
              <View
                key={index}
                style={styles.iconCardContainer}>
                <IconCardLarge
                  color={'blue'}
                  title={'+$0.60'}
                  bodyTitle={'$89.40'}
                  bodyText={'For sparkfun'}
                  onPress={this.updateInvestedAnmount}/>
              </View>
            ))
          }
        </ScrollView>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 25,
    backgroundColor: '#304AC4',
    borderRadius: 8,
    padding: 20,
    paddingTop: 30,
    zIndex: -1
  },
  progressContainer: {
    position: 'absolute',
    right: 45,
    top: 5,
    backgroundColor: '#304AC4',
    borderRadius: 40,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  progressText: {
    fontSize: 14
  },
  progressTotalText: {
    fontSize: 11,
    color: constants.colorBlueSecondary2
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: constants.colorWhite,
    backgroundColor: 'transparent'
  },
  cardDetail: {
    marginTop: 12,
    marginBottom: 16,
    fontSize: 12,
    color: constants.colorBlueSecondary2,
    backgroundColor: 'transparent',
    lineHeight: 22
  },
  buttonContainer: {
    height: 51,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBackground: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  buttonText: {
    fontSize: 19,
    fontWeight: '700',
    color: constants.colorWhite,
    backgroundColor: 'transparent'
  },
  body: {
    width: '100%',
    marginTop: 15
  },
  bodyContentContainerStyle: {
    paddingHorizontal: 25
  },
  iconCardContainer: {
    marginBottom: 15
  }
})
