import React from "react";
import {  blueArrow } from "../../constants/assetsData";
import { testimonials } from "../../constants";

const Reviews = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center">
        <h1 className=" font-bold text-[26px] sm:text-[35px] lg:text-[45px]  font-inter  text-primary">
          Loved by the world's best teams
        </h1>
        <div className=" mt-3 md:mt-0   cursor-pointer inline-flex border-2 border-[#4262FF] text-[#4262FF]  justify-center items-center  px-4 py-2   rounded-full">
          <span>See all customer stories</span>{" "}
          <img className=" size-3 ml-2" src={blueArrow} alt="arrow" />
        </div>
      </div>
      <div>
        <ul className=" grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-10 gap-16">
          {testimonials?.map((item, index) => (
           <li className=" md:h-[350px] flex flex-col justify-between p-4" key={index}>
           <div>
             <h1 className="text-[26px] sm:text-[35px] lg:text-[45px] text-primary font-inter p-2 font-bold shadow-md">
               {item.company}
             </h1>
             <p className="mt-4 text-sm md:text-[16px] py-5 md:py-0 font-helva">{item.quote}</p>
           </div>
           
           {/* Image section at the bottom */}
           <div className="flex items-center mt-3">
             <img src={item.image} alt={item.name} className="mr-2" />
             <div className="flex flex-col">
               <span>{item.name}</span>
               <span>{item.role}</span>
             </div>
           </div>
         </li>
         
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
