import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Modal from 'react-native-modal'
import { NavigationActions, Header } from 'react-navigation'
import styled from 'styled-components'
import Icons from 'react-native-vector-icons/Ionicons'
import * as constants from '../../constants'

const DrawerContainer = styled.View`
  flex: 1;
`

const CloseButtonLayout = styled.View`
  height: ${Header.HEIGHT};
  margin-top: 44;
  background-color: transparent;
  padding-left: 20;
  flex-direction: row;
  align-items: center;
`

class Drawer extends Component {

  constructor (props) {
    super(props)
    this.closeDrawer = this.closeDrawer.bind(this)
  }

  navigateToScreen (route) {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    })
    this.props.navigation.dispatch(navigateAction)
  }

  closeDrawer () {
    this.props.navigation.closeDrawer()
  }

  modalToggle () {
    this.setProps({visibleModal: false})
  }

  render () {
    console.log(this.props)
    return (
      <Modal
        isVisible={this.props.visibleModal}
        onBackdropPress={this.modalToggle}
        onBackButtonPress={this.modalToggle}
        backdropColor={constants.colorViolet}
        backdropOpacity={0.8}
        style={{flex: 1}}
      >
        <DrawerContainer>
          <CloseButtonLayout>
            <Icons name={'ios-close'} size={36} color={'white'} onPress={() => this.closeDrawer()}/>
          </CloseButtonLayout>
        </DrawerContainer>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  visibleModal: state.drawer.visibleModal
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
