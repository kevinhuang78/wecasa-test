import * as constants from './constants'

export const updateBasket = (services) => {
  return (dispatch) => {
    let totalPrice = 0
    services.forEach((service) => (totalPrice += service.count * service.price))

    let totalDuration = 0
    services.forEach((service) => (totalDuration += service.count * service.duration))

    dispatch({ type: constants.UPDATE_BASKET_SUCCESS, data: { services, totalPrice, totalDuration } })
  }
}
