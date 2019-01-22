import { all, takeLatest } from 'redux-saga/effects'
import { getBooksRequest } from './books'

export default function* rootSaga() {
  return yield all([
    takeLatest('GET_BOOKS_REQUEST', getBooksRequest),
  ])
}
