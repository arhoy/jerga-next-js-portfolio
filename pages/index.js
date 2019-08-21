import React from 'react';

import Head from 'next/head';
import Nav from '../components/nav';

const Index = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Nav />
    <h1>Welcome to Next JS</h1>
  </div>
);

export default Index;
