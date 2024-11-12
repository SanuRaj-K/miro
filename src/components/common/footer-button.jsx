import React from "react";

const FooterButton = ({ image, title, sub }) => {
  return (
    <div  className=" md:min-w-[160px]  font-inter  inline-flex items-center px-3 py-2 rounded-lg border-2">
      <div>
        <img className=" size-5" src={image} alt={title} />
      </div>
      <div className=" flex flex-col pl-3  text-white">
        <span className=" text-[12px]">{sub}</span>
        <span className=" text-[14px]">{title}</span>
      </div>
    </div>
  );
};

export default FooterButton;
