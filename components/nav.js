import React from 'react';
import Link from 'next/link';
import { Link as NavLink } from '../routes';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolios</a>
        </Link>
        <Link href="/test">
          <a>Test</a>
        </Link>
      </li>
      <li>
        <NavLink route="test" params={{ id: '1' }}>
          <a> Test 1 </a>
        </NavLink>
      </li>
      <li>
        <NavLink route="test" params={{ id: '2' }}>
          <a> Test 2 </a>
        </NavLink>
      </li>
      <li>
        <NavLink route="test" params={{ id: '3' }}>
          <a> Test 3 </a>
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
