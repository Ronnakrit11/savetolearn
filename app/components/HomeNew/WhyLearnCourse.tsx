"use client"
import Image from 'next/image'
import React from 'react'

const item = [
    {
        title: ' Learn',
        icon: '/Learn.png',
        message: 'สอนโดยผู้เชี่ยวชาญที่มีประสบการณ์มากกว่า 7 ปี',
    },
    {
        title: 'Create',
        icon: '/Create.png',
        message: 'ปูพื้นฐานด้านทฤษฎี เเละมีตัวอย่างชัดเจน',
    },
    {
        title: 'Work',
        icon: '/Work.png',
        message: 'เรียนเเล้วสามารถนำไปใช้จริงได้',
    },
]

const WhyLearnCourse = () => {
    return (
        <>
            <div className="w-full bg-white p-10 pb-20 ">
                <div className="w-full pb-12" data-aos="fade-down" data-aos-delay="500">
                    <p className="text-black text-center font-bold text-[30px] mt-10">Why learn with our courses?</p>
                </div>
                <div className='flex flex-col md:flex-row gap-8 justify-center items-center text-black' data-aos="fade-down" data-aos-delay="1000" >
                    {
                        item.map(ele => <div key={ele.title} className="w-[296px] max-w-[376px] backdrop-blur border dark:border-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] shadow-sm dark:shadow-inner h-[330px] bg-[var(--secondary-color)] rounded-xl text-[#2a2a32] p-5 hover:bg-white hover:text-black">
                            <div className="flex mt-3 items-center justify-center flex-col gap-4">
                                <div className='h-[160px] flex justify-center'>
                                    <Image
                                        src={ele.icon}
                                        width={200}
                                        height={104}
                                        alt=""
                                        className="object-contain "
                                    />
                                </div>
                                <div className='flex justify-center flex-col items-center'>
                                    <p className='font-bold text-2xl font-Anuphan'>
                                        {ele.title}
                                    </p>
                                    <p className='text-center font-Anuphan'>
                                        {ele.message}
                                    </p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>

        </>
    )
}

export default WhyLearnCourse