import React from "react";
import CommonButton from "../../components/common/Button";
import { G2, landing1, stars } from "../../constants/assetsData";
import Trust from "../../components/trust/Trust";

const Landing = () => {
  return (
    <div className="  mt-28 bg-white px-10">
      <div className=" flex-btw">
        <div className="    ">
          <h1 className="  font-inter  text-[45px] font-bold w-[350px] text-primary">
            {" "}
            Take ideas from better to best
          </h1>
          <p className=" w-[400px]  text-primary text-[18px] ">
            Miro is your team's visual platform to connect, collaborate and
            create - together.
          </p>
          <div className=" w-[300px] py-5">
            <input
              type="text"
              placeholder="Enter your work email"
              name=""
              id=""
              className=" w-full bg-white mb-3 border-2 rounded-full px-5 h-[45px]"
            />
            <div className=" w-full">
              <CommonButton content={"Sign up free"} />
            </div>
            <span className=" text-[14px]">
              Collaborate with your team within minutes
            </span>
          </div>
          <div>
            <div className=" inline flex-normal p-3 bg-[#F5F5F7]">
              <div className="  ">
                <span>
                  <img src={stars} alt="stars" />
                </span>
                <span className=" text-primary text-[10px]">
                  Based on 5421+ reviews
                </span>
              </div>
              <div>
                <ul className=" text-primary font-semibold flex-normal">
                  <li>
                    <img src={G2} alt="gr" />
                  </li>
                  <li className=" px-3">GetApp</li>
                  <li>Captera</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img className=" p-4" src={landing1} alt="" />
          </div>
        </div>
      </div>
      <section className=" py-20">
        <Trust />
      </section>
    </div>
  );
};

export default Landing;