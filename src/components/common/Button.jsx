import React from "react";
import { arrow } from "../../constants/assetsData";

const CommonButton = ({ content }) => {
  return (
    <div>
      <div className="  w-full cursor-pointer inline-flex  justify-center items-center bg-[#4262FF] px-4 py-2 text-white rounded-full">
        <span>{content}</span> <img className=" ml-2" src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default CommonButton;
