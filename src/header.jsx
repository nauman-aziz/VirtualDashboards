import React from "react";
import HamburgerMenu from "../src/assests/hamburger.svg";

const Header = ({ toggleNavbarVisibility }) => {
  return (
    <header className="text-white flex justify-between items-center border-solid border-b-2 border-sky-50 p-2">
      <button onClick={toggleNavbarVisibility}>
        <img
          src={HamburgerMenu}
          className="block sm:hidden"
          alt="Hamburger Menu Icon"
        ></img>
      </button>
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button className="bg-indigo-600 hover:bg-blue-700 font-bold py-2 px-4 rounded">
        Login
      </button>
    </header>
  );
};

export default Header;
