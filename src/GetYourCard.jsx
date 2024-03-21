import React from "react";

const GetYourCard = () => {
  const handleRedeem = () => {
    // Implement the logic to redeem the card here
    console.log("Redeem button clicked");
  };

  return (
    // <div className="bg-blue-800 h-screen flex flex-col items-center justify-center p-4">
    <div className="bg-gray-950 bg-opacity-40 rounded-lg text-white text-center shadow-xl w-full  mx-8 sm:mx-0 border-solid border border-gray-600">
      <h2 className="text-2xl font-bold p-4 flex items-center justify-start border-solid border-b-2 border-gray-600 mb-4">
        <span className="mr-2">🎯</span>
        Get Your Card
      </h2>
      <p className="text-lg mb-6">Your card has been created Successfully!</p>
      <button
        onClick={handleRedeem}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Redeem Your Card
      </button>
    </div>
    // </div>
  );
};

export default GetYourCard;
