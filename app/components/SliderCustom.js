'use strict';

import React, {
  PureComponent,
} from "react";

import {
  Animated,
  Image,
  StyleSheet,
  PanResponder,
  View,
  Text,
  Easing,
  ViewPropTypes,
  Platform
} from "react-native";

import PropTypes from 'prop-types';
import { colorViolet1, colorViolet4, windowWidth } from '../../constants'

var TRACK_SIZE = 4;
var THUMB_SIZE = 20;

function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rect.prototype.containsPoint = function(x, y) {
  return (x >= this.x
    && y >= this.y
    && x <= this.x + this.width
    && y <= this.y + this.height);
};

var DEFAULT_ANIMATION_CONFIGS = {
  spring : {
    friction : 7,
    tension  : 100
  },
  timing : {
    duration : 150,
    easing   : Easing.inOut(Easing.ease),
    delay    : 0
  },
  // decay : { // This has a serious bug
  //   velocity     : 1,
  //   deceleration : 0.997
  // }
};

let defaultValue = 0

export default class Slider extends PureComponent {
  static propTypes = {
    /**
     * Initial value of the slider. The value should be between minimumValue
     * and maximumValue, which default to 0 and 1 respectively.
     * Default value is 0.
     *
     * *This is not a controlled component*, e.g. if you don't update
     * the value, the component won't be reset to its inital value.
     */
    value: PropTypes.number,

    text: PropTypes.string,

    /**
     * If true the user won't be able to move the slider.
     * Default value is false.
     */
    disabled: PropTypes.bool,

    /**
     * Initial minimum value of the slider. Default value is 0.
     */
    minimumValue: PropTypes.number,

    /**
     * Initial maximum value of the slider. Default value is 1.
     */
    maximumValue: PropTypes.number,

    /**
     * Step value of the slider. The value should be between 0 and
     * (maximumValue - minimumValue). Default value is 0.
     */
    step: PropTypes.number,

    /**
     * The color used for the track to the left of the button. Overrides the
     * default blue gradient image.
     */
    minimumTrackTintColor: PropTypes.string,

    /**
     * The color used for the track to the right of the button. Overrides the
     * default blue gradient image.
     */
    maximumTrackTintColor: PropTypes.string,

    /**
     * The color used for the thumb.
     */
    thumbTintColor: PropTypes.string,

    /**
     * The size of the touch area that allows moving the thumb.
     * The touch area has the same center has the visible thumb.
     * This allows to have a visually small thumb while still allowing the user
     * to move it easily.
     * The default is {width: 40, height: 40}.
     */
    thumbTouchSize: PropTypes.shape(
      {width: PropTypes.number, height: PropTypes.number}
    ),

    /**
     * Callback continuously called while the user is dragging the slider.
     */
    onValueChange: PropTypes.func,

    /**
     * Callback called when the user starts changing the value (e.g. when
     * the slider is pressed).
     */
    onSlidingStart: PropTypes.func,

    /**
     * Callback called when the user finishes changing the value (e.g. when
     * the slider is released).
     */
    onSlidingComplete: PropTypes.func,

    /**
     * The style applied to the slider container.
     */
    style: ViewPropTypes.style,

    /**
     * The style applied to the track.
     */
    trackStyle: ViewPropTypes.style,

    /**
     * The style applied to the thumb.
     */
    thumbStyle: ViewPropTypes.style,

    /**
     * The style applied to the text.
     */
    textStyle: ViewPropTypes.style,

    /**
     * Sets an image for the thumb.
     */
    thumbImage: Image.propTypes.source,

    thumbImageMax: Image.propTypes.source,
    /**
     * Set this to true to visually see the thumb touch rect in green.
     */
    debugTouchArea: PropTypes.bool,

    /**
     * The style applied to the touch area.
     */
    touchAreaStyle: ViewPropTypes.style,
    /**
     * Set to true to animate values with default 'timing' animation type
     */
    animateTransitions : PropTypes.bool,

    /**
     * Custom Animation type. 'spring' or 'timing'.
     */
    animationType : PropTypes.oneOf(['spring', 'timing']),

    /**
     * Used to configure the animation parameters.  These are the same parameters in the Animated library.
     */
    animationConfig : PropTypes.object,
  };

