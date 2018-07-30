import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import _ from 'lodash'
import * as constants from '../../constants'

var colors = {
  violet: {
    backgroundColor: constants.colorVioletPrimary3,
    buttonBackgroundColor: constants.colorVioletSecondary1,
    buttonTextColor: constants.colorVioletSecondary2,
    selectedButtonTextColor: constants.colorVioletPrimary1,
    primaryTextColor: constants.colorWhite,
    secondaryTextColor: constants.colorVioletSecondary2
  },
  blue: {
    backgroundColor: constants.colorBluePrimary,
    buttonBackgroundColor: constants.colorBlueSecondary1,
    buttonTextColor: constants.colorBlueSecondary2,
    selectedButtonTextColor: constants.colorBlueSecondary1,
    primaryTextColor: constants.colorWhite,
    secondaryTextColor: constants.colorBlueSecondary2
  }
}

class ButtonGroupCard extends Component {
  state = {
    selectedIndex: -1
  }

  render () {
    var {buttons, color} = this.props
    var {selectedIndex} = this.state
    var colorScheme = colors[color ? color : 'violet']

    return (
      <View style={styles.container}>
        <View style={[styles.textContainer, {backgroundColor: colorScheme.backgroundColor}]}>
          <Text style={[styles.primaryText, {color: colorScheme.primaryTextColor}]}>
            {this.props.title}
          </Text>
          <Text style={[styles.secondaryText, {color: colorScheme.secondaryTextColor}]}>
            {this.props.description}
          </Text>
        </View>
        <View style={[styles.buttonGroupContainer]}>
          {
            _.map(buttons, (button, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.button}
                  onPress={() => {
                    this.setState({selectedIndex: index}, () => this.props.onSelectionChange && this.props.onSelectionChange(index))
                  }}>
                  {
                    index === selectedIndex
                      ? <Image
                        resizeMode="stretch"
                        style={styles.selectedButton}
                        source={require('../assets/grp-btn-selected.png')}/>
                      : null
                  }
                  <Text
                    style={[styles.buttonText, {color: index === selectedIndex ? colorScheme.selectedButtonTextColor : colorScheme.buttonTextColor}]}>
                    {button}
                  </Text>
                </TouchableOpacity>
              )
            })
          }
          <View style={ {
            backgroundColor: colorScheme.buttonBackgroundColor,
            height: 52,
            position: 'absolute',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            left: 0, right: 0, bottom: 4,
            zIndex: 1
          } }/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginBottom: 4
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 23,
    paddingBottom: 40,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  primaryText: {
    fontSize: 22,
    marginBottom: 7
  },
  secondaryText: {
    fontSize: 12,
    lineHeight: 22,
    textAlign: 'center'
  },
  buttonGroupContainer: {
    position: 'relative',
    flexDirection: 'row',
    height: 70,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: -14
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 70,
    zIndex: 2,
  },
  buttonText: {
    height: 52,
    top: 18,
    fontSize: 18,
    fontWeight: '500',
    backgroundColor: 'transparent',
    zIndex: 4,
  },
  selectedButton: {
    position: 'absolute',
    height: undefined,
    width: '85%',
    top: 0,
    bottom: 0,
    zIndex: 3,
  }
})

export default ButtonGroupCard
