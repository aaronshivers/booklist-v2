export default (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [ ...state, { action.books } ]
    default:
      return state
  }
}
