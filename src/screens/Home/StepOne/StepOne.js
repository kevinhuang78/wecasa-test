import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Divider, Collapse, Row, Col } from 'antd'
import { connect } from 'react-redux'
import { getHaircuts } from 'actions/universes'
import Service from 'components/Service'

const { Panel } = Collapse

const StepOne = (props) => {
  const [loading, setLoading] = useState(true)
  const { getHaircuts, haircuts } = props
  const { title, categories } = haircuts

  useEffect(() => {
    getHaircuts().then(() => setLoading(false))
  }, [getHaircuts])

  return loading ? (
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
                      <Service {...prestation} />
                    </Col>
                  )
                })}
              </Row>
            </Panel>
          )
        })}
      </Collapse>
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
