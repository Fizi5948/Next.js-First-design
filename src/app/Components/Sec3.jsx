import React from "react";
import Logo2 from "../../../public/images/svg/logo2.svg";
import Image from "next/image";
import Button from "./Button";
const Sec3 = () => {
  return (
    <>
      <div className="w-full  flex items-center justify-center  mt-25">
        <div className="mx-25 ">
          <Image className="w-70" src={Logo2} alt="" />
        </div>

        <div className=" ">
          <div className=" ">
            <h1 className="text-[#4D4D4D] font-Inter font-[600] text-3xl  tracking-[0%] ">
              The unseen of spending three <span className="text-[#4D4D4D] leading-13 flex font-Inter font-[600]  text-3xl  tracking-[0%]">years at Pixelsgrade</span>
            </h1>
            <p className="text-[#717171] font-Inter font-[400] text-xs tracking-[0] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="text-[#717171] flex  font-Inter font-[400] text-xs tracking-[0]"> Amet
              saepe maiores, necessitatibus at alias quasi quam perspiciatis
              aliquid vero, quae suscipit.</span> <span className="text-[#717171] font-Inter font-[400] text-xs tracking-[0] flex">  Esse voluptatem quod nemo provident
              delectus incidunt qui hic?</span>
            </p>
            <div className="py-5">

            <Button text="Learn More"/> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec3;
