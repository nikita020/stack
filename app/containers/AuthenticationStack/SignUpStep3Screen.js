import React, { Component } from 'react'
import {
  Text,
  View,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  Platform
} from 'react-native'
import SelectInput from 'react-native-select-input-ios'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Moment from 'moment'

import ScrollContainer from '../../components/ScrollContainer'
import { styles } from '../../components/styles'
import Button from '../../components/Button'
import * as constants from '../../../constants'

export default class SignUpStep3Screen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      chosenDate: Moment().format('dddd, Do [of] MMMM, YYYY'),
      phoneNumber: '',
      addressLineOne: '',
      addressLineTwo: '',
      city: '',
      state: '',
      zipCode: '',
      isDateTimePickerVisible: false
    }
    this.setDate = this.setDate.bind(this)
    this._showDateTimePicker = this._showDateTimePicker.bind(this)
    this._hideDateTimePicker = this._hideDateTimePicker.bind(this)
    this._handleDatePicked = this._handleDatePicked.bind(this)
    this._focusPicker = this._focusPicker.bind(this)
  }

  _showDateTimePicker () {
    Keyboard.dismiss()
    this.setState({isDateTimePickerVisible: true})
  }

  _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false})

  _handleDatePicked = (date) => {
    var stringDate = Moment(date).format('dddd, Do [of] MMMM, YYYY')
    this.setState({chosenDate: stringDate})
    this._hideDateTimePicker()
  }

  setDate (newDate) {
    this.setState({chosenDate: newDate})
  };

  onSubmitEditingState (value) {
    this.setState({
      state: value
    })
  };

  _focusPicker () {
    Keyboard.dismiss()
    this.refs.rPicker.focus()
  }

  getPickerOptions () {
    return [
      {value: 'Alabama', label: 'Alabama'},
      {value: 'Alaska', label: 'Alaska'},
      {value: 'Alaska', label: 'Alaska'},
      {value: 'Alaska', label: 'Alaska'},
      {value: 'Alaska', label: 'Alaska'},
      {value: 'Colorado', label: 'Colorado'},
      {value: 'Connecticut', label: 'Connecticut'},
      {value: 'Delaware', label: 'Delaware'},
      {value: 'Florida', label: 'Florida'},
      {value: 'Georgia', label: 'Georgia'},
      {value: 'Hawaii', label: 'Hawaii'},
      {value: 'Idaho', label: 'Idaho'},
      {value: 'Illinois', label: 'Illinois'},
      {value: 'Indiana', label: 'Indiana'},
      {value: 'Iowa', label: 'Iowa'},
      {value: 'Kansas', label: 'Kansas'},
      {value: 'Kentucky', label: 'Kentucky'},
      {value: 'Louisiana', label: 'Louisiana'},
      {value: 'Maine', label: 'Maine'},
      {value: 'Maryland', label: 'Maryland'},
      {value: 'Massachusetts', label: 'Massachusetts'},
      {value: 'Michigan', label: 'Michigan'},
      {value: 'Minnesota', label: 'Minnesota'},
      {value: 'Mississipi', label: 'Mississipi'},
      {value: 'Missouri', label: 'Missouri'},
      {value: 'Montana', label: 'Montana'},
      {value: 'Nebraska', label: 'Nebraska'},
      {value: 'Nevada', label: 'Nevada'},
      {value: 'New Hampshire', label: 'New Hampshire'},
      {value: 'New Jersey', label: 'New Jersey'},
      {value: 'New Mexico', label: 'New Mexico'},
      {value: 'New York', label: 'New York'},
      {value: 'North Carolina', label: 'North Carolina'},
      {value: 'North Dakota', label: 'North Dakota'},
      {value: 'Ohio', label: 'Ohio'},
      {value: 'Oklahoma', label: 'Oklahoma'},
      {value: 'Oregon', label: 'Oregon'},
      {value: 'Pennsylvania', label: 'Pennsylvania'},
      {value: 'Rhode Island', label: 'Rhode Island'},
      {value: 'South Carolina', label: 'South Carolina'},
      {value: 'South Dakota', label: 'South Dakota'},
      {value: 'Tennessee', label: 'Tennessee'},
      {value: 'Texas', label: 'Texas'},
      {value: 'Utah', label: 'Utah'},
      {value: 'Vermont', label: 'Vermont'},
      {value: 'Virginia', label: 'Virginia'},
      {value: 'Washington', label: 'Washington'},
      {value: 'West Virginia', label: 'West Virginia'},
      {value: 'Wisconson', label: 'Wisconson'},
      {value: 'Wyoming', label: 'Wyoming'},
      {value: 'American Samoa', label: 'American Samoa'},
      {value: 'District of Colombia', label: 'District of Colombia'},
      {value: 'Federated States of Micronesia', label: 'Federated States of Micronesia'},
      {value: 'Guam', label: 'Guam'},
      {value: 'Marshall Islands', label: 'Marshall Islands'},
      {value: 'Northern Mariana Islands', label: 'Northern Mariana Islands'},
      {value: 'Palau', label: 'Palau'},
      {value: 'Puerto Rico', label: 'Puerto Rico'},
      {value: 'Virgin Islands', label: 'Virgin Islands'},
    ]
  }

  renderContent = () => {
    let today = new Date()
    const {onChangeInput, submitDisabled} = this.props
    return (
      <ScrollContainer>
        <Image style={[styles.imgContain, {height: 1169 / 1125 * constants.windowWidth}]}
               source={require('../../assets/sign-up-3-bgr.png')}/>
        <View style={[styles.containerCenter, {marginBottom: constants.windowWidth * 0.3}]}>
          <TextInput
            style={styles.input}
            placeholder={'First Name'}
            placeholderTextColor={constants.colorViolet1}
            keyboardAppearance='dark'
            returnKeyType='next'
            autoCapitalize='none'
            underlineColorAndroid={'transparent'}
            autoCorrect={false}
            spellCheck={false}
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={(text) => onChangeInput({firstName: text})}
          />
          <TextInput
            style={styles.input}
            placeholder={'Last Name'}
            placeholderTextColor={constants.colorViolet1}
            keyboardAppearance='dark'
            returnKeyType='next'
            autoCapitalize='none'
            autoCorrect={false}
            spellCheck={false}
            // autoFocus={ true }
            underlineColorAndroid={'transparent'}
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={(text) => onChangeInput({lastName: text})}
          />
          <TextInput
            style={styles.input}
            placeholder={'Birthday'}
            placeholderTextColor={constants.colorViolet1}
            value={this.state.chosenDate}
            onFocus={this._showDateTimePicker}
            caretHidden={true}
            underlineColorAndroid={'transparent'}
          />
          <TextInput
            style={styles.input}
            placeholder={'Phone Number'}
            placeholderTextColor={constants.colorViolet1}
            keyboardAppearance='dark'
            returnKeyType='next'
            autoCapitalize='none'
            autoCorrect={false}
            spellCheck={false}
            keyboardType={'number-pad'}
            underlineColorAndroid={'transparent'}
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={(text) => this.setState({phoneNumber: text})}
          />
          <TextInput
            style={styles.input}
            placeholder={'Address Line One'}
            placeholderTextColor={constants.colorViolet1}
            keyboardAppearance='dark'
            returnKeyType='next'
            autoCapitalize='none'
            autoCorrect={false}
            spellCheck={false}
            underlineColorAndroid={'transparent'}
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={(text) => this.setState({addressLineOne: text})}
          />
          <TextInput
            style={styles.input}
            placeholder={'Address Line Two'}
            placeholderTextColor={constants.colorViolet1}
            keyboardAppearance='dark'
            returnKeyType='next'
            autoCapitalize='none'
            autoCorrect={false}
            underlineColorAndroid={'transparent'}
            spellCheck={false}
            // autoFocus={ true }
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={(text) => this.setState({addressLineTwo: text})}
          />
          <TextInput
            style={styles.input}
            placeholder={'City'}
            placeholderTextColor={constants.colorViolet1}
            keyboardAppearance='dark'
            returnKeyType='next'
            autoCapitalize='none'
            autoCorrect={false}
            spellCheck={false}
            underlineColorAndroid={'transparent'}
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={(text) => this.setState({city: text})}
          />
          <TextInput
            style={styles.input}
            placeholder={'State'}
            placeholderTextColor={constants.colorViolet1}
            onFocus={this._focusPicker}
            caretHidden={true}
            value={this.state.state}
            underlineColorAndroid={'transparent'}
          />
          <TextInput
            style={styles.input}
            placeholder={'ZIP code'}
            placeholderTextColor={constants.colorViolet1}
            keyboardAppearance='dark'
            returnKeyType='next'
            autoCapitalize='none'
            autoCorrect={false}
            spellCheck={false}
            onSubmitEditing={Keyboard.dismiss}
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({zipCode: text})}
          />

          <Button
            onPress={() => this.props.onSubmit()}
            disabled={submitDisabled}
            title='SUBMIT'
          />
        </View>
        <SelectInput
          ref={'rPicker'}
          value={this.state.state}
          options={this.getPickerOptions()}
          onCancelEditing={() => console.log('onCancel')}
          onSubmitEditing={this.onSubmitEditingState.bind(this)}
          labelStyle={{color: '#303030'}}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          cancelTextStyle={{color: '#FF5252'}}
          confirmTextStyle={{color: '#2bbc7d'}}
          titleIOS={'Choose your date of birth'}
          titleStyle={{color: '#2bbc7d'}}
          maximumDate={today}
        />
        <Image style={styles.backgroundBottom} source={require('../../assets/bgr-bottom-1.png')}
               resizeMode={'contain'}/>
      </ScrollContainer>
    )
  }

  render () {
    if (Platform.OS === 'ios')
      return (
        <KeyboardAvoidingView style={[styles.vw100, {flex: 1}]} behavior="padding">
          {this.renderContent()}
        </KeyboardAvoidingView>
      )
    return this.renderContent()
  }
}
