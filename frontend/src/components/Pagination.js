import React, { useState } from "react";

function Pagination({ length, currentProject }) {
  return (
    <div className="flex items-center  justify-center space-x-1">
      {Array.from({ length })
        .slice(0, currentProject + 1)
        .map((elem, index) => (
          <div
            key={index}
            className="rounded-full w-2 h-2 bg-blue-700 border"
          ></div>
        ))}
      {Array.from({ length })
        .slice(currentProject, length - 1)
        .map((elem, index) => (
          <div key={index} className="rounded-full w-2 h-2 bg-gray-400"></div>
        ))}
    </div>
  );
}

export default Pagination;
