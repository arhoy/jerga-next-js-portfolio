import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { withRouter } from 'next/router';
import BasicPage from '../components/layout/BasicPage';

const PostLink = ({ id }) => (
  <li>
    <Link href='/p/[id]' as={`/p/${id}`}>
      <a>{id}</a>
    </Link>
  </li>
);

const Blog = () => {
  return (
    <div>
      <Head>
        <title>BLOG</title>
      </Head>
      <BasicPage>
        <h1>Welcome to Next BLOG</h1>
        <ul>
          <PostLink id='hello-dude' />
          <PostLink id='hello-gal' />
        </ul>
      </BasicPage>
    </div>
  );
};

export default withRouter(Blog);
