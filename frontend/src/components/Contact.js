import React from "react";
import gmail from "./../assets/email.png";

function Contact() {
  return (
    <div className="flex flex-col justify-center ">
      <h1 className="text-blue-500 font-bold text-2xl py-5 font-poppins  px-10 mb-5 md:pl-[100px]">
        {" "}
        contact
      </h1>
      <div className="flex items-center justify-start">
        <div className="flex items-center">
          <img src={gmail} className="rounded-full bg-blue-600 shadow-md" />
          <div>
            <h4>Email</h4>
            <p>bacha.rabah3189@gmail.Com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
