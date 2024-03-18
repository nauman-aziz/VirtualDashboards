import React from 'react';

const offers = [
  { amount: 100, cardNumber: '1234 1234 1234 1234', name: 'ODEAN SMITH' },
  { amount: 300, cardNumber: '1234 1234 1234 1234', name: 'ODEAN SMITH' },
  { amount: 5000, cardNumber: '1234 1234 1234 1234', name: 'ODEAN SMITH' },
  // ... You can add more offers here
];

const OfferCard = () => {
  return (
    <div className="bg-blue-500 rounded-lg shadow-xl overflow-hidden w-96 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 opacity-75"></div>
      <div className="relative p-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-lg font-bold uppercase tracking-wide">TREMENDOUS</div>
            <img src="/path-to-chip-image.png" alt="Chip" className="mt-4" />
          </div>
          <img src="/path-to-flag-image.png" alt="USA Flag" className="w-12 h-8" />
        </div>
        <div className="flex flex-col items-start justify-between mt-8">
          <div className="text-2xl font-bold">1234 1234 1234 1234</div>
          <div className="flex justify-between items-center w-full mt-8">
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
    <>
    <div className='  flex flex-row gap-10'>
    <button className="  text-white font-bold py-2 px-4 " >
            back
          </button>
      <h2 className=" text-white text-2xl font-bold ">Select Your Offer</h2>
    </div>
    <div className=" flex flex-col  h-screen items-center p-4">
      <div className="flex overflow-x-auto gap-14">
        {offers.map((offer, index) => (
          <OfferCard key={index} amount={offer.amount} cardNumber={offer.cardNumber} name={offer.name} />
        ))}
      </div>
    </div>
    </>
  );
};

export default OfferCards;
