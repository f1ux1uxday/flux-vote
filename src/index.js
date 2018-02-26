import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import ViewMaster from './containers/fv-viewMaster'
import rootReducer from './reducers/fv-rootReducer'

render(
  <Provider
    store={createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
    <ViewMaster />
  </Provider>, document.getElementById('root')
)
