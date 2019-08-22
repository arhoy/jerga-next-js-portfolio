import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'reactstrap';

const BasicPage = ({ children, className }) => {
  return (
    <div className='layout-container'>
      <Header />
      <main className={`cover`}>
        <div className={`pd-t10 wrapper ${className}`}>
          <Container>{children}</Container>
        </div>
      </main>
      <Footer />
    </div>
  );
};

BasicPage.defaultProps = {
  className: ''
};
export default BasicPage;
