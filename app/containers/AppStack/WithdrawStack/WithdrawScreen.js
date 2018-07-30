import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Image,
  Platform
} from 'react-native'
import ViewContainer from '../../../components/ViewContainer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from '../../../components/styles'
import Slider from '../../../components/SliderCustomUp'
import GridLayout from 'react-native-layout-grid'
import Swiper from 'react-native-swiper'
import Button from '../../../components/Button'
import NumberPadCustom from '../../../components/NumberPadCustom'

import {
  headerColorDarkBlue, colorViolet3, windowWidth, colorWhite, colorViolet6,
  colorOpacity, colorViolet4
} from '../../../../constants'
import ScrollContainer from '../../../components/ScrollContainer'

export default class WithdrawScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Withdraw',
    headerStyle: [styles.headerStyle, {
      backgroundColor: navigation.state.params && navigation.state.params.normal
        ? headerColorDarkBlue
        : !navigation.state.params
          ? headerColorDarkBlue
          : colorViolet4
    }]
  })

  constructor (props) {
    super(props)
    this.state = {
      value: 0,
      valuePercent: 50,
      selectedIndex: 1,
      estimatedBalance: 1232.42,
      currentBtn: ''
    }
    this.changeNumberPad = this.changeNumberPad.bind(this)
    this.changeNormal = this.changeNormal.bind(this)
    this.setCustomWithdrawPercent = this.setCustomWithdrawPercent.bind(this)
    this.setCustomWithdraw = this.setCustomWithdraw.bind(this)
  }

  changeValue = (item) => {
    let ex = /^\d*\.?\d{0,1}$/

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
    }
    else {

      if (item.action === 'delete' && this.state.value.toString().length > 1) {
        this.setState({value: this.state.value.toString().substring(0, this.state.value.length - 1)})
      }
    }
  }

