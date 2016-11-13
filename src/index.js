import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/App'
import About from './components/About'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
    <Router history={hashHistory}>
      <Route path='/' component={App} />
        <Route path='/about' component={About} />
    </Router>
    ),
    document.getElementById('app')
  )
})
