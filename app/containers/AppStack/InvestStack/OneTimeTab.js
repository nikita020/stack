import React, { Component } from 'react';
import { View, Image } from 'react-native'
import ViewContainer from '../../../components/ViewContainer';
import { styles } from '../../../components/styles';
import NumberPad from '../../../components/NumberPad';
import { Icon } from 'react-native-elements'

export default class OneTimeTab extends Component{

  render(){
    return(
      <ViewContainer>
        <NumberPad/>
      </ViewContainer>
    )
  }
}
