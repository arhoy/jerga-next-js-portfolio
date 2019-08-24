import React from 'react';
import Head from 'next/head';
import BasicPage from '../components/layout/BasicPage';

const About = ({ auth: { user, isAuthenticated } }) => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <BasicPage>
        <h1>I am an Alien</h1>
      </BasicPage>
    </div>
  );
};

export default About;
