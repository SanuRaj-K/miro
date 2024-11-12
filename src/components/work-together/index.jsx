import React from "react";
import {
  arrow,
  integrations,
  workTogertImage,
} from "../../constants/assetsData";

const WorkTogether = () => {
  return (
    <div>
      <div className="font-inter flex-btw">
        <div>
          <h1 className=" text-[48px]  font-bold  text-primary">
            Work Together, <br /> whenever you work
          </h1>
          <p className=" w-[400px]">
            In the office, remote, or a mix of the two, with Miro, your team can
            connect, collaborate, and co-create in one space no matter where you
            are.
          </p>
          <div className=" mt-5 flex-normal">
            <span className=" text-blue-600 underline text-[14px]">
              Learn more
            </span>
            <img className=" ml-1 bg-blue-600" src={arrow} alt="arrow" />
          </div>
        </div>
        <div>
          <img src={workTogertImage} alt="" />
        </div>
      </div>
      <div className="font-inter flex-btw">
        <div>
          <img src={integrations} alt="" />
        </div>
        <div>
          <h1 className=" text-[48px]  font-bold  text-primary">
            Connect <br /> your tools, <br /> close your tabs
          </h1>
          <p className=" w-[400px]">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          <div className=" mt-5 flex-normal">
            <span className=" text-blue-600 underline text-[14px]">
              Learn more
            </span>
            <img className=" ml-1 bg-blue-600" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
