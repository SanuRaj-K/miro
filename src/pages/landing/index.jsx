import React from "react";
import CommonButton from "../../components/common/Button";
import { G2, landing1, stars } from "../../constants/assetsData";
import Trust from "../../components/trust/Trust";
import Collab from "../../components/collab";
import WorkTogether from "../../components/work-together";
import ViewReport from "../../components/report-view";
import Built from "../../components/built";
import Stats from "../../components/stats";
import ContactBottom from "../../components/contact";
import Reviews from "../../components/review";

const Landing = () => {
  return (
    <div>
      <div className="    bg-white w-full px-5 md:px-10 lg:px-28">
        <div className="pt-28  h-screen w-full flex flex-col-reverse  md:flex-row md:flex-btw">
          <div className="    ">
            <h1 className="  font-inter  text-[30px] md:text-[45px] font-bold md:w-[350px] text-primary">
              {" "}
              Take ideas from better to best
            </h1>
            <p className=" md:w-[400px]  text-primary text-[18px] ">
              Miro is your team's visual platform to connect, collaborate and
              create - together.
            </p>
            <div className=" md:w-[300px] py-5">
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
         <section className="  py-10 md:py-20">
          <Trust />
        </section>
        <section className="  py-10 md:py-20">
          <Collab />
        </section>
        <section className="  py-10 md:py-20">
          <WorkTogether />
        </section>
        <section className="  py-10 md:py-20">
          <ViewReport />
        </section>
        <section className="  py-10 md:py-20">
          <Built />
        </section> 
      </div>
      <section className=" bg-[#FFD02F] px-5 md:px-10 lg:px-28  py-10 md:py-20">
        <Stats />
      </section>
      <div className=" px-5 md:px-10 lg:px-28">
        <section className="  py-10 md:py-20">
          <Reviews />
        </section>
        <section className="  py-10 md:py-20 rounded-lg bg-primary">
          <ContactBottom />
        </section>
      </div>
    </div>
  );
};

export default Landing;
