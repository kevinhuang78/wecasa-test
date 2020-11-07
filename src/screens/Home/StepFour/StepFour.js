import React from 'react'
import PropTypes from 'prop-types'
import { HiddenStep } from '../HomeScreen/HomeScreen.styled'
import { Divider } from 'antd'

const StepFour = (props) => {
  const { show } = props

  return (
    <HiddenStep show={show}>
      <Divider>Merci pour votre confiance</Divider>
      <p>Votre réservation a bien été pris en compte</p>
    </HiddenStep>
  )
}

StepFour.propTypes = {
  show: PropTypes.bool,
}

export default StepFour
