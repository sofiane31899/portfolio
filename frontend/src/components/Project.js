import React from "react";

function Project({ project }) {
  console.log(project);
  return (
    <div className="md:flex border-2 p-1 items-center  shadow-md rounded-2xl justify-around md:h-[100%]   ">
      <div className="flex-1 h-full   max-w-[400px] sm:max-w-[500px] md:max-w-[550px] flex justify-center m-auto items-center py-3 px-2 ">
        <img
          src={project.image}
          className="w-full h-full rounded-xl shadow-md"
        />
      </div>

      <div className="flex-1 md:max-w-[500px] min-h-[90%] flex flex-col justify-around items-stretch px-5">
        <h1 className="text-blue-500 font-bold py-2 ">{project.titre}</h1>
        <p className=" h-[50%] text-gray-700 text-lg font-medium font-poppins overflow-y-scroll scrollbar-hide ">
          {project.description}
        </p>
        <div className="flex items-center flex-wrap space-x-4 py-2">
          {project.technologies.map((elem, index) => (
            <div
              key={index}
              className="bg-white text-gray-700 text-lg font-semibold px-3 shadow-sm py-2"
            >
              {elem}
            </div>
          ))}
        </div>
        <div className="flex justify-center py-2 space-x-16 items-center">
          <div className="bg-white ">code</div>
          <div className="bg-white ">test</div>
        </div>
      </div>
    </div>
  );
}

export default Project;
