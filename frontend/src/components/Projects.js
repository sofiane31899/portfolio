import React, { useState } from "react";
import Pagination from "./Pagination";
import krilli from "./../assets/projects/krilli.png";
import Project from "./Project";
import frontendapp from "./../assets/frontendapp.PNG";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Projects() {
  const [currentProject, setCurrentProject] = useState(1);
  const projects = [
    {
      titre: "Krilli APP ",
      description:
        "Our property rental application is a modern and user-friendly platform for finding and renting properties online. Built with React and Firebase, it offers a fast and reliable rental process, with clear communication and transparency throughout.",
      image: krilli,
      technologies: ["react", "firebase"],
      codeURL: "https://krilli-app.web.app/",
      live: "https://krilli-app.web.app/",
    },
    {
      titre: "frontend",
      description:
        " this is a web application that I built using React, Framer Motion, and Tailwind CSS. The app is designed to provide an engaging and interactive user experience, with fluid animations and transitions that bring the interface to life.",
      image: frontendapp,
      technologies: ["react", "tailwind", "framer motion"],
      codeURL: "https://github.com/sofiane31899/frontend-application",
      live: "https://sofiane31899.github.io/frontend-application/",
    },
  ];

  const leftClick = () => {
    if (currentProject != 0) setCurrentProject((prev) => prev - 1);
  };
  const rightClick = () => {
    if (currentProject < projects.length - 1)
      setCurrentProject((prev) => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col   pt-[80px] relative space-y-1 ">
      <h1 className="text-blue-500 font-bold text-2xl  px-10 mb-5 md:pl-[100px]">
        projects
      </h1>
      <div className="flex h-max  items-center md:h-[80%] mx-2  justify-center space-x-10  ">
        {<Project key={currentProject} project={projects[currentProject]} />}
      </div>

      <div className="">
        <Pagination length={projects.length} currentProject={currentProject} />
      </div>
      <div
        onClick={() => rightClick()}
        className="absolute top-[50%] md:right-[10%] right-3 cursor-pointer rounded-full bg-gray-600 text-white"
      >
        <ChevronRightIcon />
      </div>
      <div
        onClick={() => leftClick()}
        className="absolute top-[50%] md:left-[10%] left-3 cursor-pointer rounded-full bg-gray-600 text-white"
      >
        <ChevronLeftIcon />
      </div>
    </div>
  );
}

export default Projects;
