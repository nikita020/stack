import React, { Component } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import styled from 'styled-components'
import Icons from 'react-native-vector-icons/Ionicons'

import { Switch } from '../../../lib/switch'
import SliderEntry from '../../../lib/carousel/component/components/SliderEntry'
import Carousel from '../../../lib/carousel/src/index'
import { sliderWidth, itemWidth } from '../../../lib/carousel/component/styles/SliderEntry.style'
import * as constants from '../../../../constants'
import { styles } from '../../../components/styles'
import ScrollContainer from '../../../components/ScrollContainer'

const ViewContainer = styled.View`
  flex: 1;
  width: ${constants.windowWidth};
  background-color: ${constants.colorViolet};
  height: ${constants.windowHeight}
`

const ContentLayout = styled.View`
  flex: 1;
  width: ${constants.windowWidth};
`

const ViewWithHeader = styled.View`
  backgroundColor: ${constants.headerColorViolet};
  height: ${constants.windowHeight * 0.55};
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

const BigIcon = styled.Image`
  height: ${0.2 * constants.windowWidth};
  width: ${0.2 * constants.windowWidth};
  marginBottom: 30
`

const TitleNotification = styled.Text`
  color: #9f96e4;
  fontSize: 16;
  textAlign: center;
  paddingBottom: 30
`

const NotificationTypeLabel = styled.Text`
  color: white;
  textAlign: center;
  fontSize: 20;
  paddingBottom: 20
`

const PreviewContainer = styled.View`
  width: ${constants.windowWidth};
  paddingVertical: 30;
  paddingHorizontal: 20;
`

const PreviewLabel = styled.Text`
  color: white;
  textAlign: center;
  fontSize: 20;
  paddingBottom: 20
`

const NotificationPreviewContainer = styled.View`
  flexDirection: column;
`

const NotificationHeaderLayout = styled.View`
  height: 40;
  backgroundColor: #592db1;
  flexDirection: row;
  justifyContent: space-between;
  paddingVertical: 10;
  paddingHorizontal: 20;
  borderTopLeftRadius: 7;
  borderTopRightRadius: 7
`

const TimeNotification = styled.Text`
  color: #9f96e4;
  fontSize: 16
`

const NotificationBodyLayout = styled.View`
  backgroundColor: #4d23a1;
  flexDirection: column;
  paddingVertical: 10;
  paddingHorizontal: 20;
  borderBottomLeftRadius: 7;
  borderBottomRightRadius: 7
`

const NotificationHeadline = styled.Text`
  paddingBottom: 5;
  color: white;
  fontSize: 16;
  fontWeight: bold
`

const NotificationBody = styled.Text`
  color: #9e95e4;
  fontSize: 16;
  lineHeight: 24
`

export default class NotificationDetailScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      switchValue: false
    }
  }

  _renderItemWithParallax ({item, index}, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        parallaxProps={parallaxProps}
      />
    )
  }

  render () {
    let data = [
      {
        title: 'Email'
      },
      {
        title: 'Push'
      },
      {
        title: 'Notification'
      }]
    return (
      <ViewContainer>
        <ContentLayout>
          <ViewWithHeader>
            <TitleNotification>Deposits</TitleNotification>
            <BigIcon source={require('../../../assets/deposit-icon.png')}/>
            <Switch
              value={this.state.switchValue}
              containerStyle={{marginBottom: 30}}
              onValueChange={(val) => this.setState({switchValue: val})}
              disabled={false}
              activeText={'On'}
              inActiveText={'Off'}
              backgroundActive={'#2f0671'}
              backgroundInactive={'#2f0671'}
              circleActiveColor={'#33e783'}
              circleInActiveColor={'#4c2db1'}
              renderInsideCircle={() => <Text style={{
                color: this.state.switchValue ? 'white' : '#9f96e4',
                fontSize: 18
              }}>{this.state.switchValue ? 'ON' : 'OFF'}</Text>} // custom component to render inside the Switch circle (Text, Image, etc.)
              innerCircleStyle={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            />
            <NotificationTypeLabel>Notification type</NotificationTypeLabel>
            <ImageBackground
              source={require('../../../assets/background-gradient.png')}
              style={{
                height: 50,
                width: constants.windowWidth * 0.9,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 5,
              }}
              resizeMode={'contain'}
            >
              <Carousel
                ref={c => this._slider1Ref = c}
                data={data}
                renderItem={this._renderItemWithParallax}
                sliderWidth={constants.windowWidth * 0.5}
                itemWidth={constants.windowWidth * 0.3}
                hasParallaxImages={true}
                firstItem={0}
                inactiveSlideScale={1}
                inactiveSlideOpacity={0.2}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                loop={true}
                loopClonesPerSide={2}
                onSnapToItem={(index) => this.setState({slider1ActiveSlide: index})}
              />
            </ImageBackground>
          </ViewWithHeader>
          <ScrollContainer style={{...styles.backgroundTransparent, ...styles.vw100}}>
            <PreviewContainer>
              <PreviewLabel>Preview</PreviewLabel>
              <NotificationPreviewContainer>
                <NotificationHeaderLayout>
                  <Icons name={'ios-notifications'} color={'white'} size={20}/>
                  <TimeNotification>18 min ago</TimeNotification>
                </NotificationHeaderLayout>
                <NotificationBodyLayout>
                  <NotificationHeadline>Notification Headline 1</NotificationHeadline>
                  <NotificationBody>Sed faucibus orci et dolor viverra,
                    nec ultricies enim.</NotificationBody>
                </NotificationBodyLayout>
              </NotificationPreviewContainer>
            </PreviewContainer>
          </ScrollContainer>
        </ContentLayout>
        <Image style={styles.backgroundBottom}
               source={require('../../../assets/bgr-bottom-2.png')}
               resizeMode={'contain'}/>
      </ViewContainer>
    )
  }
}
