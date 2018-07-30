import React, { Component } from 'react'
import {
  Text,
  View,
  Alert,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Platform
} from 'react-native'
import ViewContainer from '../../../components/ViewContainer'
import { styles } from '../../../components/styles'
import Swiper from 'react-native-swiper'
import firebase from 'react-native-firebase'

import PortfolioCore from '../../AuthenticationStack/PortfolioCore'
import PortfolioDuo from '../../AuthenticationStack/PortfolioDuo'
import PortfolioCustom from '../../AuthenticationStack/PortfolioCustom'
import { windowWidth } from '../../../../constants'

export default class PortfolioScreen extends Component {
  static navigationOptions = {title: 'Portfolio'}

  constructor (props) {
    super(props)
    this.state = {
      currentPortfolio: '',
      customBTC: 25,
      customETH: 25,
      customXRP: 0,
      customBCC: 0,
      customLTC: 25,
      customADA: 0,
      customXLM: 0,
      customNEO: 25,
      customEOS: 0,
      customIOTA: 0,
      customDASH: 0,
      customXMR: 0,
      customLSK: 0,
      customETC: 0,
      customTRX: 0,
      customQTUM: 0,
      customBTG: 0,
      customICX: 0,
      customOMG: 0,
      customZEC: 0,
      customNANO: 0,
      customSTEEM: 0,
      swiperEnabled: true,
    }
    this._onSubmitA = this._onSubmitA.bind(this)
    this._onSubmitB = this._onSubmitB.bind(this)
    this._onSubmitC = this._onSubmitC.bind(this)
    this._onSubmitD = this._onSubmitD.bind(this)
    this._onSubmitE = this._onSubmitE.bind(this)
    this._onSubmitF = this._onSubmitF.bind(this)
    this.startSlider = this.startSlider.bind(this)
    this.endSlider = this.endSlider.bind(this)
    this.currentPortfolioA = this.currentPortfolioA.bind(this)
    this.currentPortfolioB = this.currentPortfolioB.bind(this)
    this.currentPortfolioC = this.currentPortfolioC.bind(this)
    this.currentPortfolioD = this.currentPortfolioD.bind(this)
    this.currentPortfolioE = this.currentPortfolioE.bind(this)
    this.currentPortfolioF = this.currentPortfolioF.bind(this)
  }

//TODO listen for portfolio type
//TODO finish saving portfolios to database
  // componentWillMount(){
  //   firebase.database().ref('/users/' + global.user.uid + '/portfolio').once('value').then(function(snapshot){
  //     this.setState({currentPortfolio: snapshot.val()})
  //   })
  // }

  startSlider () {
    this.setState({
      swiperEnabled: false
    })
  }

  endSlider () {
    this.setState({
      swiperEnabled: true
    })
  }

  _onSubmitA () {
    Alert.alert(
      'Great!',
      'Please confirm that you would like to choose the conservative portfolio. You will use this portfolio from now on.',
      [
        {text: 'Cancel', onPress: () => console.log('canceled')},
        {
          text: 'Confirm',
          onPress: () => firebase.database().ref('/users/' + global.user.uid + '/portfolio').update({portfolioType: 'A',})
        },
      ],
      {cancelable: true}
    )
  }

  _onSubmitB () {
    Alert.alert(
      'Great!',
      'Please confirm that you would like to choose the moderately conservative portfolio. You will use this portfolio from now on.',
      [
        {text: 'Cancel', onPress: () => console.log('canceled')},
        {
          text: 'Confirm', onPress: () => firebase.database().ref('/users/' + global.user.uid + '/portfolio').update({
          portfolioType: 'B',
        })
        },
      ],
      {cancelable: true}
    )
  }

  _onSubmitC () {
    Alert.alert(
      'Great!',
      'Please confirm that you would like to choose the moderate portfolio. You will use this portfolio from now on.',
      [
        {text: 'Cancel', onPress: () => console.log('canceled')},
        {
          text: 'Confirm', onPress: () => firebase.database().ref('/users/' + global.user.uid + '/portfolio').update({
          portfolioType: 'C',
        })
        },
      ],
      {cancelable: true}
    )
  }

  _onSubmitD () {
    Alert.alert(
      'Great!',
      'Please confirm that you would like to choose the moderately aggressive portfolio. You will use this portfolio from now on.',
      [
        {text: 'Cancel', onPress: () => console.log('canceled')},
        {
          text: 'Confirm', onPress: () => firebase.database().ref('/users/' + global.user.uid + '/portfolio').update({
          portfolioType: 'D',
        })
        },
      ],
      {cancelable: true}
    )
  }

