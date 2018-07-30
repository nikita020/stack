import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  Alert,
  Image
} from 'react-native'
import ViewContainer from '../../../components/ViewContainer'
import { Switch } from '../../../lib/switch'
import ButtonGroupCard from '../../../components/ButtonGroupCard'

import { Card, ButtonGroup } from 'react-native-elements'
import { styles } from '../../../components/styles'
import {
  colorBlue, colorBlue5, colorGreen, colorViolet, colorViolet1, headerColorViolet,
  windowWidth, headerColorDarkBlue, windowHeight
} from '../../../../constants'
import ScrollContainer from '../../../components/ScrollContainer'

export default class InvestSettingScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Withdraw',
    headerStyle: [styles.headerStyle, {
      backgroundColor: navigation.state.params && navigation.state.params.inActive
        ? headerColorViolet
        : !navigation.state.params
          ? headerColorViolet
          : headerColorDarkBlue
    }]
  })

  constructor (props) {
    super(props)
    this.state = {
      selectedIndexToggle: 1,
      selectedIndexMultiply: 0,
      switchValue: false
    }
    this.updateIndexToggle = this.updateIndexToggle.bind(this)
    this.updateIndexMultiply = this.updateIndexMultiply.bind(this)
  }

  updateIndexToggle (selectedIndexToggle) {
    this.setState({selectedIndexToggle})
    switch (selectedIndexToggle) {
      case 0:
        Alert.alert(
          'Great!',
          'Please confirm that you\'d like to turn off automatic investing.',
          [
            {text: 'Cancel', onPress: () => this.setState({selectedIndexToggle: 1}), style: 'cancel'},
            {text: 'Confirm', onPress: () => console.log('Confirm automatic invest off')},
          ],
          {cancelable: true}
        )
        break
      case 1:
        Alert.alert(
          'Great!',
          'Please confirm that you\'d like to turn on automatic investing.',
          [
            {text: 'Cancel', onPress: () => this.setState({selectedIndexToggle: 0}), style: 'cancel'},
            {text: 'Confirm', onPress: () => console.log('Confirm automatic invest on')},
          ],
          {cancelable: true}
        )
        break
    }
  }

  updateIndexMultiply (selectedIndexMultiply) {
    this.setState({selectedIndexMultiply})
    switch (selectedIndexMultiply) {
      case 0:
        Alert.alert(
          'Great!',
          'Please confirm that you would like to stop multiplying your spare-change investments from now on.',
          [
            {text: 'Cancel', onPress: () => this.setState({selectedIndexMultiply: 0}), style: 'cancel'},
            {text: 'Confirm', onPress: () => console.log('Confirm change multiplier by 1x')},
          ],
          {cancelable: true}
        )
        break
      case 1:
        Alert.alert(
          'Great!',
          'Please confirm that you\'d like to multiply all your spare-change investments from now on by 2x.',
          [
            {text: 'Cancel', onPress: () => this.setState({selectedIndexMultiply: 0}), style: 'cancel'},
            {text: 'Confirm', onPress: () => console.log('Confirm change multiplier by 2x')},
          ],
          {cancelable: true}
        )
        break
      case 2:
        Alert.alert(
          'Great!',
          'Please confirm that you\'d like to multiply all your spare-change investments from now on by 3x.',
          [
            {text: 'Cancel', onPress: () => this.setState({selectedIndexMultiply: 0}), style: 'cancel'},
            {text: 'Confirm', onPress: () => console.log('Confirm change multiplier by 3x')},
          ],
          {cancelable: true}
        )
        break
      case 3:
        Alert.alert(
          'Great!',
          'Please confirm that you\'d like to multiply all your spare-change investments from now on by 4x.',
          [
            {text: 'Cancel', onPress: () => this.setState({selectedIndexMultiply: 0}), style: 'cancel'},
            {text: 'Confirm', onPress: () => console.log('Confirm change multiplier by 4x')},
          ],
          {cancelable: true}
        )
        break
      case 4:
        Alert.alert(
          'Great!',
          'Please confirm that you\'d like to multiply all your spare-change investments from now on by 10x.',
          [
            {text: 'Cancel', onPress: () => this.setState({selectedIndexMultiply: 0}), style: 'cancel'},
            {text: 'Confirm', onPress: () => console.log('Confirm change multiplier by 10x')},
          ],
          {cancelable: true}
        )
        break
    }
  }

  render () {
    const {selectedIndexToggle, selectedIndexMultiply} = this.state
    const buttonsMultiply = ['Off', '2x', '3x', '4x', '10x']
    const buttonsToggle = ['Off', 'On']
    return (
      <ViewContainer>
        <ScrollContainer style={styles.backgroundTransparent}>
          <View style={ {flex: 1, alignItems: 'center', alignContent: 'stretch', width: windowWidth, marginBottom: 40} }>
            <View style={ {
              backgroundColor: !this.state.switchValue ? headerColorViolet : headerColorDarkBlue,
              paddingVertical: 30,
              justifyContent: 'space-between',
              alignItems: 'center',
              width: windowWidth,
              height: windowHeight * 0.55
            } }>
              <Image source={ require('../../../assets/investing-setting-big-logo.png') }
                     style={ {height: 0.2 * windowWidth, width: 0.2 * windowWidth} }/>
              <Text style={ [styles.textWhite] }>Automated Invest</Text>
              <Text
                style={ [styles.textVioletSmall] }>{ 'Maximize your spare change by \nallowing Stack to automatically invest \nevery purchase you make with \nyour linked cards.' }</Text>
              <Switch
                value={ this.state.switchValue }
                containerStyle={ {marginBottom: 0} }
                onValueChange={ (val) => {
                  this.setState({switchValue: val})
                  this.props.navigation.setParams({
                    inActive: !val
                  })
                } }
                disabled={ false }
                activeText={ 'On' }
                inActiveText={ 'Off' }
                backgroundActive={ colorBlue5 }
                backgroundInactive={ colorViolet }
                circleActiveColor={ colorGreen }
                circleInActiveColor={ headerColorViolet }
                renderInsideCircle={ () => <Text style={ {
                  color: this.state.switchValue ? 'white' : colorViolet1,
                  fontSize: 18
                } }>{ this.state.switchValue ? 'ON' : 'OFF' }</Text> } // custom component to render inside the Switch circle (Text, Image, etc.)
                innerCircleStyle={ {
                  alignItems: 'center',
                  justifyContent: 'center'
                } }
              />
            </View>

            <View style={ [styles.vw100, {paddingTop: 0.05 * windowWidth, paddingHorizontal: 0.05 * windowWidth, alignItems: 'center', justifyContent: 'center'}] }>
              <ButtonGroupCard
                color={ 'blue' }
                buttons={ ['OFF', '$10', '$20', '$50', '$100'] }
                title={ 'Multiply your growth' }
                description={ 'Try multiplying your spare-change investments by choosing a multiplier!' }/>
            </View>

          </View>
        </ScrollContainer>
        <Image style={ styles.backgroundBottom }
               source={ require('../../../assets/bgr-bottom-2.png') }
               resizeMode={ 'contain' }/>
      </ViewContainer>
    )
  }
}
