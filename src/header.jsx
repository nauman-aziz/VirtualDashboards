import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import HamburgerMenu from "../src/assests/hamburger.svg"; // Ensure the path is correct

const Header = ({ toggleNavbarVisibility }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLoginClick = () => {
    navigate('/login-form'); // Navigate to the LoginForm component
  };

  return (
    <header className="text-white flex justify-between items-center border-solid border-b-2 border-sky-50 p-2">
      <button onClick={toggleNavbarVisibility}>
        <img src={HamburgerMenu} className="block sm:hidden" alt="Hamburger Menu Icon"></img>
      </button>
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button
        onClick={handleLoginClick} // Use the handleLoginClick function for the onClick event
        className="bg-indigo-600 hover:bg-blue-700 font-bold py-2 px-4 rounded"
      >
        Login
      </button>
    </header>
  );
};

export default Header;
