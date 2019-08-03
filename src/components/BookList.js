import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import BooksContext from '../context/books-context'

const BookList = () => {
  const { state, dispatch } = useContext(BooksContext)

  return (
    <Table striped hover className="mt-5">
      <thead className="table-secondary">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN #</th>
        </tr>
      </thead>
      <tbody>
        {
          state.map(({ title, author, isbn }) => (
            <tr key={ isbn }>
              <td>{ title }</td>
              <td>{ author }</td>
              <td>{ isbn }</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default BookList
