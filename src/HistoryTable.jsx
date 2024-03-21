import React, { useState, useEffect } from "react";

const HistoryTable = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
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
    <div className="w-full h-full">
      <div
        className="flex flex-col items-start justify-start p-4 text-white overflow-hidden scrollbar-hide scrollbar-thin rounded-lg bg-gray-950 bg-opacity-40 mt-4"
        style={{ height: "92%" }}
      >
        <h2 className="text-xl font-bold mb-4">History</h2>
        <div className="overflow-y-auto w-full">
          <table className="w-full h-full rounded-lg border-collapse border border-gray-600">
            <thead>
              <tr className="bg-slate-800 text-sm font-thin">
                <th className="text-start py-2 px-4 w-1/3">Provider Name</th>
                <th className="text-center py-2 px-4 w-1/3">OFFER</th>
                <th className="text-end py-2 px-4 w-1/3">PURCHASED ON</th>
              </tr>
            </thead>
            <tbody className="overflow-y-auto">
              {historyData.map((item, index) => (
                <tr key={index} className="border border-gray-600">
                  <td className="py-2 px-4 text-blue-700 font-bold text-start">
                    TREMENDOUS
                  </td>
                  <td className="py-2 px-4 text-center">{item.userId}</td>
                  <td className="py-2 px-4 text-end">{item.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