//TODO SET UP WITHDRAW, PERCENTS AND CUSTOM AMOUNT

  changeValueRecurring (item) {
    if (item.name === '5%' && (this.state.estimatedBalance * .05) >= 5) {
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
    else if (item.name === '10%' && (this.state.estimatedBalance * .05) >= 5) {
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
    else if (item.name === '15%' && (this.state.estimatedBalance * .05) >= 5) {
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
    else if (item.name === '20%' && (this.state.estimatedBalance * .05) >= 5) {
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
    else if (item.name === '25%' && (this.state.estimatedBalance * .05) >= 5) {
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
    else if (item.name === '30%' && (this.state.estimatedBalance * .05) >= 5) {
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
    if (this.state.valuePercent > 0 && this.state.valuePercent !== 100 && (this.state.estimatedBalance * (this.state.valuePercent / 100)) > 5) {
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
    else if (this.state.valuePercent === 100) {
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

  renderGridItemRecurring = (item) => (
    <TouchableOpacity onPress={ () => {
      this.setState({
        currentBtn: item.name !== this.state.currentBtn ? item.name : ''
      })
      this.changeValueRecurring(item)
    } }>
      <View style={ [styles.buttonWithdraw, {
        width: ((windowWidth * 0.9) - 30) / 3,
        height: (((windowWidth * 0.9) - 30) / 3) * 0.9,
        backgroundColor: this.state.currentBtn === item.name ? colorWhite : colorViolet6
      }] }>
        <Text
          style={ [styles.numberPadButtonsTextOpacitySmall, {color: this.state.currentBtn === item.name ? headerColorDarkBlue : colorOpacity}] }>{ item.name }</Text>
      </View>
    </TouchableOpacity>
  )

  changeNumberPad () {
    this.refs.rSlide.scrollBy(1)
    this.props.navigation.setParams({
      normal: false
    })
  }

  changeNormal () {
    this.refs.rSlide.scrollBy(-1)
    this.props.navigation.setParams({
      normal: true
    })
  }

  render () {
    const itemsRecurring = [
      {name: '5%'},
      {name: '10%'},
      {name: '15%'},
      {name: '20%'},
      {name: '25%'},
      {name: '30%'},
    ]

    let x = this.state.estimatedBalance
    let intPart = Math.trunc(x)
    let intPartConvert = Number(Math.trunc(x)).toLocaleString()
    let floatPart = 100 * Number((x - intPart).toFixed(2))

    let formattedValue = parseFloat(this.state.value).toLocaleString()

    if (`${this.state.value}`.includes('.') === true && (this.state.value % 1 === 0)) {
      let formattedValue = formattedValue + '.'
    }
    else {
      let formattedValue = formattedValue
    }

    return (
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
        <ViewContainer>
          <View style={ {flex: 1, alignItems: 'center', alignContent: 'stretch'} }>
            <View style={ [styles.withdrawHeader, {backgroundColor: headerColorDarkBlue}] }>
              <Text style={ styles.textOpacity }>Your estimated balance</Text>
              <Text style={ styles.textWhiteBig }>${ intPartConvert }<Text
                style={ styles.textOpacityBig }>.{ floatPart }</Text></Text>
            </View>
            <ScrollContainer style={ {...styles.backgroundTransparent, paddingBottom: 40} }>
              <Text style={ [styles.textWhite, {paddingVertical: 25}] }>Choose an amount to withdraw:</Text>
              <View style={ [styles.vw90, {paddingBottom: 30}] }>
                <GridLayout
                  scrollEnabled={ false }
                  items={ itemsRecurring }
                  itemsPerRow={ 3 }
                  renderItem={ this.renderGridItemRecurring }
                />
                <View style={ [styles.vw90, {marginBottom: 10, marginTop: 10,}] }>
                  <Slider
                    value={ this.state.valuePercent }
                    onValueChange={ (value) => this.setState({valuePercent: value}) }
                    maximumValue={ 100 }
                    step={ 1 }
                    onSlidingStart={ this.startSlider }
                    onSlidingComplete={ this.endSlider }
                    minimumValue={ 0 }
                    animateTransitions={ true }
                    minimumTrackTintColor={ colorViolet4 }
                    minimumTrackStyle={ {backgroundColor: colorViolet4} }
                    thumbTintColor={ 'transparent' }
                    style={ {position: 'relative'} }
                    trackStyle={ {height: 40, borderRadius: 6} }
                    thumbStyle={ {width: 172 / 265 * 74, height: 74, position: 'absolute', bottom: 0} }
                    thumbImage={ require('../../../assets/stack-golden-slide-up.png') }
                    thumbImageMax={ require('../../../assets/stack-golden-slide-up.png') }
                    text={ '$950' }
                    textInto={ this.state.valuePercent + '%' }
                    textStyle={ {
                      position: 'absolute',
                      right: 0,
                      top: 7,
                      width: (172 / 265 * 74),
                      color: colorWhite,
                      fontWeight: '500',
                      fontFamily: 'Avenir',
                      fontSize: 12,
                      textAlign: 'center'
                    } }
                    textIntoStyle={ {
                      position: 'absolute',
                      right: 0,
                      bottom: Platform.OS === 'ios' ? 0 : 10,
                      width: (172 / 265 * 74),
                      color: colorWhite,
                      fontWeight: '500',
                      fontFamily: 'Avenir',
                      lineHeight: 40,
                      height: 40,
                      fontSize: 14,
                      textAlign: 'center'
                    } }
                    thumbTouchSize={ {
                      width: (172 / 265 * 74),
                      height: 74
                    } }
                  />
                </View>
                <Button
                  style={ styles.vw90 }
                  btnBlue={ true }
                  onPress={ this.setCustomWithdrawPercent }
                  title={ 'WITHDRAW ' + `${this.state.valuePercent}%` }
                />
              </View>

              <TouchableOpacity onPress={ this.changeNumberPad }>
                <Text style={ styles.textViolet }>Custom Amount</Text>
              </TouchableOpacity>

            </ScrollContainer>
          </View>
          <Image style={ styles.backgroundBottom } source={ require('../../../assets/bgr-bottom-2.png') }
                 resizeMode={ 'contain' }/>
        </ViewContainer>

        <ViewContainer>
          <View style={ {flex: 1, alignItems: 'center', alignContent: 'stretch'} }>
            <View style={ [styles.withdrawHeader, {backgroundColor: colorViolet4, position: 'relative'}] }>
              <TouchableOpacity style={ [styles.modalOpacityCloseBtn, {top: 20}] } onPress={ this.changeNormal }>
                <Ionicons name={ 'md-close' } size={ 30 } color={ colorWhite }/>
              </TouchableOpacity>
              <Text style={ styles.textWhiteBig }>${ formattedValue }</Text>
            </View>

            <ScrollContainer style={ {...styles.backgroundTransparent, paddingBottom: 40} }>
              <View style={ [styles.vw100, {paddingVertical: 20}] }>
                <NumberPadCustom changeValue={this.changeValue}/>
              </View>
              <Button
                style={ styles.vw90 }
                btnBlue={ true }
                title={ 'WITHDRAW ' + `$${formattedValue}` }
                onPress={ this.setCustomWithdraw }
              />
              <Text style={ [styles.vw90, styles.textOpacity, {marginTop: 30}] }>Your current</Text>
              <Text style={ [styles.vw90, styles.textOpacity, {marginTop: 5}] }>estimated balance is <Text style={styles.textWhite}>${ this.state.estimatedBalance }</Text></Text>

            </ScrollContainer>
          </View>
          <Image style={ styles.backgroundBottom } source={ require('../../../assets/bgr-bottom-2.png') }
                 resizeMode={ 'contain' }/>
        </ViewContainer>

      </Swiper>
    )
  }
}
