import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import HomeIcon from "../src/assests/home.svg";
import HistoryIcon from "../src/assests/history.svg";
import Twitter from "../src/assests/twitter.svg";
import Telegram from "../src/assests/telegram.svg";
import Docs from "../src/assests/docs.svg";

const NavigationBar = ({ navbarVisible, toggleNavbarVisibility }) => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(""); // State to keep track of the active button

  const goToHome = () => {
    setActiveButton("home");
    navigate("/");
  };

  const goToHistory = () => {
    setActiveButton("history");
    navigate("/coming-soon");
  };

  // Dynamic class for buttons to maintain hover state
  const getButtonClass = (buttonName) => {
    return `hover:bg-slate-900 bg-opacity-60 text-white rounded p-2 flex items-center justify-center w-full md:w-45 gap-8 transition-colors ${activeButton === buttonName ? "bg-slate-900 transition-colors" : ""
      }`;
  };
    // Updated style prop for the <nav> element
    const navbarStyle = {
      transition: 'left 0.5s ease', // Add this line
      left: navbarVisible ? '0' : '-255px', // Updated this line
    };

  return (
    <nav
      className={`bg-blue-900 text-white w-64 md:w-46 flex flex-col items-center p-5 space-y-6 h-screen justify-between absolute z-10 sm:z-0 sm:relative inset-y-0 left-0`}
      style={navbarStyle}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white rounded-full p-7">
          {/* Place for company logo */}
        </div>
        <div className="hidden sm:block text-white text-xl">Company Name</div>
        <button onClick={toggleNavbarVisibility}>
          <div className="block sm:hidden text-white text-2xl ">X</div>
        </button>
      </div>

      <div className="text-white flex flex-col items-center space-y-4 w-full">
        <button className={getButtonClass("home")} onClick={goToHome}>
          <img src={HomeIcon} alt="home icon" className="backicadd-header rounded-sm" />
          <span>Home</span>
        </button>
        <button className={getButtonClass("history")} onClick={goToHistory}>
          <img src={HistoryIcon} alt="history icon" className="backicadd-header" />
          <span>History</span>
        </button>
      </div>
      <button className="mt-auto text-gray-300 hover:text-white flex items-center justify-center w-full gap-3">

        <img src={Twitter} alt="Twitter" className="h-7 w-7 hover:bg-slate-900 transition-colors" />
        <img src={Telegram} alt="Twitter" className="h-7 w-7 hover:bg-slate-900 transition-colors" />
        <img src={Docs} alt="Twitter" className="h-7 w-7 hover:bg-slate-900 transition-colors" />

      </button>
    </nav>
  );
};

export default NavigationBar;
