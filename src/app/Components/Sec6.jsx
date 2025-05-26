import React from "react";
import Logo4 from "../../../public/images/svg/Logo4.svg";
import Image1 from "../../../public/images/svg/image1.svg";
import Icon2 from "../../../public/images/svg/Icon2.svg";
import Icon3 from "../../../public/images/svg/Icon3.svg";
import Icon4 from "../../../public/images/svg/Icon4.svg";
import Icon5 from "../../../public/images/svg/Icon5.svg";
import Ring from "../../../public/images/svg/Ring.svg";
import { ArrowRightOutlined } from '@ant-design/icons'
import Image from "next/image";

const Sec6 = () => {
  return (
    <>
      <div className="flex items-center justify-center sm:gap-15 ">
        <div className=" ">
          <Image className="w-55 " src={Logo4} alt="" />
        </div>
        <div className="sm:mt-5">
          <p className="text-[#717171] font-Inter font-[500] text-xs leading-[8.01px] tracking-[0] space-y-2  ">
            <span className="flex ">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus</span><span className="flex "> tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida</span>
           <span className="flex"> enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, </span> <span className="flex"> nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse</span>
          <span className="flex">eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, </span>  <span className="flex"> vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum  </span> <span className="flex">id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.</span>
          </p>

          <div className="">
  <h1 className="text-[#4CAF4F] font-Inter font-[600] text-xl leading-[9.35px] tracking-[0%]  my-3">Tim Smith </h1>
  <p className=" text-[#89939E] ">British Dragon Boat Racing Association</p>
          </div>
<div className="flex   my-4  ">

          <div className="flex gap-4">
              <Image  className=""   src={Image1} alt="" />
              <Image  className=""  src={Icon2} alt="" />
              <Image  className=""  src={Icon3} alt="" />
              <Image  className=""  src={Icon4} alt="" />
              <Image  className=""  src={Icon5} alt="" />
              <Image  className=" h-4 mt-2"  src={Ring} alt="" />
          </div>
          <div className="flex  mx-auto">
            <p className="text-[#4CAF4F] hover:cursor-pointer hover:scale-102 ">Meeting all customers <ArrowRightOutlined /></p>
          </div>
</div>
        </div>
      </div>
    </>
  );
};

export default Sec6;
