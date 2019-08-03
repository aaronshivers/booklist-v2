import React from 'react'
import { Table } from 'react-bootstrap'

const BookList = ({ books }) => (
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
        books.map(({ title, author, isbn }) => (
          <tr>
            <td>{ title }</td>
            <td>{ author }</td>
            <td>{ isbn }</td>
          </tr>
        ))
      }
    </tbody>
  </Table>
)

export default BookList
