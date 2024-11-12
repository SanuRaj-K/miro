import React from "react";
import {
  companyResources,
  footerLinkswithSocialMeida,
  footerSocialMedia,
  miroResources,
  pricingResources,
  productItems,
  solutions,
} from "../../constants";
import FooterButton from "../common/footer-button";
import { apple, footerLastImage, playstore } from "../../constants/assetsData";

const Footer = () => {
  return (
    <div className=" bg-[#050038] px-5">
      <footer className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full my-20 py-10 font-inter  text-white">
        <div>
          <h1 className="text-[18px] font-bold mb-5">Product</h1>
          <ul>
            {productItems?.map((item, index) => (
              <li className="my-1 cursor-pointer" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] font-bold mb-5">Solutions</h1>
          <ul>
            {solutions?.map((item, index) => (
              <li className="my-1 cursor-pointer" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] font-bold mb-5">Resources</h1>
          <ul>
            {miroResources?.map((item, index) => (
              <li className="my-1 cursor-pointer" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] font-bold mb-5">Company</h1>
          <ul>
            {companyResources?.map((item, index) => (
              <li className="my-1 cursor-pointer" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] font-bold mb-5">Plans and Pricing</h1>
          <ul>
            {pricingResources?.map((item, index) => (
              <li className="my-1 cursor-pointer" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <hr className=" bg-[#9B99AF]" />
      {/* foooter Second */}
      <div className=" flex-btw py-2">
        <div className="  my-5">
          <div className=" flex-normal ">
            <ul className=" flex-normal mb-3 md:mb-0">
              {footerSocialMedia?.map((item, index) => (
                <li className=" px-2" key={index}>
                  <img src={item} alt="" />
                </li>
              ))}
            </ul>
            <ul className=" flex-normal ">
              {footerLinkswithSocialMeida?.map((item, index) => (
                <li className=" px-2" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <ul className="  flex-normal ">
            <li>
              <FooterButton
                image={apple}
                sub={"Download on the"}
                title={"App Store"}
              />
            </li>
            <li className=" px-4">
              <FooterButton
                image={playstore}
                sub={"GET IT ON"}
                title={"Google Play"}
              />
            </li>
            <li>
              <img src={footerLastImage} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
