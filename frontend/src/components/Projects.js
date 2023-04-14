import React, { useState } from "react";
import Pagination from "./Pagination";
import krilli from "./../assets/projects/krilli.png";
import Project from "./Project";

function Projects() {
  const [currentProject, setCurrentProject] = useState(1);
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
      image: krilli,
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
      <div className="flex items-center md:h-[80%] mx-2  justify-center space-x-10  ">
        {<Project key={currentProject} project={projects[currentProject]} />}
      </div>

      <div className="">
        <Pagination
          length={projects.length - 1}
          currentProject={currentProject}
        />
      </div>
      <div
        onClick={() => rightClick()}
        className="absolute top-[50%] right-4 rounded-full bg-black text-white"
      >
        right
      </div>
      <div
        onClick={() => leftClick()}
        className="absolute top-[50%] left-4 rounded-full bg-black text-white"
      >
        left
      </div>
    </div>
  );
}

export default Projects;
