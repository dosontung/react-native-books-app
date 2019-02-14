import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as BooksActions } from '~/store/ducks/books'

import styled from 'styled-components/native'
import { colors, metrics } from '~/styles'

import Title from '~/components/Title'
import BookItem from '~/components/BookItem'

const Container = styled.SafeAreaView`
  padding: ${metrics.basePadding}px;
  background-color: ${colors.primary};
  flex: 1;
`

const FlatList = styled.FlatList`
  padding-top: ${metrics.basePadding}px;
`

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: metrics.baseMargin * 2,
    marginHorizontal: metrics.baseMargin * 2,
  },
  loading: {
    paddingTop: metrics.basePadding * 2,
  },
})

class List extends Component {
  static propTypes = {
    getBooksRequest: PropTypes.func.isRequired,
    books: PropTypes.shape(
      PropTypes.shape({
        id: PropTypes.string,
      }).isRequired,
    ).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = {
    headerTitle: <Title title='Harry Potter' />,
    headerLeft: <Icon name='ios-menu' size={28} color={colors.black} />,
    headerRight: <Icon name='ios-search' size={28} color={colors.black} />,
    headerStyle: {
      backgroundColor: colors.primary,
      borderBottomWidth: 0,
      height: 68,
    },
    headerBackTitle: null,
    headerLeftContainerStyle: {
      paddingLeft: metrics.basePadding,
    },
    headerRightContainerStyle: {
      paddingRight: metrics.basePadding,
    },
  }

  componentDidMount() {
    const { getBooksRequest } = this.props
    getBooksRequest()
  }

  render() {
    const {
      books: { data, loading },
      navigation: { navigate },
    } = this.props

    return (
      <Container>
        {loading ? (
          <ActivityIndicator size='large' color={colors.black} style={styles.loading} />
        ) : (
          <FlatList
            data={data}
            numColumns={3}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <BookItem onPress={() => navigate('Details', { book: item })} book={item} />
            )}
            columnWrapperStyle={styles.columnWrapper}
          />
        )}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books,
})

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