  static defaultProps = {
    value: 0,
    minimumValue: 0,
    maximumValue: 1,
    step: 0,
    minimumTrackTintColor: '#3f3f3f',
    maximumTrackTintColor: '#b3b3b3',
    thumbTintColor: '#343434',
    thumbTouchSize: {width: 40, height: 40},
    debugTouchArea: false,
    animationType: 'timing'
  };

  state = {
    containerSize: {width: 0, height: 0},
    trackSize: {width: 0, height: 0},
    thumbSize: {width: 0, height: 0},
    allMeasured: false,
    value: new Animated.Value(this.props.value),
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminationRequest: this._handlePanResponderRequestEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
  };

  componentDidMount() {
    defaultValue = this.props.value
  }

  componentWillReceiveProps(nextProps) {
    var newValue = nextProps.value;

    if (this.props.value !== newValue) {
      if (this.props.animateTransitions) {
        this._setCurrentValueAnimated(newValue);
      }
      else {
        this._setCurrentValue(newValue);
      }
    }
  };

  render() {
    var {
      text,
      textStyle,
      minimumValue,
      maximumValue,
      minimumTrackTintColor,
      maximumTrackTintColor,
      thumbTintColor,
      thumbImage,
      styles,
      style,
      trackStyle,
      thumbStyle,
      debugTouchArea,
      touchAreaStyle,
      thumbTouchSize,
      ...other
    } = this.props;
    var {value, containerSize, trackSize, thumbSize, allMeasured} = this.state;
    var mainStyles = styles || defaultStyles;
    var thumbLeft = value.interpolate({
      inputRange: [minimumValue, maximumValue],
      outputRange: [0, containerSize.width - thumbSize.width],
      //extrapolate: 'clamp',
    });
    var valueVisibleStyle = {};
    if (!allMeasured) {
      valueVisibleStyle.opacity = 0;
    }

    var minimumTrackStyle = {
      position: 'absolute',
      width: Animated.add(thumbLeft, thumbSize.width / 2),
      backgroundColor: minimumTrackTintColor,
      ...valueVisibleStyle
    };

    var touchOverflowStyle = this._getTouchOverflowStyle();

    return (
      <View {...other} style={[mainStyles.container, style]} onLayout={this._measureContainer}>
        <Text style={
          [
            defaultStyles.percentLeftText,
            {
              width: thumbTouchSize.width,
              fontFamily: textStyle.fontFamily,
              fontSize: textStyle.fontSize,
              color: colorViolet1
            }
          ]
        }
        >
          0%
        </Text>
        <Text style={
          [
            defaultStyles.percentRightText,
            {
              width: thumbTouchSize.width,
              fontFamily: textStyle.fontFamily,
              fontSize: textStyle.fontSize,
              color: colorViolet1
            }
          ]
        }
        >
          100%
        </Text>

        <View style={[
          defaultStyles.defaultValueTrack,
          {
            width: (windowWidth*0.9) * (defaultValue/100) + thumbStyle.width/2 + 10,
            borderBottomRightRadius: defaultValue === 100 ? 6 : 0,
            borderTopRightRadius: defaultValue === 100 ? 6 : 0,
          }
        ]}/>

        <View
          style={[{backgroundColor: maximumTrackTintColor,}, mainStyles.track, trackStyle]}
          renderToHardwareTextureAndroid={true}
          onLayout={this._measureTrack} />
        <Animated.View
          renderToHardwareTextureAndroid={true}
          style={[mainStyles.track, trackStyle, minimumTrackStyle]} />
        <Animated.View
          onLayout={this._measureThumb}
          renderToHardwareTextureAndroid={true}
          style={[
            {backgroundColor: thumbTintColor},
            mainStyles.thumb, thumbStyle,
            {
              transform: [
                { translateX: thumbLeft },
                { translateY: 0 }
              ],
              ...valueVisibleStyle
            }
          ]}
        >
          {this._renderThumbImage()}
          <Text style={textStyle}>
            {text}
          </Text>
        </Animated.View>
        <View
          renderToHardwareTextureAndroid={true}
          style={[defaultStyles.touchArea, touchOverflowStyle]}
          {...this._panResponder.panHandlers}>
          {/*{debugTouchArea === true && this._renderDebugThumbTouchRect(thumbLeft)}*/}
        </View>
      </View>
    );
  };

