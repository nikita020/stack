import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  Alert,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import Communications from 'react-native-communications'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import ViewContainer from '../../../components/ViewContainer'
import CircularProgressBank from '../../../components/CircularProgressBank'
import ButtonGroupCard from '../../../components/ButtonGroupCard'
import IconButtonLarge from '../../../components/IconButtonLarge';
import { styles } from '../../../components/styles';
import todayTabStyles from './TodayTab.style.js';
import Drawer from '../../../components/Drawer'
import API from '../../../lib/api.js'
import { createOneTimeDepositPopup } from '../../../lib/invest'
import * as constants from '../../../../constants';
const {width: SCREEN_WIDTH} = Dimensions.get('window')

class TodayTab extends Component {

  static defaultProps = {
    visibleModal: false
  }

  constructor (props) {
    super(props)
    let first_name = JSON.parse(global.user.displayName).firstName
    this.state = {
      estimatedBalance: 1242.12,
      firstName: first_name,
      selectedIndexOneTime: 2,
      selectedIndexMultiply: 0,
      transactions: [],
      bankState: 0,
      investedAmount: 0
    }
    this.updateIndexOneTime = this.updateIndexOneTime.bind(this)
    this.updateIndexMultiply = this.updateIndexMultiply.bind(this)
  }

  componentWillMount () {
    let uid = global.user.uid
    // TODO(minor): Setup a watcher, now we have to refresh to get the transactions of a newly created user
    API.get_transactions(uid, 5)
      .then(transactions => { this.setState({transactions}) })
    API.getChangeMultiplier()
      .then(changeMultiplierSnapshot => {
        let changeMultiplier = changeMultiplierSnapshot.val()
        // TODO put this table as prop of the object
        let multiplierToIndex = {
          1: 0,
          2: 1,
          3: 2,
          4: 3,
          10: 4
        }
        if (changeMultiplier) {
          let index = multiplierToIndex[changeMultiplier]
          if (index)
            this.setState({selectedIndexMultiply: index})
        }
      })

  }

  updateInvestedAnmount = (amount) => {
    console.log(amount)
    this.setState({
      investedAmount: this.state.investedAmount + amount
    })
  }

  updateIndexOneTime (selectedIndexOneTime) {
    this.setState({selectedIndexOneTime})
    let indexToAmount = [5, 10, 20, 50, 100]
    let depositAmount = indexToAmount[selectedIndexOneTime]
    createOneTimeDepositPopup(depositAmount)
  }

  updateIndexMultiply (selectedIndexMultiply) {
    this.setState({selectedIndexMultiply})

    let indexToMultiply = [1, 2, 3, 4, 10]
    let multiplier = indexToMultiply[selectedIndexMultiply]

    function cancel () {
      console.log('Cancel Pressed')
    }

    // TODO: Link to backend
    // Change change_multiplier value in Firebase
    function confirm (multiplier) {
      API.setChangeMultiplier(multiplier)
        .then(() => console.log('Confirm change multiplier by ' + multiplier + 'x'))
        .catch(console.log)
    }

    Alert.alert(
      'Great!',
      multiplier === 1
        ? 'Please confirm that you would like to stop multiplying your spare-change investments from now on.'
        : 'Please confirm that you\'d like to multiply all your spare-change investments from now on by ' + multiplier + 'x.',
      [
        {text: 'Cancel', onPress: cancel, style: 'cancel'},
        {text: 'Confirm', onPress: () => confirm(multiplier)},
      ],
      {cancelable: true}
    )
  }

