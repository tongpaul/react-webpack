import React from 'react'
import ReactDOM from 'react-dom'
import App from './routers/index.jsx'
import { Provider } from 'react-redux'
import store from './store'
import './main.scss'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('app'))