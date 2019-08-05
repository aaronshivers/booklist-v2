import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <>
    <h2 className="text-center">
      <FontAwesomeIcon icon={ faBook } className="mr-1 text-warning" />
      MyBookList
    </h2>
  </>
)

export default Header