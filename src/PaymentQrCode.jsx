import React, { useState } from "react";
import QRIcon from "../src/assests/qr.svg";
import { useNavigate } from "react-router-dom";



const PaymentQrCode = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleManualPaymentClick = () => {
    // Simulate a loading/payment process
    setLoading(true);

    // Simulate an async task, like an API call
    setTimeout(() => {
      setLoading(false);
      // After loading you might want to redirect or update the state
      navigate("/payment-form")

    }, 3000); // 3 seconds loading for demonstration
  };

  return (
    <div className="bg-gray-950 bg-opacity-40 rounded-lg text-white text-center shadow-xl w-full mx-6 sm:mx-0 max-w-md border-solid border-2 border-gray-100">
      <h2 className="text-2xl font-bold p-4 flex items-center justify-start border-solid border-b-2 border-gray-100">
        {/* Replace with your payment icon */}
        <span className="mr-2">💸</span>
        Make Your Payment
      </h2>
      <div className="flex items-center justify-center w-full p-6">
        <div className="bg-white p-4 rounded-lg w-40 h-40">
          {/* Replace with your actual QR code image */}
          <img
            src={QRIcon}
            alt="QR Code"
            className="mx-auto"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center">
            <div className="border-t border-gray-400 flex-grow mr-3"></div>
            <div className="text-gray-400 uppercase">or</div>
            <div className="border-t border-gray-400 flex-grow ml-3"></div>
          </div>
          <button
            onClick={handleManualPaymentClick}
            className="underline rounded pt-2 pb-4 px-4 text-lg font-bold "
            disabled={loading}
          >
            Make Payment Manually
          </button>
        </>
      )}
    </div>
  );
};

export default PaymentQrCode;
