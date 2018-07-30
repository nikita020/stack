import { StyleSheet, Dimensions, Platform } from 'react-native'
import { colors } from './index.style'

const IS_IOS = Platform.OS === 'ios'
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window')

function wp (percentage) {
  const value = (percentage * viewportWidth) / 100
  return Math.round(value)
}

const slideHeight = viewportHeight * 0.36
const slideWidth = wp(33)
const itemHorizontalMargin = wp(1)

export const sliderWidth = wp(45)
export const itemWidth = wp(25)

const entryBorderRadius = 8

export default StyleSheet.create({
  slideInnerContainer: {
    minWidth: itemWidth,
    height: 50,
    paddingHorizontal: itemHorizontalMargin,
    // paddingBottom: 18 // needed for shadow
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: 'white'
  },
  radiusMaskEven: {
    backgroundColor: colors.black
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 20 - entryBorderRadius,
    // paddingBottom: 20,
    paddingVertical: 10,
    // paddingHorizontal: 5,
    // backgroundColor: 'white',
    // borderBottomLeftRadius: entryBorderRadius,
    // borderBottomRightRadius: entryBorderRadius
  },
  textContainerEven: {
    backgroundColor: colors.black
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    width: wp(33),
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  titleEven: {
    color: 'white'
  },
  subtitle: {
    marginTop: 6,
    color: colors.gray,
    fontSize: 12,
    fontStyle: 'italic'
  },
  subtitleEven: {
    color: 'rgba(255, 255, 255, 0.7)'
  }
})
