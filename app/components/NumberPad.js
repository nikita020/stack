import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native'
import ViewContainer from './ViewContainer'
import { styles } from './styles'
import firebase from 'react-native-firebase'
import { Card, Icon, Button, CheckBox } from 'react-native-elements'
import CustomButton from '../components/Button'
import GridLayout from 'react-native-layout-grid'
import { createOneTimeDepositPopup } from '../lib/invest'
import * as constants from '../../constants'

export default class NumberPad extends React.Component {

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

      if (item.action === 'delete' && this.state.value.toString().length > 1) {
        this.setState({value: this.state.value.toString().substring(0, this.state.value.length - 1)})
      }
    }

  }

  //TODO ADD ONETIME DEPOSIT feature

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

  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
    this.setCustomDeposit = this.setCustomDeposit.bind(this)
  }

  setCustomDeposit () {
    if (this.state.value > 5000) {
      Alert.alert(
        'Sorry!',
        'Please enter a value lower than $5,000.',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        {cancelable: true}
      )
    } else if (this.state.value < 5) {
      Alert.alert(
        'Sorry!',
        'Please enter a value greater than $5.',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        {cancelable: true}
      )
    } else {
      createOneTimeDepositPopup(this.state.value)
    }
  }

  render () {
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
      {name: '', icon: {name: 'backspace', color: constants.colorWhite, size: 40}, action: 'delete'}
    ]

    var formattedValue = parseFloat(this.state.value).toLocaleString().toUpperCase()

    if (`${this.state.value}`.includes('.') == true && (this.state.value % 1 == 0)) {
      var formattedValue = formattedValue + '.'
    } else {
      var formattedValue = formattedValue
    }

      return(
        <ViewContainer>
          <Card containerStyle={styles.cardStyleNumberPad}>
            <View style={styles.numberPadValuePad}>
              <TextInput
                editable = {false}
                autoGrow={true}
                placeholder="0"
                maxLength={6}
                placeholderTextColor='#2bbc7d'
                underlineColorAndroid={'transparent'}
                style={styles.numberPadButtonsTextValue}
                value={'$' + `${formattedValue}`}
                />
            </View>
          </Card>

        <ScrollView
          scrollEnabled={false}
        >
          <View style={[styles.gridView, {paddingTop: 56, marginBottom: 20}]}>
            <GridLayout
              scrollEnabled={false}
              items={items}
              itemsPerRow={3}
              renderItem={this.renderGridItem}
            />
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: constants.windowWidth * 0.05}}>
            <CustomButton
              onPress={this.setCustomDeposit}
              style={styles.vw90}
              title={'INVEST ' + '$' + `${formattedValue}` + ' NOW'}/>
          </View>
        </ScrollView>

      </ViewContainer>
    )
  }
}
