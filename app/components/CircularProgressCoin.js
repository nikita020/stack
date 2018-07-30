import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

class CircularProgressCoin extends Component {
  render() {
    const {progress} = this.props

    return (
      <View style={styles.container}>
        <AnimatedCircularProgress
          size={185}
          width={8}
          fill={progress}
          tintColor="#ffffff"
          backgroundColor="#5d32c1"
          arcSweepAngle={270}
          rotation={225}
          lineCap={'round'}/>
        <View style={styles.contentContainer}>
          <Image
            style={styles.backgroundImage}
            resizeMode="contain"
            source={require('../assets/progress-bg-coin.png')}/>
          <Text style={styles.progressText}>
            {progress}%
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

export default CircularProgressCoin
