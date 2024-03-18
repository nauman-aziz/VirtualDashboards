import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const SuccessfulPayment = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="bg-blue-800 h-screen flex flex-col items-center justify-center p-4">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={4000}
        recycle={false}
      />
      <div className="bg-blue-900 rounded-lg p-6 text-white text-center shadow-xl w-full max-w-sm">
        <h2 className="text-xl font-bold mb-6">Make Your Payment</h2>
        {/* Placeholder for payment success icon */}
        <div className="text-6xl mb-6">🎊</div>
        <p className="text-lg mb-6">Your Payment has been completed</p>
        {/* Placeholder for checkmark icon */}
        <div className="text-green-500 text-9xl">✅</div>
      </div>
    </div>
  );
};

export default SuccessfulPayment;
