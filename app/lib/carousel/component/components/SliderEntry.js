import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../styles/SliderEntry.style'

export default class SliderEntry extends Component {

  static propTypes = {
    data: PropTypes.object,
  }

  render () {
    const {data: {title}} = this.props

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
      >
        <View style={styles.textContainer}>
          <Text
            style={styles.title}
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}
