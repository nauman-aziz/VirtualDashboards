import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import CheersIcon from "../src/assests/cheers.svg";
import RoundedCheckIcon from "../src/assests/circle-check.svg";

const SuccessfulPayment = () => {
  const { width, height } = useWindowSize();

  return (
    <div className=" flex flex-col items-center justify-center bg-gray-950 bg-opacity-40 rounded-lg text-white text-center shadow-xl w-full mx-6 sm:mx-0 max-w-md border-solid border border-gray-600">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={4000}
        recycle={false}
      />
      <div className="bg-gray-950 bg-opacity-40 rounded-lg text-white text-center shadow-xl w-full sm:max-w-md mx-2 sm:mx-0 border-solid border border-gray-600">
        <h2 className="text-2xl font-bold p-4 flex items-center justify-start border-solid border-b-2 border-gray-600">
          {/* Replace with your payment icon */}
          <span className="mr-2">💸</span>
          Make Your Payment
        </h2>
        {/* Placeholder for payment success icon */}
        <div className="my-4 flex items-center justify-center">
          <img src={CheersIcon} alt="Cheers" className="w-24" />
        </div>
        <p className="text-lg mb-6">Your Payment has been completed</p>
        {/* Placeholder for checkmark icon */}
        <div className="flex items-center justify-center mb-4">
          <img src={RoundedCheckIcon} alt="Check Mark" className="w-12" />
        </div>
        <button>
          <p className="text-lg underline mb-6">Redeem Your Card</p>
        </button>
      </div>
    </div>
  );
};

export default SuccessfulPayment;
