import React from "react";
import ResumeSection from "./ResumeSection";

function Resume() {
  const EducationData = [
    {
      title: "Baccalaureat Experimental Sciences",
      date: "2017",
      text: "Tizi Ouzou",
    },
    {
      title: "Bachelor's degree in computer science",
      date: "Sep 2019 -Jun 2020",
      text: "Mouloud Mammeri University - Tizi Ouzou",
    },
    {
      title: "Master II Information Systems Engineering ",
      date: "Sep 2021 - Oct 2022",
      text: "Mouloud Mammeri University - Tizi Ouzou",
    },
  ];

  const CoursesData = [
    {
      title: "Advanced React",
      date: "Jul 2023",
      text: "Meta",
      link: "https://www.coursera.org/account/accomplishments/verify/AK3BTVYSSV7R",
    },
    {
      title: "Foundations of Project Management ",
      date: "Nov 2023",
      text: "Google",
      link: "https://www.coursera.org/account/accomplishments/verify/206TPXFF867P2Y",
    },
  ];

  const EmloymentData = [
    {
      title: "Web Developer",
      date: "Mar 2019 - Feb 2020",
      text: "Dr.Ghane Medical Practice ,Tizi Ouzou",
      sup: [
        "User interface design",
        "Database implementation",
        "Patient data management",
      ],
    },
    {
      title: "Full-Stack developer ",
      date: "May 2021 -Dec 2022 ",
      text: "Real estate rental platform,Tizi Ouzou",
      sup: [
        "Needs analysis and project specifications",
        "User interface development",
        "Setting up the server and server-side logic",
        "Database integration and management",
        "API integration for interoperability with third-party services",
        "Deploment, maintenance and project management in production.",
      ],
    },
    {
      title: "Full-Stack developer ",
      date: "May 2023 -Sep 2023 ",
      text: "Dr.Achaib Medical Practice,Tizi Ouzou",
      sup: [
        "Designing a user-friendly interface",
        "Developing an application with all its features",
        "Implementing a database",
        "Deployment on the medical office's computers",
        "Ongoing maintenance and updates",
      ],
    },
  ];
  return (
    <div className="min-h-screen">
      <h1 className="text-blue-500 text-2xl px-10 lg:px-[70px] font-bold">
        Resume
      </h1>
      <div className="md:flex items-start justify-around">
        <div>
          <ResumeSection
            data={EducationData}
            title={"Education and qualifications"}
          />
          <ResumeSection
            data={CoursesData}
            title={"Courses and certification"}
          />
        </div>
        <div>
          <ResumeSection data={EmloymentData} title={"Employment"} />
        </div>
      </div>
    </div>
  );
}

export default Resume;
