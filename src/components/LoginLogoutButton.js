import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import UserContext from '../context/user-context'
import { login, logout } from '../actions/auth'

const LoginLogoutButton = uid => {
  const [ loggedIn, setLoggedIn ] = useState(false)

  useEffect(() => {
    setLoggedIn(Object.keys(uid).length !== 0)
  }, [])

  return (
    <Button
      variant={ loggedIn ? "outline-warning" : "warning" }
      onClick={ loggedIn ? logout : login }
    >
      {
        loggedIn ? 'Logout' : 'Login'
      }
    </Button>
  )
}

export default LoginLogoutButton
