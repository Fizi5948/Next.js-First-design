import React from 'react'
import Button from './Button.jsx'
import Heroimg  from '../../../public/images/svg/Hero.svg'
import Slide from '../../../public/images/svg/slide.svg'
import Image from 'next/image.js'
const Hero = () => {
  return (
    <><div className='bg-[#F5F7FA] sm-gap-[72.39px] w-full  flex items-center justify-evenly px-55 py-10'>
      <div className=' sm:gap-[22.27px]'>
        <div className='  sm:gap-[11.14px]' >
          <h1 className='font-Inter font-[600] leading-[52.9px] text-[44.55px]  tracking-[0%] text-[#4D4D4D]'>Lesson and  insights
            <span className=' flex font-Inter font-[600] leading-[52.9px] text-[44.55px]  text-[#4CAF4F] tracking-[0%]'>from 8 years</span></h1>
          <p className='font-Inter leading-[16.71px] font-[400] text-[11.14px] tracking-[0%] text-[#717171] '>Where to grow your business as a photographer:site or social media</p>
        </div>
        <div className='mt-5'>
          <Button text="Register" />

        </div>
          </div>
  <div className='sm:py-3 mt-50 '>
<Image className=' sm:gap-[5.57px]  sm:py-4 ' src={Slide} alt="" />

  </div>
  <div className=''>
    <Image  className="" src={Heroimg} alt="" />
  </div >
    </div>
    </>
  )
}

export default Hero