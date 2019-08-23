import React from 'react';
import auth0 from '../../services/auth0';
const Logout = () => {
  const logout = () => {
    auth0.logout();
  };
  return (
    <span onClick={logout} className='nav-link port-navbar-link clickable'>
      Logout
    </span>
  );
};

export default Logout;
