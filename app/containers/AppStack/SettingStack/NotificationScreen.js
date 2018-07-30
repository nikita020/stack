import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components'
import Icons from 'react-native-vector-icons/Ionicons'
import * as constants from '../../../../constants'
import { styles } from '../../../components/styles'

const ViewContainer = styled.View`
  flex: 1;
  width: ${constants.windowWidth};
  background-color: ${constants.colorViolet};
  height: ${constants.windowHeight}
`

const ContentLayout = styled.View`
  flex: 1
`

const ViewWithHeader = styled.View`
  backgroundColor: ${constants.headerColorViolet};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-vertical: 30;
`

const BigIcon = styled.Image`
  height: ${0.2 * constants.windowWidth};
  width: ${0.2 * constants.windowWidth};
`

const NotificationMenuLayout = styled.View`
  paddingHorizontal: 30;
  width: ${constants.windowWidth};
`

const NotificationItemLayout = styled.TouchableOpacity`
  alignItems: center;
  flexDirection: row;
  justifyContent: space-around;
  paddingVertical: 30;
  borderBottomWidth: 1;
  borderColor: #4c2db1
`

const NotificationIcons = styled.Image`
  height: 40;
  width: 40
`

const NotificationItemTitleAndDescription = styled.View`
  flexDirection: column;
`

const NotificationItemTitle = styled.Text`
  color: white;
  fontSize: 18;
`

const NotificationItemDescription = styled.Text`
  color: #96a4fd;
  fontSize: 16;
`

export default class NotificationScreen extends Component {
  render () {
    return (
      <ViewContainer>
        <ContentLayout>
          <ViewWithHeader>
            <BigIcon source={require('../../../assets/notifications-icon.png')}/>
          </ViewWithHeader>
          <NotificationMenuLayout>

            <NotificationItemLayout onPress={() => this.props.navigation.navigate({routeName: 'NotificationDetailScreen'})}>
              <NotificationIcons source={require('../../../assets/deposit-icon.png')}/>
              <NotificationItemTitleAndDescription>
                <NotificationItemTitle>Deposits</NotificationItemTitle>
                <NotificationItemDescription>Push notification and email</NotificationItemDescription>
              </NotificationItemTitleAndDescription>
              <Icons name={'ios-arrow-forward'} size={24} color={'#4c2db1'}/>
            </NotificationItemLayout>

            <NotificationItemLayout onPress={() => this.props.navigation.navigate({routeName: 'NotificationDetailScreen'})}>
              <NotificationIcons source={require('../../../assets/transactions-icon.png')}/>
              <NotificationItemTitleAndDescription>
                <NotificationItemTitle>Transactions</NotificationItemTitle>
                <NotificationItemDescription>Push notification and email</NotificationItemDescription>
              </NotificationItemTitleAndDescription>
              <Icons name={'ios-arrow-forward'} size={24} color={'#4c2db1'}/>
            </NotificationItemLayout>

            <NotificationItemLayout onPress={() => this.props.navigation.navigate({routeName: 'NotificationDetailScreen'})}>
              <NotificationIcons source={require('../../../assets/news-icons.png')}/>
              <NotificationItemTitleAndDescription>
                <NotificationItemTitle>News</NotificationItemTitle>
                <NotificationItemDescription>Push notification and email</NotificationItemDescription>
              </NotificationItemTitleAndDescription>
              <Icons name={'ios-arrow-forward'} size={24} color={'#4c2db1'}/>
            </NotificationItemLayout>

          </NotificationMenuLayout>
        </ContentLayout>
        <Image style={styles.backgroundBottom}
               source={require('../../../assets/bgr-bottom-2.png')}
               resizeMode={'contain'}/>
      </ViewContainer>
    )
  }
}