  _getPropsForComponentUpdate(props) {
    var {
      value,
      onValueChange,
      onSlidingStart,
      onSlidingComplete,
      style,
      trackStyle,
      thumbStyle,
      ...otherProps,
    } = props;

    return otherProps;
  };

  _handleStartShouldSetPanResponder = (e, /*gestureState: Object*/) => {
    // Should we become active when the user presses down on the thumb?
    return this._thumbHitTest(e);
  };

  _handleMoveShouldSetPanResponder(/*e: Object, gestureState: Object*/) {
    // Should we become active when the user moves a touch over the thumb?
    return false;
  };

  _handlePanResponderGrant = (/*e: Object, gestureState: Object*/) => {
    this._previousLeft = this._getThumbLeft(this._getCurrentValue());
    this._fireChangeEvent('onSlidingStart');
  };

  _handlePanResponderMove = (e, gestureState) => {
    if (this.props.disabled) {
      return;
    }

    this._setCurrentValue(this._getValue(gestureState));
    this._fireChangeEvent('onValueChange');
  };

  _handlePanResponderRequestEnd(e, gestureState) {
    // Should we allow another component to take over this pan?
    return false;
  };

  _handlePanResponderEnd = (e, gestureState) => {
    if (this.props.disabled) {
      return;
    }

    this._setCurrentValue(this._getValue(gestureState));
    this._fireChangeEvent('onSlidingComplete');
  };

  _measureContainer = (x) => {
    this._handleMeasure('containerSize', x);
  };

  _measureTrack = (x) => {
    this._handleMeasure('trackSize', x);
  };

  _measureThumb = (x) => {
    this._handleMeasure('thumbSize', x);
  };

  _handleMeasure = (name, x) => {
    var {width, height} = x.nativeEvent.layout;
    var size = {width: width, height: height};

    var storeName = `_${name}`;
    var currentSize = this[storeName];
    if (currentSize && width === currentSize.width && height === currentSize.height) {
      return;
    }
    this[storeName] = size;

    if (this._containerSize && this._trackSize && this._thumbSize) {
      this.setState({
        containerSize: this._containerSize,
        trackSize: this._trackSize,
        thumbSize: this._thumbSize,
        allMeasured: true,
      })
    }
  };

  _getRatio = (value) => {
    return (value - this.props.minimumValue) / (this.props.maximumValue - this.props.minimumValue);
  };

  _getThumbLeft = (value) => {
    var ratio = this._getRatio(value);
    return ratio * (this.state.containerSize.width - this.state.thumbSize.width);
  };

  _getValue = (gestureState) => {
    var length = this.state.containerSize.width - this.state.thumbSize.width;
    var thumbLeft = this._previousLeft + gestureState.dx;

    var ratio = thumbLeft / length;

    if (this.props.step) {
      return Math.max(this.props.minimumValue,
        Math.min(this.props.maximumValue,
          this.props.minimumValue + Math.round(ratio * (this.props.maximumValue - this.props.minimumValue) / this.props.step) * this.props.step
        )
      );
    } else {
      return Math.max(this.props.minimumValue,
        Math.min(this.props.maximumValue,
          ratio * (this.props.maximumValue - this.props.minimumValue) + this.props.minimumValue
        )
      );
    }
  };

  _getCurrentValue = () => {
    return this.state.value.__getValue();
  };

  _setCurrentValue = (value) => {
    this.state.value.setValue(value);
  };

