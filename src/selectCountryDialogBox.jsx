import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ScrollableDialogBox = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State to hold search term

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
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

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); // Filter countries based on search term

  const goToProviders = () => {
    navigate("/select-provider");
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-gray-950 bg-opacity-40 text-white sm:max-w-md rounded-lg overflow-hidden border-solid border border-gray-600">
        <div className="p-4 border-solid border-b-2 border-gray-600">
          <h2 className="text-lg font-semibold">🌍 Select Your Country</h2>
          <input
            type="text"
            placeholder="Search country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-2 p-2 w-full bg-opacity-50 tansition-colors bg-gray-800 rounded hover:bg-slate-900"
          />
        </div>
        <div className="max-h-64 overflow-y-auto border-solid border-b-2 border-gray-600">
          <ul>
            {filteredCountries.map(({ name, code }) => (
              <li key={code} className="flex justify-between items-center p-4 hover:bg-slate-900  hover:transition-all">
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
