import React from "react";
import pc from "./../assets/pc.webp";
import imo from "./../assets/imo.png";
import frontend from "./../assets/frontend.svg";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse  h-screen p-[40px] md:pt-[80px] pt-24  items-center justify-around  overflow-y-hidden">
      <div className=" space-y-3 font-poppins text-gray-500 flex-1 max-w-[550px] text-center md:text-start ">
        <h1 className="text-blue-500 font-bold">ABOUT ME</h1>
        <h2 className="font-extrabold text-2xl text-gray-800">
          A dedicated Full-Stack MERN Developer
          <br />
          based in Algeria 📍
        </h2>
        <p>
          {" "}
          I am a Full Stack MERN Developer skilled in building end-to-end web
          applications using MongoDB, Express, React, and Node.js. I excel in
          designing and implementing complex web architectures for high
          performance and scalability, crafting robust server-side APIs, and
          deploying applications to cloud platforms. With expertise in frontend
          development, I create engaging user interfaces using React and related
          technologies. I prioritize clean and optimized code and am always
          eager to learn new development tools and techniques. As a
          collaborative team player, I strive to exceed client expectations in
          delivering exceptional web applications.
        </p>
      </div>
      <div className="  flex-1 max-w-[400px]  md:pr-6 pb-4 relative md:h-[450px] lg:h-[380px]  ">
        <img src={pc} alt="pc" className="w-full h-full rounded-2xl " />
        <div className="bg-white hidden xl:block w-[170px] h-[170px]  rounded-full absolute bottom-[-40px] right-[-40px] ">
          <motion.img
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity }}
            src={frontend}
            className="w-full h-full relative"
          />
          <img
            src={imo}
            className="w-[80px] h-[80px] absolute top-[45px] right-[45px] "
          />
        </div>
      </div>
    </div>
  );
}

export default About;
