/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './app'

hydrate(
  <Router>
    <App />
  </Router>,
  document.querySelector('#react-root'),
)
