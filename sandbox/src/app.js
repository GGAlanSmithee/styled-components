/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react'
import { Route } from 'react-router-dom'
import Sandbox from './sandbox'
import Css from './examples/pages/css'

const App = () => (
  <div>
    <Route exact path="/" component={Sandbox} />
    <Route path="/css" component={Css} />
  </div>
)

export default App
