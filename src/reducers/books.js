export default (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'ADD_BOOK':
      return [ ...state, action.book ]
    case 'DELETE_BOOK':
      return state.filter(({ isbn }) => isbn !== action.isbn)
    default:
      return state
  }
}
