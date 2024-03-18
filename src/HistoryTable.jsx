import React, { useState, useEffect } from 'react';

const HistoryTable = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setHistoryData(data);
      } catch (error) {
        console.error("Error fetching history data:", error);
      }
    };

    fetchHistoryData();
  }, []);

  return (
    <div className="bg-blue-800 h-screen items-center justify-center p-4 text-white overflow-y-auto scrollbar-hide scrollbar-thin">
      <h2 className="text-2xl font-bold mb-4">History</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-white">
          <thead>
            <tr className="text-left">
              <th className="py-2 px-4 border border-white">Provider Name</th>
              <th className="py-2 px-4 border border-white">OFFER</th>
              <th className="py-2 px-4 border border-white">PURCHASED ON</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((item, index) => (
              <tr key={index} className="border border-white">
                <td className="py-2 px-4 border border-white">{item.id}</td>
                <td className="py-2 px-4 border border-white">{item.userId}</td>
                <td className="py-2 px-4 border border-white">{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryTable;
