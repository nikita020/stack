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
import { Card, Icon, Button, Slider } from 'react-native-elements'
import GridLayout from 'react-native-layout-grid'
import Swiper from 'react-native-swiper'
import { windowWidth } from '../../constants'

export default class NumberPadWithdraw extends React.Component {

  changeValue (item) {
    var ex = /^\d*\.?\d{0,1}$/

    if (ex.test(this.state.value) && Math.floor(this.state.value).toString().length < 5 && this.state.value < 99999) {

      if (item.action == 'delete' && this.state.value.toString().length > 1) {
        this.setState({value: this.state.value.toString().substring(0, this.state.value.length - 1)})
      }
      else if (item.name == '' && (this.state.value.length == 1 || this.state.value == 0)) {
        this.setState({value: 0})
      }
      else if (this.state.value == 0 && (item.name != '.')) {
        this.setState({value: item.name})
      }
      else if (item.name == '.' && (`${this.state.value}`.includes('.') != true)) {
        this.setState({value: this.state.value + '.'})
      }
      else if (this.state.value > 0 && (item.name != '.') && (ex.test(this.state.value) != false)) {
        this.setState({value: `${this.state.value}` + `${item.name}`})
      }
    }
    else {

      if (item.action == 'delete' && this.state.value.toString().length > 1) {
        this.setState({value: this.state.value.toString().substring(0, this.state.value.length - 1)})
      }
    }
  }

//TODO SET UP WITHDRAW, PERCENTS AND CUSTOM AMOUNT

