import React from 'react';
import BasicPage from '../components/layout/BasicPage';

const Test = ({ testId }) => {
  return (
    <BasicPage>
      <h1>TEST</h1>
      <p> Id: {testId}</p>
    </BasicPage>
  );
};

Test.getInitialProps = context => {
  console.log('context is ', context);
  const testId = context.query.id;
  return { testId };
};

export default Test;
