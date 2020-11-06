import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Steps } from 'antd'
import { StepFooter, StepsContainer } from './HomeScreen.styled'
import StepOne from '../StepOne'
import { convertMinutes, convertPrice } from 'utils/helpers'
import Button from 'components/Button'

const { Step } = Steps

const HomeScreen = (props) => {
  const [currentStep, setCurrentStep] = useState(0)
  const { basket } = props
  const { totalPrice, totalDuration, services } = basket

  const disabledContinueBtn = () => {
    switch (currentStep) {
      case 0:
        const allServices = services.filter((s) => s.count !== 0)
        return allServices.length === 0
      default:
        return true
    }
  }

  return (
    <div>
      <Steps current={currentStep}>
        <Step title="Prestations" description="Vous choisissez les prestations qui vous conviennent" />
        <Step title="Informations complémentaires" description="Renseignez votre adresse" />
        <Step title="Date de réservation" description="L'heure à laquelle vous voulez réserver un créneau" />
        <Step title="Confirmation" />
      </Steps>
      <StepsContainer>
        <StepOne show={currentStep === 0} />
        <StepFooter>
          {currentStep !== 0 && <Button onClick={() => setCurrentStep(currentStep - 1)}>Précédent</Button>}
          <span>Prix total : {convertPrice(totalPrice)}</span>
          <span>Temps total : {convertMinutes(totalDuration)}</span>
          <Button type="primary" disabled={disabledContinueBtn()} onClick={() => setCurrentStep(currentStep + 1)}>
            Continuer
          </Button>
        </StepFooter>
      </StepsContainer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  basket: state.basket,
})

HomeScreen.propTypes = {
  basket: PropTypes.shape({
    services: PropTypes.arrayOf(
      PropTypes.shape({
        duration: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        reference: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
      })
    ),
    totalPrice: PropTypes.number.isRequired,
    totalDuration: PropTypes.number.isRequired,
  }),
}

export default connect(mapStateToProps, null)(HomeScreen)
