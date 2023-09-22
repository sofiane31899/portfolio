import React, { useState } from "react";
import Pagination from "./Pagination";
import krilli from "./../assets/projects/krilli.png";
import Project from "./Project";
import cabinet from "./../assets/cabinet.PNG";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import netflix from "./../assets/projects/netflix.PNG";

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const projects = [
    {
      titre: "Krilli APP ",
      description:
        "Our property rental application is a modern and user-friendly platform for finding and renting properties online. Built with React and Firebase, it offers a fast and reliable rental process, with clear communication and transparency throughout.",
      image:
        "https://api.apify.com/v2/key-value-stores/uW0C8B1OLgEN5aBlC/records/krilli-app.web.app-scroll_original",
      technologies: ["react", "firebase"],
      codeURL: "https://krilli-app.web.app/",
      live: "https://krilli-app.web.app/",
    },
    {
      titre: "frontend",
      description:
        " this is a web application that I built using React, and Tailwind CSS. The app is designed to provide an engaging and interactive user experience, with fluid animations and transitions that bring the interface to life.",
      image:
        "https://api.apify.com/v2/key-value-stores/07uNli0czsVG5ggZa/records/sofiane31899.github.io-scroll_original",
      technologies: ["react", "tailwind"],
      codeURL: "https://github.com/sofiane31899/frontend-application",
      live: "https://sofiane31899.github.io/frontend-application/",
    },
    {
      titre: "Medical clinic",
      description:
        "Our desktop application for medical practice management, built with Electron.js, React, and Tailwind CSS, streamlines patient record management, appointment scheduling, and billing for healthcare professionals. It offers a seamless, cross-platform user experience, enabling practitioners to focus on patient care.",
      image: cabinet,
      technologies: ["react", "tailwind", "electron.js"],
      codeURL: "https://github.com/sofiane31899/",
      live: "",
    },
    {
      titre: "Netflix clone ",
      description:
        "This project involves creating a web application that closely resembles Netflix, using a technology stack consisting of Node.js, React, and MongoDB. The goal is to replicate and offer users similar functionalities and features found on the popular streaming platform. By leveraging Node.js for the backend, React for the frontend, and MongoDB as the database.",
      image:
        "https://api.apify.com/v2/key-value-stores/2apWZfta0FktVdPd5/records/649ef60a50d4bf0b6f7df726--subtle-bublanina-41761e.netlify.app-scroll_original",
      technologies: ["react", "mongodb", "express"],
      codeURL: "https://github.com/sofiane31899/netflix",
      live: " https://649ef60a50d4bf0b6f7df726--subtle-bublanina-41761e.netlify.app/",
    },
  ];

  const leftClick = () => {
    if (currentProject !== 0) setCurrentProject((prev) => prev - 1);
  };
  const rightClick = () => {
    if (currentProject < projects.length - 1)
      setCurrentProject((prev) => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col group  pt-[80px] relative space-y-1 ">
      <h1 className="text-blue-500 font-bold text-2xl  px-10 mb-5 md:pl-[100px]">
        Projects
      </h1>
      <div className="flex h-max  items-center md:h-[80%] mx-2  justify-center space-x-10  ">
        {<Project key={currentProject} project={projects[currentProject]} />}
      </div>

      <div className="">
        <Pagination length={projects.length} currentProject={currentProject} />
      </div>
      <div
        onClick={() => rightClick()}
        className={`${
          currentProject == 3 ? "hidden" : "group-hover:block"
        } absolute top-[50%] md:right-[10%] hidden right-3 cursor-pointer rounded-full text-2xl  text-gray-800`}>
        <ChevronRightIcon sx={{ fontSize: 40 }} />
      </div>
      <div
        onClick={() => leftClick()}
        className={`${
          currentProject == 0 ? "hidden" : "group-hover:block"
        } absolute top-[50%] md:left-[10%] hidden  left-3 cursor-pointer rounded-full text-2xl  text-gray-800`}>
        <ChevronLeftIcon sx={{ fontSize: 40 }} />
      </div>
    </div>
  );
}

export default Projects;
