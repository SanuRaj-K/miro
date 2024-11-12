import React from "react";
import { t1, t2, t3, t4, t5 } from "../../constants/assetsData";

const Trust = () => {
  const users = [t1, t2, t3, t4, t5];
  return (
    <div>
      <div>
        <h1 className=" text-[18px] font-inter text-center">
          Trusted by 45M users
        </h1>
        <ul className=" flex-normal justify-center mt-8 flex-wrap  ">
          {users?.map((item, index) => (
            <li className=" cursor-pointer" key={index}>
              <img src={item} alt="logos" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trust;
