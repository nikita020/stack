import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'

import styled from 'styled-components'
// import ViewContainer from '../../../components/ViewContainer'
import { styles } from '../../../components/styles'
import ButtonGroupCard from '../../../components/ButtonGroupCardCustom'
import CardWrapper from '../../../components/CardWrapper'
import API from '../../../lib/api'

import * as constants from '../../../../constants'

const ViewContainer = styled.ScrollView`
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
  width: ${constants.windowWidth};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20;
`

const TotalStaticLabel = styled.Text`
  position: relative;
  font-size: 18;
  text-align: center;
  color: #9f96e4;
  padding-bottom: 20
`

const StatisticsValueView = styled.View`
  flex-direction: row;
  align-items: center;
  paddingBottom: 20
`
const DollarValue = styled.Text`
  color: white;
  fontWeight: bold;
  fontSize: 44
`

const CentValue = styled.Text`
  color: #9f96e4;
  fontWeight: bold;
  fontSize: 44
`

const Chart = styled.Image`
  height: ${constants.windowHeight * 0.5};
  width: ${constants.windowWidth}
`

const TimeOfChart = styled.Text`
  fontSize: 16;
  color: white;
  textAlign: center;
  fontWeight: bold;
  paddingBottom: 5
`

const PercentValue = styled.Text`
  color: #9f96e4;
  textAlign: center;
  fontSize: 16;
  paddingBottom: 40
`

const StatLabel = styled.Text`
  color: white;
  textAlign: center;
  fontSize: 22;
  paddingTop: 40;
  paddingBottom: 20
  backgroundColor: transparent
`

const StatDescription = styled.Text`
  color: #9f96e4;
  textAlign: center;
  fontSize: 16;
  paddingBottom: 20;
  lineHeight: 30;
  backgroundColor: transparent
`

const StatLayout = styled.View`
  paddingHorizontal: 20;
  width: ${constants.windowWidth};
  flexDirection: row;
  justifyContent: space-between;
  backgroundColor: transparent;
  paddingBottom: 60
`

const StatColumn = styled.View`
  flexDirection: column;
  width: ${constants.windowWidth / 2  - 30};
  backgroundColor: transparent
`

const StatItemLayout = styled.View`
  borderBottomWidth: 1;
  borderColor: #4c2db1;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  paddingVertical: 20;
  backgroundColor: transparent
`

const StatItemLabel = styled.Text`
  color: white;
  fontSize: 13;
  fontWeight: bold;
  backgroundColor: transparent
`

const StatItemValue = styled.Text`
  fontSize: 13;
  color: #33e783;
  fontWeight: bold;
  backgroundColor: transparent
`

export default class PerformanceScreen extends React.Component {
  static navigationOptions = {title: 'Performance'}

  constructor (props) {
    super(props)
    this.state = {
      totalEstimatedBalance: 1242.12,
      totalInvestment: 1002.43,
      totalPercentGainLoss: 23.91,
      totalSpareChange: 120.42,
      totalWithdrawn: 0,
      totalGainLoss: 239.57,
      selectedIndex: 0,
      statTime: 'total',
    }
    this.percentGainLossSign = this.percentGainLossSign.bind(this)
    this.totalGainLossSign = this.totalGainLossSign.bind(this)
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
    switch (selectedIndex) {
      case 0:
        this.setState({statTime: 'total'})
        break
      case 1:
        this.setState({statTime: 'daily'})
        break
      case 2:
        this.setState({statTime: 'weekly'})
        break
      case 3:
        this.setState({statTime: 'monthly'})
        break
      case 4:
        this.setState({statTime: 'yearly'})
        break
    }
  }

  percentGainLossSign () {
    if (this.state.totalPercentGainLoss > 0) {
      return <Text style={styles.textVioletSmall}>+%{this.state.totalPercentGainLoss}</Text>
    } else if (this.state.totalPercentGainLoss < 0) {
      return <Text style={styles.textVioletSmall}>-%{this.state.totalPercentGainLoss}</Text>
    } else if (this.state.totalPercentGainLoss === 0) {
      return <Text style={styles.textVioletSmall}>%{this.state.totalPercentGainLoss}</Text>
    }
  }

  totalGainLossSign () {
    if (this.state.totalGainLoss > 0) {
      return <Text style={styles.textVioletSmall}>+${this.state.totalGainLoss}</Text>
    } else if (this.state.totalGainLoss < 0) {
      return <Text style={styles.textVioletSmall}>-${this.state.totalGainLoss}</Text>
    } else if (this.state.totalGainLoss === 0) {
      return <Text style={styles.textVioletSmall}>${this.state.totalGainLoss}</Text>
    }
  }

  //TODO render different balances for each time frame

  render () {
    const {selectedIndex} = this.state
    const buttons = ['Total', '1D', '1W', '1M', '1Y']
    return (
      <ViewContainer>
        <ContentLayout>
          <ViewWithHeader>
            <TotalStaticLabel>Your total statistics</TotalStaticLabel>
            <StatisticsValueView>
              <DollarValue>$1234</DollarValue>
              <CentValue>.56</CentValue>
            </StatisticsValueView>
            <TimeOfChart>1 Month</TimeOfChart>
            <PercentValue>-8.86 (+2.95%)</PercentValue>
            <Chart source={require('../../../assets/chart.png')} resizeMode={'cover'}/>
          </ViewWithHeader>
        </ContentLayout>
        <ButtonGroupCard
          buttonData={buttons}
          defaultActive={ 1 }
          containerStyle={{
            width: constants.windowWidth * 0.9,
            marginTop: -36,
            alignSelf: 'center'
          }}
          backgroundColor={constants.headerColorViolet}
        />
        <StatLabel>Stats</StatLabel>
        <StatDescription>{`All stat related with you\nStack account`}</StatDescription>

        <StatLayout>
          <StatColumn>
            <StatItemLayout>
              <StatItemLabel>% GAIN/LOSS</StatItemLabel>
              <StatItemValue>+ 4.5%</StatItemValue>
            </StatItemLayout>
            <StatItemLayout>
              <StatItemLabel>INVESTED</StatItemLabel>
              <StatItemValue>$1000</StatItemValue>
            </StatItemLayout>
            <StatItemLayout>
              <StatItemLabel>SPARE CHANGE</StatItemLabel>
              <StatItemValue>$0.0</StatItemValue>
            </StatItemLayout>
          </StatColumn>
          <StatColumn>
            <StatItemLayout>
              <StatItemLabel>% GAIN/LOSS</StatItemLabel>
              <StatItemValue>+$1500</StatItemValue>
            </StatItemLayout>
            <StatItemLayout>
              <StatItemLabel>WITHDRAW</StatItemLabel>
              <StatItemValue>$0.0</StatItemValue>
            </StatItemLayout>
            <StatItemLayout>
              <StatItemLabel>BALANCE</StatItemLabel>
              <StatItemValue>$1234.56</StatItemValue>
            </StatItemLayout>
          </StatColumn>
        </StatLayout>

        <Image style={ [styles.backgroundBottom, {height: 1261/1125 * constants.windowWidth}] } source={require('../../../assets/bgr-bottom-3.png')}
               resizeMode={'contain'}/>
      </ViewContainer>
    )
  }
}
