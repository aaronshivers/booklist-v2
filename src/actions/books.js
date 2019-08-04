// import { useContext } from 'react'
// import BookContext from '../context/books-context'


const addBook = ({ ...book }) => (dispatch, state) => {
  // const { state } = useContext(BookContext)
  // console.log(book)
  const books = [ state, book ]
console.log(books)
console.log(dispatch, state)
//   localStorage
//     .setItem('booklist', books)

dispatch({ type: 'ADD_BOOK', book: { title, author, isbn } })
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

