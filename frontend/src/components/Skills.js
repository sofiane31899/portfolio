import React from "react";
import { motion } from "framer-motion";

//recalibrate screens

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold
        
        sm:bg-blue-700 underline sm:no-underline text-blue-700 sm:text-light py-3 px-6 shadow-dark cursor-pointer absolute xs:p-2"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="mx-12">
      <h1 className="text-blue-500 font-bold text-2xl py-5  mb-5 md:pl-[100px]">
        {" "}
        Skills
      </h1>
      <div className="xs:hidden sm:hidden md:hidden w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight ">
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold
        
        bg-blue-700 text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>

        <Skill name="CSS" x="-5vw" y="-12vw" />
        <Skill name="HTML" x="-21vw" y="2vw" />
        <Skill name="JavaScript" x="21vw" y="2vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="Typescript" x="-22vw" y="-16vw" />
        <Skill name="ElectronJs" x="20vw" y="-12vw" />
        <Skill name="Express" x="35vw" y="-5vw" />
        <Skill name="NodeJs" x="0vw" y="-20vw" />
        <Skill name="Tailwindcss" x="-30vw" y="18vw" />
        <Skill name="MongoDB" x="18vw" y="18vw" />
      </div>
      {/* for lg screen
       */}
      <div className="hidden  xs:flex sm:hidden md:hidden lg:hidden w-full h-screen relative  items-center justify-center rounded-full bg-circularLight xs:bg-none">
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold
        
          bg-blue-700 text-light p-4 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>

        <Skill name="CSS" x="-35vw" y="-30vw" />
        <Skill name="HTML" x="35vw" y="2vw" />
        <Skill name="JavaScript" x="-30vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="80vw" />
        <Skill name="Typescript" x="25vw" y="40vw" />
        <Skill name="ElectronJs" x="30vw" y="-30vw" />
        <Skill name="Express" x="-30vw" y="-60vw" />
        <Skill name="NodeJs" x="0vw" y="-85vw" />
        <Skill name="Tailwindcss" x="-25vw" y="40vw" />
        <Skill name="MongoDB" x="25vw" y="-60vw" />
      </div>
      {/* for sm screen
       */}
      <div className="hidden  sm:flex xs:hidden md:hidden lg:hidden w-full h-screen relative  items-center justify-center rounded-full bg-circularLight xs:bg-none">
        <motion.div
          className=" flex  items-center justify-center rounded-full font-semibold
        
          bg-blue-700 text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>

        <Skill name="CSS" x="-35vw" y="-20vw" />
        <Skill name="HTML" x="37vw" y="2vw" />
        <Skill name="JavaScript" x="-37vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="20vw" />
        <Skill name="Typescript" x="30vw" y="20vw" />
        <Skill name="ElectronJs" x="35vw" y="-20vw" />
        <Skill name="Express" x="-20vw" y="-7vw" />
        <Skill name="NodeJs" x="0vw" y="-20vw" />
        <Skill name="Tailwindcss" x="-30vw" y="20vw" />
        <Skill name="MongoDB" x="25vw" y="-7vw" />
      </div>
      {/* for md screen
       */}{" "}
      <div className="hidden   md:flex xs:hidden sm:hidden  w-full h-screen relative  items-center justify-center rounded-full bg-circularLight xs:bg-none">
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold
        
          bg-blue-700 text-light p-4 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>

        <Skill name="CSS" x="-0vw" y="-11vw" />
        <Skill name="HTML" x="-30vw" y="2vw" />
        <Skill name="JavaScript" x="30vw" y="2vw" />
        <Skill name="ReactJS" x="0vw" y="11vw" />
        <Skill name="Typescript" x="-22vw" y="-16vw" />
        <Skill name="ElectronJs" x="17vw" y="-17vw" />
        <Skill name="Express" x="30vw" y="-7vw" />
        <Skill name="NodeJs" x="0vw" y="-20vw" />
        <Skill name="Tailwindcss" x="-20vw" y="18vw" />
        <Skill name="MongoDB" x="18vw" y="18vw" />
      </div>
    </div>
  );
};

export default Skills;
