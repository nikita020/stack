import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as constants from '../../constants'

const CardContainer = styled.View`
  height: 100;
  borderRadius: 5
`

const CardHeader = styled.View`
  height: 50;
  justify-content: space-between;
  flex-direction: row;
  padding-horizontal: 20;
  background-color: ${props => props.headerBackgroundColor ? props.headerBackgroundColor : 'white'}
`

const CardHeaderTitle = styled.View`
  justify-content: center;
  align-items: center
`

const CardHeaderFunction = styled.View`
  justifyContent: center;
  alignItems: center
`

const CardBody = styled.View`
  height: 50;
  justify-content: space-between;
  flex-direction: row;
  padding-horizontal: 20;
  background-color: ${props => props.bodyBackgroundColor ? props.bodyBackgroundColor : constants.cardBodyBackgroundColorDefault}
`

const CardBodyLeft = styled.View`
  justify-content: center;
  align-items: center
`

const CardBodyRight = styled.View`
  justify-content: center;
  align-items: center
`

class Card extends Component {
  render () {
    const {headerBackgroundColor, headerTitle, headerFunction, bodyBackgroundColor, bodyLeft, bodyRight} = this.props
    return (
      <CardContainer>
        <CardHeader headerBackgroundColor={headerBackgroundColor}>
          <CardHeaderTitle>
            {headerTitle}
          </CardHeaderTitle>
          <CardHeaderFunction>
            {headerFunction}
          </CardHeaderFunction>
        </CardHeader>
        <CardBody bodyBackgroundColor={bodyBackgroundColor}>
          <CardBodyLeft>
            {bodyLeft}
          </CardBodyLeft>
          <CardBodyRight>
            {bodyRight}
          </CardBodyRight>
        </CardBody>
      </CardContainer>
    )
  }
}

Card.propTypes = {
  headerBackgroundColor: PropTypes.string,
  bodyBackgroundColor: PropTypes.string,
  headerTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  headerFunction: PropTypes.element,
  bodyLeft: PropTypes.element,
  bodyRight: PropTypes.element
}

export default Card

