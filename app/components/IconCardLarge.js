import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import * as constants from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

var colorSchemes = {
  violet: {
    headerBackgroundColor: constants.colorVioletSecondary1,
    backgroundColor: constants.colorVioletPrimary3,
    primaryTextColor: constants.colorWhite,
    secondaryTextColor: constants.colorVioletSecondary2
  },
  blue: {
    headerBackgroundColor: constants.colorBlueSecondary1,
    backgroundColor: constants.colorBluePrimary,
    primaryTextColor: constants.colorWhite,
    secondaryTextColor: constants.colorBlueSecondary2
  },
  sea: {
    headerBackgroundColor: constants.colorSeaSecondary1,
    backgroundColor: constants.colorSeaPrimary,
    primaryTextColor: constants.colorWhite,
    secondaryTextColor: constants.colorSeaSecondary2
  },
  green: {
    headerBackgroundColor: constants.colorGreenSecondary1,
    backgroundColor: constants.colorGreenPrimary,
    primaryTextColor: constants.colorWhite,
    secondaryTextColor: constants.colorGreenSecondary2
  }
}

class IconCardLarge extends Component {
  state = {
    checked: false
  }

  onPress = () => {
    if (!this.state.checked) {
      this.setState({checked: true})
      var amount = Number(this.props.title.replace('$', ''))
      this.props.onPress && this.props.onPress(amount)
    }
  }

  render() {
    var {color, title, bodyTitle, bodyText} = this.props
    var colorScheme = colorSchemes[color] ? colorSchemes[color] : colorSchemes['violet']

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.onPress}>
        <View style={styles.container}>
          <View style={[styles.header, {backgroundColor: colorScheme.headerBackgroundColor}]}>
            <View style={styles.headerTextContainer}>
              <Text style={[styles.investmentButtonPrimaryText, {color: colorScheme.primaryTextColor}]}>{title}</Text>
            </View>
          </View>

          <View style={[styles.body, {backgroundColor: colorScheme.backgroundColor}]}>
            <View style={styles.bodyTextContainer}>
              <Text style={[styles.investmentButtonPrimaryText, {color: colorScheme.primaryTextColor}]}>{bodyTitle}</Text>
              <Text style={[styles.investmentButtonSecondaryText, {color: colorScheme.secondaryTextColor}]}>{bodyText}</Text>
            </View>
          </View>

          <View style={styles.iconContainer}>
            {
              this.state.checked ?
                <Icon
                  name='ios-checkmark'
                  size={35}
                  style={{backgroundColor: 'transparent'}}
                  color={colorScheme.backgroundColor}
                />:
                <Icon
                  name='ios-add'
                  size={35}
                  style={styles.icon}
                  color={colorScheme.backgroundColor}
                />
            }
          </View>

        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  header: {
    height: 62,
    paddingHorizontal: 19,
    paddingVertical: 18,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  body: {
    height: 80,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    paddingHorizontal: 19
  },
  bodyTextContainer: {
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
  iconContainer: {
    position: 'absolute',
    right: 19,
    top: 42,
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

export default IconCardLarge
