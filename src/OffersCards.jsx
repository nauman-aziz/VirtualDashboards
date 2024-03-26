import React, { useState, useEffect } from "react";
import ChipIcon from "../src/assests/chip.svg";
import { useNavigate } from "react-router-dom";

const fetchProviders = async () => {
  const response = await fetch(
    "https://paypawbackend.paypawbe.workers.dev/get-providers"
  );
  const data = await response.json();
  return data;
};

const OfferCard = ({
  providerName,
  amount,
  cardNumber,
  name,
  countryFlagURL,
  currency,
}) => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle click on the card
  const gotoPaymentQrCode = () => {
    navigate("/payment-qr-code");
  };

  return (
    <div
      className="bg-gray-950 bg-opacity-40 rounded-lg shadow-xl overflow-hidden w-full sm:w-80 mx-4 sm:mx-0 text-white relative"
      onClick={gotoPaymentQrCode}
    >
      <div className="absolute inset-0"></div>
      <div className="relative p-6">
        <div className="flex justify-between items-start">
          <div className="text-lg font-bold uppercase tracking-wide">
            {providerName}
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <img src={ChipIcon} alt="Chip" className="w-12 h-8" />
          <img src={countryFlagURL} alt="Country Flag" className="w-12 h-8" />
        </div>
        <div className="flex flex-col items-start justify-between mt-4">
          <div className="text-2xl font-bold">{cardNumber}</div>
          <div className="flex justify-between items-center w-full mt-4">
            <div className="text-lg">{name}</div>
            <div className="text-2xl font-bold">{`${currency} ${amount}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OfferCards = () => {
  const [providers, setProviders] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const getProviders = async () => {
      const providersData = await fetchProviders();
      setProviders(providersData);
    };

    getProviders();
  }, []);
  const gotoProviders = () => {
    navigate("/select-provider");
  };

  return (
    <div className="w-full h-full">
      <div
        className="flex flex-col items-start justify-between gap-4"
        style={{ height: "92%" }}
      >
        <div className="flex items-baseline justify-start gap-4">
          <button
            className="dot hover:bg-black hover:bg-opacity-50 rounded-full text-white font-bold px-2 py-1 transition-colors"
            onClick={gotoProviders}
          >
            ←
          </button>
          <div className="text-white text-xl mb-5">Select Your Offer</div>
        </div>
        <div className="flex-1 flex flex-wrap items-start justify-center sm:justify-start gap-2 sm:gap-4 h-100 overflow-y-auto w-full">
          {providers ? (
            providers.map((provider, index) => (
              <OfferCard
                key={index}
                providerName={provider.provider}
                amount={provider.amounts.split(",")[0]} // Using the first amount as an example
                cardNumber="1234 1234 1234 1234" // Static card number for example
                name="ODEAN SMITH" // Static name for example
                countryFlagURL={`https://flagcdn.com/w20/us.png`} // Example flag URL
                currency={provider.currency} // Currency}
              />
            ))
          ) : (
            <div>Failed to fetch data</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferCards;
