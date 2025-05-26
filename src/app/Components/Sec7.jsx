import React from "react";
import Girl from "../../../public/images/svg/Girl.svg"
import Laptop from "../../../public/images/svg/Laptop.svg"
import Laptop2 from "../../../public/images/svg/Laptop2.svg"
import Sec71 from "./Sec71.jsx"
const Sec7 = () => {
  const data=[
    
    {img: Girl,
      description:"Creating Streamlined Safeguarding  Processes with OneRen",
      button:"Readmore"
    },
    {img: Laptop,
      description:"What are your safeguarding responsibilities and how can you manage them?",
      button:"Readmore"
    },
    {img: Laptop2,
      description:"Revamping the Membership Model with Triathlon Australia",
      button:"Readmore"
    },
  ]
  return (
    <>
      <div className="py-8  items-center justify-evenly  space-y-4 ">
        <h1 className="font-Inter font-semibold text-2xl leading-[14.69px] text-[#4D4D4D] text-center">
          Caring is the new marketing
        </h1>
        <p className="font-Inter font-normal text-xs text-[#717171] text-center mx-120  ">
          <span className=" ">The Nextcent blog is the best place to read about the latest membership</span>
          <span className="flex ">  See who's joining the community, read about how our communit is increasing their membership </span>
        </p>
      </div>
      <div className=" ">
        <div className="flex items-center justify-center  ">
         {data.map((e, key)=>(
         <Sec71 key={key} img={e.img} description={e.description} button={e.button}/> 
         ))}

        </div>


      </div>

    </>


  );
};

export default Sec7;
