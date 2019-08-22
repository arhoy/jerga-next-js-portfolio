import React from 'react';

import Head from 'next/head';
import BasicLayout from '../components/layout/BasicLayout';

const Index = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <BasicLayout>
      <h1>Welcome to Next JS</h1>
    </BasicLayout>
  </div>
);

export default Index;
