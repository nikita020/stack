import ActionTypes from './types'

const initState = {
  visibleModal: false
}

const DrawerReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MODAL:
      return Object.assign({}, state, {visibleModal: !state.visibleModal})
    default:
      return state
  }
}

export default DrawerReducer