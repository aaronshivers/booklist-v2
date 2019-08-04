export default (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return action.books
    case 'DELETE_BOOK':
      return action.books
    case 'POPULATE_BOOKS':
      return action.books
    default:
      return state
  }
}
