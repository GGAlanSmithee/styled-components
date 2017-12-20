/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Content, Title } from './layout'

const ExampleContent = styled.div`
  margin: 0 auto;
  text-align: center;
`

const Example = ({ title, children }) => (
  <Content>
    <ExampleContent>
      <Title>{title}</Title>
      {children}
    </ExampleContent>
  </Content>
)

Example.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOf([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

export default Example
