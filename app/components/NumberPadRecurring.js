import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert,
  Dimensions
} from 'react-native'
import ViewContainer from './ViewContainer'
import { styles } from './styles'
import firebase from 'react-native-firebase'
import { Card, Icon, Button, ButtonGroup } from 'react-native-elements'
import GridLayout from 'react-native-layout-grid'
import GridView from 'react-native-super-grid'
import Swiper from 'react-native-swiper'

import CustomButton from '../components/Button'
import * as constants from '../../constants'
import { createRecurringDepositPopup } from '../lib/invest'

const {width: SCREEN_WIDTH} = Dimensions.get('window')

export default class NumberPadRecurring extends Component {
  changeValue (item) {
    var ex = /^\d*\.?\d{0,1}$/
    if (ex.test(this.state.value) && Math.floor(this.state.value).toString().length < 5 && this.state.value < 99999) {

      if (item.action === 'delete' && this.state.value.toString().length > 1) {
        this.setState({value: this.state.value.toString().substring(0, this.state.value.length - 1)})
      }
      else if (item.name === '' && (this.state.value.length === 1 || this.state.value === 0)) {
        this.setState({value: 0})
      }
      else if (this.state.value === 0 && (item.name !== '.')) {
        this.setState({value: item.name})
      }
      else if (item.name === '.' && (`${this.state.value}`.includes('.') !== true)) {
        this.setState({value: this.state.value + '.'})
      }
      else if (this.state.value > 0 && (item.name !== '.') && (ex.test(this.state.value) !== false)) {
        this.setState({value: `${this.state.value}` + `${item.name}`})
      }
    } else {

      if (item.action == 'delete' && this.state.value.toString().length > 1) {
        this.setState({value: this.state.value.toString().substring(0, this.state.value.length - 1)})
      }
    }
  }

  changeValueRecurring (item) {
    createRecurringDepositPopup(item.name.substring(1), 'weekly'),
      this.setState({
        selectedItem: item
      })
  }

  setCustomRecurringInvestment () {
    if (this.state.value < 5) {
      Alert.alert(
        'Sorry!',
        'Please enter a value greater than $5.',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        {cancelable: true}
      )
    }
    else {
      createRecurringDepositPopup(parseFloat(this.state.value), this.state.recurringFrequencyNew)
    }
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
    switch (selectedIndex) {
      case 0:
        this.setState({recurringFrequencyNew: 'daily'})
        break
      case 1:
        this.setState({recurringFrequencyNew: 'weekly'})
        break
      case 2:
        this.setState({recurringFrequencyNew: 'monthly'})
        break
    }
  }

  renderGridItem = (item) => (
    <View>
      <Button
        buttonStyle={styles.numberPadButtons}
        textStyle={styles.numberPadButtonsText}
        title={`${item.name}`}
        icon={item.icon}
        onPress={() => this.changeValue(item)}
      />
    </View>
  )

  renderGridItemRecurring = (item) => (
    <TouchableOpacity key={item.name + this.state.selectedItem} onPress={() => this.changeValueRecurring(item)}>
      <View
        style={[styles.numberPadButtonsSquare, item.name == this.state.selectedItem.name ? styles.numberPadButtonsSquareSelected : {}]}>
        <Text
          style={[styles.numberPadButtonsSquareText, item.name == this.state.selectedItem.name ? styles.numberPadButtonsSquareTextSelected : {}]}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )

