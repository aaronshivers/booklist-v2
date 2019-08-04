import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import BooksContext from '../context/books-context'
import { deleteBook } from '../actions/books'

const BookList = ({ isbn }) => {
  const { state, dispatch } = useContext(BooksContext)

  return (
    <Button
      variant="danger"
      onClick={ () => deleteBook(isbn)(state, dispatch) }
    >X</Button>
  )
}

export default BookList
