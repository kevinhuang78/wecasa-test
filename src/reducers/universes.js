import * as constants from 'actions/constants'

const initialState = {
  haircutsLoading: false,
  haircutsError: null,
  haircuts: {},
}

const entities = (state = initialState, action) => {
  switch (action.type) {
    // Get haircuts
    case constants.GET_HAIRCUTS_REQUESTED:
      return {
        ...state,
        haircutsLoading: true,
      }
    case constants.GET_HAIRCUTS_SUCCESS:
      return {
        ...state,
        haircutsLoading: false,
        haircuts: action.data,
      }
    case constants.GET_HAIRCUTS_FAILURE:
      return {
        ...state,
        haircutsLoading: false,
        haircutsError: action.data,
      }
    default:
      return state
  }
}

export default entities
