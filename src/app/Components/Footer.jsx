// import { Button } from 'antd'
import React from "react";
import Button from "./Button.jsx";
import Logo from '../../../public/images/svg/Logo5.svg'
import Insta from '../../../public/images/svg/Insta.svg'
import Broswer from '../../../public/images/svg/Broswer.svg'
import Twite from '../../../public/images/svg/Twite.svg'
import Youtube from '../../../public/images/svg/Youtube.svg'
import Forward from '../../../public/images/svg/Forward.svg'
import Image from "next/image.js";
const Footer = () => {
  return (
    <>
      <div className="w-full  mt-20 ">
        <div className="bg-[#F5F7FA]   h-full py-10 items-center justify-center ">
          <h1 className="font-Inter font-[600] text-4xl  text-[#263238] leading-[25.37px] tracking-[0%] text-center  ">
            {" "}
            Pellentesque suscipit <br />{" "}
            <span className="mx-auto leading-15">fringilla libero eu. </span>
          </h1>
          <div className="items-center justify-center mx-160 mt-4">
            <Button text="Get a Demo" />
          </div>
        </div>
        <div className="bg-[#263238]  flex text-white items-center justify-evenly ">
          <div className="text-white space-y-5 sm:mt-10 sm:py-10" >
            <Image className="h-4" src={Logo} alt="" />
            <p className="text-xs">Copyright © 2020 Landify UI Kit. <span className="flex
  ">All rights reserved</span></p>
            <div className="flex  gap-2">
              <Image className="h-6" src={Insta} alt="" />
              <Image className="h-6" src={Broswer} alt="" />
              <Image className="h-6" src={Twite} alt="" />
              <Image className="h-6" src={Youtube} alt="" />

            </div>
          </div>

          <div className=" flex items-center place-items-center gap-15">
            <div className="  sm:mt-18">
              <h1 className="text-md font-bold">Company</h1>
              <ul className="my-4 space-y-1 text-xs">
                <li>About us</li>
                <li>Blog </li>
                <li>Contact us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div className="  sm:mt-18">
              <h1 className="text-md font-bold">Support</h1>
              <ul className="my-4 space-y-1 text-xs">
                <li>Help center</li>
                <li>Terms of service  </li>
                <li>Legal </li>
                <li>Privacy Policy</li>
                <li>Status</li>

              </ul>


            </div>
            <div className="space-y-7">
              <h1 className="text-md"> Stay up to date </h1>
              <div className="relative">
                <input className="bg-stone-500 rounded  px-5 py-1 outline-0" type="text" placeholder="your  email address" />
                <Image src={Forward} className="absolute top-2 right-2 w-4" alt=""/>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
