import React, { useState } from 'react';

const PaymentQrCode = () => {
  const [loading, setLoading] = useState(false);

  const handleManualPaymentClick = () => {
    // Simulate a loading/payment process
    setLoading(true);
    
    // Simulate an async task, like an API call
    setTimeout(() => {
      setLoading(false);
      // After loading you might want to redirect or update the state
    }, 3000); // 3 seconds loading for demonstration
  };

  return (
    <div className="bg-blue-800 h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-blue-900 rounded-lg p-6 text-white text-center shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
          {/* Replace with your payment icon */}
          <span className="mr-2">💸</span>
          Make Your Payment
        </h2>
        <div className="bg-white p-6 rounded-lg mb-6">
          {/* Replace with your actual QR code image */}
          <img src="data:image/png;base64,..." alt="QR Code" className="mx-auto" />
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center mb-6">
              <div className="border-t border-gray-400 flex-grow mr-3"></div>
              <div className="text-gray-400 uppercase">or</div>
              <div className="border-t border-gray-400 flex-grow ml-3"></div>
            </div>
            <button
              onClick={handleManualPaymentClick}
              className="underline rounded py-2 px-4 text-lg font-bold "
              disabled={loading}
            >
              Make Payment Manually
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentQrCode;
