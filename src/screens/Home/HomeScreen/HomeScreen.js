import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Steps } from 'antd'
import { StepFooter, StepsContainer } from './HomeScreen.styled'
import StepOne from '../StepOne'
import { convertMinutes, convertPrice } from 'utils/helpers'
import Button from 'components/Button'
import { basketPropTypes } from 'reducers/basket'
import StepTwo from '../StepTwo'
import StepThree from '../StepThree'

const { Step } = Steps

const HomeScreen = (props) => {
  const [currentStep, setCurrentStep] = useState(0)
  const { basket } = props
  const { totalPrice, totalDuration, services, address, date } = basket

  const disabledContinueBtn = () => {
    switch (currentStep) {
      case 0:
        const allServices = services.filter((s) => s.count !== 0)
        return allServices.length === 0
      case 1:
        return address === null
      case 2:
        return date === null
      case 3:
        return false
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
        <StepTwo show={currentStep === 1} />
        <StepThree show={currentStep === 2} />
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
  basket: basketPropTypes,
}

export default connect(mapStateToProps, null)(HomeScreen)
