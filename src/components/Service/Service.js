import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ServiceWrapper, ServiceCallToAction } from './Service.styled'
import { convertMinutes, convertPrice } from 'utils/helpers'
import Button from 'components/Button'

const Service = ({ title, duration, price }) => {
  const [count, setCount] = useState(0)

  const onClickMinus = () => {
    if (count === 0) return

    setCount(count - 1)
  }

  const onClickPlus = () => {
    setCount(count + 1)
  }

  return (
    <ServiceWrapper>
      <h3>{title}</h3>
      <p>{convertMinutes(duration)}</p>
      <p>{convertPrice(price)}</p>
      <ServiceCallToAction>
        <Button disabled={count === 0} onClick={onClickMinus}>
          -
        </Button>
        <span>{count}</span>
        <Button type="primary" onClick={onClickPlus}>
          +
        </Button>
      </ServiceCallToAction>
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
