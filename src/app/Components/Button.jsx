import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'

const Button = (prop) => {
  return (
    <>
      <button className='bg-[#4CAF4F]  rounded-[2.78px] 
       sm:gap-[5.57px]  text-white text-xs sm:text-xs text-nowrap text-[11.14px] leading-[16.71px]  tracking-[0%] text-center align-middle hover:bg-green-600  sm:px-4  sm:py-2  '>
          {prop.text} {prop.icon ? <ArrowRightOutlined /> : ""}
      </button>
    </>
  )
}

export default Button
