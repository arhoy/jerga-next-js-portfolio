import React from 'react';
import { withRouter } from 'next/router';

const Portfolio = props => {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <h2> {props.router.query.id} </h2>
    </div>
  );
};

export default withRouter(Portfolio);
