import React from "react";

import css from "./../assets/techs/css.png";
import js from "./../assets/techs/js.png";
import redux from "./../assets/techs/redux.png";
import sql from "./../assets/techs/sql.jpg";
import tailwind from "./../assets/techs/tailwind.png";
import express from "./../assets/techs/express.png";
import firebase from "./../assets/techs/firebase.png";
import html5 from "./../assets/techs/html5.png";
import mongo from "./../assets/techs/mongo.svg";
import nodejs from "./../assets/techs/nodejs.png";
import react from "./../assets/techs/react.png";
import Skill from "./Skill";

function Skills() {
  const skills = [
    { name: "React", icon: react, pourcentage: "85%" },
    { name: "Nodejs", icon: nodejs, pourcentage: "85%" },
    { name: "expressjs", icon: express, pourcentage: "75%" },
    { name: "Redux", icon: redux, pourcentage: "70%" },
    { name: "mongoDB", icon: mongo, pourcentage: "78%" },
    { name: "SQL", icon: sql, pourcentage: "70%" },
    { name: "Firebase", icon: firebase, pourcentage: "85%" },
    { name: "Tailwind", icon: tailwind, pourcentage: "78%" },
    { name: "JavaScript", icon: js, pourcentage: "75%" },
    { name: "CSS", icon: css, pourcentage: "65%" },
    { name: "HTML", icon: html5, pourcentage: "80%" },
  ];
  return (
    <div className="snap-start pt-[100px] flex flex-col items-start justify-center h-screen  ">
      <h1 className="text-blue-500 font-bold text-2xl py-5 px-10 mb-5 md:pl-[100px]">
        {" "}
        skills
      </h1>
      <div className="flex flex-wrap   md:gap-20 gap-10 px-[30px] md:px-[100px]  ">
        {skills.map((elem, index) => (
          <Skill key={index} tech={elem} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
