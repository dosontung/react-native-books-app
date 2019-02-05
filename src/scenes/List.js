import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as BooksActions } from '~/store/ducks/books'

import styled from 'styled-components/native'
import { colors, metrics } from '~/styles'

import Header from '~/components/Header'
import BookItem from '~/components/BookItem'

const Container = styled.SafeAreaView`
  background-color: ${colors.primary};
  flex: 1;
`

const FlatList = styled.FlatList`
  padding-top: ${metrics.basePadding};
`

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: metrics.baseMargin * 2,
    marginHorizontal: metrics.baseMargin * 2,
  },
})

class List extends Component {
  static propTypes = {
    getBooksRequest: PropTypes.func.isRequired,
    books: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }

  componentDidMount() {
    const { getBooksRequest } = this.props
    getBooksRequest()
  }

  render() {
    const { books: { data } } = this.props

    return (
      <Container>
        <Header title='Design Books' />
        <FlatList
          data={data}
          numColumns={3}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <BookItem book={item} />}
          columnWrapperStyle={styles.columnWrapper}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books,
})

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)
