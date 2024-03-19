import React from "react";
import HamburgerMenu from "../src/assests/hamburger.svg";

const Header = ({ mobileView }) => {
  return (
    <header className="text-white flex justify-between items-center">
      {mobileView && <img src={HamburgerMenu} alt="Hamburger Menu Icon"></img>}
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button className="bg-indigo-600 hover:bg-blue-700 font-bold py-2 px-4 rounded">
        Login
      </button>
    </header>
  );
};

export default Header;
