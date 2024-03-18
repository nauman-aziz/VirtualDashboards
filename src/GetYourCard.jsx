import React from 'react';

const GetYourCard = () => {
  const handleRedeem = () => {
    // Implement the logic to redeem the card here
    console.log("Redeem button clicked");
  };

  return (
    <div className="bg-blue-800 h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-blue-900 rounded-lg p-6 text-white text-center shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-6 flex items-center justify-center">
          {/* Replace with your card icon */}
          <span className="mr-2">🎯</span> 
          Get Your Card
        </h2>
        <p className="text-lg mb-6">Your card has been created Successfully!</p>
        <button
          onClick={handleRedeem}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Redeem Your Card
        </button>
      </div>
    </div>
  );
};

export default GetYourCard;
