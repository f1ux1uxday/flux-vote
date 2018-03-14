import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise'

import ViewMaster from './containers/fv-viewMaster'
import rootReducer from './reducers/fv-rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

render(
  <Provider
    store={createStore(
      rootReducer,
      composeEnhancers(
        applyMiddleware(promiseMiddleware)
      )
    )}
  >
    <ViewMaster />
  </Provider>, document.getElementById('root')
)
