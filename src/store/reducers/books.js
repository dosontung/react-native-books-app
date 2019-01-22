const initialState = {
  data: [],
  startIndex: 0,
  maxResults: 12,
}

export default function books(state = initialState, action) {
  switch (action.type) {
    case 'GET_BOOKS_SUCCESS':
      return {
        ...state,
        data: [...state.data, action.books],
      }

    default:
      return state
  }
}
