import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { LogoutIcon } from "@heroicons/react/solid";
import HomeIcon from "../src/assests/home.svg";
import HistoryIcon from "../src/assests/history.svg";

const NavigationBar = ({ navbarVisible, toggleNavbarVisibility }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Define functions to handle navigation
  const goToHome = () => {
    navigate("/");
  };

  const goToHistory = () => {
    navigate("/history-table");
  };

  return (
    <nav
      className={`bg-blue-900 text-white w-64 md:w-46 flex flex-col items-center p-5 space-y-6 h-screen justify-between absolute z-10 sm:z-0 sm:relative inset-y-0 left-0`}
      style={!navbarVisible ? { left: "-255px" } : { left: 0 }}
    >
      <div
        className={`flex flex-col items-start justify-start sm:items-center sm:justify-center`}
      >
        <div className="bg-white rounded-full p-7">
          {/* This would be where you place your company logo as an image or SVG */}
        </div>
        <div className="hidden sm:block text-white text-xl">Company Name</div>
        <button onClick={toggleNavbarVisibility}>
          <div className="block sm:hidden text-white text-2xl">X</div>
        </button>
      </div>

      <div className="text-white flex flex-col items-center space-y-4 w-full">
        {/* Use onClick event to trigger navigation functions */}
        <button
          className="hover:bg-slate-900 bg-opacity-60 text-white rounded p-2 flex items-center justify-center w-full md:w-45 gap-8"
          onClick={goToHome}
        >
          <img
            src={HomeIcon}
            alt="home icon"
            className="backicadd-header rounded-sm"
          />
          <span>Home</span>
        </button>
        <button
          className="hover:bg-slate-900 bg-opacity-60 text-white rounded p-2 flex items-center justify-center w-full md:w-45 gap-7"
          onClick={goToHistory}
        >
          <img
            src={HistoryIcon}
            alt="history icon"
            className="backicadd-header"
          />
          <span>History</span>
        </button>
      </div>
      <button className="mt-auto text-gray-300 hover:text-white flex items-center justify-center w-full">
        <LogoutIcon className="h-6 w-6" />
        <span className="hidden md:block">Log Out</span>
      </button>
    </nav>
  );
};

export default NavigationBar;
