import ActionTypes from './types'

const initData = {
  filtersModal: false
}

const appReducer = (state = initData, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MODAL_FILTERS:
      return Object.assign({}, state, {filtersModal: !state.filtersModal})
    default:
      return state
  }
}

export default appReducer