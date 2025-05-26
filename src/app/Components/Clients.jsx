import React from 'react'
import Icon1 from '../../../public/images/svg/Icon1.svg'
import Icon2 from '../../../public/images/svg/Icon2.svg'
import Icon3 from '../../../public/images/svg/Icon3.svg'
import Icon4 from '../../../public/images/svg/Icon4.svg'
import Icon5 from '../../../public/images/svg/Icon5.svg'
import Icon6 from '../../../public/images/svg/Icon6.svg'
import Icon7 from '../../../public/images/svg/Icon7.svg'
import Image from 'next/image'
const Clients = () => {
  return (<>
    <div className='items-center justify-center text-center sm:gap-[11.14px] sm:my-5 '>
        <div className=' '>
        <h1 className='text-[#4D4D4D]  font-Inter font-[600] text-[25.06px] leading-[30.63px] tracking-[0%]  '>Our Client</h1>
        <p className='text-[#717171] font-[400] text-[11.14px] leading-[16.71px] tracking-[0%]  '>we have been working with some fortune500+ clients</p>

   </div>
   <div className=' flex  items-center justify-center  gap-25 sm:my-10'>
 <Image  className='rounded-[5.57px]'   src={Icon1} alt="" />
 <Image  className=' rounded-[5.57px]'   src={Icon2} alt="" />
 <Image  className=' rounded-[5.57px]'   src={Icon3} alt="" />
 <Image  className=' rounded-[5.57px]'   src={Icon4} alt="" />
 <Image  className=' rounded-[5.57px]'   src={Icon5} alt="" />
 <Image  className=' rounded-[5.57px] w-10'   src={Icon6} alt="" />
 <Image  className=' rounded-[5.57px]'   src={Icon7} alt="" />
   </div>
    </div>
  </>
  )
}

export default Clients