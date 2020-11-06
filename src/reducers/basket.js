import * as constants from 'actions/constants'

const initialState = {
  services: [],
  totalPrice: 0,
  totalDuration: 0,
}

const entities = (state = initialState, action) => {
  switch (action.type) {
    // Update basket
    case constants.UPDATE_BASKET_SUCCESS:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}

export default entities
