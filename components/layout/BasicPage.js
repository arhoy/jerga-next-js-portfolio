import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'reactstrap';

const BasicPage = ({ children, className }) => {
  return (
    <div className='pd-t10'>
      <Container>{children}</Container>
    </div>
  );
};

BasicPage.defaultProps = {
  className: ''
};
export default BasicPage;
