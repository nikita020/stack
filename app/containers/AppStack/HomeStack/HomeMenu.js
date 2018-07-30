import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { NavigationActions, DrawerActions } from 'react-navigation'
import styles from './HomeMenu.style'
import _ from 'lodash'

class HomeMenu extends Component {
  render () {
    var {activeItemKey, items} = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            this.props.navigation.dispatch(DrawerActions.closeDrawer())
          }}>
          <Image
            style={styles.closeIcon}
            source={require('../../../assets/cross.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.contentContainer}
          contentContainerStyle={styles.contentContainerStyle}>
          {
            _.map(items, (item, index) => {
              return (
                <TouchableOpacity key={item.key} activeOpacity={0.8} onPress={() => {
                  const navigateAction = NavigationActions.navigate({
                    routeName: item.routeName
                  })
                  this.props.navigation.dispatch(navigateAction)
                }}>
                  <View style={styles.item}>
                    <Text style={[styles.itemText, item.key === activeItemKey ? styles.selectedItemText : {}]}>
                      {item.key}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}

export default HomeMenu
