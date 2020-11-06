import React from 'react'
import { Steps } from 'antd'

const { Step } = Steps

const HomeScreen = () => (
  <div>
    <Steps current={0}>
      <Step title="Prestations" description="Vous choisissez les prestations qui vous conviennent" />
      <Step title="Informations complémentaires" description="Renseignez votre adresse" />
      <Step
        title="Date de réservation"
        subTitle="Demain à 10h"
        description="L'heure à laquelle vous voulez réserver un créneau"
      />
      <Step title="Confirmation" />
    </Steps>
  </div>
)

export default HomeScreen
