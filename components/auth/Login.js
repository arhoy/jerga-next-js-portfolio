import React from 'react';
import auth0 from '../../services/auth0';
const Login = () => {
  const login = () => {
    console.log('I was logged in!');
    auth0.login();
  };
  return (
    <span onClick={login} className='nav-link port-navbar-link clickable'>
      Login
    </span>
  );
};

export default Login;
