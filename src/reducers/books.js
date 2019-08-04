export default (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      const updatedBooks = [ ...state, action.book ]
      localStorage.setItem('booklist', JSON.stringify(updatedBooks))
      return updatedBooks
    case 'DELETE_BOOK':
      return state.filter(({ isbn }) => isbn !== action.isbn)
    case 'POPULATE_BOOKS':
      return action.books
    default:
      return state
  }
}
