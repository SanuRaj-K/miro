import React from "react";
import { collabContent } from "../../constants";
import CommonButton from "../common/Button";
import { motion } from "framer-motion";

const Collab = () => {
  return (
    <div>
      <div>
        {" "}
        <div className="   relative flex justify-center items-center flex-col">
          <h1 className=" md:w-[500px] text-center text-primary font-inter  text-[30px] md:text-[45px] font-bold">
            Collaborate without constraints
          </h1>
          <motion.span
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className=" absolute -top-[20px] right-0 lg:right-[400px] rotate-12 bg-[#FFD02F] font-bold text-black px-3 py-1 rounded-md text-[10px]"
          >
            YOUR IDEA STARTS HERE
          </motion.span>
        </div>
        <div>
          <ul className=" my-10   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center  gap-10">
            {collabContent?.map((item, index) => (
              <li key={index}>
                <h1 className="  font-bold text-[18px]  md:text-[24px] font-inter text-primary">
                  {item.title}
                </h1>
                <p className=" text-[14px] md:text-[16px]  mt-5 font-helva">
                  {item.desc}
                </p>
                <span className=" text-blue-500 text-[14px] md:text-[16px]">
                  {item.last}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="  inline-flex  justify-center items-center w-full mt-5">
        <CommonButton content={"Sign up free"} />
      </div>
    </div>
  );
};

export default Collab;
