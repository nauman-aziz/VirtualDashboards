import React, { useState } from 'react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardDetails: '',
    mmYYCVC: '',
    countryOrRegion: '',
    address: '',
    city: '',
    stateProvince: '',
    zipCode: ''
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
      const response = await fetch('https://dummyapi.io/data/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'app-id': 'YOUR_DUMMY_API_APP_ID' // Include this if your API requires an App ID
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data);

      // Here you would handle the successful payment scenario
    } catch (error) {
      console.error("Error during API call", error);
      // Handle errors here
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-800 h-screen flex flex-col items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-blue-900 text-white rounded-lg shadow-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4">Make Your Payment</h2>

        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="card-details">
            Payment Details
          </label>
          <input
            id="card-details"
            name="cardDetails"
            type="text"
            placeholder="Card Details"
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-blue-800 mb-4"
          />
          <input
            name="mmYYCVC"
            type="text"
            placeholder="MM/YY/CVC"
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-blue-800 mb-4"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <input
            name="countryOrRegion"
            type="text"
            placeholder="Country or Region"
            onChange={handleChange}
            required
            className="col-span-2 p-3 rounded bg-blue-800"
          />
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={handleChange}
            required
            className="col-span-2 p-3 rounded bg-blue-800"
          />
          <input
            name="city"
            type="text"
            placeholder="City"
            onChange={handleChange}
            required
            className="p-3 rounded bg-blue-800"
          />
          <input
            name="stateProvince"
            type="text"
            placeholder="State / Province"
            onChange={handleChange}
            required
            className="p-3 rounded bg-blue-800"
          />
          <input
            name="zipCode"
            type="text"
            placeholder="Zip Code"
            onChange={handleChange}
            required
            className="p-3 rounded bg-blue-800"
          />
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

            <div className="flex justify-center mb-6">
              <button className="text-blue-200 underline">Scan QR Code</button>
            </div>

            <div className="flex justify-center">
              <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
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
