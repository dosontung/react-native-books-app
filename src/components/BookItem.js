import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const styles = StyleSheet.create({
  thumbnail: {
    height: 130,
    width: 100,
  },
})

const Thumbnail = styled.Image`
  height: 130px;
  width: 100px;
`

const BookItem = ({ book, onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <Thumbnail source={{ uri: book.volumeInfo.imageLinks.thumbnail }} style={styles.thumbnail} />
  </TouchableHighlight>
)

BookItem.propTypes = {
  book: PropTypes.shape({
    thumbnail: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
}

export default BookItem
