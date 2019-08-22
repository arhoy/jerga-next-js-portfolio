import React from 'react';
import Link from 'next/link';
export default function BsNavLink({ path, label, className }) {
  return (
    <Link href={path}>
      <a className={`nav-link ${className}`}> {label}</a>
    </Link>
  );
}
