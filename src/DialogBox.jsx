import React, { useState } from 'react';
import ScrollableDialogBox from './selectCountryDialogBox';

const DialogBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
     {!isModalOpen && <div className="bg-blue-800 text-white p-6 rounded-lg max-w-lg mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-3">🤝  Welcome to "Your Brand Name"</h2>
          <p className="text-lg mb-6">Finding your perfect card is just a click away.</p>
          <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors" onClick={openModal}>
            Create your Card
          </button>
        </div>
      </div>}
      {isModalOpen && <ScrollableDialogBox onClose={closeModal} />}
    </div>
  );
};

export default DialogBox;