  changeValueRecurring (item) {
    if (item.name == '5%' && (this.state.estimatedBalance * .05) >= 5) {
      Alert.alert(
        'Great!',
        'Please confirm that you\'d like to withdraw 5%. ' + `(~$${(this.state.estimatedBalance * .05).toFixed(2).toLocaleString()})`,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'Confirm', onPress: () => console.log('Withdraw ' + `${item.name}`)},
        ],
        {cancelable: true}
      )
    }
    else if (item.name == '10%' && (this.state.estimatedBalance * .05) >= 5) {
      Alert.alert(
        'Great!',
        'Please confirm that you\'d like to withdraw 10%. ' + `(~$${(this.state.estimatedBalance * .1).toFixed(2).toLocaleString()})`,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'Confirm', onPress: () => console.log('Withdraw ' + `${item.name}`)},
        ],
        {cancelable: true}
      )
    }
    else if (item.name == '15%' && (this.state.estimatedBalance * .05) >= 5) {
      Alert.alert(
        'Great!',
        'Please confirm that you\'d like to withdraw 15%. ' + `(~$${(this.state.estimatedBalance * .15).toFixed(2).toLocaleString()})`,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'Confirm', onPress: () => console.log('Withdraw ' + `${item.name}`)},
        ],
        {cancelable: true}
      )
    }
    else if (item.name == '20%' && (this.state.estimatedBalance * .05) >= 5) {
      Alert.alert(
        'Great!',
        'Please confirm that you\'d like to withdraw 20%. ' + `(~$${(this.state.estimatedBalance * .2).toFixed(2).toLocaleString()})`,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'Confirm', onPress: () => console.log('Withdraw ' + `${item.name}`)},
        ],
        {cancelable: true}
      )
    }
    else if (item.name == '25%' && (this.state.estimatedBalance * .05) >= 5) {
      Alert.alert(
        'Great!',
        'Please confirm that you\'d like to withdraw 25%.' + `(~$${(this.state.estimatedBalance * .25).toFixed(2).toLocaleString()})`,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'Confirm', onPress: () => console.log('Withdraw ' + `${item.name}`)},
        ],
        {cancelable: true}
      )
    }
    else if (item.name == '30%' && (this.state.estimatedBalance * .05) >= 5) {
      Alert.alert(
        'Great!',
        'Please confirm that you\'d like to withdraw 30%.' + `(~$${(this.state.estimatedBalance * .3).toFixed(2).toLocaleString()})`,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'Confirm', onPress: () => console.log('Withdraw ' + `${item.name}`)},
        ],
        {cancelable: true}
      )
    }
    else {
      Alert.alert(
        'Sorry!',
        'Please choose a percentage of your balance higher than $5.',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        {cancelable: true}
      )
    }
  }

  setCustomWithdrawPercent () {
    if (this.state.valuePercent > 0 && this.state.valuePercent != 100 && (this.state.estimatedBalance * (this.state.valuePercent / 100)) > 5) {
      Alert.alert(
        'Great!',
        'Please confirm that you\'d like to withdraw ' + `${this.state.valuePercent}% ` + `(~$${(this.state.estimatedBalance * (this.state.valuePercent) / 100).toFixed(2).toLocaleString()})`,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {
            text: 'Confirm',
            onPress: () => console.log('Withdraw ' + `$${(this.state.estimatedBalance * (this.state.valuePercent) / 100).toFixed(2).toLocaleString()}`)
          },
        ],
        {cancelable: true}
      )
    }
    else if (this.state.valuePercent == 100) {
      Alert.alert(
        'Great!',
        'Please confirm that you\'d like to withdraw your whole balance. ' + `(~$${(this.state.estimatedBalance).toFixed(2).toLocaleString()})`,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {
            text: 'Confirm',
            onPress: () => console.log('Withdraw ' + `$${(this.state.estimatedBalance).toFixed(2).toLocaleString()}`)
          },
        ],
        {cancelable: true}
      )
    }
    else {
      Alert.alert(
        'Great!',
        'Please choose a percentage of your balance higher than $5.',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        {cancelable: true}
      )
    }
  }

  setCustomWithdraw () {
    if (this.state.value > this.state.estimatedBalance) {
      Alert.alert(
        'Sorry!',
        'Please enter a value lower than your current balance.',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        {cancelable: true}
      )
    }
    else if (this.state.value < 5) {
      Alert.alert(
        'Sorry!',
        'Please enter a value greater than $5',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        {cancelable: true}
      )
    }
    else {
      Alert.alert(
        'Great!',
        'Please confirm that you\'d like to withdraw ' + `$${this.state.value.toLocaleString()}`,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {
            text: 'Confirm',
            onPress: () => console.log('Withdraw ' + `~$${(this.state.estimatedBalance * (this.state.valuePercent) / 100).toFixed(2).toLocaleString()}`)
          },
        ],
        {cancelable: true}
      )
    }
  }

  renderGridItem = (item) => (
    <View>
      <Button
        buttonStyle={ styles.numberPadButtons }
        textStyle={ styles.numberPadButtonsText }
        title={ `${item.name}` }
        icon={ item.icon }
        onPress={ () => this.changeValue(item) }
      />
    </View>
  )

  renderGridItemRecurring = (item) => (
    <View>
      <Button
        buttonStyle={ styles.numberPadButtons }
        textStyle={ styles.numberPadButtonsTextSmall }
        title={ item.name }
        onPress={ () => this.changeValueRecurring(item) }
      />
    </View>
  )

  changeNumberPad () {
    this.refs.rSlide.scrollBy(1)
  }

  changeNormal () {
    this.refs.rSlide.scrollBy(-1)
  }

  constructor (props) {
    super(props)
    this.state = {
      value: 0,
      valuePercent: 50,
      selectedIndex: 1,
      estimatedBalance: 1232.42,
    }
    this.changeNumberPad = this.changeNumberPad.bind(this)
    this.changeNormal = this.changeNormal.bind(this)
    this.setCustomWithdrawPercent = this.setCustomWithdrawPercent.bind(this)
    this.setCustomWithdraw = this.setCustomWithdraw.bind(this)
  }

  render () {
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
      {name: '', icon: {name: 'backspace', color: '#2bbc7d', size: 30}, action: 'delete'}
    ]
    const itemsRecurring = [
      {name: '5%'},
      {name: '10%'},
      {name: '15%'},
      {name: '20%'},
      {name: '25%'},
      {name: '30%'},
    ]

    var x = this.state.estimatedBalance
    var intPart = Math.trunc(x)
    var intPartConvert = Number(Math.trunc(x)).toLocaleString()
    var floatPart = 100 * Number((x - intPart).toFixed(2))

    var formattedValue = parseFloat(this.state.value).toLocaleString()

    if (`${this.state.value}`.includes('.') == true && (this.state.value % 1 == 0)) {
      var formattedValue = formattedValue + '.'
    }
    else {
      var formattedValue = formattedValue
    }

    return (
      <ViewContainer>
        <Swiper
          style={ {flex: 1, width: windowWidth} }
          showsButtons={ false }
          showsPagination={ false }
          autoplay={ false }
          pagingEnabled={ true }
          horizontal={ false }
          bounces={ true }
          scrollEnabled={ false }
          loop={ false }
          ref={ 'rSlide' }
        >

          <View>
            <Card title="Withdraw" containerStyle={ styles.cardStyle } titleStyle={ styles.stackBoxTitle }
                  dividerStyle={ styles.divider }>
              <Text style={ styles.textBalance }>Your estimated balance is</Text>
              <Text style={ styles.balanceView }>
                <Text style={ styles.textBalanceCentValue }>$</Text>
                <Text style={ styles.textBalanceCentValue }>{ intPartConvert }</Text>
                <Text style={ styles.textBalanceCentValue }>.{ floatPart }</Text>
              </Text>
            </Card>
            <View style={ styles.gridView }>
              <Text style={ styles.textBalanceSmall }>Choose an amount to withdraw:</Text>
              <GridLayout
                scrollEnabled={ false }
                items={ itemsRecurring }
                itemsPerRow={ 3 }
                renderItem={ this.renderGridItemRecurring }
              />
            </View>


            <View style={ {justifyContent: 'space-between', height: '30%', marginTop: '5%'} }>
              <View>
                <View style={ {flex: 1, alignItems: 'stretch', justifyContent: 'center', marginBottom: '5%'} }>
                  <Slider
                    value={ this.state.valuePercent }
                    onValueChange={ (value) => this.setState({valuePercent: value}) }
                    maximumValue={ 100 }
                    step={ 1 }
                    minimumValue={ 1 }
                    animateTransitions={ true }
                    minimumTrackTintColor={ '#2bbc7d' }
                    thumbTintColor={ '#2bbc7d' }
                  />
                </View>
              </View>

              <Button
                fontFamily='Avenir'
                fontSize={ 20 }
                color='#ffffff'
                icon={ {name: 'file-upload', size: 25} }
                buttonStyle={ styles.button }
                onPress={ this.setCustomWithdrawPercent }
                title={ 'Withdraw ' + `${this.state.valuePercent}%` }/>
              <Button
                fontFamily='Avenir'
                fontSize={ 20 }
                color='#ffffff'
                icon={ {name: 'attach-money', size: 25} }
                buttonStyle={ styles.button }
                onPress={ this.changeNumberPad }
                title={ 'Custom Amount' }/>
            </View>
          </View>


          <View>
            <Card containerStyle={ styles.cardStyleNumberPad }>
              <Icon
                name='highlight-off'
                color='#2bbd7e'
                onPress={ this.changeNormal }
                containerStyle={ styles.exitButtonStyle }
                underlayColor='#212121'
              />
              <View style={ styles.numberPadValuePad }>
                <TextInput
                  editable={ false }
                  autoGrow={ true }
                  placeholder="0"
                  maxLength={ 6 }
                  placeholderTextColor='#2bbc7d'
                  underlineColorAndroid={ 'transparent' }
                  style={ styles.numberPadButtonsTextValue }
                  value={ `$${formattedValue}` }
                />
              </View>
            </Card>

            <ScrollView
              scrollEnabled={ false }
            >
              <View style={ styles.gridView }>
                <GridLayout
                  scrollEnabled={ false }
                  items={ items }
                  itemsPerRow={ 3 }
                  renderItem={ this.renderGridItem }
                />
              </View>
              <Button
                fontFamily='Avenir'
                fontSize={ 20 }
                color='#ffffff'
                icon={ {name: 'file-upload', size: 25} }
                onPress={ this.setCustomWithdraw }
                buttonStyle={ (this.state.value > this.state.estimatedBalance || this.state.value < 5) ? styles.disabled : styles.button }
                title={ ('Withdraw ' + `$${formattedValue}`) }/>
              <Text style={ styles.textBalanceSmall }> Your current estimated balance is
                ${ this.state.estimatedBalance }. </Text>

            </ScrollView>
          </View>

        </Swiper>
      </ViewContainer>
    )
  }
}
