import React, { useState } from "react";
import Pagination from "./Pagination";
import { motion } from "framer-motion";
import Project from "./Project";

function Projects() {
  const [currentProject, setCurrentProject] = useState(20);
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
      titre: "app ",
      description:
        " lorem ipsu hudirh djskie juzijds fjsijfn idfnskj sfjkjkds ",
      image: "",
      technologies: ["react", "tailwind", "framer motion"],
      codeURL: "",
      live: "",
    },
    {
      titre: "app ",
      description:
        " lorem ipsu hudirh djskie juzijds fjsijfn idfnskj sfjkjkds ",
      image: "",
      technologies: ["react", "tailwind", "framer motion"],
      codeURL: "",
      live: "",
    },
    {
      titre: "app ",
      description:
        " lorem ipsu hudirh djskie juzijds fjsijfn idfnskj sfjkjkds ",
      image: "",
      technologies: ["react", "tailwind", "framer motion"],
      codeURL: "",
      live: "",
    },
    {
      titre: "app ",
      description:
        " lorem ipsu hudirh djskie juzijds fjsijfn idfnskj sfjkjkds ",
      image: "",
      technologies: ["react", "tailwind", "framer motion"],
      codeURL: "",
      live: "",
    },
    {
      titre: "app ",
      description:
        " lorem ipsu hudirh djskie juzijds fjsijfn idfnskj sfjkjkds ",
      image: "",
      technologies: ["react", "tailwind", "framer motion"],
      codeURL: "",
      live: "",
    },
    {
      titre: "app ",
      description:
        " lorem ipsu hudirh djskie juzijds fjsijfn idfnskj sfjkjkds ",
      image: "",
      technologies: ["react", "tailwind", "framer motion"],
      codeURL: "",
      live: "",
    },
  ];

  return (
    <div className="h-screen bg-slate-100 flex flex-col items-center overflow-x-scroll w-[1050px] m-auto justify-end ">
      <div className="flex items-center justify-evenly m-[140px] ">
        {projects.map((elem, index) => (
          <Project key={index} project={elem} />
        ))}
      </div>
      <div className="sticky left-auto">
        <Pagination length={projects.length} currentProject={currentProject} />
      </div>
    </div>
  );
}

export default Projects;
