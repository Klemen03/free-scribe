import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div>
        <h1>
          Free
          <span className="text-blue-500 font-bold">Scribe</span>
        </h1>
      </div>
      <button className="flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-500">
        <p>New</p>
        <FaPlus />
      </button>
    </header>
  );
};

export default Header;
