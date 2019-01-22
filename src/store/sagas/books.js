import { call, put } from 'redux-saga/effects'
import api from '~/services/api'

import { getBooksSuccess } from '~/store/actions/books'

const query = 'Design Books'

export function* getBooksRequest() {
  const response = yield call(api.get, `${query}&maxResults=12`)

  yield put(getBooksSuccess(response.data))
}
