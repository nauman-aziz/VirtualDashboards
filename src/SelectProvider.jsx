import React from "react";
// Import icons or images for each provider if needed.

const providers = [
  { name: "TREMENDOUS", icon: "path-to-tremendous-icon" },
  { name: "Wallester", icon: "path-to-wallester-icon" },
  { name: "Wallester", icon: "path-to-wallester-icon" },
  { name: "Wallester", icon: "path-to-wallester-icon" },
  { name: "Wallester", icon: "path-to-wallester-icon" },
  { name: "Wallester", icon: "path-to-wallester-icon" },
  { name: "Wallester", icon: "path-to-wallester-icon" },
  { name: "Wallester", icon: "path-to-wallester-icon" },
  { name: "Wallester", icon: "path-to-wallester-icon" },
  { name: "Wallester", icon: "path-to-wallester-icon" },
  { name: "Wallester", icon: "path-to-wallester-icon" },
  { name: "Wallester", icon: "path-to-wallester-icon" },
  // Add the rest of your providers here
];

const SelectProvider = () => {
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
          <div className="text-white text-xl mb-5">Select Your Provider</div>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-4 h-100 overflow-y-auto w-full">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="bg-gray-200 bg-opacity-30 border-2 border-solid border-sky-50 rounded-lg p-4 flex flex-col items-center justify-center h-40"
            >
              <img src={provider.logo} alt={provider.name} className="h-10" />{" "}
              {/* Use the actual height for your logos */}
              <span className="ml-2">{provider.name}</span>
            </div>
          ))}
        </div>
        <button className=" bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  transition-colors">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SelectProvider;
