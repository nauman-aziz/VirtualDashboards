
import React from "react";
import "../src/styles/cs.css"; 

const ComingSoon = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="text-white text-xl font-bold" style={{ height: "10%" }}>
        Coming Soon
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </div>
    </div>
  );
};

export default ComingSoon;

