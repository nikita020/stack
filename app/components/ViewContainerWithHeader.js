import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from './styles'

export default class ViewContainerWithHeader extends React.Component {
  render () {
    return (
      <View style={[styles.viewContainerWithHeader, {...this.props.style}]}>
        {this.props.children}
      </View>
    )
  }
}