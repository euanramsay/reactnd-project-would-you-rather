import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './components/App'
import middleware from './middleware'
import reducer from './reducers'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
   
  document.getElementById('root'));
