import React, { Component } from 'react'
import PinNumberPad from '../../components/PinNumberPad'

export default class PinRegisterScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      pin: '',
      submitButtonDisabled: false
    }
  }

  render () {
    return <PinNumberPad onSubmit={() => this.props.navigation.navigate('SignUpStep3Screen') } submitButtonDisabled={this.state.submitButtonDisabled} {...this.props}/>
  }
}
