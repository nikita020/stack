import React, { Component } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import StatusBarBackground from './StatusBarBackground';

export default class ProgressBar extends React.Component{
  componentWillMount(){
    this.animation  = new Animated.Value
    (this.props.progress)
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.progress != this.props.progress){
      Animated.timing(this.animation,{
      toValue: this.props.progress,
      duration: this.props.duration}).start()
    }
  }

  render(){
    const {
      height,
      borderWidth,
      borderColor,
      barColor,
      fillColor,
      borderRadius,
    } = this.props;

    const widthInterpolated= this.animation.interpolate
    ({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp"
    })

    return(
      <View style= {{flexDirection: "row", height}}>
        <StatusBarBackground/>
        <View style={{flex:1, borderColor, borderWidth, borderRadius}}>
        <View style={[StyleSheet.absoluteFill,{backgroundColor: fillColor}]}/>
        <Animated.View
          style = {{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            backgroundColor: barColor,
            width : widthInterpolated
          }}
        />
        </View>
      </View>
    )
  }
}

  ProgressBar.defaultProps ={
  height: 8,
  barColor: "#2bbd7e",
  fillColor: "#6d6d6d",
  duration: 100
    }
