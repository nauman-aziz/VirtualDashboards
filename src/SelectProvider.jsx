import React from 'react';
// Import icons or images for each provider if needed.

const providers = [
  { name: 'TREMENDOUS', icon: 'path-to-tremendous-icon' },
  { name: 'Wallester', icon: 'path-to-wallester-icon' },
  { name: 'Wallester', icon: 'path-to-wallester-icon' },
  { name: 'Wallester', icon: 'path-to-wallester-icon' },
  { name: 'Wallester', icon: 'path-to-wallester-icon' },
  { name: 'Wallester', icon: 'path-to-wallester-icon' },
  { name: 'Wallester', icon: 'path-to-wallester-icon' },
  { name: 'Wallester', icon: 'path-to-wallester-icon' },
  { name: 'Wallester', icon: 'path-to-wallester-icon' },
  { name: 'Wallester', icon: 'path-to-wallester-icon' },
  { name: 'Wallester', icon: 'path-to-wallester-icon' },
  { name: 'Wallester', icon: 'path-to-wallester-icon' },
  // Add the rest of your providers here
];

const SelectProvider = () => {
  return (
  
        <div className="bg-gradient-to-br from-blue-800 to-blue-500 h-screen overflow-y-auto p-5">
          <div className="text-white text-2xl mb-5">Select Your Provider</div>
          <div className="grid grid-cols-3 gap-4">
            {providers.map((provider, index) => (
              <div key={index} className="bg-blue-700 rounded-lg p-4 flex items-center justify-center">
                <img src={provider.logo} alt={provider.name} className="h-10" /> {/* Use the actual height for your logos */}
                <span className="ml-2">{provider.name}</span>
              </div>
            ))}
          </div>
          <button className="mt-5 bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition-colors">
            Confirm
          </button>
        </div>
    
  );
};

export default SelectProvider;
