import React, { Component } from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'
import NumberPadRecurring from '../../../components/NumberPadRecurring'

class RecurringTab extends Component {

  render(){
    return(
      <NumberPadRecurring navigation={this.props.navigation}/>
    )
  }
}

export default RecurringTab
