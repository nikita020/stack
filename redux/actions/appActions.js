import ActionTypes from '../types'

const appActions = {
  toggleFiltersModal () {
    return dispatch => {
      dispatch({
        type: ActionTypes.TOGGLE_MODAL_FILTERS
      })
    }
  },
}

export default appActions