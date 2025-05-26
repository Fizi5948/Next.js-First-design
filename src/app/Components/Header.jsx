import React from "react";
import Logo from "../../../public/Images/svg/Logo.svg";
import Button from './Button.jsx'
import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className="flex justify-evenly items-center  max-w-screen ">
        <Image
          className="w-[107.54px] h-[16.71px] gap-[5.57px] "
          src={Logo}
          alt=""
        />
        <nav className="flex  sm:gap[22.27px] ">



            <div className="sm:my-[20px] flex justify-center items-center sm:gap[16.7px]">
              <ul className="text-xs sm:text-xs flex  sm:gap-[30.7px]  text-[#4D4D4D] ">
                <li className="hover:text-black hover:cursor-pointer hover:scale-105"  ><a href="#"></a>Home </li>
                <li className="hover:text-black hover:cursor-pointer hover:scale-105"  ><a href="#"></a>Features </li>
                <li className="hover:text-black hover:cursor-pointer hover:scale-105"  ><a href="#"></a>Community </li>
                <li className="hover:text-black hover:cursor-pointer hover:scale-105"  ><a href="#"></a>Blog </li>
                <li className="hover:text-black hover:cursor-pointer hover:scale-105"  ><a href="#"></a>Price</li>
              </ul>
              </div>
              <div className="sm:mx-[20px] sm:my-2 sm:py-2">
                <Button text="Register Now" icon="true" />

              </div>
            
        
        </nav>
      </div>
    </>
  );
};

export default Header;
