import React, { useEffect, useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import BooksContext from '../context/books-context'

const BookForm = () => {
  const { state, dispatch } = useContext(BooksContext)
  const [ validated, setValidated ] = useState(false)
  const [ title, setTitle ] = useState('')
  const [ author, setAuthor ] = useState('')
  const [ isbn, setISBN ] = useState('')

  const addBook = () => {
    const form = event.currentTarget
    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else if (title !== '' && author !== '' && isbn !== '') {
      const book = { title, author, isbn }
      const books = [ ...state, book ]
      localStorage.setItem('booklist', JSON.stringify(books))
      dispatch({ type: 'ADD_BOOK', books })
    }

    setValidated(true)
  }

  // Reset Form after state change
  useEffect(() => {
    setTitle('')
    setAuthor('')
    setISBN('')
    setValidated(false)
  }, [state])

  return (
    <Form noValidate validated={ validated } onSubmit={ addBook }>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Title..."
          value={ title }
          onChange={ e => setTitle(e.target.value) }
        />
        <Form.Control.Feedback type="invalid">Please enter the title.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Author..."
          value={ author }
          onChange={ e => setAuthor(e.target.value) }
        />
        <Form.Control.Feedback type="invalid">Please enter the author's name.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="isbn">
        <Form.Label>ISBN #</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="ISBN #..."
          value={ isbn }
          onChange={ e => setISBN(e.target.value) }
        />
        <Form.Control.Feedback type="invalid">Please enter the ISBN.</Form.Control.Feedback>
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
