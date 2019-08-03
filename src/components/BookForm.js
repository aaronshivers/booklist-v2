import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import BooksContext from '../context/books-context'

const BookForm = () => {
  const { state, dispatch } = useContext(BooksContext)
  const [ title, setTitle ] = useState('')
  const [ author, setAuthor ] = useState('')
  const [ isbn, setISBN ] = useState('')

  const addBook = e => {
    e.preventDefault()
    dispatch({ type: 'ADD_BOOK', book: { title, author, isbn } })
  }

  return (
    <Form onSubmit={ addBook }>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title..."
          onChange={ e => setTitle(e.target.value) }
        >
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Author..."
          onChange={ e => setAuthor(e.target.value) }
        >
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>ISBN #</Form.Label>
        <Form.Control
          type="text"
          placeholder="ISBN #..."
          onChange={ e => setISBN(e.target.value) }
        >
        </Form.Control>
      </Form.Group>
      <Button
        variant="outline-warning"
        type="submit"
        size="lg"
        block
      >
        Add Book
      </Button>
    </Form>
  )
}

export default BookForm
