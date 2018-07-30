import React, { Component } from 'react'
import { TouchableOpacity, Text, View, ImageBackground } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './styles'

export default class Button extends React.Component {
  render () {
    return (
      <TouchableOpacity onPress={ this.props.onPress } disabled={ this.props.disabled }>
          <ImageBackground
            style={ [styles.buttonCustom, {...this.props.style}] }
            source={ this.props.btnBlue ? require('../assets/btn-blue.png') : require('../assets/btn-green.png') }
            resizeMode={ 'contain' }
          >
            {
              this.props.icon
                ? <Icon { ...this.props.icon }/>
                : null
            }
            <Text style={ styles.btnText }>{ this.props.title }</Text>
          </ImageBackground>
      </TouchableOpacity>
    )
  }
}
