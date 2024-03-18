import React from 'react';

const Header = () => {
  return (
    <header className="text-white flex justify-between items-center p-4 h-40">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button className=" hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </header>
  );
};

export default Header;
