import React from "react";

const TopStat = ({ title, value, caption, svg, last, color }) => {
  return (
    <div
      className={`flex ${
        !last ? "mr-6" : ""
      } p-4 flex-col bg-white rounded-2xl relative w-1/4`}
    >
      <span className="text-xl pb-1">{title}</span>
      <span className="block py-4 text-4xl font-extrabold">{value}</span>
      <span className="text-sm opacity-40">{caption}</span>
      <div
        className={`absolute bg-${color}-400 p-3 -m-4 rounded-full top-0 right-0`}
      >
        {svg}
      </div>
    </div>
  );
};

export default TopStat;
