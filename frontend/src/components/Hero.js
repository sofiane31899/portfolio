import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import hand from "./../assets/hand.png";

import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { BiLogoUpwork } from "react-icons/bi";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi,I'm Bacha Rabah, a MERN stack developer based in Algeria, specializing in building scalable and robust web applications. 📍",
    ],
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col-reverse md:flex-row bg-slate-100 h-screen p-[40px] md:pt-[80px]  items-center justify-around  overflow-y-hidden">
      <div className="max-w-[490px] flex-1 ">
        <h1 className="md:font-bold md:text-6xl font-semibold text-4xl pt-5 items-end font-poppins text-gray-800 ">
          Full-Stack MERN <br />
          <div className="flex items-center">
            <span className="pr-3">developer</span>
            <img
              src={hand}
              alt="hand"
              className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]  "
            />
          </div>
        </h1>
        <div className="font-poppins h-[125px] md:h-[70px] lg:h-[60px] pt-5 text-gray-500 md:font-medium ">
          {text} <Cursor />
        </div>
        <motion.div
          initial={{ opacity: 0, x: "100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 11, duration: 2 }}
          className="flex items-center space-x-3 pt-5">
          <a href="https://github.com/sofiane31899">
            <GitHubIcon sx={{ fontSize: 40, color: "#1e293b" }} />
          </a>
          <a href="https://www.linkedin.com/in/rabah-bacha-87818620b/">
            <LinkedInIcon sx={{ fontSize: 40, color: "#1e293b" }} />
          </a>
          <div className="bg-[#1e293b] h-[32px] w-[32px] rounded-md flex justify-center items-center ">
            <a href="https://www.upwork.com/freelancers/~0193d823d7fda4a956">
              <BiLogoUpwork className="text-white text-2xl" />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="blob min-w-[250px] max-w-[450px] flex-1"></div>
    </div>
  );
}

export default Hero;