  cancelRecurring () {
    Alert.alert(
      'Are you sure?',
      'Please confirm that you\'d like to cancel your recurring investments.',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Confirm', onPress: () => this.setState({recurringAmount: 0})},
      ],
      {cancelable: true}
    )
  }

  recurringStatement = () => {
    var formattedValue = parseFloat(this.state.recurringAmount).toLocaleString().toUpperCase()
    if (this.state.recurringAmount === 0) {
      return (
        <View style={{paddingVertical: 35}}>
          <Text style={styles.textVioletSmall}>(You do not currently have a recurring investment set.)</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.stackBoxTextContainer}>
          <Text style={styles.textVioletSmall}>(You currently have a recurring investment of
            ${formattedValue} {this.state.recurringFrequency}.)</Text>
          <TouchableOpacity
            onPress={this.cancelRecurring}
          >
            <Text style={styles.textVioletSmall}>Cancel recurring investment</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  changeNumberPad () {
    this.setState({
      step: 1
    })
    this.props.navigation.setParams({numpad: true})
  }

  changeNormal () {
    this.setState({
      step: 0
    })
    this.props.navigation.setParams({numpad: false})
  }

  constructor (props) {
    super(props)
    this.state = {
      value: 0,
      selectedIndex: 1,
      selectedItem: {name: '$5'},
      recurringAmount: 0,
      recurringFrequency: 'weekly',
      recurringFrequencyNew: 'weekly',
      step: 0,
    }
    this.updateIndex = this.updateIndex.bind(this)
    this.recurringStatement = this.recurringStatement.bind(this)
    this.cancelRecurring = this.cancelRecurring.bind(this)
    this.changeNumberPad = this.changeNumberPad.bind(this)
    this.changeNormal = this.changeNormal.bind(this)
    this.setCustomRecurringInvestment = this.setCustomRecurringInvestment.bind(this)
  }

  render () {
    console.log(this.props)
    const buttons = ['Daily', 'Weekly', 'Monthly']
    const {selectedIndex} = this.state
    const items = [
      {name: 1},
      {name: 2},
      {name: 3},
      {name: 4},
      {name: 5},
      {name: 6},
      {name: 7},
      {name: 8},
      {name: 9},
      {name: '.'},
      {name: 0},
      {name: '', icon: {name: 'backspace', color: 'white', size: 40}, action: 'delete'}
    ]
    const itemsRecurring = [
      {name: '$5'},
      {name: '$10'},
      {name: '$15'},
      {name: '$20'},
      {name: '$25'},
      {name: '$30'},
    ]

    var formattedValue = parseFloat(this.state.value).toLocaleString()

    if (`${this.state.value}`.includes('.') === true && (this.state.value % 1 === 0)) {
      var formattedValue = formattedValue + '.'
    }
    else {
      var formattedValue = formattedValue
    }

    return (
      <ViewContainer>
        {
          this.state.step === 0
            ?
            <ScrollView style={localStyles.recurringContainer}>
              <View style={localStyles.card}>
                <Text style={localStyles.cardPrimaryText}>Set a recurring deposit</Text>
                <Text style={localStyles.cardSecondaryText}>Even five dollars a month can go a long way, set up a
                  recurring deposit to help build your stack!</Text>
              </View>

              <View style={{paddingHorizontal: 15, marginTop: 35, marginBottom: 8}}>
                <Text style={localStyles.headingText}>Choose an amount to invest weekly:</Text>
                <GridView
                  fixed={true}
                  itemDimension={(SCREEN_WIDTH - 70) / 3}
                  items={itemsRecurring}
                  renderItem={this.renderGridItemRecurring}
                />

              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: constants.windowWidth * 0.05
                }}>
                <CustomButton
                  style={styles.vw90}
                  onPress={this.changeNumberPad}
                  title={'CUSTOM AMOUNT'}
                />
              </View>
              <this.recurringStatement/>
            </ScrollView>
            :
            <View style={{flex: 1, width: constants.windowWidth}}>
              <View style={{
                position: 'relative',
                height: constants.windowHeight * 0.2 + 25
              }}>
                <View style={[styles.cardStyleNumberPadBlue, {
                  alignItems: 'center', justifyContent: 'center',
                  width: constants.windowWidth,
                  height: constants.windowHeight * 0.2, zIndex: 0, margin: 0
                }]}>
                  <TextInput
                    editable={false}
                    autoGrow={true}
                    placeholder="0"
                    maxLength={6}
                    placeholderTextColor='#2bbc7d'
                    style={styles.numberPadButtonsTextValue}
                    value={'$' + `${formattedValue}`}
                  />
                </View>
                <TouchableOpacity
                  style={styles.numberPadExitButtonStyle}
                  onPress={this.changeNormal}>
                  <Image
                    style={localStyles.crossIcon}
                    resizeMode="contain"
                    source={require('../assets/cross.png')}
                  />
                </TouchableOpacity>

                <ButtonGroup
                  containerStyle={localStyles.buttonGroupNumberPad}
                  containerBorderRadius={7}
                  selectedButtonStyle={localStyles.buttonGroupSelectedButton}
                  selectedTextStyle={localStyles.buttonGroupSelectedText}
                  textStyle={localStyles.buttonGroupText}
                  innerBorderStyle={localStyles.buttonGroupInnerBorder}
                  onPress={this.updateIndex}
                  selectedIndex={selectedIndex}
                  buttons={buttons}
                />
              </View>

              <ScrollView
                scrollEnabled={false}>
                <View style={[styles.gridView, styles.gridViewNumberPad]}>
                  <GridLayout
                    scrollEnabled={false}
                    items={items}
                    itemsPerRow={3}
                    renderItem={this.renderGridItem}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: constants.windowWidth * 0.05
                  }}>
                  <CustomButton
                    style={styles.vw90}
                    btnBlue
                    onPress={this.setCustomRecurringInvestment}
                    title={'INVEST ' + '$' + `${formattedValue}` + ` ${this.state.recurringFrequencyNew.toUpperCase()}`}
                  />
                </View>
              </ScrollView>
            </View>
        }
      </ViewContainer>
    )
  }
}

const localStyles = StyleSheet.create({
  recurringContainer: {
    flex: 1
  },
  card: {
    marginTop: 28,
    marginHorizontal: 25,
    backgroundColor: constants.headerColorViolet,
    paddingHorizontal: 15,
    paddingVertical: 28,
    borderRadius: 5
  },
  cardPrimaryText: {
    fontSize: 20,
    fontWeight: '600',
    color: constants.colorWhite,
    marginBottom: 8
  },
  cardSecondaryText: {
    fontSize: 13,
    lineHeight: 19,
    color: constants.colorVioletSecondary2
  },
  headingText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '600',
    color: constants.colorWhite,
    textAlign: 'center',
    marginBottom: 14
  },
  crossIcon: {
    height: 22,
    width: 22,
    tintColor: 'white'
  },
  buttonGroupNumberPad: {
    position: 'absolute',
    height: 41,
    backgroundColor: constants.colorBluePrimary,
    borderWidth: 0,
    margin: 0,
    marginHorizontal: 15,
    bottom: 0,
    right: 30,
    left: 30,
    borderRadius: 7,
    zIndex: 10
  },
  buttonGroupSelectedButton: {
    backgroundColor: constants.colorWhite
  },
  buttonGroupSelectedText: {
    color: constants.colorBlueSecondary1,
    fontWeight: '600'
  },
  buttonGroupText: {
    color: constants.colorBlueSecondary2,
    fontWeight: '600'
  },
  buttonGroupInnerBorder: {
    color: constants.colorBluePrimary
  },
  buttonTitleStyle: {
    fontWeight: '700'
  }
})