  render () {
    const list = [
      {
        title: 'Learn more',
        icon: require('../../../assets/more.png'),
        path: '/'
      },
      {
        title: 'Accounts',
        icon: require('../../../assets/accounts.png'),
        path: '/'
      },
      {
        title: 'Get in touch',
        icon: require('../../../assets/get-in-touch.png'),
        path: '/'
      },
      {
        title: 'Settings',
        icon: require('../../../assets/settings.png'),
        path: '/'
      },
    ]
    const buttons = ['$5', '$10', '$20', '$50', '$100']
    const buttonsMultiply = ['Off', '2x', '3x', '4x', '10x']
    const {selectedIndexOneTime, selectedIndexMultiply, investedAmount} = this.state
    var x = this.state.estimatedBalance
    var intPart = Math.trunc(x)
    var intPartConvert = Number(Math.trunc(x)).toLocaleString()
    var floatPart = 100 * Number((x - intPart).toFixed(2))
    return (
      <ViewContainer>
        <ScrollView style={{width: '100%'}} contentContainerStyle={{paddingTop: 32}}>
          {/*<View>
            <Image style={{
                position: 'absolute',
                top: 50,
                width: 150,
                height: 150,
                alignSelf: 'center'
              }}
              source={require('../../../assets/camouflage-circle-green.png')}
              resizeMode="contain"/>


            <Image style={{
                position: 'absolute',
                bottom: -40,
                width: SCREEN_WIDTH,
                height: SCREEN_WIDTH * (376 / 563)
              }}
              source={require('../../../assets/astronaut-bg.png')}
              resizeMode="contain"/>
            <View style={{alignItems: 'center'}}>

              <Image
                style={{marginTop: 123, height: 190, marginRight: 20}}
                resizeMode="contain"
                source={require('../../../assets/astronaut-shovel.png')}/>
            </View>
          </View>*/}


          <ImageBackground
            style={{height: 515, width: '100%'}}
            resizeMode="cover"
            source={require('../../../assets/home_bg.png')}>
            <Text style={todayTabStyles.title}>{'Hi, '}
              <Text style={todayTabStyles.textWhite}>{this.state.firstName}!</Text>
            </Text>

            <View style={todayTabStyles.borderButton}>
              <Text style={todayTabStyles.borderButtonText}>{'YOUR ESTIMATED BALANCE'}</Text>
            </View>

            <View style={{height: 12}}/>

            <Text style={styles.balanceView}>
              <Text style={styles.textBalanceDollarSign}>$</Text>
              <Text style={styles.textBalanceDollarValue}>{intPartConvert}</Text>
              <Text style={styles.textBalanceCentValue}>.{floatPart}</Text>
            </Text>
          </ImageBackground>


          <View style={{height: 30}}/>

          <View style={{paddingHorizontal: 40}}>
            <Text style={todayTabStyles.descriptionText}>
              Invest in yourself by <Text style={todayTabStyles.textWhite}>growing your knowledge</Text> about cryptocurrency
            </Text>
          </View>

          <View style={{height: 30}}/>

          <TouchableOpacity activeOpacity={0.7}>
            <View style={{paddingHorizontal: 20, height: 51, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{ position: 'absolute', height: '100%', width: '100%'}}
                resizeMode="stretch"
                source={require('../../../assets/btn-blue.png')}/>
              <Text style={todayTabStyles.buttonText}>
                READ MORE
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{height: 30}}/>

          <View style={{paddingHorizontal: 20}}>
            <ButtonGroupCard
              buttons={['$5', '$10', '$20', '$50', '$100']}
              title={'Quick one-time invest'}
              description={'Help build your stack with a one-time invest'}
              onSelectionChange={this.updateIndexOneTime}/>

            <View style={{height: 45}}/>

            <ButtonGroupCard
              color={'blue'}
              buttons={['OFF', '$10', '$20', '$50', '$100']}
              title={'Multiply your growth'}
              description={'Try multiplying your spare-change investments by choosing a multiplier!'}
              onSelectionChange={this.updateIndexMultiply}/>

            <View style={{height: 70}}/>

            <View style={{paddingHorizontal: 19.5}}>
              <Text style={todayTabStyles.cardTitle}>Amount until invested</Text>
              <Text style={todayTabStyles.cardDescription}>Once your spare-change reaches $5 it will be invested.</Text>
            </View>
          </View>

          <ImageBackground
            style={{width: SCREEN_WIDTH, height: SCREEN_WIDTH * (944 / 1125)}}
            resizeMode={"cover"}
            source={require('../../../assets/6.png')}>
            <View style={{height: 45}}/>

            <CircularProgressBank
              progress={investedAmount}
              total={5}/>
          </ImageBackground>

          <View style={{paddingHorizontal: 20}}>

            <View style={{paddingHorizontal: 19.5}}>
              <Text style={todayTabStyles.cardTitle}>Spare-change</Text>
              <Text style={todayTabStyles.cardDescription}>Here are some recent purchases you can invest the spare-change from!</Text>
            </View>

            <View style={{height: 45}}/>

            <IconButtonLarge
              title={'+$0.60'}
              subTitle={'For sparkfun'}
              onPress={this.updateInvestedAnmount}/>

            <View style={{height: 10}}/>

            <IconButtonLarge
              color={'blue'}
              title={'+$1.50'}
              subTitle={'For united airlines'}
              onPress={this.updateInvestedAnmount}/>

            <View style={{height: 10}}/>

            <IconButtonLarge
              color={'sea'}
              title={'+$0.60'}
              subTitle={'For sparkfun'}
              onPress={this.updateInvestedAnmount}/>

            <View style={{height: 10}}/>

            <IconButtonLarge
              color={'green'}
              title={'+$1.50'}
              subTitle={'For united airlines'}
              onPress={this.updateInvestedAnmount}/>

            <View style={{height: 30}}/>

            <View containerStyle={styles.list}>
              {
                list.map((item, i) => (
                  <TouchableOpacity key={i} onPress={() => {
                    switch (item.title) {
                      case 'Get in touch':
                        Communications.email(['feedback@stack.app'], null, null, 'Contact Us', '')
                        break
                      case 'Settings':
                      case 'Accounts':
                        this.props.navigation.navigate({routeName: 'Settings'})
                        break
                    }
                  }} activeOpacity={0.8}>
                    <View style={{
                      flexDirection: 'row',
                      height: 62,
                      paddingHorizontal: 20,
                      borderBottomColor: constants.colorVioletPrimary2,
                      borderBottomWidth: 1
                    }}>
                      <View style={{marginRight: 15, justifyContent: 'center'}}>
                        <Image
                          style={{height: 36}}
                          resizeMode="contain"
                          source={item.icon}/>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={{color: constants.colorBlueSecondary2, fontSize: 18, fontWeight: '600'}}>{item.title}</Text>
                      </View>
                      <View style={{justifyContent: 'center'}}>
                        <FontAwesomeIcon
                          style={{color: constants.colorVioletPrimary2}}
                          name={'chevron-right'}/>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))
              }
            </View>
          </View>

          {/*<Card
            title='Spare-change'
            containerStyle={styles.cardStyle}
            titleStyle={styles.stackBoxTitle}>
            <Text style={todayTabStyles.cardDescription}> Here are some recent purchases you can invest the spare-change
              from!</Text>
            {
              this.state.transactions.map((item, index) => <CardWrapper item={item} key={index} tab={'home'}/>)
            }
          </Card>
          */}

          <ImageBackground
            style={{width: SCREEN_WIDTH, height: SCREEN_WIDTH * (896 / 1125), paddingTop: 40 }}
            resizeMode={"contain"}
            source={require('../../../assets/bgr-bottom-2.png')}>
            <View style={styles.socalIcons}>
              <Image
                resizeMode="contain"
                style={styles.socialIcon}
                source={require('../../../assets/sm_fb.png')}/>

              <Image
                resizeMode="contain"
                style={styles.socialIcon}
                source={require('../../../assets/sm_reddit.png')}/>

              <Image
                resizeMode="contain"
                style={styles.socialIcon}
                source={require('../../../assets/sm_twitter.png')}/>
              <Image
                resizeMode="contain"
                style={styles.socialIcon}
                source={require('../../../assets/sm_li.png')}/>
            </View>
          </ImageBackground>
        </ScrollView>
      </ViewContainer>
    )
  }
}

TodayTab.navigationOptions = ({navigation, screenProps}) => (console.log(screenProps),{
  title: 'Today',
  headerLeft: (
    <View style={styles.iconHeaderComponent}>
      <Icons
        onPress={() => Drawer.setProps({visibleModal: true})}
        name='ios-menu'
        style={styles.iconHeaderLeft}
        size={36}
        color={'white'}
      />
    </View>
  ),
  headerStyle: styles.headerStyle,
  headerTitleStyle: styles.titleHeader,
  headerRight: (
    <View style={styles.iconHeaderComponent}>
      <Icons
        onPress={() => navigation.openDrawer()}
        name='ios-notifications'
        style={styles.iconHeaderRight}
        size={36}
        color={'white'}
      />
    </View>
  )
})

export default TodayTab
