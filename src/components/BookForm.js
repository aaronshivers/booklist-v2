import React from 'react'
import { Form, Button } from 'react-bootstrap'

const BookForm = () => (
  <Form>
    <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control
        type="text"
        placeholder="Title..."
      >
      </Form.Control>
    </Form.Group>
    <Form.Group>
      <Form.Label>Author</Form.Label>
      <Form.Control
        type="text"
        placeholder="Author..."
      >
      </Form.Control>
    </Form.Group>
    <Form.Group>
      <Form.Label>ISBN #</Form.Label>
      <Form.Control
        type="text"
        placeholder="ISBN #..."
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

export default BookForm
