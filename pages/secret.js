import React from 'react';
import Head from 'next/head';
import BasicPage from '../components/layout/BasicPage';

const Secret = ({ auth: { user, isAuthenticated } }) => {
  console.log(user, isAuthenticated);
  return (
    <div>
      <Head>
        <title>Secret Page</title>
      </Head>
      <BasicPage>
        <h1>I am an Secret Page</h1>
      </BasicPage>
    </div>
  );
};

export default Secret;
