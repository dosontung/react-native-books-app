import React, { Component } from 'react'
import {
  FlatList, Image, Text, StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as BooksActions from '~/store/actions/books'

import styled from 'styled-components/native'
import { colors } from '~/styles'

import Header from '~/components/Header'

const Container = styled.SafeAreaView`
  background-color: ${colors.primary};
  flex: 1;
`

const Thumbnail = styled.TouchableOpacity`
`
const styles = StyleSheet.create({
  thumbnail: {
    height: 130,
    width: 100,
  },
})

class List extends Component {
  static propTypes = {
    getBooksRequest: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { getBooksRequest } = this.props
    getBooksRequest()
  }

  render() {
    const { books } = this.props
    let booklist = []
    console.tron.log(books)

    books.map((book) => {
      booklist = book.items
      console.tron.log(book.items)
    })

    return (
      <Container>
        <FlatList
          data={booklist}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={item => (
            <Thumbnail onPress={() => {}}>
              <Image
                source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
                style={styles.thumbnail}
              />
            </Thumbnail>
          )}
        />
      </Container>

    )
  }
}

const mapStateToProps = state => ({
  books: state.books.data,
})

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)