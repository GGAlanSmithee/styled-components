import path from 'path'
import Express from 'express'
import fs from 'fs'
import React from 'react'
import { html, css } from './src/server'

const HTML = fs.readFileSync(
  path.resolve(__dirname, './public/index.html'),
  'utf-8', // eslint-disable-line comma-dangle
)

const app = new Express()

app.get('/', (req, res) => {
  const response = indexHtml
    .replace(/<!-- SSR:HTML -->/, `<div id="react-root">${html}</div>`)
    .replace(/<!-- SSR:CSS -->/, css)

  res.send(response)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

export default app
