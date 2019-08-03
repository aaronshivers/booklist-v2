import React, { useReducer, useContext } from 'react'
import { Container } from 'react-bootstrap'
import BooksContext from '../context/books-context'
import booksReducer from '../reducers/books'
import Header from './Header'
import BookForm from './BookForm'
import BookList from './BookList'

const initialState = [{
  title: 'Book Title',
  author: 'Author Name',
  isbn: '12341234'
}]

const App = () => {
  const [ state, dispatch ] = useReducer(booksReducer, initialState)

  return (
    <BooksContext.Provider value={ { state, dispatch } }>
      <Container className="mt-4 mb-4">
        <Header />
        <BookForm />
        <BookList />
      </Container>
    </BooksContext.Provider>
  )
}

export default App
