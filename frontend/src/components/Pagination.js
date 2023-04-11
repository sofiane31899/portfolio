import React, { useState } from "react";

function Pagination() {
  const [length, setLength] = useState(12);
  const [currentProject, setCurrentProject] = useState(4);
  return (
    <div className="flex items-center justify-center space-x-1">
      {Array.from({ length })
        .slice(0, currentProject)
        .map((elem) => (
          <div
            key={length}
            className="rounded-full w-2 h-2 bg-blue-700 border"
          ></div>
        ))}
      {Array.from({ length })
        .slice(currentProject, length)
        .map((elem) => (
          <div key={length} className="rounded-full w-2 h-2 bg-gray-200"></div>
        ))}
    </div>
  );
}

export default Pagination;
