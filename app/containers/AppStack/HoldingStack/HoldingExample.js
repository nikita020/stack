import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import * as Progress from 'react-native-progress'

import styled from 'styled-components'
import { styles } from '../../../components/styles'
import ButtonGroupCard from '../../../components/ButtonGroupCardCustom'

import * as constants from '../../../../constants'
import { windowWidth } from '../../../../constants'

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
  backgroundColor: ${constants.headerColorDarkBlue};
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
  color: ${constants.colorOpacity};
  fontWeight: bold;
  fontSize: 44
`

const Chart = styled.Image`
  height: ${866 / 1125 * constants.windowWidth};
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
  color: ${constants.colorOpacity};
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
  color: ${constants.colorViolet1};
  textAlign: center;
  fontSize: 14;
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
  width: ${constants.windowWidth / 2 - 30};
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

const ViewAboutCoin = styled.View`
  width: ${constants.windowWidth};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20;
  padding-bottom: 50
`
const ViewAboutCoinTitleBox = styled.View`
  position: relative;
  width: ${constants.windowWidth};
  height: ${constants.windowWidth * 0.3};
  justify-content: center;
  align-items: center;
`
const ViewAboutCoinTitle = styled.Text`
  position: absolute;
  bottom: ${(constants.windowWidth * 0.3) / 6};
  width: ${constants.windowWidth};
  color: ${constants.colorWhite};
  text-align: center;
  font-family: 'Avenir';
  font-size: 18;
  font-weight: 500;
  background-color: transparent
`

