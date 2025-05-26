import React from "react";
import Login from "../../../public/images/svg/People.svg";
import Share2 from "../../../public/images/svg/Share2.svg";
import Click from "../../../public/images/svg/Click.svg";
import Payment from "../../../public/images/svg/Payment.svg";
import Image from "next/image";

const Sec4 = () => {
  return (
    <>
      <div className="   bg-[#F5F7FA]  flex h-50   mt-10 items-center justify-center ">
        <div className="    mr-23   ">
          <h1 className="text-[#4D4D4D] font-Inter   font-[600] text-3xl leading-[14.69px] tracking-[0%]  ">
            Helping a local
            <span className="flex text-[#4CAF4F] sm:my-3 py-1  ">
              business reinvent itself
            </span>
          </h1>
          <p className="text-[#18191F] font-Inter font-[400] text-xm leading-[ 8.0px] tracking-[0%]  ">
            We reached here with our hard work and dedication{" "}
          </p>
        </div>

        <div className=" mr-15 ">
          <div className="  sm:gap-[10.02px] flex  space-x-9  ">
            <div className=" sm:gap-[5.34px] flex   ">
              <Image className="w-10 h-10" src={Login} alt="" />
              <div className="   ">
                <h1 className="font-Inter font-[700] text-xm leading-[12.02px] tracking-[0%] text-[#4D4D4D]   ">
                  2,245,341{" "}
                  <span className=" flex  font-Inter font-[400] text-xs leeading-[8.01px] tracking-[0%]  text-[#717171] ">
                    Member
                  </span>
                </h1>
              </div>
            </div>

            <div className=" sm:gap-[5.34px] flex   ">
              <Image className="w-14 h-14" src={Share2} alt="" />
              <div className=" flex">
                <h1 className="font-Inter font-[700] text-xm leading-[12.02px] tracking-[0%] text-[#4D4D4D] ">
                  46,326{" "}
                  <span className=" flex  font-Inter font-[400] text-xs leeading-[8.01px] tracking-[0%]  text-[#717171] ">
                    Clubs
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className="sm:w-[180.29px] sm:h-[22px] sm:gap-[10.02px] flex space-x-9 mx-2 my-4  ">
            <div className="sm:w-[85.14px] sm:h-[22px] sm:gap-[5.34px]  flex ">
              <Image className="w-10 h-10" src={Click} alt="" />
              <div className="">
                <h1 className="font-Inter font-[700] text-xm leading-[12.02px] tracking-[0%] text-[#4D4D4D] ">
                  {" "}
                  828,867{" "}
                  <span className="  font-Inter font-[400] text-xs leeading-[8.01px] tracking-[0%]  text-[#717171]   ">
                    Event Booking
                  </span>
                </h1>
              </div>
            </div>

            <div className="sm:w-[85.14px] sm:h-[22px] sm:gap-[5.34px] flex mx-13">
              <Image className="w-10 h-10" src={Payment} alt="" />
              <h1 className="font-Inter font-[700] text-xm leading-[12.02px] tracking-[0%] text-[#4D4D4D] ">
                1,926,426{" "}
                <span className="font-Inter font-[400] text-xs leeading-[8.01px] tracking-[0%]  text-[#717171] ">
                  {" "}
                  Payment
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec4;
