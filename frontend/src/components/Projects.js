import React, { useState } from "react";
import Pagination from "./Pagination";
import krilli from "./../assets/projects/krilli.png";
import Project from "./Project";
import cabinet from "./../assets/cabinet.PNG";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import netflix from "./../assets/projects/netflix.PNG";
import gymshark from "./../assets/gymshark.PNG";
import card from "../assets/frontendapp.PNG";
import Scpi from "./../assets/projects/SCPI.PNG";
import Cosmetique from "./../assets/projects/cosmetique.PNG";

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const projects = [
    {
      titre: "Krilli APP",
      description:
        "Our property rental application is a modern and user-friendly platform for finding and renting properties online. Built with React and Firebase, it offers a fast and reliable rental process, with clear communication and transparency throughout.",
      image: krilli,
      technologies: ["react", "firebase"],
      codeURL: "https://krilli-app.web.app/",
      live: "https://krilli-app.web.app/",
    },
    {
      titre: "GymShark clone",
      description:
        " My GymShark Clone project is a web application that replicates the popular online fitness and activewear store, GymShark, using modern web development technologies such as React and Tailwind CSS. This clone aims to provide users with a similar shopping experience while showcasing the capabilities of these powerful front-end tools.",
      image: gymshark,
      technologies: ["react", "tailwind"],
      codeURL: "https://github.com/sofiane31899/GYM",
      live: "https://sofiane31899.github.io/GYM/",
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
      titre: "portail-scpi clone",
      description:
        "This project involves creating a web application that closely resembles portail-scpi, using a technology stack consisting of Node.js, React, and MongoDB. The goal is to replicate and offer users similar functionalities and features found on portail-scpi. By leveraging Node.js for the backend, React for the frontend, and MongoDB as the database.",
      image: Scpi,
      technologies: ["React", "Mongodb", "Express", "Tailwindcss"],
      codeURL: "https://github.com/sofiane31899/",
      live: "",
    },
    {
      titre: "cosmetics website",
      description:
        "This project involves creating a web application that closely resembles Netflix, using a technology stack consisting of Node.js, React, and MongoDB. The goal is to replicate and offer users similar functionalities and features found on the popular streaming platform. By leveraging Node.js for the backend, React for the frontend, and MongoDB as the database.",
      image: Cosmetique,
      technologies: ["react", "mongodb", "express"],
      codeURL: "https://github.com/sofiane31899/",
      live: "",
    },
    {
      titre: "Netflix clone ",
      description:
        "This project involves creating a web application that closely resembles Netflix, using a technology stack consisting of Node.js, React, and MongoDB. The goal is to replicate and offer users similar functionalities and features found on the popular streaming platform. By leveraging Node.js for the backend, React for the frontend, and MongoDB as the database.",
      image: netflix,
      technologies: ["react", "mongodb", "express"],
      codeURL: "https://github.com/sofiane31899/netflix",
      live: " https://649ef60a50d4bf0b6f7df726--subtle-bublanina-41761e.netlify.app/",
    },
    {
      titre: "Credit Card",
      description:
        " this is a web application that I built using React, and Tailwind CSS. The app is designed to provide an engaging and interactive user experience, with fluid animations and transitions that bring the interface to life.",
      image: card,
      technologies: ["react", "tailwind"],
      codeURL: "https://github.com/sofiane31899/frontend-application",
      live: "https://sofiane31899.github.io/frontend-application/",
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
    <div className="min-h-screen flex flex-col group  pt-[80px] relative space-y-1 ">
      <h1 className="text-blue-500 font-bold text-2xl  px-10 mb-5 md:pl-[100px]">
        Projects
      </h1>
      <div className="flex  lg:h-[430px] px-12  items-center  mx-2  justify-center space-x-10  ">
        {<Project key={currentProject} project={projects[currentProject]} />}
      </div>

      <div className="pt-5">
        <Pagination length={projects.length} currentProject={currentProject} />
      </div>
      <div
        onClick={() => rightClick()}
        className={`${
          currentProject == 6 ? "hidden" : "group-hover:block"
        } absolute top-[50%] md:right-[10%] hidden right-3 cursor-pointer rounded-full text-2xl  text-blue-500`}>
        <ChevronRightIcon sx={{ fontSize: 40 }} />
      </div>
      <div
        onClick={() => leftClick()}
        className={`${
          currentProject == 0 ? "hidden" : "group-hover:block"
        } absolute top-[50%] md:left-[10%] hidden  left-3 cursor-pointer rounded-full text-2xl  text-blue-500`}>
        <ChevronLeftIcon sx={{ fontSize: 40 }} />
      </div>
    </div>
  );
}

export default Projects;
