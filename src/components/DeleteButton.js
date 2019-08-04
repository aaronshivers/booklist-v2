import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import BooksContext from '../context/books-context'
import { deleteBook } from '../actions/books'

const BookList = ({ isbn }) => {
  const { state, dispatch } = useContext(BooksContext)

  return (
    <Button
      variant="danger"
      onClick={ () => deleteBook(isbn)(state, dispatch) }
    >
      <FontAwesomeIcon
        icon={ faTrashAlt }
        className="text-dark"
      />
    </Button>
  )
}

export default BookList
