import React from 'react'
import People from '../../../public/images/svg/Peopple.svg'
import Home from '../../../public/images/svg/Home.svg'
import Share from '../../../public/images/svg/Share.svg'
import Image from 'next/image'
const Sec = () => {
    return (<>
        <div className='w-full sm:gap-[11.14px] mt-4'>
            <div className=''>
                <h1 className='font-Inter font-[600] text-[25.06px] leading-[30-63px] tracking-[0%] text-center text-[#4D4D4D]'>Manange your entire community
                    <span className='flex font-Inter font-[600] text-[25.06px] leading-[30-63px] tracking-[0%] text-center sm:mx-150'> in a single system</span></h1>
                <p className='font-Inter font-[400] text-[11.14px] leading-[16.71px] tracking-[0%] text-center text-[#717171]'>Who is Nextcent suitable for?</p>
            </div>

            <div className=' flex justify-evenly mt-5 px-30  '>

                <div className=' rounded-[5.57px]  sm:gap-[5.57px]  '>
                    <div className=' md:h-[101.12px] md:gap-[11.1px] sm:mx-9 '>
                        <Image  className='sm:mx-18'  src={People} alt="" />
                       <h1 className='text-[#4D4D4D] font-[700] text-[19.49px] leading-[25.06px] tracking-[0%] text-center'>Membership <span className='flex text-[#4D4D4D] font-[700] text-[19.49px] leading-[25.06px] tracking-[0%] text-center sm:mx-8'>Organisations</span> </h1>
                    </div>
                  <div  className='sm:mx-12'  >
                    <h1 className='text-[#717171] font-Inter font-[400] text-[9.74px] leading-[13.92px] tracking-[0%]  sm:mx-3'> Our memebership managemenet </h1>
                        <h1 className='text-[#717171]   font-Inter font-[400] text-[9.74px] leading-[13.92px] tracking-[0%] text-center flex sm:mx-2 '>software provides full automation of </h1> 
                        <h1 className='flex text-[#717171]  font-Inter font-[400] text-[9.74px] leading-[13.92px] tracking-[0%] text-center sm:m  '>memebership renewables and paymenets </h1>
                  </div>
                </div>

                <div className=' rounded-[5.57px] sm:gap-[5.57px] '>
                    <div className=' md:h-[101.12px] md:gap-[11.1px] sm:mx-9 '>
                        <Image  className='sm:mx-18 h-10 w-10 '  src={Home} alt="" />
                       <h1 className='text-[#4D4D4D] font-[700] text-[19.49px] leading-[25.06px] tracking-[0%] text-center'>National <span className='flextext-[#4D4D4D] font-[700] text-[19.49px] leading-[25.06px] tracking-[0%] text-center' > Association</span> </h1>
                    </div>
                  <div className='sm:mx-12'  >
                    <h1 className='text-[#717171]   font-Inter font-[400] text-[9.74px] leading-[13.92px] tracking-[0%]  sm:mx-3'> Our memebership managemenet </h1>
                        <h1 className='text-[#717171] font-Inter font-[400] text-[9.74px] leading-[13.92px] tracking-[0%] text-center flex sm:mx-2 '>software provides full automation of </h1> 
                        <h1 className='flex text-[#717171] font-Inter font-[400] text-[9.74px] leading-[13.92px] tracking-[0%] text-center sm:m  '>memebership renewables and paymenets </h1>
                  </div>
                </div>

                <div className=' rounded-[5.57px]  sm:gap-[5.57px] '>
                    <div className=' md:h-[101.12px] md:gap-[11.1px] sm:mx-9 '>
                        <Image  className='sm:mx-18 h-10 w-10 '  src={Share} alt="" />
                       <h1 className='text-[#4D4D4D] font-[700] text-[19.49px] leading-[25.06px] tracking-[0%] text-center'>Clubs And <span className='flex text-[#4D4D4D] font-[700] text-[19.49px] leading-[25.06px] tracking-[0%] text-center sm:mx-15' >Groups</span> </h1>
                    </div>
                  <div className='sm:mx-12'  >
                    <h1 className='text-[#717171]   font-Inter font-[400] text-[9.74px] leading-[13.92px] tracking-[0%]  sm:mx-3'> Our memebership managemenet </h1>
                        <h1 className='text-[#717171] font-Inter font-[400] text-[9.74px] leading-[13.92px] tracking-[0%] text-center flex sm:mx-2 '>software provides full automation of </h1> 
                        <h1 className='flex text-[#717171] font-Inter font-[400] text-[9.74px] leading-[13.92px] tracking-[0%] text-center sm:m  '>memebership renewables and paymenets </h1>
                  </div>
                </div>

            </div>
        </div>
    </>
    )
}

export default Sec