  _onSubmitE () {
    Alert.alert(
      'Great!',
      'Please confirm that you would like to choose the aggressive portfolio. You will use this portfolio from now on.',
      [
        {text: 'Cancel', onPress: () => console.log('canceled')},
        {
          text: 'Confirm', onPress: () => firebase.database().ref('/users/' + global.user.uid + '/portfolio').update({
          portfolioType: 'E',
        })
        },
      ],
      {cancelable: true}
    )
  }

  _onSubmitF () {
    Alert.alert(
      'Great!',
      'Please confirm that you would like to choose your custom portfolio. You will use this portfolio from now on.',
      [
        {text: 'Cancel', onPress: () => console.log('canceled')},
        {
          text: 'Confirm', onPress: () => firebase.database().ref('/users/' + global.user.uid + '/portfolio').update({
          portfolioType: 'F',
        })
        },
      ],
      {cancelable: true}
    )
  }

  currentPortfolioA () {
    if (this.state.currentPortfolio == 'A') {
      return <Text style={ styles.textTitle }>(Currently selected)</Text>
    }
    else {
      return null
    }
  }

  currentPortfolioB () {
    if (this.state.currentPortfolio == 'B') {
      return <Text style={ styles.textTitle }>(Currently selected)</Text>
    }
    else {
      return null
    }
  }

  currentPortfolioC () {
    if (this.state.currentPortfolio == 'C') {
      return <Text style={ styles.textTitle }>(Currently selected)</Text>
    }
    else {
      return null
    }
  }

  currentPortfolioD () {
    if (this.state.currentPortfolio == 'D') {
      return <Text style={ styles.textTitle }>(Currently selected)</Text>
    }
    else {
      return null
    }
  }

  currentPortfolioE () {
    if (this.state.currentPortfolio == 'E') {
      return <Text style={ styles.textTitle }>(Currently selected)</Text>
    }
    else {
      return null
    }
  }

  currentPortfolioF () {
    if (this.state.currentPortfolio == 'F') {
      return <Text style={ styles.textTitle }>(Currently selected)</Text>
    }
    else {
      return null
    }
  }

  //TODO Assign more colors, change portfolio weights
  //TODO Create Pop-ups to learn more about portfolio

