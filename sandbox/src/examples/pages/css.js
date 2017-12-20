/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react'
import styled, { css } from 'styled-components'
import Example from '../example'

const cssMixin = css`
  background: ${props => (props.inverted ? 'palevioletred' : 'papayawhip')};
  color: ${props => (props.inverted ? 'papayawhip' : 'palevioletred')};
`

const Css = styled.div`
  width: 100%;
  padding: 100px 0;
  margin: 5px 0;

  ${props => (props.withCss ? cssMixin : '')};
`
const CssExample = () => (
  <Example title={'css'}>
    <Css withCss>With Css Mixin</Css>

    <Css>Without Css Mixin</Css>

    <Css withCss inverted>
      With inverted Css Mixin
    </Css>
  </Example>
)

export default CssExample
