import * as constants from 'actions/constants'
import PropTypes from 'prop-types'

export const haircutsPropTypes = PropTypes.shape({
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
})

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
