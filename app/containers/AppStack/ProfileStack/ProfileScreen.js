import React, { Component } from 'react'
import {
  View,
  ScrollView,
  DatePickerIOS,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  Image,
  Text
} from 'react-native'
import ViewContainer from '../../../components/ViewContainer'
import { FormInput, FormLabel, FormValidationMessage, Icon } from 'react-native-elements'
import { styles } from '../../../components/styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Moment from 'moment'
import SelectInput from 'react-native-select-input-ios'
import Emoji from '@ardentlabs/react-native-emoji'

import Button from '../../../components/Button'
import { colorViolet, colorWhite, windowHeight, windowWidth } from '../../../../constants'

export default class ProfileScreen extends Component {

//TODO Link to firebase, clean some stuff

  constructor (props) {
    super(props)
    this.state = {
      firstName: 'Tu',
      lastName: 'Doan',
      chosenDate: Moment().format('dddd, Do [of] MMMM, YYYY'),
      phoneNumber: '2542896009',
      addressLineOne: '700 Lavaca',
      addressLineTwo: 'STE 1400',
      city: 'Austin',
      state: 'Texas',
      zipCode: '78701',
      isDateTimePickerVisible: false,
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

  render () {
    let today = new Date()
    console.log(this.props)
    return (
      <KeyboardAwareScrollView
        style={{flex: 1, width: windowWidth, backgroundColor: colorViolet}}>
        <ViewContainer style={{paddingTop: windowHeight * 0.05, paddingBottom: windowHeight * 0.1}}>
          <View style={{marginBottom: 15}}>
            <Text style={styles.labelInput}>First Name</Text>
            <TextInput
              style={[styles.input, {color: colorWhite}]}
              onChangeText={(text) => this.setState({firstName: text})}
              autoCapitalize={'words'}
              underlineColorAndroid={'transparent'}
              autoCorrect={false}
              value={this.state.firstName}/>
          </View>

          <View style={{marginBottom: 15}}>
            <Text style={styles.labelInput}>Last Name</Text>
            <TextInput
              style={[styles.input, {color: colorWhite}]}
              autoCapitalize={'words'}
              autoCorrect={false}
              underlineColorAndroid={'transparent'}
              onChangeText={(text) => this.setState({lastName: text})}
              value={this.state.lastName}/>
          </View>

          <View style={{marginBottom: 15}}>
            <Text style={styles.labelInput}>Birthday</Text>
            <TextInput
              style={[styles.input, {color: colorWhite}]}
              value={this.state.chosenDate}
              onFocus={this._showDateTimePicker}
              underlineColorAndroid={'transparent'}
              caretHidden={true}
            />
          </View>

          <View style={{marginBottom: 15}}>
            <Text style={styles.labelInput}>Phone Number</Text>
            <TextInput
              style={[styles.input, {color: colorWhite}]}
              value={this.state.phoneNumber}
              underlineColorAndroid={'transparent'}
              onChangeText={(text) => this.setState({phoneNumber: text})}
              keyboardType={'phone-pad'}/>
          </View>

          <View style={{marginBottom: 15}}>
            <Text style={styles.labelInput} l>Address Line One</Text>
            <TextInput
              style={[styles.input, {color: colorWhite}]}
              underlineColorAndroid={'transparent'}
              onChangeText={(text) => this.setState({addressLineOne: text})}
              value={this.state.addressLineOne}/>
          </View>

          <View style={{marginBottom: 15}}>
            <Text style={styles.labelInput}>Address Line Two</Text>
            <TextInput
              style={[styles.input, {color: colorWhite}]}
              underlineColorAndroid={'transparent'}
              onChangeText={(text) => this.setState({addressLineTwo: text})}
              value={this.state.addressLineTwo}/>
          </View>

          <View style={{marginBottom: 15}}>
            <Text style={styles.labelInput}>City</Text>
            <TextInput
              style={[styles.input, {color: colorWhite}]}
              underlineColorAndroid={'transparent'}
              onChangeText={(text) => this.setState({city: text})}
              value={this.state.city}/>
          </View>

          <View style={{marginBottom: 15}}>
            <Text style={styles.labelInput}>State</Text>
            <TextInput
              style={[styles.input, {color: colorWhite}]}
              caretHidden={true}
              underlineColorAndroid={'transparent'}
              onFocus={this._focusPicker}
              value={this.state.state}/>
          </View>

          <View style={{marginBottom: 15}}>
            <Text style={styles.labelInput}>Zip Code</Text>
            <TextInput
              style={[styles.input, {color: colorWhite}]}
              underlineColorAndroid={'transparent'}
              onChangeText={(text) => this.setState({zipCode: text})}
              keyboardType={'numeric'}
              value={this.state.zipCode}/>
          </View>
          <Button
            style={styles.vw90}
            onPress={() => this.props.navigation.goBack()}
            title={'UPDATE'}
          />

          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            cancelTextStyle={{fontFamily: 'Avenir', color: '#FF5252'}}
            confirmTextStyle={{fontFamily: 'Avenir', color: '#2bbc7d'}}
            titleIOS={'Choose your date of birth'}
            titleStyle={{fontFamily: 'Avenir', color: '#2bbc7d'}}
            maximumDate={today}
          />

          <Image style={styles.backgroundBottom} source={require('../../../assets/bgr-bottom-2.png')}
                 resizeMode={'contain'}/>
          <SelectInput
            ref={'rPicker'}
            value={this.state.state}
            options={this.getPickerOptions()}
            onCancelEditing={() => console.log('onCancel')}
            onSubmitEditing={this.onSubmitEditingState.bind(this)}
            labelStyle={{color: '#303030'}}
            style={{zIndex: -10}}
          />
        </ViewContainer>
      </KeyboardAwareScrollView>
    )
  }
}
