import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import LoginLogoutButton from './LoginLogoutButton';

const LoginPage = () => (
  <Container className="text-center center-vertically">
    <Header />
    <LoginLogoutButton />
  </Container>
);

export default LoginPage;
