import React from 'react'
import {
  Image, StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'

import styled from 'styled-components/native'

const Thumbnail = styled.TouchableOpacity`
`
const styles = StyleSheet.create({
  thumbnail: {
    height: 130,
    width: 100,
  },
})

const BookItem = ({ book }) => (
  <Thumbnail onPress={() => {}}>
    <Image
      source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
      style={styles.thumbnail}
    />
  </Thumbnail>
)

BookItem.propTypes = {
  book: PropTypes.shape({
    thumbnail: PropTypes.string,
  }).isRequired,
}

export default BookItem
