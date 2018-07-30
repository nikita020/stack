import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import * as constants from '../../constants'
import Icon from 'react-native-vector-icons/Ionicons'

var colorSchemes = {
  violet: {
    backgroundColor: constants.colorVioletPrimary3,
    primaryTextColor: constants.colorWhite,
    secondaryTextColor: constants.colorVioletSecondary2
  },
  blue: {
    backgroundColor: constants.colorBluePrimary,
    primaryTextColor: constants.colorWhite,
    secondaryTextColor: constants.colorBlueSecondary2
  },
  sea: {
    backgroundColor: constants.colorSeaPrimary,
    primaryTextColor: constants.colorWhite,
    secondaryTextColor: constants.colorSeaSecondary2
  },
  green: {
    backgroundColor: constants.colorGreenPrimary,
    primaryTextColor: constants.colorWhite,
    secondaryTextColor: constants.colorGreenSecondary2
  }
}

class IconButtonLarge extends Component {
  state = {
    checked: false
  }

  onPress = () => {
    if (!this.state.checked) {
      this.setState({checked: true})
      var amount = Number(this.props.title.replace('$', ''))
      this.props.onPress && this.props.onPress(amount)
    }
    else if (this.state.checked) {
      this.setState({checked: false})
      var amount = - Number(this.props.title.replace('$', ''))
      this.props.onPress && this.props.onPress(amount)
    }
  }

  render () {
    var {color, title, subTitle} = this.props
    var colorScheme = colorSchemes[color] ? colorSchemes[color] : colorSchemes['violet']

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.onPress}>
        <View style={[styles.container, {backgroundColor: colorScheme.backgroundColor}]}>

          <View style={styles.textContainer}>
            <Text style={[styles.investmentButtonPrimaryText, {color: colorScheme.primaryTextColor}]}>{title}</Text>
            <Text
              style={[styles.investmentButtonSecondaryText, {color: colorScheme.secondaryTextColor}]}>{subTitle}</Text>
          </View>

          <View style={styles.iconColumn}>
            <View style={styles.iconContainer}>
              {
                this.state.checked
                  ? <Icon
                    name='ios-checkmark'
                    size={35}
                    style={styles.icon}
                    color={colorScheme.backgroundColor}
                  />
                  : <Icon
                    name='ios-add'
                    size={35}
                    style={styles.icon}
                    color={colorScheme.backgroundColor}
                  />
              }
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 86,
    borderRadius: 4,
    flexDirection: 'row',
    paddingHorizontal: 19
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  investmentButtonPrimaryText: {
    fontSize: 26,
    fontWeight: '700'
  },
  investmentButtonSecondaryText: {
    fontSize: 15,
    fontWeight: '700'
  },
  iconColumn: {
    justifyContent: 'center'
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    backgroundColor: 'transparent'
  }
})

export default IconButtonLarge
