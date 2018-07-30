import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  StatusBar,
  Image,
  Keyboard,
} from 'react-native';
import ViewContainer from '../../../components/ViewContainer';
import { styles } from '../../../components/styles';
import { Icon } from 'react-native-elements'

export default class TomorrowTab extends React.Component{
  static navigationOptions = {
    title: 'Tomorrow',
    tabBarIcon: ({ tintColor }) => <Icon name="brightness-6" color={tintColor} />
  }

  render(){
    return(
      <ViewContainer>
        <Text> This is the stats for Tomorrow </Text>
      </ViewContainer>
    )
  }
}
