import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

function Project({ project }) {
  return (
    <div className="md:flex md:border-2 p-1 items-center  shadow-md rounded-2xl justify-around md:h-[100%]   ">
      <div className="flex-1 h-full   max-w-[400px] sm:max-w-[500px] md:w-[550px] flex justify-center m-auto items-center py-3 px-2 ">
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
              className="bg-white text-gray-700 text-lg font-semibold px-3 shadow-sm py-2">
              {elem}
            </div>
          ))}
        </div>
        <div className="flex justify-center py-2 space-x-16 items-center">
          <div className="bg-white  cursor-pointer hover:scale-105 ">
            <a href={project.codeURL} className="flex space-x-2">
              <GitHubIcon />{" "}
              <p>
                {project.titre === "Krilli APP" ||
                project.titre === "Medical clinic" ||
                project.titre === "portail-scpi clone" ||
                project.titre === "cosmetics website"
                  ? "private"
                  : "code"}
              </p>
            </a>
          </div>
          <div className="bg-white cursor-pointer hover:scale-105 ">
            {project?.titre !== "Medical clinic" &&
              project.titre !== "portail-scpi clone" &&
              project.titre !== "cosmetics website" && (
                <a href={project.live}>
                  <LanguageIcon /> live test
                </a>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
