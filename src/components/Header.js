import React, { Component } from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

import styled from 'styled-components/native'
import { colors, metrics } from '~/styles'

const Container = styled.View`
  padding-Horizontal: ${metrics.basePadding}px;
  background-color: ${colors.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const LeftButton = styled.TouchableOpacity`
`

const RightButton = styled.TouchableOpacity`
`

const Title = styled.View`
  border-bottom-width: 2px;
  border-color: ${colors.dark};
  padding-vertical: 20px;
`

const Text = styled.Text`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${colors.black};
`

class Header extends Component {
  goToDetails = () => {}

  render() {
    const { title, back } = this.props

    return (
      <Container>
        <LeftButton>
          { back
            ? <Image source={require('~/assets/images/arrow-back.png')} />
            : <Image source={require('~/assets/images/menu.png')} />
          }
        </LeftButton>
        <Title><Text>{title}</Text></Title>
        <RightButton>
          <Image source={require('~/assets/images/search.png')} />
        </RightButton>
      </Container>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool,
}

Header.defaultProps = {
  back: false,
}


export default Header
