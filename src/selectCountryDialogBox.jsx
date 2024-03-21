import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const ScrollableDialogBox = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      // Fetch country data
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      // Transform data to include only relevant information
      const transformedData = data
        .map((country) => ({
          name: country.name.common,
          code: country.cca2.toLowerCase(),
        }))
        .sort((a, b) => a.name.localeCompare(b.name)); // Sort countries alphabetically;
      setCountries(transformedData);
    };

    fetchCountries();
  }, []);

  const goToProviders = () => {
    navigate("/select-provider");
  };
  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-gray-950 bg-opacity-40 text-white sm:max-w-md rounded-lg overflow-hidden border-solid border border-gray-600">
        <div className="p-4 border-solid border-b-2 border-gray-600">
          <h2 className="text-lg font-semibold">🌍 Select Your Country</h2>
        </div>
        <div className="max-h-64 overflow-y-auto border-solid  border-b-2 border-gray-600">
          {/* Scrollable content goes here */}
          <ul>
            {countries.map(({ name, code }) => (
              <li key={code} className="flex justify-between items-center p-4">
                <div className="flex items-center">
                  <img
                    src={`https://flagcdn.com/w20/${code}.png`}
                    alt={`${name} Flag`}
                    className="h-6 w-10 mr-2"
                  />
                  <span>{name}</span>
                </div>
                <input type="checkbox" className="h-5 w-5" />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center p-4">
          <button
            onClick={goToProviders}
            className="bg-indigo-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollableDialogBox;