export default class HoldingExample extends Component {
  static navigationOptions = ({navigation}) => ({
    title: Platform.OS === 'ios' ? <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        width: windowWidth / 2,
        backgroundColor: 'transparent'
      }}>
        <Text style={styles.textWhite}>{navigation.state.params.coinData.symbol ? navigation.state.params.coinData.symbol : "BTC"}</Text>
        <Text style={styles.textOpacitySmall}>{navigation.state.params.coinData.name ? navigation.state.params.coinData.name : "Bitcoin"}</Text>
      </View>
      :
      `${navigation.state.params.coinData.symbol ? navigation.state.params.coinData.symbol : 'BTC'} - ${navigation.state.params.coinData.name ? navigation.state.params.coinData.name : 'Bitcoin'}`,
    headerRight: <Image source={ navigation.state.params.coinData.symbol ? constants.coinLogos[navigation.state.params.coinData.symbol] : require('../../../assets/btc.png')}
                        style={[styles.coinsAvatar, {marginRight: 20}]}/>
  })

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
      indeterminate: true,
      progress: 0,
    }
    this.percentGainLossSign = this.percentGainLossSign.bind(this)
    this.totalGainLossSign = this.totalGainLossSign.bind(this)
    this.updateIndex = this.updateIndex.bind(this)
  }

  animate = () => {
    let progress = 0
    this.setState({progress})
    setTimeout(() => {
      this.setState({indeterminate: false, progress: 0.3})
    }, 500)
  }

  componentDidMount () {
    this.animate()
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
    }
    else if (this.state.totalPercentGainLoss < 0) {
      return <Text style={styles.textVioletSmall}>-%{this.state.totalPercentGainLoss}</Text>
    }
    else if (this.state.totalPercentGainLoss === 0) {
      return <Text style={styles.textVioletSmall}>%{this.state.totalPercentGainLoss}</Text>
    }
  }

  totalGainLossSign () {
    if (this.state.totalGainLoss > 0) {
      return <Text style={styles.textVioletSmall}>+${this.state.totalGainLoss}</Text>
    }
    else if (this.state.totalGainLoss < 0) {
      return <Text style={styles.textVioletSmall}>-${this.state.totalGainLoss}</Text>
    }
    else if (this.state.totalGainLoss === 0) {
      return <Text style={styles.textVioletSmall}>${this.state.totalGainLoss}</Text>
    }
  }

  _renderItem = (item) => {
    return (
      <View style={[styles.historyCard, {width: constants.windowWidth * 0.7}]} key={item.index}>
        <View style={[styles.historyCardContent, {width: constants.windowWidth * 0.7}]}>
          <View style={[styles.historyCardHeadCustom, {backgroundColor: item.item.colorHeader}]}>
            <Text style={[styles.textWhite, {textAlign: 'left', marginBottom: 10}]}>{item.item.title}</Text>
            <Text style={[styles.textOpacityVerySmall, {textAlign: 'left'}]}>{item.item.description}</Text>
          </View>
          <View style={[styles.historyCardBody, {backgroundColor: item.item.colorBody}]}>
            <SimpleLineIcons name={'clock'} size={14} color={constants.colorWhite}/>
            <Text style={[styles.textOpacitySmall, {paddingLeft: 10}]}>{item.item.date}</Text>
          </View>
        </View>
        <TouchableOpacity style={[styles.buttonHistoryCardContainer, {right: 20}]}
                          onPress={() => console.log('clicked...')}>
          <View style={styles.buttonHistoryCard}>
            <SimpleLineIcons name={'arrow-right'} size={14} color={item.item.colorHeader}/>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  renderHistoryRowItem = (item, index, noBorder) => {
    return (
      <View style={[styles.historyRowItem, {
        width: (constants.windowWidth * 0.85) / 2,
        borderBottomWidth: noBorder === true ? 0 : 1
      }]} key={index}>
        <Text style={styles.textWhiteSmall}>{item.symbol}</Text>
        <Text style={item.value === '-' ? styles.textWhiteSmall : styles.textGreenSmall}>{item.value}</Text>
      </View>
    )
  }

  renderList = () => {
    const listCoins = [
      {
        symbol: 'OPEN',
        value: '297.50',
      },
      {
        symbol: 'VOLUME',
        value: '4.89 M',
      },
      {
        symbol: 'HIGH',
        value: '305.98',
      },
      {
        symbol: 'AVG VOLUME',
        value: '6.93 M',
      },
      {
        symbol: 'LOW',
        value: '305.98',
      },
      {
        symbol: 'MKT CAP',
        value: '6.93 M',
      },
      {
        symbol: '52 WK HIGH',
        value: '305.98',
      },
      {
        symbol: 'P/E RADIO',
        value: '-',
      },
      {
        symbol: '52 WK LOW',
        value: '305.98',
      },
      {
        symbol: 'DIV/YIELD RADIO',
        value: '0.00',
      }
    ]

    let items = []

    listCoins.map((item, index) => {
      if (index % 2 === 0 || items.length === 0) {
        items.push([item])
      }
      else {
        items[items.length - 1].push(item)
      }
    })
    console.log('items', items)

    return items.map((item, index) =>
      <View style={[styles.historyRow, styles.vw90]} key={index}>
        {
          item.map((i, j) => this.renderHistoryRowItem(i, j, index === items.length - 1))
        }
      </View>
    )
  }

  render () {
    const {selectedIndex} = this.state
    const buttons = ['Total', '1D', '1W', '1M', '1Y']
    const listCarousel = [
      {
        title: 'Ripple: \nThe Banker Coin Is Dead',
        description: 'Many people in the cryptocurrency\n' +
        'community are extremely\n' +
        'anti-establishment,',
        date: 'May 8, 2018',
        colorHeader: constants.colorBlue2,
        colorBody: constants.colorBlue
      },
      {
        title: 'Ripple: \nThe Banker Coin Is Dead',
        description: 'Many people in the cryptocurrency\n' +
        'community are extremely\n' +
        'anti-establishment,',
        date: 'May 9, 2018',
        colorHeader: constants.colorViolet4,
        colorBody: constants.colorViolet5
      },
      {
        title: 'Ripple: \nThe Banker Coin Is Dead',
        description: 'Many people in the cryptocurrency\n' +
        'community are extremely\n' +
        'anti-establishment,',
        date: 'May 8, 2018',
        colorHeader: constants.colorGreen,
        colorBody: constants.colorGreen2
      },
      {
        title: 'Ripple: \nThe Banker Coin Is Dead',
        description: 'Many people in the cryptocurrency\n' +
        'community are extremely\n' +
        'anti-establishment,',
        date: 'May 9, 2018',
        colorHeader: constants.colorBlue3,
        colorBody: constants.colorBlue4
      },
    ]
    return (
      <ViewContainer>
        <ContentLayout>
          <ViewWithHeader>
            <StatisticsValueView>
              <DollarValue>$1234</DollarValue>
              <CentValue>.56</CentValue>
            </StatisticsValueView>
            <TimeOfChart>1 Month</TimeOfChart>
            <PercentValue>-8.86 (+2.95%)</PercentValue>
            <Chart source={require('../../../assets/chart-2.png')} resizeMode={'cover'}/>
          </ViewWithHeader>
        </ContentLayout>
        <ButtonGroupCard
          buttonData={buttons}
          defaultActive={1}
          containerStyle={{
            width: constants.windowWidth * 0.9,
            marginTop: -36,
            alignSelf: 'center'
          }}
          backgroundColor={constants.colorBlue}
        />
        <StatLabel>Newses</StatLabel>
        <StatDescription>{`All latest newses regarding\n XRP market`}</StatDescription>

        <Carousel
          layout={'default'}
          ref={(c) => { this._carousel = c }}
          data={listCarousel}
          renderItem={this._renderItem}
          itemWidth={windowWidth * 0.7}
          sliderWidth={windowWidth}
        />

        <ViewAboutCoin>
          <ViewAboutCoinTitleBox>
            <Image
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: constants.windowWidth * 0.3,
                height: constants.windowWidth * 0.3
              }}
              source={require('../../../assets/XRP-logo-background.png')}
              resizeMode={'contain'}
            />
            <ViewAboutCoinTitle>About Ripple</ViewAboutCoinTitle>
          </ViewAboutCoinTitleBox>
          <Text style={[styles.vw90, styles.textVioletSmall, {marginBottom: 10}]}>
            Ripple provides one frictionless experience to send money globally using the power of blockchain.
          </Text>
          <Text style={[styles.vw90, styles.textVioletSmall]}>
            By joining Ripple’s growing, global network, financial institutions can process their customers’ payments
            anywhere in the world instantly, reliably and cost-effectively.
          </Text>
        </ViewAboutCoin>

        <StatLabel>Stats</StatLabel>
        <StatDescription>{`Fresh XRP Stats`}</StatDescription>
        <View style={{width: windowWidth, justifyContent: 'center', alignItems: 'center', marginBottom: 40}}>
          {this.renderList()}
        </View>
        <StatLabel>Stats</StatLabel>

        <TouchableOpacity onPress={() => console.log('clicked')} style={{marginBottom: 40}}>
          <View style={styles.coinsItemContainer}>
            <View style={styles.coinsItem}>
              <View style={styles.coinsItemLeft}>
                <Image source={require('../../../assets/xrp.png')} style={styles.coinsAvatar}/>
                <View style={styles.coinsItemName}>
                  <Text style={[styles.textWhite, {textAlign: 'left'}]}>XRP</Text>
                  <Text style={[styles.textVioletVerySmall, {textAlign: 'left'}]}>Ripple</Text>
                </View>
              </View>
              <View style={styles.coinsItemRight}>
                <Progress.Circle
                  progress={this.state.progress}
                  indeterminate={this.state.indeterminate}
                  size={14}
                  color={constants.colorWhite}
                  thickness={2}
                  unfilledColor={constants.colorViolet1}
                  borderWidth={0}
                />
                <Text style={styles.textVioletVerySmall}>
                  25%
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('clicked')} style={{marginBottom: 50}}>
          <Text style={styles.textVioletSmall}>Visit Whitepaper</Text>
        </TouchableOpacity>

        <Image style={[styles.backgroundBottom, {height: 1261 / 1125 * windowWidth}]}
               source={require('../../../assets/bgr-bottom-3.png')}
               resizeMode={'contain'}/>
      </ViewContainer>
    )
  }
}
