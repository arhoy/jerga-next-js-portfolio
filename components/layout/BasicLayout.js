import React from 'react';
import Header from './Header';
import Footer from './Footer';

const BasicLayout = ({ children, className, isAuth }) => {
  console.log('auth from base layout', isAuth);
  return (
    <div className='layout-container'>
      <Header isAuth={isAuth} />
      <main className={`cover ${className}`}>
        <div className='wrapper'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default BasicLayout;
