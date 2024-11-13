import React, { useState } from "react";
import {

  blueArrow,
  Brainstorming,
  tick,
  uxDesign,
} from "../../constants/assetsData";
import { ProfessionalLists, uxList } from "../../constants";

const Built = () => {
  const [selectedCategory, setSelectedCategory] = useState("Brainstorming");
  const [professtionalCategory, setProfessionalCategory] =
    useState("UX & Design");
  const categories = [
    "Brainstorming",
    "Diagramming",
    "Meetings & Workshops",
    "Scrum Events",
    "Mapping",
    "Research & Design",
    "Strategic Planning",
  ];
  const professionalCategories = [
    "UX & Design",
    "Marketing",
    "Product Management",
    "Engineering",
    "Consultants",
    "Agile Coaches",
    "Sales",
  ];

  return (
    <div>
      <div>
        <h1 className=" text-[26px] md:text-[45px] font-inter  font-bold text-primary">
          Buit for the way of you work
        </h1>
        <ul className="  overflow-auto mt-4 flex-normal">
          {categories?.map((item, index) => (
            <li
              onClick={() => setSelectedCategory(item)}
              className={`${
                selectedCategory === item ? "bg-[#F1F3FD]" : "border-2"
              } text-primary mx-3 cursor-pointer  rounded-full px-3 py-2 font-helva `}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className=" mt-4 flex flex-col md:flex-row md:justify-between">
          <div className=" md:w-[350px] mt-10 font-helva">
            <h3 className=" text-primary">{selectedCategory}</h3>
            <p className="  text-[14px]  md:text-[16px] mt-2">
              Unleash creative ideas and build on them with the help of sticky
              notes, images, mind maps, videos, drawing capabilities — the list
              goes on.
            </p>{" "}
            <div className="  group cursor-pointer mt-5 flex-normal">
              <span className=" text-blue-600 underline text-[14px]">
                Learn more
              </span>
              <img className=" group-hover:translate-x-2  transition-all duration-300 ml-1 size-3" src={blueArrow} alt="blueArrow" />
            </div>
          </div>
          <div>
            <img src={Brainstorming} alt={selectedCategory} />
          </div>
        </div>
      </div>
      <div className=" mt-10">
        <h1 className=" text-[30px] md:text-[45px] font-inter  font-bold text-primary">
          Built for all kind of teams
        </h1>
        <ul className="  overflow-auto mt-4 flex-normal">
          {professionalCategories?.map((item, index) => (
            <li
              onClick={() => setProfessionalCategory(item)}
              className={`${
                professtionalCategory === item ? "bg-[#F1F3FD]" : "border-2"
              } text-primary mx-3 cursor-pointer  rounded-full px-3 py-2 font-helva `}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className=" mt-4 flex  md:flex-row flex-col md:justify-between">
          <div className=" md:w-[350px] mt-10 font-helva">
            <h3 className=" text-primary">{professtionalCategory}</h3>
            <ul className=" flex flex-col mt-4">
              {ProfessionalLists?.map((item, index) => (
                <li className=" text-[14px]  md:text-[16px] flex-normal" key={index}>
                  <img src={tick} alt="" />
                  <span className=" ml-1">{item}</span>
                </li>
              ))}
            </ul>
            <div className=" cursor-pointer group mt-5 flex-normal">
              <span className=" text-blue-600 underline text-[14px]">
                Learn more
              </span>
              <img className=" group-hover:translate-x-2  transition-all duration-300 ml-1 size-3" src={blueArrow} alt="blueArrow" />
            </div>
            <h1 className=" font-helva pt-5">Integrate your favorite tools</h1>
            <ul className=" mt-4 flex-normal ">
              {uxList?.map((item, index) => (
                <li className=" first:px-0 cursor-pointer px-4" key={index}>
                  <img className=" size-6" src={item} alt={item} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src={uxDesign} alt={professtionalCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Built;
