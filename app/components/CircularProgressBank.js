import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

class CircularProgressBank extends Component {
  static defaultProps = {
    progress: 2,
    total: 5,
    size: 185,
    width: 8,
    tintColor: "#FFFFFF",
    backgroundColor: "#592db1",
    arcSweepAngle: 270,
    rotation: 225,
    hasBackground: true

  }

  render() {
    var {
      progress,
      total,
      size,
      width,
      tintColor,
      backgroundColor,
      arcSweepAngle,
      rotation,
      hasBackground,
      progressTextStyle,
      totalTextStyle
    } = this.props

    return (
      <View style={styles.container}>
        <AnimatedCircularProgress
          size={size}
          width={width}
          fill={progress / total * 100}
          tintColor={tintColor}
          backgroundColor={backgroundColor}
          arcSweepAngle={arcSweepAngle}
          rotation={rotation}/>
        <View style={styles.contentContainer}>
          {
            hasBackground ? (
              <Image
                style={styles.backgroundImage}
                resizeMode="contain"
                source={require('../assets/progress-bg.png')}/>
            ) : null
          }
          <Text style={[styles.progressText, progressTextStyle]}>
            ${(progress).toFixed(2)}
          </Text>
          <Text style={[styles.totalText, totalTextStyle]}>
            of ${(total).toFixed(2)}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  contentContainer: {
    position: 'absolute',
    width: 133,
    height: 133,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    position: 'absolute',
    width: 133,
    height: 133,
  },
  progressText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    backgroundColor: 'transparent'
  },
  totalText: {
    color: '#96a4fd',
    fontSize: 25,
    fontWeight: '700',
    backgroundColor: 'transparent'
  }
})

export default CircularProgressBank
