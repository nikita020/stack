import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components'
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

const TextScroll = styled.ScrollView`
  paddingVertical: 30;
  marginBottom: 30;
  paddingHorizontal: 20;
`

const TextTitle = styled.Text`
  color: white;
  font-size: 22;
  font-weight: bold;
  padding-bottom: 20;
`

const TextBody = styled.Text`
  color: white;
  font-size: 18;
  lineHeight: 30;
  padding-bottom: 25;
  background-color: transparent
`

export default class LegalScreen extends Component {
  render () {
    return (
      <ViewContainer>
        <ContentLayout>
          <ViewWithHeader>
            <BigIcon source={require('../../../assets/legal-icon.png')}/>
          </ViewWithHeader>
          <TextScroll>
            <TextTitle>6. Your Content and Conduct</TextTitle>
            <TextBody>As a YouTube account holder you may submit Content to the Service, including videos and user comments. You understand that YouTube does not guarantee any confidentiality with respect to any Content you submit.</TextBody>
            <TextBody>You shall be solely responsible for your own Content and the consequences of submitting and publishing your Content on the Service. You affirm, represent, and warrant that you own or have the necessary licenses, rights, consents, and permissions to publish Content you submit; and you license to YouTube all patent, trademark, trade secret, copyright or other proprietary rights in and to such Content for publication on the Service pursuant to these Terms of Service.</TextBody>
            <TextBody>For clarity, you retain all of your ownership rights in your Content. However, by submitting Content to YouTube, you hereby grant YouTube a worldwide, non-exclusive, royalty-free, sublicenseable and transferable license to</TextBody>
          </TextScroll>
        </ContentLayout>
        <Image style={styles.backgroundBottom} source={require('../../../assets/bgr-bottom-2.png')}
               resizeMode={'contain'}/>
      </ViewContainer>
    )
  }
}