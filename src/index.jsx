import React from 'react';
import { render } from 'react-dom';
import { firebase } from './db/firebase';
import UserContext from './context/user-context';
import './styles/styles.scss';
import LoginPage from './components/LoginPage';
import App from './components/App';

firebase.auth().onAuthStateChanged((user) => {
  const jsx = !user
    ? <LoginPage />
    : (
      <UserContext.Provider value={{ uid: user.uid }}>
        <App />
      </UserContext.Provider>
    );

  render(jsx, document.getElementById('app'));
});
