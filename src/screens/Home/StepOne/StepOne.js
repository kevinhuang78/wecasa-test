import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Divider, Collapse, Row, Col } from 'antd'
import { connect } from 'react-redux'
import { getHaircuts } from 'actions/universes'
import Service from 'components/Service'
import { updateBasket } from 'actions/basket'
import { HiddenStep } from '../HomeScreen/HomeScreen.styled'

const { Panel } = Collapse

const StepOne = (props) => {
  const [loading, setLoading] = useState(true)
  const [services, setServices] = useState([])
  const { getHaircuts, haircuts, updateBasket, show } = props
  const { title, categories } = haircuts

  useEffect(() => {
    getHaircuts().then(() => setLoading(false))
  }, [getHaircuts])

  // Update price and duration with services
  useEffect(() => {
    updateBasket(services)
  }, [services, updateBasket])

  const onChange = (service) => {
    // If service is found in the list of services
    const matchingService = services.find((s) => s.reference === service.reference)
    if (matchingService) {
      // Replace service with new one (new count)
      setServices(
        services.map((s) => {
          if (s.reference === matchingService.reference) return service
          else return s
        })
      )
    } else {
      // Else add the service
      setServices(services.concat(service))
    }
  }

  return (
    <HiddenStep show={show}>
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
        </>
      )}
    </HiddenStep>
  )
}

const mapStateToProps = (state) => ({
  haircuts: state.universes.haircuts,
})

const mapDispatchToProps = {
  getHaircuts,
  updateBasket,
}

StepOne.propTypes = {
  getHaircuts: PropTypes.func.isRequired,
  updateBasket: PropTypes.func.isRequired,
  show: PropTypes.bool,
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
