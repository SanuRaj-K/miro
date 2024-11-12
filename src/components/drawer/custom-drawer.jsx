import React from "react";
import { menu } from "../../constants/assetsData";

const Drawer  = () => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button    "
          >
            <img className=" size-5" src={menu } alt="menu" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-[50% p-4">
            {/* Sidebar content here */}
            <li>
              Sidebar Item 1
            </li>
            <li>
              Sidebar Item 2
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
