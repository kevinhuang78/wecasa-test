import React from 'react'
import PropTypes from 'prop-types'
import ServiceWrapper from './Service.styled'

const Service = ({ title, duration, price }) => {
  return (
    <ServiceWrapper>
      <h3>{title}</h3>
      <p>{duration} minutes</p>
      <p>{price} centimes</p>
    </ServiceWrapper>
  )
}

Service.propTypes = {
  duration: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  reference: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Service
