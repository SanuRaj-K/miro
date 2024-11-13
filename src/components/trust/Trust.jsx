import React from "react";
import { t1, t2, t3, t4, t5 } from "../../constants/assetsData";
import { motion } from "framer-motion";

const Trust = () => {
  const users = [t1, t2, t3, t4, t5];
  return (
    <div>
      <div>
        <h1 className=" text-[18px] font-inter text-center">
          Trusted by 45M users
        </h1>
        <ul className=" flex-normal items-center justify-center mt-8 flex-wrap  ">
          {users?.map((item, index) => (
            <motion.li
              animate={{ x: [0, 100, 0] }}
              transition={{ duration:5,  repeat: Infinity, repeatType: "loop" }}
               
              className=" px-3 cursor-pointer"
              key={index}
            >
              <img src={item} alt="logos" />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trust;
