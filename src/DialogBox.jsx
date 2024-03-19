import React, { useState } from "react";
import ScrollableDialogBox from "./selectCountryDialogBox";

const DialogBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="absolute bg-opacity-50 flex justify-center items-center">
      {!isModalOpen && (
        <div className="bg-blue-800 text-white rounded-lg max-w-lg mx-auto border-solid border-2 border-gray-100">
          <div className="flex flex-col items-center">
            {/* heading */}
            <div className="flex items-center p-6 border-solid  border-b-2 border-gray-100">
              <h2 className="text-2xl font-bold mb-3">
                🤝 Welcome to "Your Brand Name"
              </h2>
            </div>
            {/* body */}
            <div className="flex flex-col items-center px-6 pb-6">
              <p className="text-lg my-6">
                Finding your perfect card is just a click away.
              </p>
              <button
                className="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                onClick={openModal}
              >
                Create your Card
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && <ScrollableDialogBox onClose={closeModal} />}
    </div>
  );
};

export default DialogBox;
