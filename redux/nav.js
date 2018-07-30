import MainStack from '../app/containers/MainStack'

const navReducer = (state, action) => {
  const nextState = MainStack.router.getStateForAction(action, state)
  return nextState || state
}

export default navReducer