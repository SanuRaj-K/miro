import React from "react";
import CommonButton from "../common/Button";

const ContactBottom = () => {
  return (
    <div className=" font-inter  flex justify-center items-center flex-col">
      <div className=" text-center">
        <h1 className=" text-[45px] text-white font-bold ">Join 45M+ users today</h1>
        <p className=" py-2">Start for free — upgrade anytime.</p> 
        <span className=" underline ">Joining as an organization? Contact Sales</span>
      </div>
      <div className=" mt-2 inline-block">
        <CommonButton content={'Sign up free'} />
      </div>
    </div>
  );
};

export default ContactBottom;
