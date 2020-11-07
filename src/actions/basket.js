import * as constants from './constants'
import { notification } from 'antd'
import API from 'utils/API'
import { store } from 'index'

export const updateBasket = (services) => {
  return (dispatch) => {
    let totalPrice = 0
    services.forEach((service) => (totalPrice += service.count * service.price))

    let totalDuration = 0
    services.forEach((service) => (totalDuration += service.count * service.duration))

    dispatch({ type: constants.UPDATE_BASKET_SUCCESS, data: { services, totalPrice, totalDuration } })
  }
}

export const updateAddress = (address) => {
  return (dispatch) => {
    dispatch({ type: constants.UPDATE_ADDRESS_SUCCESS, data: address })
  }
}

export const updateAppointmentDate = (date) => {
  return (dispatch) => {
    dispatch({ type: constants.UPDATE_APPOINTMENT_DATE_SUCCESS, data: date })
  }
}

export const bookPrestation = () => {
  return (dispatch) => {
    const { basket } = store.getState()
    const { address, services, date } = basket
    let prestations = []

    services.forEach((service) => {
      const { count, reference } = service
      for (let i = 0; i < count; i++) {
        prestations.push(reference)
      }
    })

    const request = API.post('/booking', {
      address,
      appointment: date,
      prestations,
    })

    request.then((response) => {
      const { success, errors } = response.data
      if (success === true) dispatch({ type: constants.POST_BOOK_PRESTATION_SUCCESS })
      else
        Object.keys(errors).map((key) =>
          notification.error({
            message: key,
            description: errors[key].join(' '),
            duration: 5,
          })
        )
    })
    return request
  }
}
