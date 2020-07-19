import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../context/user-context';
import LoginLogoutButton from './LoginLogoutButton';

const Navigation = () => {
  const { uid } = useContext(UserContext);

  return (
    <Navbar>
      <Navbar.Brand className="mr-auto">
        <FontAwesomeIcon icon={faBook} className="mr-1 text-warning" />
        MyBookList
      </Navbar.Brand>
      <LoginLogoutButton uid={uid} />
    </Navbar>
  );
};

export default Navigation;