  _setCurrentValueAnimated = (value) => {
    var animationType   = this.props.animationType;
    var animationConfig = Object.assign(
      {},
      DEFAULT_ANIMATION_CONFIGS[animationType],
      this.props.animationConfig,
      {toValue : value}
    );

    Animated[animationType](this.state.value, animationConfig).start();
  };

  _fireChangeEvent = (event) => {
    if (this.props[event]) {
      this.props[event](this._getCurrentValue());
    }
  };

  _getTouchOverflowSize = () => {
    var state = this.state;
    var props = this.props;

    var size = {};
    if (state.allMeasured === true) {
      size.width = Math.max(0, props.thumbTouchSize.width - state.thumbSize.width);
      size.height = Math.max(0, props.thumbTouchSize.height - state.containerSize.height);
    }

    return size;
  };

  _getTouchOverflowStyle = () => {
    var {width, height} = this._getTouchOverflowSize();

    var touchOverflowStyle = {};
    if (width !== undefined && height !== undefined) {
      var verticalMargin = -height;
      touchOverflowStyle.marginTop = 0;
      touchOverflowStyle.marginBottom = verticalMargin;

      var horizontalMargin = -width / 2;
      touchOverflowStyle.marginLeft = horizontalMargin;
      touchOverflowStyle.marginRight = horizontalMargin;
    }

    if (this.props.debugTouchArea === true) {
      touchOverflowStyle.backgroundColor = 'orange';
      touchOverflowStyle.opacity = 0.5;
    }

    return touchOverflowStyle;
  };

  _thumbHitTest = (e) => {
    var nativeEvent = e.nativeEvent;
    var thumbTouchRect = this._getThumbTouchRect();
    return thumbTouchRect.containsPoint(nativeEvent.locationX, nativeEvent.locationY);
  };

  _getThumbTouchRect = () => {
    var state = this.state;
    var props = this.props;
    var touchOverflowSize = this._getTouchOverflowSize();

    return new Rect(
      touchOverflowSize.width / 2 + this._getThumbLeft(this._getCurrentValue()) + (state.thumbSize.width - props.thumbTouchSize.width) / 2,
      touchOverflowSize.height / 2 + (state.containerSize.height - props.thumbTouchSize.height) / 2,
      props.thumbTouchSize.width,
      props.thumbTouchSize.height
    );
  };

  _renderDebugThumbTouchRect = (thumbLeft) => {
    var thumbTouchRect = this._getThumbTouchRect();
    var positionStyle = {
      left: thumbLeft,
      top: thumbTouchRect.y,
      width: thumbTouchRect.width,
      height: thumbTouchRect.height,
    };

    return (
      <Animated.View
        style={[defaultStyles.debugThumbTouchArea, positionStyle]}
        pointerEvents='none'
      />
    );
  };

  _renderThumbImage = () => {
    var {thumbImageMax, thumbImage, thumbStyle, value} = this.props;

    if (!thumbImage) return;

    return <Image style={{width: thumbStyle.width, height: thumbStyle.height}} source={value < 100 ? thumbImage : thumbImageMax} resizeMode={'contain'}/>;
  };
}

var defaultStyles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'flex-start'
  },
  percentLeftText: {
    lineHeight: 40,
    position: 'absolute',
    left: 0,
    top: Platform.OS === 'ios' ? 0 : -11,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '500',
    zIndex: 9,
    backgroundColor: 'transparent'
  },
  percentRightText: {
    lineHeight: 40,
    position: 'absolute',
    right: 0,
    top: Platform.OS === 'ios' ? 0 : -11,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '500',
    zIndex: 3,
    backgroundColor: 'transparent'
  },
  defaultValueTrack: {
    height: 40,
    position: 'absolute',
    backgroundColor: '#30007c',
    top: 1,
    left: 1,
    zIndex: 0,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
  },
  track: {
    height: TRACK_SIZE,
    borderRadius: TRACK_SIZE / 2,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#30007c',
    zIndex: 1
  },
  thumb: {
    position: 'absolute',
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    zIndex: 2
  },
  touchArea: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 4
  },
  debugThumbTouchArea: {
    position: 'absolute',
    backgroundColor: 'green',
    opacity: 0.5,
  }
});