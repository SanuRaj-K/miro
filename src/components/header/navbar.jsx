import React from "react";
import { globe, logo } from "../../constants/assetsData";
import CommonButton from "../common/Button";
import Drawer from "../drawer/custom-drawer";

const NavBar = () => {
  const navData = [
    "product",
    "solutions",
    "resources",
    "enterprise",
    "pricing",
  ];
  return (
    <div>
      <div>
        <header className=" text-[14px] flex shadow-xl justify-between items-center font-inter text-black capitalize font-medium fixed top-0 z-50  w-full bg-white py-3 px-4">
          <div className="  flex justify-between items-center ">
            <img className=" cursor-pointer " src={logo} alt="" />

            <ul className=" hidden sm:flex justify-between items-center">
              {navData?.map((item, index) => (
                <li key={index} className=" hover:underline px-3 cursor-pointer">
                  {" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className=" hidden lg:flex justify-between items-center">
              <li className=" hover:underline cursor-pointer   flex items-center">
                <img className=" size-4" src={globe} alt="globe" />
                <span className=" pl-1 ">EN</span>
              </li>
              <li className=" hover:underline  cursor-pointer px-3">Contact Sales</li>
              <li className="hover:underline cursor-pointer">Login</li>
              <li className=" hover:underline cursor-pointer pl-2">
                <CommonButton content={"Sign up free"} />
              </li>
            </ul>
          </div>
          <div className=" lg:hidden">
            <Drawer />
          </div>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
