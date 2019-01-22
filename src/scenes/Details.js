import React from 'react'

import styled from 'styled-components/native'
import { colors } from '~/styles'

import Header from '~/components/Header'

const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`

const Details = () => (
  <Container>
    <Header title='Details' back />
  </Container>
)

export default Details
