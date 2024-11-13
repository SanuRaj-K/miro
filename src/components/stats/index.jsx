import React from "react";
import { statistics } from "../../constants";
import { motion } from "framer-motion";

const Stats = () => {
  
  return (
    <div>
      <div className=" flex flex-col font-inter justify-normal   md:justify-center md:items-center">
        <h1 className=" text-[26px] sm:text-[30px] md:text-[36px] lg:text-[45px] text-primary  font-bold md:w-[500px] ">
          Why companies large and small trust Miro
        </h1>
        <span className=" text-center underline text-primary">
          Contact sales to request a demo
        </span>
      </div>
      <div>
        <ul className=" grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center py-10">
          {statistics?.map((item, index) => (
            <motion.li whileHover={{y:-10}}  transition={{duration:.3}}  className=" cursor-pointer flex flex-col items-center  text-primary" key={index}>
              <span className=" font-bold text-[26px] md:text-[36px] lg:text-[40px]">{item.value}</span>
              <span className=" text-[14px] md:text-[16px]  font-medium">{item.description}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stats;
