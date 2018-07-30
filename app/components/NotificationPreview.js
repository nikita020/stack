import React, {Component} from 'react';
import styled from 'styled-components'
import Icons from 'react-native-vector-icons/Ionicons'
import * as constants from '../../constants';

const NotificationPreviewContainer = styled.View`
  flexDirection: column;
`
const NotificationHeaderLayout = styled.View`
  height: 40;
  flexDirection: row;
  justifyContent: space-between;
  paddingVertical: 10;
  paddingHorizontal: 20;
  borderTopLeftRadius: 7;
  borderTopRightRadius: 7
`
const TimeNotification = styled.Text`
  fontSize: 16
`

const NotificationBodyLayout = styled.View`
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
  fontSize: 16;
  lineHeight: 24
`

var colorSchemes = {
  violet: {
    headerBackgroundColor: constants.colorVioletPrimary3,
    timeTextColor: constants.colorVioletSecondary2,
    bodyBackgroundColor: constants.colorVioletSecondary1,
    bodyTextColor: constants.colorVioletSecondary2
  },
  blue: {
    headerBackgroundColor: constants.colorBluePrimary,
    timeTextColor: constants.colorBlueSecondary2,
    bodyBackgroundColor: constants.colorBlueSecondary1,
    bodyTextColor: constants.colorBlueSecondary2
  },
  green: {
    headerBackgroundColor: constants.colorGreenPrimary,
    timeTextColor: constants.colorGreenSecondary2,
    bodyBackgroundColor: constants.colorGreenSecondary1,
    bodyTextColor: constants.colorGreenSecondary2
  },
  sea: {
    headerBackgroundColor: constants.colorSeaPrimary,
    timeTextColor: constants.colorSeaSecondary2,
    bodyBackgroundColor: constants.colorSeaSecondary1,
    bodyTextColor: constants.colorSeaSecondary2
  }
}

class NotificationPreview extends Component {
  render() {
    var {color, type, title, subTitle} = this.props
    var colorScheme = colorSchemes[color] ? colorSchemes[color] : colorSchemes['violet']
    var notificationType = type ? type : 'notifications'

    return (
      <NotificationPreviewContainer>
        <NotificationHeaderLayout style={{backgroundColor: colorScheme.headerBackgroundColor}}>
          <Icons name={`ios-${notificationType}`} color={'white'} size={20}/>
          <TimeNotification style={{color: colorScheme.timeTextColor}}>18 min ago</TimeNotification>
        </NotificationHeaderLayout>
        <NotificationBodyLayout style={{backgroundColor: colorScheme.bodyBackgroundColor}}>
          <NotificationHeadline>Notification Headline 1</NotificationHeadline>
          <NotificationBody style={{color: colorScheme.bodyTextColor}}>Sed faucibus orci et dolor viverra,
            nec ultricies enim.</NotificationBody>
        </NotificationBodyLayout>
      </NotificationPreviewContainer>
    )
  }
}

export default NotificationPreview
