import React from "react";

function ResumeSection({ title, data }) {
  return (
    <div className="px-14 py-4 relative">
      <h1 className="text-2xl  font-bold text-neutral-700 whitespace-nowrap ">
        {title}
      </h1>
      <div className="h-2 w-2 absolute top-[66px] bg-white"> </div>
      <div className="mt-5">
        {data?.map((elem) => (
          <div key={elem.title}>
            <div className="flex justify-start items-center border-l-[3px]  border-blue-600 ml-1 space-x-5">
              {" "}
              <div className="w-4 h-4 rounded-full border-[3px] absolute left-[54px] border-blue-600 bg-white"></div>{" "}
              <h1 className="text-blue-600 text-xl  font-bold">{elem.title}</h1>
            </div>
            <div className="border-l-[3px] pb-5 pl-6 ml-1 border-blue-600 flex flex-col space-y-3">
              <p className="bg-gray-100 px-3 mt-2 rounded-md  font-medium w-fit ">
                {elem.date}
              </p>
              <p className="italic">{elem.text}</p>
              <il className="px-3">
                {elem.sup && elem.sup.map((sup) => <li key={sup}>{sup}</li>)}
              </il>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResumeSection;
