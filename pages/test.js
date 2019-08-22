import React from 'react';
import BasicLayout from '../components/layout/BasicLayout';

const Test = ({ testId }) => {
  return (
    <BasePage>
      <h1>TEST</h1>
      <p> Id: {testId}</p>
    </BasePage>
  );
};

Test.getInitialProps = context => {
  console.log('context is ', context);
  const testId = context.query.id;
  return { testId };
};

export default Test;
