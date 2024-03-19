import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid"; // make sure to install @heroicons/react package

const ScrollableDialogBox = () => {
  return (
    <div className="absolute flex justify-center items-center p-4">
      <div
        className="bg-blue-800 bg-opacity-40 text-white w-500 max-w-lg rounded-lg overflow-hidden border-solid border-2 border-gray-100"
        style={{ width: "500px" }}
      >
        <div className="p-6 border-solid  border-b-2 border-gray-100">
          <h2 className="text-lg font-semibold">🌍 Select Your Country</h2>
        </div>
        <div className="max-h-64 overflow-y-auto border-solid  border-b-2 border-gray-100">
          {/* Scrollable content goes here */}
          <ul className="divide-y-2 divide-gray-100">
            {/* Repeat this `li` for each country */}
            <li className="flex justify-between items-center p-4">
              <div className="flex items-center">
                {/* Replace with your country flag image */}
                <img
                  src="path/to/your/flag.png"
                  alt="Country Flag"
                  className="h-6 w-10 mr-2"
                />
                <span>America</span>
              </div>
              <input type="checkbox" className="h-5 w-5" />
            </li>
            <li className="flex justify-between items-center p-4">
              <div className="flex items-center">
                {/* Replace with your country flag image */}
                <img
                  src="path/to/your/flag.png"
                  alt="Country Flag"
                  className="h-6 w-10 mr-2"
                />
                <span>America</span>
              </div>
              <input type="checkbox" className="h-5 w-5" />
            </li>
            <li className="flex justify-between items-center p-4">
              <div className="flex items-center">
                {/* Replace with your country flag image */}
                <img
                  src="path/to/your/flag.png"
                  alt="Country Flag"
                  className="h-6 w-10 mr-2"
                />
                <span>America</span>
              </div>
              <input type="checkbox" className="h-5 w-5" />
            </li>
            {/* ... other countries */}
          </ul>
        </div>
        <div className="flex justify-center p-4">
          <button className="bg-indigo-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollableDialogBox;
