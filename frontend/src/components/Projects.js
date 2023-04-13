import React, { useState } from "react";
import Pagination from "./Pagination";
import { motion } from "framer-motion";
import Project from "./Project";

function Projects() {
  const [currentProject, setCurrentProject] = useState(2);
  const projects = [
    {
      titre: "ChatAPP",
      description:
        "A real-time chat application is a fast and reliable messaging platform that allows users to chat with each other in real-time. The application was built using the MERN stack,Node.js, and Socket.IO for real-time communication",
      image: "",
      technologies: ["MERN stack", "socket.io"],
      codeURL: "",
      live: "",
    },
    {
      titre: "Krilli APP ",
      description:
        "Our property rental application is a modern and user-friendly platform for finding and renting properties online. Built with React and Firebase, it offers a fast and reliable rental process, with clear communication and transparency throughout.",
      image: "",
      technologies: ["react", "firebase"],
      codeURL: "",
      live: "",
    },
    {
      titre: "Krilli APP ",
      description:
        "Our property rental application is a modern and user-friendly platform for finding and renting properties online. Built with React and Firebase, it offers a fast and reliable rental process, with clear communication and transparency throughout.",
      image: "",
      technologies: ["react", "firebase"],
      codeURL: "",
      live: "",
    },
    {
      titre: "Krilli APP ",
      description:
        "Our property rental application is a modern and user-friendly platform for finding and renting properties online. Built with React and Firebase, it offers a fast and reliable rental process, with clear communication and transparency throughout.",
      image: "",
      technologies: ["react", "firebase"],
      codeURL: "",
      live: "",
    },
    {
      titre: "Krilli APP ",
      description:
        "Our property rental application is a modern and user-friendly platform for finding and renting properties online. Built with React and Firebase, it offers a fast and reliable rental process, with clear communication and transparency throughout.",
      image: "",
      technologies: ["react", "firebase"],
      codeURL: "",
      live: "",
    },
  ];

  return (
    <div className="h-screen flex flex-col  pb-[50px] pt-[120px] justify-center items-center">
      <div className="  flex flex-col items-start m-auto   justify-start w-[1100px] snap-x scrollbar-hide overflow-x-scroll   ">
        <div className="flex items-center justify-start space-x-10 px-[50px]  snap-center flex-grow ">
          {projects.map((elem, index) => (
            <Project key={index} project={elem} />
          ))}
        </div>
      </div>
      <div className="sticky left-auto">
        <Pagination length={projects.length} currentProject={currentProject} />
      </div>
    </div>
  );
}

export default Projects;
