import React from 'react';
import Header from './Header';
import Footer from './Footer';

const BasicLayout = ({ children, className, auth }) => {
  return (
    <div className='layout-container'>
      <Header auth={auth} />
      <main className={`cover ${className}`}>
        <div className='wrapper'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default BasicLayout;
