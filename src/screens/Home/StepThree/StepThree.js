import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DatePicker } from 'antd'
import { HiddenStep } from '../HomeScreen/HomeScreen.styled'
import { connect } from 'react-redux'
import locale from 'antd/es/date-picker/locale/fr_FR'
import moment from 'moment'
import { updateAppointmentDate } from 'actions/basket'

const StepThree = (props) => {
  const { show, updateAppointmentDate } = props

  const range = (start, end) => {
    const result = []
    for (let i = start; i < end; i++) {
      result.push(i)
    }
    return result
  }

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().startOf('day')
  }

  const disabledDateTime = () => {
    return {
      disabledHours: () => range(0, 7).concat(range(22, 24)),
    }
  }

  const onChange = (value) => {
    updateAppointmentDate(value.add(1, 'hours').toISOString())
  }

  return (
    <HiddenStep show={show}>
      <Divider>L'heure de rendez-vous</Divider>
      <p>Veuillez renseigner l'heure à laquelle vous souhaitez que le professionnel arrive chez vous</p>
      <DatePicker
        locale={locale}
        format="YYYY-MM-DD HH:mm"
        disabledDate={disabledDate}
        disabledTime={disabledDateTime}
        onChange={onChange}
        showTime
        showNow={false}
      />
    </HiddenStep>
  )
}

StepThree.propTypes = {
  show: PropTypes.bool,
  updateAppointmentDate: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  updateAppointmentDate,
}

export default connect(null, mapDispatchToProps)(StepThree)
