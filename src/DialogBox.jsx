import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook


const DialogBox = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  
  const goToCreateYourCard = () => {
    navigate("/select-country");
  };

  return (
    <div className="absolute bg-opacity-50 flex justify-center items-center mx-8 sm:mx-0">
        <div className="bg-gray-950 bg-opacity-40 text-white rounded-lg max-w-lg mx-auto border-solid border-2 border-gray-100">
          <div className="flex flex-col items-center">
            {/* heading */}
            <div className="flex items-center justify-start p-4 border-solid  border-b-2 border-gray-100">
              <h2 className="text-2xl font-bold mb-3">
                🤝 Welcome to "Your Brand Name"
              </h2>
            </div>
            {/* body */}
            <div className="flex flex-col items-center px-4 pb-4">
              <p className="text-lg my-6">
                Finding your perfect card is just a click away.
              </p>
              <button
                className="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                onClick={goToCreateYourCard}
              >
                Create your Card
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default DialogBox;
