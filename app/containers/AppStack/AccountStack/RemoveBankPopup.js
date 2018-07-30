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
`

const BankName = styled.Text`
  font-size: 18;
  color: rgba(255,255,255,0.8);
`

const ConfirmText = styled.View`
  paddingVertical: 40;
`

const ConfirmTextTitle = styled.Text`
  font-size: 26;
  color: white;
  text-align: center;
  font-weight: bold
`

const ConfirmTextBody = styled.Text`
  padding-vertical: 20;
  font-size: 20;
  text-align: center;
  color: rgba(255,255,255,0.8);
  margin-bottom: 30
`

const AcceptButton = styled.TouchableOpacity`
  width: ${constants.windowWidth * 0.9};
  height: 50;
  backgroundColor: white;
  justifyContent: center;
  alignItems: center;
  borderRadius: 5
`

const AcceptButtonLabel = styled.Text`
  color: ${constants.headerColorViolet};
  fontSize: 18;
  fontWeight: 700
`

const CancelButton = styled.TouchableOpacity`
  background-color: transparent;
  padding-top: 30;
  width: ${constants.windowWidth * 0.9}
`

const CancelLabel = styled.Text`
  color: rgba(255,255,255,0.5);
  font-size: 18;
  text-align: center;
  font-weight: bold
`

export default class RemoveBankPopup extends Component {
  render () {
    return (
      <ViewContainer>
        <ContentLayout>
          <ViewWithHeader>
            <BankName>Bank Name</BankName>
            <ConfirmText>
              <ConfirmTextTitle>Are you sure, you want to remove this bank:</ConfirmTextTitle>
              <ConfirmTextBody>*********9815</ConfirmTextBody>
              <AcceptButton onPress={() => this.props.navigation.popToTop({routeName: 'SettingScreen'})}>
                <AcceptButtonLabel>YES, PLEASE</AcceptButtonLabel>
              </AcceptButton>
              <CancelButton onPress={() => this.props.navigation.popToTop({routeName: 'SettingScreen'})}>
                <CancelLabel>CANCEL</CancelLabel>
              </CancelButton>
            </ConfirmText>
          </ViewWithHeader>
        </ContentLayout>
        <Image style={styles.backgroundBottom} source={require('../../../assets/bgr-bottom-2.png')}
               resizeMode={'contain'}/>
      </ViewContainer>
    )
  }
}
