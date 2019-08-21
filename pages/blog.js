import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
import { withRouter } from 'next/router';

const PostLink = ({ id }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${id}`}>
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
      <Nav />
      <h1>Welcome to Next BLOG</h1>
      <ul>
        <PostLink id="hello-dude" />
        <PostLink id="hello-gal" />
      </ul>
    </div>
  );
};

export default withRouter(Blog);
