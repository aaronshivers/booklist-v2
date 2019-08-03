import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import BooksContext from '../context/books-context'

const BookList = ({ isbn }) => {
  const { state, dispatch } = useContext(BooksContext)

  return (
    <Button
      variant="danger"
      onClick={ () => dispatch({ type: 'DELETE_BOOK', isbn }) }
    >X</Button>
  )
}

export default BookList
