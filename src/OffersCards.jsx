import React from "react";
import ChipIcon from "../src/assests/chip.svg";

const offers = [
  { amount: 100, cardNumber: "1234 1234 1234 1234", name: "ODEAN SMITH" },
  { amount: 300, cardNumber: "1234 1234 1234 1234", name: "ODEAN SMITH" },
  { amount: 5000, cardNumber: "1234 1234 1234 1234", name: "ODEAN SMITH" },
  // ... You can add more offers here
];

const OfferCard = () => {
  return (
    <div className="bg-gray-950 bg-opacity-40 rounded-lg shadow-xl overflow-hidden w-full sm:w-80 mx-4 sm:mx-0 text-white relative">
      <div className="absolute inset-0"></div>
      <div className="relative p-6">
        <div className="flex justify-between items-start">
          <div className="text-lg font-bold uppercase tracking-wide">
            TREMENDOUS
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <img src={ChipIcon} alt="Chip" className="w-12 h-8" />
          <img
            src="/path-to-flag-image.png"
            alt="USA Flag"
            className="w-12 h-8"
          />
        </div>
        <div className="flex flex-col items-start justify-between mt-4">
          <div className="text-2xl font-bold">1234 1234 1234 1234</div>
          <div className="flex justify-between items-center w-full mt-4">
            <div className="text-lg">ODEAN SMITH</div>
            <div className="text-2xl font-bold">$100</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OfferCards = () => {
  return (
    <div className="w-full h-full">
      <div
        className=" flex flex-col items-start justify-between gap-4"
        style={{ height: "92%" }}
      >
        <div className="flex items-baseline justify-start gap-4">
          <button className="hover:bg-black hover:bg-opacity-50 rounded-full text-white font-bold px-2 py-1 transition-colors">
            ←
          </button>
          <div className="text-white text-xl mb-5">Select Your Offer</div>
        </div>
        <div className="flex-1 flex flex-wrap items-start justify-center sm:justify-start gap-2 sm:gap-4 h-100 overflow-y-auto w-full">
          {offers.map((offer, index) => (
            <OfferCard
              key={index}
              amount={offer.amount}
              cardNumber={offer.cardNumber}
              name={offer.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferCards;
