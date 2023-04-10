import React from "react";

function skill({ tech }) {
  return (
    <div className="flex flex-col cursor-pointer items-center justify-center ">
      <div className="relative group">
        <img
          src={tech.icon}
          className="rounded-full w-[75px] h-[75px]   sm:w-[100px] sm:h-[100px] "
        />
        <div className=" bg-gray-600 w-full h-full opacity-70 hidden  group-hover:flex items-center justify-center absolute top-0 rounded-full">
          <p className="text-white font-semibold text-2xl text-center">
            {tech.pourcentage}
          </p>
        </div>
      </div>

      <p>{tech.name}</p>
    </div>
  );
}

export default skill;
