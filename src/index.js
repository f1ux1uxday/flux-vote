import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import HomeView from './containers/homeView'
import rootReducer from './reducers/rootReducer'

render(
  <Provider
    store={createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
    <HomeView />
  </Provider>, document.getElementById('root')
)
