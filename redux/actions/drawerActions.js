import ActionTypes from '../types'

const drawerActions = {
  toggleDrawer () {
    return dispatch => {
      dispatch({
        type: ActionTypes.TOGGLE_MODAL
      })
    }
  },
}

export default drawerActions