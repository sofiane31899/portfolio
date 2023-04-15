import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <div className="flex flex-col justify-center h-screen  pt-[100px] ">
      <h1 className="text-blue-500 font-bold text-2xl py-5 font-poppins  px-10  md:pl-[100px]">
        {" "}
        contact
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
      </div>

      <div className="bg-gray-900 text-white flex justify-around items-center sticky h-[80px]  ">
        <p>Copyright © 2023. All rights are reserved</p>
        <div>
          <LinkedInIcon sx={{ fontSize: 40 }} />
          <GitHubIcon sx={{ fontSize: 40 }} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
