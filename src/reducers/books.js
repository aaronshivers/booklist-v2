export default (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      const books = [ ...state, action.book ]
      localStorage.setItem('booklist', JSON.stringify(books))
      return books
    case 'DELETE_BOOK':
      return state.filter(({ isbn }) => isbn !== action.isbn)
    default:
      return state
  }
}
