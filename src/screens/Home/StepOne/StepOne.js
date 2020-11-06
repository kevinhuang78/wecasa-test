import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Divider, Collapse, Row, Col } from 'antd'
import { connect } from 'react-redux'
import { getHaircuts } from 'actions/universes'
import Service from 'components/Service'
import { StepOneFooter } from './StepOne.styled'
import Button from 'components/Button'
import { convertMinutes, convertPrice } from 'utils/helpers'

const { Panel } = Collapse

const StepOne = (props) => {
  const [loading, setLoading] = useState(true)
  const [services, setServices] = useState([])
  const [price, setPrice] = useState(0)
  const [duration, setDuration] = useState(0)
  const { getHaircuts, haircuts } = props
  const { title, categories } = haircuts

  useEffect(() => {
    getHaircuts().then(() => setLoading(false))
  }, [getHaircuts])

  // Update price and duration with services
  useEffect(() => {
    let totalPrice = 0
    services.forEach((service) => (totalPrice += service.count * service.price))
    setPrice(convertPrice(totalPrice))

    let totalDuration = 0
    services.forEach((service) => (totalDuration += service.count * service.duration))
    setDuration(convertMinutes(totalDuration))
  }, [services])

  const onChange = (service) => {
    // If service is found in the list of services
    if (services.find((s) => s.reference === service.reference)) {
      // Replace service with new one (new count)
      setServices(
        services.map((s) => {
          if (s && s.reference === service.reference) return service
          else return s
        })
      )
    } else {
      // Else add the service
      setServices(services.concat(service))
    }
  }

  return (
    <>
      {loading ? (
        <Card loading />
      ) : (
        <>
          <Divider>{title}</Divider>
          <Collapse ghost>
            {categories.map((category) => {
              const { reference, prestations } = category

              return (
                <Panel header={`${title} ${category.title}`} key={reference}>
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {prestations.map((prestation) => {
                      const { reference } = prestation

                      return (
                        <Col xs={24} md={12} lg={6} key={reference}>
                          <Service {...prestation} onChange={onChange} />
                        </Col>
                      )
                    })}
                  </Row>
                </Panel>
              )
            })}
          </Collapse>
          <StepOneFooter>
            <span>Prix total : {price}</span>
            <span>Temps total : {duration}</span>
            <Button type="primary">Continuer</Button>
          </StepOneFooter>
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  haircuts: state.universes.haircuts,
})

const mapDispatchToProps = {
  getHaircuts,
}

StepOne.propTypes = {
  getHaircuts: PropTypes.func.isRequired,
  haircuts: PropTypes.shape({
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        prestations: PropTypes.arrayOf(
          PropTypes.shape({
            duration: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            reference: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
          })
        ),
        reference: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ),
    reference: PropTypes.string,
    title: PropTypes.string,
  }),
}

export default connect(mapStateToProps, mapDispatchToProps)(StepOne)