  render () {
    var customData = [
      {x: 'BTC', y: this.state.customBTC},
      {x: 'ETH', y: this.state.customETH},
      {x: 'LTC', y: this.state.customLTC},
      {x: 'NEO', y: this.state.customNEO},
      {x: 'XRP', y: this.state.customXRP},
      {x: 'BCC', y: this.state.customBCC},
      {x: 'ADA', y: this.state.customADA},
      {x: 'XLM', y: this.state.customXLM},
      {x: 'EOS', y: this.state.customEOS},
      {x: 'IOTA', y: this.state.customIOTA},
      {x: 'DASH', y: this.state.customDASH},
      {x: 'XMR', y: this.state.customXMR},
      {x: 'LSK', y: this.state.customLSK},
      {x: 'ETC', y: this.state.customETC},
      {x: 'TRX', y: this.state.customTRX},
      {x: 'QTUM', y: this.state.customQTUM},
      {x: 'BTG', y: this.state.customBTG},
      {x: 'ICX', y: this.state.customICX},
      {x: 'OMG', y: this.state.customOMG},
      {x: 'ZEC', y: this.state.customZEC},
      {x: 'NANO', y: this.state.customNANO},
      {x: 'STEEM', y: this.state.customSTEEM},
    ]

    if (isNaN((this.state.customBTC) / (this.state.customBTC + this.state.customETH + this.state.customLTC + this.state.customNEO)) == true) {
      var percentBTC = 0
      var percentETH = 0
      var percentLTC = 0
      var percentNEO = 0
    }
    else {
      var percentBTC = (this.state.customBTC) / (this.state.customBTC + this.state.customETH + this.state.customLTC + this.state.customNEO) * 100
      var percentETH = (this.state.customETH) / (this.state.customBTC + this.state.customETH + this.state.customLTC + this.state.customNEO) * 100
      var percentLTC = (this.state.customLTC) / (this.state.customBTC + this.state.customETH + this.state.customLTC + this.state.customNEO) * 100
      var percentNEO = (this.state.customNEO) / (this.state.customBTC + this.state.customETH + this.state.customLTC + this.state.customNEO) * 100
    }

    const sampleData = [
      {x: 'BTC', y: 40.75},
      {x: 'ETH', y: 21.86},
      {x: 'XRP', y: 10.6},
      {x: 'BCC', y: 6.13},
      {x: 'LTC', y: 2.87},
      {x: 'ADA', y: 2.49},
      {x: 'XLM', y: 2},
      {x: 'NEO', y: 2.55},
      {x: 'EOS', y: 1.6},
      {x: 'IOTA', y: 1.39},
      {x: 'DASH', y: 1.32},
      {x: 'XMR', y: 1.08},
      {x: 'LSK', y: .9},
      {x: 'ETC', y: .8},
      {x: 'TRX', y: .76},
      {x: 'QTUM', y: .58},
      {x: 'BTG', y: .56},
      {x: 'ICX', y: .43},
      {x: 'OMG', y: .40},
      {x: 'ZEC', y: .37},
      {x: 'NANO', y: .29},
      {x: 'STEEM', y: .27},
    ]

    const sampleDataB = [
      {x: 'BTC', y: (2 / 3)},
      {x: 'ETH', y: (1 / 3)},
    ]

    return (
      <ViewContainer>
        <Swiper
          style={ Platform.OS === 'android' ? {flex: 1, width: windowWidth} : {}}
          showsPagination={ true }
          ref={ 'rSlidePortfolio' }
          loop={ false }
          dotColor='#ffffff'
          activeDotColor='#2bbd7e'
          scrollEnabled={ this.state.swiperEnabled }
        >
          <View style={ styles.formsPortfolio }>
            <PortfolioCore onSubmit={ this._onSubmitA } navigation={ this.props.navigation }/>
          </View>

          <View style={ styles.formsPortfolio }>
            <PortfolioDuo onSubmit={ this._onSubmitA } navigation={ this.props.navigation }/>
          </View>

          <View style={ styles.formsPortfolio }>
            <PortfolioCustom onSubmit={ this._onSubmitF } navigation={ this.props.navigation }/>
          </View>

          { /*<View style={ styles.formsPortfolio }>*/ }
          { /*<Text style={ styles.textTitle }>Coming Soon!</Text>*/ }
          { /*<this.currentPortfolioB/>*/ }
          { /*<Svg width={ 300 } height={ 300 }>*/ }
          { /*<VictoryPie*/ }
          { /*standalone={ false }*/ }
          { /*width={ 300 } height={ 300 }*/ }
          { /*data={ sampleData }*/ }
          { /*innerRadius={ 85 }*/ }
          { /*labels={ () => null }*/ }
          { /*colorScale={ ['tomato', 'cyan', 'gold', 'navy', 'salmon'] }*/ }
          { /*/>*/ }
          { /*<Image*/ }
          { /*x="25%"*/ }
          { /*y="10%"*/ }
          { /*width="50%"*/ }
          { /*height="80%"*/ }
          { /*preserveAspectRatio="xMidYMid"*/ }
          { /*opacity="1"*/ }
          { /*href={ require('../../../assets/startup.png') }*/ }
          { /*/>*/ }
          { /*</Svg>*/ }
          { /*<TouchableOpacity style={ {marginBottom: '5%'} }>*/ }
          { /*<Text style={ styles.textVioletSmall }>Learn more about upcoming portfolios</Text>*/ }
          { /*</TouchableOpacity>*/ }
          { /*<Button*/ }
          { /*containerViewStyle={ {width: '90%'} }*/ }
          { /*fontFamily='Avenir'*/ }
          { /*fontSize={ 20 }*/ }
          { /*disabled={ true }*/ }
          { /*color='#ffffff'*/ }
          { /*buttonStyle={ styles.buttonPortfolio }*/ }
          { /*title='More portfolios soon!'/>*/ }
          { /*</View>*/ }

        </Swiper>

      </ViewContainer>
    )
  }
}
// TODO UNUSED portfolios for now
// <View style={styles.formsPortfolio}>
//   <Text style={styles.textTitle}>Conservative</Text>
//   <this.currentPortfolioA/>
//   <Svg width={300} height={300}>
//     <VictoryPie
//       standalone={false}
//       width={300} height={300}
//       data={sampleData}
//       labels={() => null}
//       colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
//     />
//     <Image
//     x="25%"
//     y="10%"
//     width="50%"
//     height="80%"
//     preserveAspectRatio="xMidYMid"
//     opacity="1"
//     href={require('../../../assets/apple.png')}
//     />
//   </Svg>
//   <TouchableOpacity style={{marginBottom: '5%'}}>
//   <Text style={styles.textVioletSmall}>More info about the conservative portfolio</Text>
//   </TouchableOpacity>
//   <Button
//     containerViewStyle={{width: '90%'}}
//     fontFamily='Avenir'
//     fontSize={20}
//     color='#ffffff'
//     onPress={this._onSubmitA}
//     buttonStyle={styles.buttonPortfolio}
//     title='Choose portfolio "A"pple'/>
// </View>
//
// <View style={styles.formsPortfolio}>
//   <Text style={styles.textTitle}>Moderately Conservative</Text>
//   <this.currentPortfolioB/>
//   <Svg width={300} height={300}>
//     <VictoryPie
//       standalone={false}
//       width={300} height={300}
//       innerRadius={85}
//       labels={() => null}
//       colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
//       data={sampleData}
//     />
//     <Image
//     x="25%"
//     y="10%"
//     width="50%"
//     height="80%"
//     preserveAspectRatio="xMidYMid"
//     opacity="1"
//     href={require('../../../assets/banana.png')}
//     />
//   </Svg>
//   <TouchableOpacity style={{marginBottom: '5%'}}>
//   <Text style={styles.textVioletSmall}>Learn more about the moderately conservative portfolio</Text>
//   </TouchableOpacity>
//    <Button
//     containerViewStyle={{width: '90%'}}
//     fontFamily='Avenir'
//     fontSize={20}
//     color='#ffffff'
//     onPress={this._onSubmitB}
//     buttonStyle={styles.buttonPortfolio}
//     title='Choose portfolio "B"anana'/>
// </View>
//
// <View style={styles.formsPortfolio}>
//   <Text style={styles.textTitle}>Moderate</Text>
//   <this.currentPortfolioC/>
//   <Svg width={300} height={300}>
//     <VictoryPie
//       standalone={false}
//       width={300} height={300}
//       innerRadius={85}
//       labels={() => null}
//       colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
//       data={sampleData}
//     />
//     <Image
//     x="25%"
//     y="10%"
//     width="50%"
//     height="80%"
//     preserveAspectRatio="xMidYMid"
//     opacity="1"
//     href={require('../../../assets/cookies.png')}
//     />
//   </Svg>
//   <TouchableOpacity style={{marginBottom: '5%'}}>
//   <Text style={styles.textVioletSmall}>Learn more about the moderate portfolio</Text>
//   </TouchableOpacity>
//   <Button
//     containerViewStyle={{width: '90%'}}
//     fontFamily='Avenir'
//     fontSize={20}
//     color='#ffffff'
//     onPress={this._onSubmitC}
//     buttonStyle={styles.buttonPortfolio}
//     title='Choose portfolio "C"ookie'/>
// </View>
//
// <View style={styles.formsPortfolio}>
//   <Text style={styles.textTitle}>Moderately Aggressive</Text>
//   <this.currentPortfolioD/>
//   <Svg width={300} height={300}>
//     <VictoryPie
//       standalone={false}
//       width={300} height={300}
//       innerRadius={85}
//       labels={() => null}
//       data={sampleData}
//     />
//     <Image
//     x="25%"
//     y="10%"
//     width="50%"
//     height="80%"
//     preserveAspectRatio="xMidYMid"
//     opacity="1"
//     href={require('../../../assets/durian.png')}
//     />
//   </Svg>
//   <TouchableOpacity style={{marginBottom: '5%'}}>
//   <Text style={styles.textVioletSmall}>Learn more about the moderately aggresive portfolio</Text>
//   </TouchableOpacity>
//   <Button
//     containerViewStyle={{width: '90%'}}
//     fontFamily='Avenir'
//     fontSize={20}
//     color='#ffffff'
//     onPress={this._onSubmitD}
//     buttonStyle={styles.buttonPortfolio}
//     title='Choose portfolio "D"urian'/>
// </View>
//
// <View style={styles.formsPortfolio}>
//   <Text style={styles.textTitle}>Aggressive</Text>
//   <this.currentPortfolioE/>
//   <Svg width={300} height={300}>
//     <VictoryPie
//       standalone={false}
//       width={300} height={300}
//       labels={() => null}
//       data={sampleData}
//     />
//     <Image
//     x="25%"
//     y="10%"
//     width="50%"
//     height="80%"
//     preserveAspectRatio="xMidYMid"
//     opacity="1"
//     href={require('../../../assets/lychee.png')}
//     />
//   </Svg>
//   <TouchableOpacity style={{marginBottom: '5%'}}>
//   <Text style={styles.textVioletSmall}>Learn more about the aggressive portfolio</Text>
//   </TouchableOpacity>
//   <Button
//     containerViewStyle={{width: '90%'}}
//     fontFamily='Avenir'
//     fontSize={20}
//     color='#ffffff'
//     onPress={this._onSubmitE}
//     buttonStyle={styles.buttonPortfolio}
//     title='Choose portfolio Lyche"E"'/>
// </View>
