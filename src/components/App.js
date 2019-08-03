import React, { useReducer, useContext } from 'react'
import { Container } from 'react-bootstrap'
import bookReducer from '../reducers/books'
import Header from './Header'
import BookForm from './BookForm'
import BookList from './BookList'


const App = () => {
  const [ state, dispatch ] = useReducer(reducer, [])

  return (
    <Container className="mt-4 mb-4">
      <Header />
      <BookForm />
      <BookList books={ books } />
    </Container>
  )
}

export default App
