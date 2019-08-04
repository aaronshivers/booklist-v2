import React, { useEffect, useContext } from 'react'
import { Table } from 'react-bootstrap'
import BooksContext from '../context/books-context'
import DeleteButton from './DeleteButton'

const BookList = () => {
  const { state, dispatch } = useContext(BooksContext)

  // Populate books on page load
  useEffect(() => {
    const books = JSON.parse(localStorage.getItem('booklist'))
    dispatch({ type: 'POPULATE_BOOKS', books })
  }, [])

  return (
    <Table striped hover className="mt-5">
      <thead className="table-secondary">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN #</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          state.map(({ title, author, isbn }) => (
            <tr key={ isbn }>
              <td className="align-middle">{ title }</td>
              <td className="align-middle">{ author }</td>
              <td className="align-middle">{ isbn }</td>
              <td>
                <DeleteButton isbn={ isbn } />
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default BookList
