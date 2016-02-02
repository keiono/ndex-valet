import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Map } from 'immutable'
import store from './state/store/store.jsx'
import DevTools from './containers/DevTools.jsx'
import NetworkFinderContainer from './containers/NetworkFinderContainer.jsx'
require("./styles/app.scss")

const redux = store()

ReactDOM.render(
  <Provider store={redux}>
      <NetworkFinderContainer/>
  </Provider>,
 document.getElementById('frame'))

 ReactDOM.render(
   <Provider store={redux}>
       <DevTools/>
   </Provider>,
  document.getElementById('devtools'))
