import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native'
import { connect } from 'react-redux'


import Modal from 'react-native-modal'

import { styles } from '../../../components/styles'
import Button from '../../../components/Button'
import Carousel from '../../../lib/carousel/src/index'
import SliderEntry from '../../../lib/carousel/component/components/SliderEntry'
import { sliderWidth, itemWidth } from '../../../lib/carousel/component/styles/SliderEntry.style'

import * as constants from '../../../../constants'
import ViewContainer from '../../../components/ViewContainer'
import ScrollContainer from '../../../components/ScrollContainer'

import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import appActions from '../../../../redux/actions/appActions'

class HistoryScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  _toggleModalFilter = () => {
    this.props.toggleFiltersModal()
  }

  _renderItemWithParallax = ({item, index}, parallaxProps) => {
    return (
      <SliderEntry
        data={ item }
        parallaxProps={ parallaxProps }
      />
    )
  }

  renderModalFilters = () => {
    let timePeriod = [
      {
        title: 'All'
      },
      {
        title: 'This day'
      },
      {
        title: 'This week'
      },
      {
        title: 'This month'
      },
      {
        title: 'This year'
      }
    ]
    let transaction = [
      {
        title: 'All'
      },
      {
        title: 'Deposit'
      },
      {
        title: 'Withdrawal'
      }
    ]
    return (
      <Modal isVisible={ this.props.app.filtersModal }
             style={ styles.modalOpacityContainer }>
        <TouchableOpacity style={ styles.modalOpacityCloseBtn } onPress={ this._toggleModalFilter }>
          <Ionicons name={ 'md-close' } size={ 30 } color={ constants.colorWhite }/>
        </TouchableOpacity>
        <View style={ [styles.modalOpacityContent, {marginTop: constants.windowHeight * 0.1}] }>
          <Text style={ styles.textWhiteBig }>Filters</Text>

          <View>
            <Text style={ [styles.textWhite, {marginBottom: 20}] }>Time Period</Text>
            <ImageBackground source={ require('../../../assets/background-gradient-blue.png') } style={ {
              height: 50,
              width: constants.windowWidth * 0.9,
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 5,
            } } resizeMode={ 'contain' }>
              <Carousel
                ref={ c => this._slider1Ref = c }
                data={ timePeriod }
                renderItem={ this._renderItemWithParallax }
                sliderWidth={ constants.windowWidth * 0.5 }
                itemWidth={ constants.windowWidth * 0.3 }
                hasParallaxImages={ true }
                firstItem={ 0 }
                inactiveSlideScale={ 1 }
                inactiveSlideOpacity={ 0.2 }
                containerCustomStyle={ styles.slider }
                contentContainerCustomStyle={ styles.sliderContentContainer }
                loop={ true }
                loopClonesPerSide={ 2 }
                onSnapToItem={ (index) => this.setState({slider1ActiveSlide: index}) }
              />
            </ImageBackground>
          </View>

          <View>
            <Text style={ [styles.textWhite, {marginBottom: 20}] }>Transaction</Text>
            <ImageBackground source={ require('../../../assets/background-gradient.png') } style={ {
              height: 50,
              width: constants.windowWidth * 0.9,
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 5,
            } } resizeMode={ 'contain' }>
              <Carousel
                ref={ c => this._slider1Ref = c }
                data={ transaction }
                renderItem={ this._renderItemWithParallax }
                sliderWidth={ constants.windowWidth * 0.5 }
                itemWidth={ constants.windowWidth * 0.3 }
                hasParallaxImages={ true }
                firstItem={ 0 }
                inactiveSlideScale={ 1 }
                inactiveSlideOpacity={ 0.2 }
                containerCustomStyle={ styles.slider }
                contentContainerCustomStyle={ styles.sliderContentContainer }
                loop={ true }
                loopClonesPerSide={ 2 }
                onSnapToItem={ (index) => this.setState({slider1ActiveSlide: index}) }
              />
            </ImageBackground>
          </View>

          <Button
            style={ styles.vw90 }
            // onPress={ () => this.props.navigation.navigate('PinLoginScreen') }
            onPress={ () => console.log('submited') }
            title='FILTER'
          />

          <TouchableOpacity onPress={ () => console.log('clear') }>
            <Text style={ styles.textVioletSmall }>Clear</Text>
          </TouchableOpacity>

        </View>
      </Modal>
    )
  }

  renderItem = (item, index) => {
    return (
      <View style={ styles.historyCard } key={ index }>
        <View style={ [styles.historyCardContent, {width: constants.windowWidth - 50}] }>
          <View style={ [styles.historyCardHead, {backgroundColor: item.colorHeader}] }>
            <Text style={ styles.textWhite }>{ item.title }</Text>
            <Text style={ styles.textWhite }>{ item.value }</Text>
          </View>
          <View style={ [styles.historyCardBody, {backgroundColor: item.colorBody}] }>
            <SimpleLineIcons name={ 'clock' } size={ 14 } color={ constants.colorWhite }/>
            <Text style={ [styles.textOpacitySmall, {paddingLeft: 10}] }>{ item.date }</Text>
          </View>
        </View>
        <TouchableOpacity style={ styles.buttonHistoryCardContainer } onPress={() => this.props.navigation.navigate('HistoryDetailScreen')}>
          <View style={ styles.buttonHistoryCard }>
            <SimpleLineIcons name={ 'arrow-right' } size={ 14 } color={ item.colorHeader }/>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render () {
    const listPending = [
      {
        title: 'Deposit',
        value: '+ $7.00',
        date: 'May 9, 2018',
        colorHeader: constants.colorViolet4,
        colorBody: constants.colorViolet5
      },
      {
        title: 'Withdrawal',
        value: '- $10.00',
        date: 'May 8, 2018',
        colorHeader: constants.colorBlue2,
        colorBody: constants.colorBlue
      },
    ]
    const listRecent = [
      {
        title: 'Deposit',
        value: '+ $7.00',
        date: 'May 9, 2018',
        colorHeader: constants.colorGreen,
        colorBody: constants.colorGreen2
      },
      {
        title: 'Withdrawal',
        value: '- $10.00',
        date: 'May 8, 2018',
        colorHeader: constants.colorBlue3,
        colorBody: constants.colorBlue4
      },
    ]

    return ([
      <ViewContainer>
        <ScrollContainer style={ styles.backgroundTransparent }>

          <View style={ styles.historyCardBox }>
            <View style={ styles.historyCardBoxTitle }>
              <Text style={ styles.textWhite }>Pending</Text>
            </View>
            { listPending.map((item, index) => this.renderItem(item, index)) }
          </View>

          <View style={ styles.historyCardBox }>
            <View style={ styles.historyCardBoxTitle }>
              <Text style={ styles.textWhite }>Recent</Text>
            </View>
            { listRecent.map((item, index) => this.renderItem(item, index)) }
          </View>

        </ScrollContainer>
        <Image style={ styles.backgroundBottom } source={ require('../../../assets/bgr-bottom-2.png') }
               resizeMode={ 'contain' }/>
      </ViewContainer>,
      this.renderModalFilters()
    ])
  }
}
const mapStateToProps = state => ({
  app: state.app,
})

const mapDispatchToProps = dispatch => ({
  toggleFiltersModal: () => dispatch(appActions.toggleFiltersModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen)

