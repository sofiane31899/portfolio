import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { BiLogoUpwork } from "react-icons/bi";

function Contact() {
  return (
    <div className="flex flex-col justify-center h-screen  pt-[100px] ">
      <h1 className="text-blue-500 font-bold text-2xl py-5 font-poppins  px-10  md:pl-[100px]">
        {" "}
        Contact
      </h1>

      <div className="flex flex-1 items-center  mb-32 justify-start flex-wrap pl-5 space-x-3  md:pl-[100px]">
        <div className="flex items-center">
          <div className="rounded-full p-6 shadow-lg  ">
            <EmailIcon sx={{ fontSize: 40, color: "#1d4ed8" }} />
          </div>
          <div className="p-3">
            <h4 className="text-gray-700 font-semibold text-lg font-poppins">
              Email
            </h4>
            <p className="text-gray-700 cursor-pointer hover:text-blue-600 font-poppins">
              bacha.rabah3189@gmail.Com
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="rounded-full p-6 shadow-lg  ">
            <GitHubIcon sx={{ fontSize: 40, color: "#1d4ed8" }} />
          </div>
          <div className="p-3">
            <h4 className="text-gray-700 font-semibold text-lg font-poppins">
              Github
            </h4>
            <p className="text-gray-700 cursor-pointer hover:text-blue-600 font-poppins">
              <a href="https://github.com/sofiane31899">bacharabah318</a>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="rounded-full p-6 shadow-lg  ">
            <LinkedInIcon sx={{ fontSize: 40, color: "#1d4ed8" }} />
          </div>
          <div className="p-3">
            <h4 className="text-gray-700 font-semibold text-lg font-poppins">
              LinkedIn
            </h4>
            <p className="text-gray-700 cursor-pointer hover:text-blue-600 font-poppins">
              <a href="https://www.linkedin.com/in/rabah-bacha-87818620b/">
                Rabah Bacha
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="rounded-full p-6 shadow-lg  ">
            <div className="bg-[#1d4ed8] w-[35px] h-[35px] rounded-md flex justify-center items-center">
              <BiLogoUpwork className="text-white text-3xl" />
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-gray-700 font-semibold text-lg font-poppins">
              Upwork
            </h4>
            <p className="text-gray-700 cursor-pointer hover:text-blue-600 font-poppins">
              <a href="https://www.upwork.com/freelancers/~0193d823d7fda4a956">
                Rabah Bacha
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white flex justify-around items-center sticky h-[80px]  ">
        <p>Copyright © 2023. All rights are reserved</p>
        <div className="flex items-center">
          <a href="https://www.linkedin.com/in/rabah-bacha-87818620b/">
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </a>
          <a href="https://github.com/sofiane31899">
            <GitHubIcon sx={{ fontSize: 40 }} />
          </a>

          <div className="bg-white ml-1 h-[37px] w-[37px] flex items-center justify-center rounded-full">
            <a href="https://www.upwork.com/freelancers/~0193d823d7fda4a956">
              <BiLogoUpwork className="text-3xl text-black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
