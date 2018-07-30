import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import _ from 'lodash'
import * as constants from '../../constants'

class ButtonGroupCardCustom extends Component {
  state = {
    selectedIndex: this.props.defaultActive || -1
  }

  render () {
    // var buttons = ['$5', '$10', '$20', '$50', '$100']
    var {selectedIndex} = this.state
    const {buttonData, containerStyle, buttonGroupContainer, buttonStyle} = this.props
    return (
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.buttonGroupContainer, buttonGroupContainer]}>
          {
            _.map(buttonData, (button, index) => {
              return (
                <TouchableOpacity style={[styles.button, buttonStyle]} onPress={() => {
                  this.setState({selectedIndex: index})
                }}>
                  {
                    index === selectedIndex ?
                      <Image
                        resizeMode="stretch"
                        style={{
                          position: 'absolute',
                          height: undefined,
                          width: '80%',
                          top: 0,
                          bottom: 0
                        }}
                        source={require('../assets/grp-btn-selected.png')}/>
                      : null
                  }
                  <Text style={styles.buttonText}>
                    {button}
                  </Text>
                </TouchableOpacity>
              )
            })
          }
        </View>
        <View style={{
          height: 50,
          position: 'absolute',
          bottom: 8, left: 0, right: 0,
          backgroundColor: this.props.backgroundColor || constants.colorViolet3,
          zIndex: 1,
          borderRadius: 5
        }}/>
      </View>
    )
  }
}

ButtonGroupCardCustom.propTypes = {
  buttonData: PropTypes.array,
  containerStyle: PropTypes.object,
  buttonGroupContainer: PropTypes.object,
  buttonStyle: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginBottom: 4,
    position: 'relative'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24
  },
  primaryText: {
    color: constants.colorWhite,
    fontSize: 22,
    marginBottom: 7
  },
  secondaryText: {
    color: constants.colorSecondaryViolet,
    fontSize: 12
  },
  buttonGroupContainer: {
    flexDirection: 'row',
    height: 68,
    borderRadius: 5,
    zIndex: 2,
    paddingHorizontal: 20,
  },
  button: {
    height: 68,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    zIndex: 3
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: constants.colorSecondaryViolet,
    backgroundColor: 'transparent'
  }
})

export default ButtonGroupCardCustom
