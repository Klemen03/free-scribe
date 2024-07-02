import Link from 'next/link';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">
        <h1>
          Free
          <span className="text-blue-500 font-bold">Scribe</span>
        </h1>
      </Link>
      <Link
        href="/"
        className="flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-500"
      >
        <p>New</p>
        <FaPlus />
      </Link>
    </header>
  );
};

export default Header;
