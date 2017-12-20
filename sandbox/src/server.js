/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'

import { ServerStyleSheet } from 'styled-components'

import App from './app'

const sheet = new ServerStyleSheet()

export const html = renderToString(
  sheet.collectStyles(
    <Router context={{}}>
      <App />
    </Router>,
  ),
)

export const css = sheet.getStyleTags()
