import React, { Component } from 'react'
import {
  View,
} from 'react-native'
import { styles } from './styles'
import { Button } from 'react-native-elements'
import GridLayout from 'react-native-layout-grid'

export default class NumberPadCustom extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  renderGridItem = (item) => (
    <View style={{padding: 0}}>
      <Button
        buttonStyle={ styles.pinNumberPadButtons }
        textStyle={ styles.pinNumberPadButtonsText }
        title={ `${item.name}` }
        icon={ item.icon }
        onPress={ () => this.props.changeValue(item) }
      />
    </View>
  )

  render () {
    const items = [
      {name: '1'},
      {name: '2'},
      {name: '3'},
      {name: '4'},
      {name: '5'},
      {name: '6'},
      {name: '7'},
      {name: '8'},
      {name: '9'},
      {name: '*'},
      {name: '0'},
      {name: '', icon: {name: 'backspace', color: '#fff', size: 30}, action: 'delete'}
    ]

    const itemsNumber = [
      {name: 1},
      {name: 2},
      {name: 3},
      {name: 4},
      {name: 5},
      {name: 6},
      {name: 7},
      {name: 8},
      {name: 9},
      {name: '.'},
      {name: 0},
      {name: '', icon: {name: 'backspace', color: '#fff', size: 30}, action: 'delete'}
    ]

    return (
      <GridLayout
        scrollEnabled={ false }
        items={ this.props.isString ? items : itemsNumber }
        itemsPerRow={ 3 }
        renderItem={ this.renderGridItem }
      />
    )
  }
}
