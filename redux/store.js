import { createStore, applyMiddleware, compose } from 'redux'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { createNavigationPropConstructor, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import reducers from './index'

const middlewareNav = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

export const navigationPropConstructor = createNavigationPropConstructor('root')

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth']
}

const combinedReducer = persistCombineReducers(persistConfig, reducers)

const middleware = [thunk, middlewareNav]

const store = createStore(
  combinedReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
)

const persistor = persistStore(store, () => store.getState())

export default {store, persistor}
