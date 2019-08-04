import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <>
    <h1 className="display-4 text-center">
      <FontAwesomeIcon icon={ faBook } className="text-warning" />
      MyBookList
    </h1>
  </>
)

export default Header