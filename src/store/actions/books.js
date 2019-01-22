export const getBooksRequest = books => ({
  type: 'GET_BOOKS_REQUEST',
  books,
})

export const getBooksSuccess = books => ({
  type: 'GET_BOOKS_SUCCESS',
  books,
})
