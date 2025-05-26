import React from "react";
import Img5 from "../../../public/images/svg/Women.svg";
import Button from "./Button.jsx";
import Image from "next/image";
const Sec5 = () => {
  return (
    <><div className=" flex  items-center justify-center  ">

      <div className="flex  ">
        <div className="my-10">
          <Image className="w-60" src={Img5} alt="" />
        </div>

        <div className="sm-gap-[10.68px] my-20 ">
          <div className="sm-gap-[5.34px] mx-13 ">
            <h1 className="font-Inter font-[600] text-xm leading-[14.69px] tracking-[0%] text-[#4D4D4D]">
              How to Design your footer like
              <span className="font-Inter font-[600] text-xm leading-[14.69px] tracking-[0%] text-[#4D4D4D] flex ">
                we did
              </span>
            </h1>
            <p className="fonter-Inter font-[400] text-xs leading-[6.68px] tracking-[0%] text-[#717171]  ">
              <span className="flex   my-2 ">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie,
              </span>
              <span className="flex  my-2">
                
                massa nunc varius arcu, at scelerisque elit erat a magna. Donec
                quis erat at libero ultrices
              </span>
              <span className="flex   my-2">
                mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
                dui, at porta nisi facilisis finibus.
              </span>
              <span>
                In euismod augue vitae nisi ultricies, non aliquet urna
                tincidunt. Integer in nisi eget nulla
              </span>
              <span className="flex my-2 ">
                commodo faucibus efficitur quis massa. Praesent felis est,
                finibus et nisi ac,
              </span>
              <span className="flex my-1">
                hendrerit venenatis libero. Donec consectetur faucibus ipsum id
                gravida.
              </span>
            </p>
          </div>
          <div className="mx-10 sm:px-[10.68px] sm:py-[4.67px] sm-gap-[3.3px] my-10 ">
            <Button text="learn More" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sec5;
