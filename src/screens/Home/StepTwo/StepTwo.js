import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AlgoliaPlaces from 'algolia-places-react'
import { Divider } from 'antd'
import { HiddenStep } from '../HomeScreen/HomeScreen.styled'
import { basketPropTypes } from 'reducers/basket'
import { updateAddress } from 'actions/basket'
import { connect } from 'react-redux'

const StepTwo = (props) => {
  const [error, setError] = useState('')
  const { updateAddress, show } = props

  return (
    <HiddenStep show={show}>
      <Divider>Votre adresse</Divider>
      <p>Veuillez renseigner votre adresse</p>
      <AlgoliaPlaces
        placeholder="Tapez votre adresse ici"
        onChange={({ suggestion }) => {
          const { value } = suggestion
          setError('')
          updateAddress(value)
        }}
        onClear={() => setError('')}
        onError={({ message }) => setError(message)}
      />
      {error !== '' && <p>{error}</p>}
    </HiddenStep>
  )
}

StepTwo.propTypes = {
  show: PropTypes.bool,
  basket: basketPropTypes,
}

const mapDispatchToProps = {
  updateAddress,
}

export default connect(null, mapDispatchToProps)(StepTwo)
