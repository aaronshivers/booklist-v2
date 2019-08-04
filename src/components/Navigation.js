import React, { useContext } from 'react'
import { Navbar } from 'react-bootstrap'
import UserContext from '../context/user-context'
import LoginLogoutButton from './LoginLogoutButton'

const Navigation = () =>{
  const { uid } = useContext(UserContext)

  return (
    <Navbar className="justify-content-end">
      <LoginLogoutButton uid={ uid } />
    </Navbar>
  )
}

export default Navigation
