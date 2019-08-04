import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import BooksContext from '../context/books-context'

const BookList = ({ isbn }) => {
  const { state, dispatch } = useContext(BooksContext)

  const deleteBook = () => {
    const books = state.filter(book => book.isbn !== isbn)
    console.log(books)

    dispatch({ type: 'DELETE_BOOK', books })
  }

  return (
    <Button
      variant="danger"
      onClick={ deleteBook }
    >X</Button>
  )
}

export default BookList
