import React, { Component } from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

import styled from 'styled-components/native'
import { colors } from '~/styles'

const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
`

const Container = styled.SafeAreaView`
  flex-grow: 3;
  justify-content: center;
  align-items: center;
`

const Footer = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

const Tagline = styled.Text`
  color: ${colors.black};
  font-size: 24px
`

const Title = styled.Text`
  color: ${colors.black};
  font-size: 48px
`

const Button = styled.TouchableOpacity`
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
  box-shadow: 0px 7px 15px rgba(60, 120, 191, 0.422639);
`

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  goToList = () => {
    const { navigation } = this.props
    navigation.navigate('Books')
  }

  render() {
    return (
      <Background source={require('~/assets/images/background.jpg')}>
        <Container>
          <Tagline>Welcome to</Tagline>
          <Title>BooksApp</Title>
        </Container>
        <Footer>
          <Button onPress={this.goToList}>
            <Image source={require('~/assets/images/arrow-right.png')} />
          </Button>
        </Footer>
      </Background>
    )
  }
}

export default Home
