import React, { useState } from "react";
import VisaIcon from "../src/assests/visa.svg";
import MasterIcon from "../src/assests/master-card.svg";
import AmericanExpressIcon from "../src/assests/amex.svg";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const [formData, setFormData] = useState({
    cardDetails: "",
    mmYYCVC: "",
    countryOrRegion: "",
    address: "",
    city: "",
    stateProvince: "",
    zipCode: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Implement further form validation if necessary
    setLoading(true);

    try {
      // Simulate an API call
      // const response = await fetch("https://dummyapi.io/data/api/post", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     // 'app-id': 'YOUR_DUMMY_API_APP_ID' // Include this if your API requires an App ID
      //   },
      //   body: JSON.stringify(formData),
      // });

      // const data = await response.json();
      // console.log(data);

      // Here you would handle the successful payment scenario
      navigate("/successful-payment");
    } catch (error) {
      console.error("Error during API call", error);
      // Handle errors here
    } finally {
      setLoading(false);
    }
  };

  // Function to handle click on the card
  const gotoPaymentQrCode = () => {
    navigate("/payment-qr-code");
  };

  return (
    <div className="flex flex-col items-center justify-center mx-6 sm:mx-0">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-950 bg-opacity-40 text-white rounded-lg shadow-xl w-full max-w-md border-solid border border-gray-600"
      >
        <h2 className="text-2xl font-bold py-4 px-6 flex items-center justify-center border-solid border-b-2 border-gray-600">
          {/* Replace with your payment icon */}
          <span className="mr-2">💸</span>
          Make Your Payment
        </h2>
        <div className="pt-4 px-6">
          <label
            className="flex items-center justify-between font-bold text-lg w-full mb-3"
            htmlFor="card-details"
          >
            Payment Details
            <div className="flex items-center justify-end gap-2">
              <img src={VisaIcon} alt="Visa Card" />
              <img src={MasterIcon} alt="Master Card" />
              <img src={AmericanExpressIcon} alt="American Express Card" />
            </div>
          </label>
          <input
            id="card-details"
            name="cardDetails"
            type="text"
            placeholder="Card Details"
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-950 bg-opacity-40 mb-2"
          />
          <input
            name="mmYYCVC"
            type="text"
            placeholder="MM/YY/CVC"
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-950 bg-opacity-40"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 py-4 px-6">
          <input
            name="countryOrRegion"
            type="text"
            placeholder="Country or Region"
            onChange={handleChange}
            required
            className="col-span-2 p-3 rounded bg-gray-950 bg-opacity-40"
          />
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={handleChange}
            required
            className="col-span-2 p-3 rounded bg-gray-950 bg-opacity-40"
          />
          <input
            name="city"
            type="text"
            placeholder="City"
            onChange={handleChange}
            required
            className="col-span-2 p-3 rounded bg-gray-950 bg-opacity-40"
          />
          <input
            name="stateProvince"
            type="text"
            placeholder="State / Province"
            onChange={handleChange}
            required
            className="p-3 rounded bg-gray-950 bg-opacity-40"
          />
          <input
            name="zipCode"
            type="text"
            placeholder="Zip Code"
            onChange={handleChange}
            required
            className="p-3 rounded bg-gray-950 bg-opacity-40"
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center mb-1">
              <div className="border-t border-gray-400 flex-grow mr-3"></div>
              <div className="text-gray-400 uppercase">or</div>
              <div className="border-t border-gray-400 flex-grow ml-3"></div>
            </div>

            <div className="flex justify-center mb-3">
              <button
                onClick={gotoPaymentQrCode}
                className="text-blue-200 underline"
              >
                Scan QR Code
              </button>
            </div>

            <div className="flex justify-center mb-2">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Confirm
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default PaymentForm;
