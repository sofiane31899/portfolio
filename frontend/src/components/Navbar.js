import React, { useState } from "react";
import menu from "./../assets/menu.svg";
import close from "./../assets/close.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full  h-[80px] flex justify-between border-b px-10 lg:px-20 items-center sticky z-10 bg-white top-0 shadow-sm">
      <div className="font-bold text-gray-700  text-xl ">
        <h1 className="font-poppins">Bacha.dev</h1>
      </div>

      <ul className="md:flex hidden font-semibold font-poppins text-gray-700  h-[80px] space-x-6">
        <li className="cursor-pointer  hover:text-blue-600 px-2  hover:border-b-2 border-blue-500 py-6">
          <a href="#hero">Home</a>
        </li>
        <li className="cursor-pointer  hover:text-blue-600 px-2  hover:border-b-2 border-blue-500 py-6">
          <a href="#about">About</a>
        </li>
        <li className="cursor-pointer  hover:text-blue-600 px-2  hover:border-b-2 border-blue-500 py-6">
          <a href="#resume">Resume</a>
        </li>
        <li className="cursor-pointer  hover:text-blue-600 px-2  hover:border-b-2 border-blue-500 py-6">
          <a href="#projects">Projects</a>
        </li>
        <li className="cursor-pointer  hover:text-blue-600 px-2  hover:border-b-2 border-blue-500 py-6">
          <a href="#skills">Skills</a>
        </li>
        <li className="cursor-pointer  hover:text-blue-600 px-2  hover:border-b-2 border-blue-500 py-6">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="md:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        {toggle && (
          <ul className="md:hidden absolute text-sm top-[60px] right-6 flex font-semibold bg-gray-200 h-12 items-center rounded-xl px-6 font-poppins text-gray-700 space-x-6">
            <li
              onClick={() => setToggle((prev) => !prev)}
              className="cursor-pointer      hover:text-blue-600 ">
              <a href="#hero">Home</a>
            </li>
            <li
              onClick={() => setToggle((prev) => !prev)}
              className="cursor-pointer  hover:text-blue-600 ">
              {" "}
              <a href="#about">About</a>
            </li>
            <li
              onClick={() => setToggle((prev) => !prev)}
              className="cursor-pointer  hover:text-blue-600 ">
              {" "}
              <a href="#about">Resume</a>
            </li>
            <li
              onClick={() => setToggle((prev) => !prev)}
              className="cursor-pointer  hover:text-blue-600 ">
              {" "}
              <a href="#projects">Projects</a>
            </li>
            <li
              onClick={() => setToggle((prev) => !prev)}
              className="cursor-pointer  hover:text-blue-600 ">
              {" "}
              <a href="#skills">Skills</a>
            </li>
            <li
              onClick={() => setToggle((prev) => !prev)}
              className="cursor-pointer  hover:text-blue-600 ">
              {" "}
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
