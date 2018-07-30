import React, { Component } from 'react'
import { StyleSheet, View, Animated, Text, Platform } from 'react-native'
import StatusBarBackground from './StatusBarBackground'
import firebase from 'react-native-firebase'
import { styles } from './styles'

export default class ProgressBarBank extends Component {
  // TODO make $5 limit
  constructor (props) {
    super(props)
    this.state = {
      progress: 0,
      bank: 0,
      fbBankStateRef: Platform.OS === 'ios' ? firebase.database().ref('/users/' + global.user.uid + '/bank') : firebase.database().ref('/users/' + 1 + '/bank')
    }
    this.updateState = this.updateState.bind(this)
  }

  updateState (snapshot) {
    let bank = snapshot.val()
    if (bank) {
      // Inform the parent object of any change is they passed a prop to do so.
      if (this.props.setTabBankState)
        this.props.setTabBankState(bank)
      this.setState({
        progress: bank / 5,
        bank,
      })
    } else {
      this.setState({
        progress: 0,
        bank: 0
      })
    }
  }

  componentWillMount () {
    this.animation = new Animated.Value
    (this.state.progress)
  }

  componentDidMount () {
    this.state.fbBankStateRef.on('value', this.updateState)
  }

  componentWillUnmount () {
    this.state.fbBankStateRef.off('value')
  }

  componentDidUpdate (prevState) {
    if (prevState.progress !== this.state.progress) {
      Animated.timing(this.animation, {
        toValue: this.state.progress,
        duration: this.props.duration
      }).start()
    }
  }

  render () {
    const {
      height,
      borderWidth,
      borderColor,
      barColor,
      fillColor,
      borderRadius,
    } = this.props

    const widthInterpolated = this.animation.interpolate
    ({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
      extrapolate: 'clamp'
    })

    return (
      <View>
        <View style={{flexDirection: 'row', height}}>
          <StatusBarBackground/>
          <View style={{flex: 1, borderColor, borderWidth, borderRadius}}>
            <View style={[StyleSheet.absoluteFill, {backgroundColor: fillColor}]}/>
            <Animated.View
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                backgroundColor: barColor,
                width: widthInterpolated
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.ProgressBarBankText}>${this.state.bank.toFixed(2)} of $5</Text>
        </View>
      </View>
    )
  }
}

ProgressBarBank.defaultProps = {
  height: 8,
  barColor: '#2bbd7e',
  fillColor: '#6d6d6d',
  duration: 100
}
