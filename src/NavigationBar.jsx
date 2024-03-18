import React from 'react';
import {  LogoutIcon } from '@heroicons/react/solid'; // Ensure you have installed heroicons package
import HomeIcon from '../src/assests/home.svg'

const NavigationBar = () => {
  return (
    <nav className="bg-blue-900 text-white w-64 md:w-46 flex flex-col items-center py-5 space-y-6 h-screen justify-between" >
      <div className="bg-white rounded-full p-7">
        {/* This would be where you place your company logo as an image or SVG */}
      </div>
      <div className="text-white flex flex-col items-center space-y-4">
        <button className="bg-blue-700 text-white rounded p-2 shadow-lg flex items-center justify-center w-full md:w-45 gap-2">
      
            <img
              src={HomeIcon}
              alt="backicon"
              className="backicadd-header"
            />
           <span>Home</span>
        </button>
        <button className="bg-blue-700 text-white rounded p-2 shadow-lg flex items-center justify-center w-full md:w-45 gap-2">
      
          <img
            src={HomeIcon}
            alt="backicon"
            className="backicadd-header"
          />
          <span>Home</span>
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
