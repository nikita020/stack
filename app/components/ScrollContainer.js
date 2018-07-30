import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import ViewContainer from './ViewContainer'

export default class ScrollContainer extends React.Component {
  render() {
    return (
      <ScrollView style={[styles.scrollContainer, {...this.props.style}]}>
        <ViewContainer style={{...this.props.style}}>
          {this.props.children}
        </ViewContainer>
      </ScrollView>
    );
  }
}
