import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import Image from 'next/image'
const sec71 = (props) => {
    return (<>
        <div className=' items-center justify-center  sm:px-3 w-[250px] '>
            <Image className='w-60 h-60' src={props.img} alt="" />
            <div className=' bg-white  drop-shadow-[#ABBED166] drop-shadow-2xl w-[90%] rounded-lg -mt-20 mx-3  p-5 h-32'>
                <div className=' text-[#717171] text-center ' >

                    <h1 className='text-xs'> {props.description} </h1>
                    <div className='flex text-[#4CAF4F] text-center rounded-[2.67px] gap-[5.34px] w-full mt-2'>
                        <button className='mx-auto'>{props.button} <ArrowRightOutlined /> </button>

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default sec71