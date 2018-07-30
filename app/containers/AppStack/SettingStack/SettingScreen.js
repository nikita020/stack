import React, { Component } from 'react'
import {
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  Linking,
  Platform
} from 'react-native'
import ScrollContainer from '../../../components/ScrollContainer'
import { Card } from 'react-native-elements'
import { styles } from '../../../components/styles'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Communications from 'react-native-communications'
import { colorViolet3 } from '../../../../constants'
//TODO Set up intercom

export default class SettingScreen extends Component {
  static navigationOptions = {title: 'Settings'}

  constructor (props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
  }

  renderRow (item, index) {
    return (
      <TouchableOpacity onPress={() => {
        if (item.title === 'Get in touch') {
          Communications.email(['feedback@stack.app'], null, null, 'Contact Us', '')
        }
        else if (item.title === 'Feedback') {
          Communications.email(['feedback@stack.app'], null, null, 'Feedback', '')
        }
        else if (item.title === 'Rate') {
          Linking.openURL('https://thestackapp.com')
        }
        else
          this.props.navigation.navigate(item.path)
      }} key={index}>
        <View style={styles.settingsRow}>
          <View style={styles.settingsRowLeft}>
            <Image style={styles.settingsRowIcon} source={item.icon}/>
            <Text style={[styles.textViolet, {lineHeight: 29}]}>
              {item.title}
            </Text>
          </View>
          <SimpleLineIcons
            name={'arrow-right'}
            size={15} color={colorViolet3}
            style={{backgroundColor: 'transparent'}}
          />
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    const list = [
      {
        title: 'Profile',
        icon: require('../../../assets/profile-icon.png'),
        path: 'ProfileScreen'
      },
      {
        title: 'Portfolio',
        icon: require('../../../assets/portfolio-icon.png'),
        path: 'PortfolioHomeScreen'
      },
      {
        title: 'Investing Settings',
        icon: require('../../../assets/investing-setting-icon.png'),
        path: 'InvestSettingScreen'
      },
      {
        title: 'Funding Account',
        icon: require('../../../assets/funding-account-icon.png'),
        path: 'Bank'
      },
      {
        title: 'Tracked Cards',
        icon: require('../../../assets/tracked-cards-icon.png'),
        path: 'Card'
      },
    ]
    const listAdmin = [
      {
        title: 'Password',
        icon: require('../../../assets/password-icon.png'),
        path: 'Password'
      },
      {
        title: 'Pin',
        icon: require('../../../assets/pin-icon.png'),
        path: 'OldPINScreen'
      },
      {
        title: 'Notifications',
        icon: require('../../../assets/notifications-icon.png'),
        path: 'NotificationScreen'
      },
    ]
    const listSupport = [
      {
        title: 'Get in touch',
        icon: require('../../../assets/get-in-tourch-icon.png'),
        path: '/'
      },
      {
        title: 'Feedback',
        icon: require('../../../assets/feedback-icon.png'),
        path: '/'
      },
      {
        title: 'Legal',
        icon: require('../../../assets/legal-icon.png'),
        path: 'LegalScreen'
      },
      {
        title: 'Rate',
        icon: require('../../../assets/rate-icon.png'),
        path: '/'
      },
    ]
    return (
      <ScrollContainer style={{paddingBottom: 30}}>

        <View style={styles.settingsSection}>
          <Text style={styles.settingsSectionTitle}>Account</Text>
          {
            list.map((item, i) => this.renderRow(item, i))
          }
        </View>
        <View style={styles.settingsSection}>
          <Text style={styles.settingsSectionTitle}>Admin</Text>
          {
            listAdmin.map((item, i) => this.renderRow(item, i))
          }
        </View>
        <View style={styles.settingsSection}>
          <Text style={styles.settingsSectionTitle}>Support</Text>
          {
            listSupport.map((item, i) => this.renderRow(item, i))
          }
        </View>

        <Image style={styles.backgroundBottom} source={require('../../../assets/bgr-bottom-2.png')}
               resizeMode={'contain'}/>
      </ScrollContainer>
    )
  }
}
