import * as constants from 'actions/constants'
import PropTypes from 'prop-types'

export const basketPropTypes = PropTypes.shape({
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
  address: PropTypes.string,
  date: PropTypes.string,
})

const initialState = {
  services: [],
  totalPrice: 0,
  totalDuration: 0,
  address: null,
  date: null,
}

const entities = (state = initialState, action) => {
  switch (action.type) {
    // Update basket
    case constants.UPDATE_BASKET_SUCCESS:
      return {
        ...state,
        ...action.data,
      }
    // Update address
    case constants.UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        address: action.data,
      }
    // Update appointment date
    case constants.UPDATE_APPOINTMENT_DATE_SUCCESS:
      return {
        ...state,
        date: action.data,
      }
    default:
      return state
  }
}

export default entities
