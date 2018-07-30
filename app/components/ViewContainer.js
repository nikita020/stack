import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from './styles'

export default class ViewContainer extends React.Component {
  render () {
    return (
      <View style={[styles.ViewContainer, {...this.props.style}]}>
        {this.props.children}
      </View>
    )
  }
}
