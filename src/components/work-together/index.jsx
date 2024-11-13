import React from "react";
import {
  blueArrow,
  integrations,
  workTogertImage,
} from "../../constants/assetsData";
import { motion } from "framer-motion";

const WorkTogether = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="font-inter flex flex-col  md:flex-row md:flex-btw"
      >
        <div>
          <h1 className=" text-[26px] md:text-[35px] lg:text-[48px]  font-bold  text-primary">
            Work Together, <br /> whenever you work
          </h1>
          <p className=" md:w-[400px]">
            In the office, remote, or a mix of the two, with Miro, your team can
            connect, collaborate, and co-create in one space no matter where you
            are.
          </p>
          <div className=" group  cursor-pointer mt-5 flex-normal">
            <span className=" text-blue-600 underline text-[14px]">
              Learn more
            </span>
            <img
              className=" ml-1group-hover:translate-x-2  transition-all duration-300    size-3 "
              src={blueArrow}
              alt="arrow"
            />
          </div>
        </div>
        <div>
          <img src={workTogertImage} alt="" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="font-inter flex flex-col-reverse  md:flex-row md:flex-btw  "
      >
        <div>
          <img src={integrations} alt="" />
        </div>
        <div>
          <h1 className=" text-[26px] md:text-[35px] lg:text-[48px] font-bold  text-primary">
            Connect <br /> your tools, <br /> close your tabs
          </h1>
          <p className=" md:w-[400px]">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          <div className=" group mt-5 cursor-pointer flex-normal">
            <span className=" text-blue-600 underline text-[14px]">
              Learn more
            </span>
            <img
              className=" ml-1 group-hover:translate-x-2  transition-all duration-300 size-3"
              src={blueArrow}
              alt="arrow"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkTogether;
