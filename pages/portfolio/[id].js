import React from 'react';
import axios from 'axios';
import Link from 'next/link';

const Portfolio = ({ post }) => {
  return (
    <div>
      <h1>Porfolio</h1>
      <h2>{post.title}</h2>
      <p> {post.body} </p>
    </div>
  );
};

Portfolio.getInitialProps = async context => {
  const { id } = context.query;
  let post = {};
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    post = res.data;

    return { post: res.data };
  } catch (error) {
    console.error('There was an error in portfolio ids', error);
  }
  return { post };
};

export default Portfolio;
