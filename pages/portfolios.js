import React from 'react';
import axios from 'axios';
import Link from 'next/link';

const Portfolios = ({ posts }) => {
  return (
    <div>
      <h1>Porfolios Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link as={`/portfolio/${post.id}`} href={`/portfolio/[id]`}>
              <a> {post.title} </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Portfolios.getInitialProps = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return { posts: res.data.splice(0, 10) };
  } catch (error) {
    console.error('there as aerror', error);
    return { posts: 'there an error' };
  }
};

export default Portfolios;
