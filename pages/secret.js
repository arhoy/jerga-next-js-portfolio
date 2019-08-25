import React from 'react';
import Head from 'next/head';
import BasicPage from '../components/layout/BasicPage';
import withAuth from '../components/hoc/withAuth';

const Secret = ({ auth: { user }, secret }) => {
  return (
    <div>
      <BasicPage>
        <h1>I am secret page</h1>
        <p>Dear {user.given_name} welcome to the covenant secret page </p>
        <p>
          The super secret value is <b> {secret}</b>
        </p>
      </BasicPage>
    </div>
  );
};

Secret.getInitialProps = () => {
  const secret = 'alex';
  return { secret };
};

export default withAuth(Secret);
