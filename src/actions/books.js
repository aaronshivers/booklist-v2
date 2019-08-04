const addBook = book => (state, dispatch) => {
  const books = [ ...state, book ]
  localStorage.setItem('booklist', JSON.stringify(books))
  dispatch({ type: 'ADD_BOOK', books })
}

const deleteBook = isbn => (state, dispatch) => {
  const books = state.filter(book => book.isbn !== isbn)
  localStorage.setItem('booklist', JSON.stringify(books))
  dispatch({ type: 'DELETE_BOOK', books })
}

export {
  addBook,
  deleteBook
}
