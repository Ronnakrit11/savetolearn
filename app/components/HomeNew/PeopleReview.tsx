import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';

const reviews = [
    {
        name: " คุณใหม่  ",
        // avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Students",
        comment:
            " เข้าใจง่ายมากค่ะ สามารถนำความรู้ไปใช้ได้จริง ประยุกต์ใช้กับธุรกิจที่มี ทั่งการตลาด การคิดคอนเทนต์ที่ไม่ทางตัน สำหรับใครมองหาครอสเรียนที่จับมือทำ แนะนำเลยค่ะ "
    },
    {
        name: "คุณน้อย    ",
        // avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        profession: "Students",
        comment:
            "มาเรียนแล้ว ชอบผูิสอนคะ สอนได้เข้าใจ และเป็นการลงมือทำไปพร้อมกัน ทำให้เรามีรายได้ระหว่างเรียน และพัฒนาตัวเองไปในตัว และสามารถสอบถามได้ตลอดเวลา"
    },
    {
        name: "คุณอ้อย  ",
        // avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        profession: "Students        ",
        comment:
            "เป็นครอสเรียนที่คุ้มค่ามากค่ะ ทั้งในแง่ของประสบการ์ณและมุมมองที่ได้รับจากผู้สอน ทำให้บ้างปัญหาที่เราเจอ มาเรียนแล้วปลดล็อก และไม่เสียเวลาลองผิดลองถูก นำจากประสบการณ์ที่ได้ในครอส และเพื่อนๆที่มาเรียน มาปรับใช้ได้ทันที"
    },
    {
        name: "คุณบอล     ",
        // avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        profession: "Students",
        comment:
            "เป็นการย่อยบทสรุปของแต่ละด้านที่ใช้ได้จริง ให้เรียนและลงมือทำได้พร้อมกัน เรียนซ้ำได้ มี E-Book ให้ จะทั้งอ่าน หรือดูก็เข้าใจ และสามารถมีรายได้จากการเรียนได้ไปด้วยครับ",
    },
 
   
    
];


const settingPeopleSay = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // className: 'notes-slider',
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            },
        },
    ]
}



const PeopleReview = () => {
    return (
        <>
            <div className="w-full bg-[var(--secondary-color)] p-10 pb-20">
                <div className="w-full">
                    <p className="text-[#2a2a32] text-center font-bold text-[30px] mt-10" data-aos="fade-down" >What People Say</p>
                    <p className="text-[#2a2a32] text-center text-sm mb-16" data-aos="fade-down" >Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className="w-full flex gap-3 justify-center" data-aos="fade-down" >
                    <div className="max-w-[90%] m-auto">
                        <Slider {...settingPeopleSay}>
                            {
                                reviews.map(({ name, profession, comment }) => <PeopleReviewCard {...({ name, profession, comment })} />)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}


function PeopleReviewCard({ name, profession, comment }: any) {
    return (
        <div className="relative min-h-[380px] md:max-w-[376px] md:min-h-[330px] bg-[#fff] rounded-xl p-8 drop-shadow-md ">
            {/* <div className="text-[20px] font-bold text-[#6440FB] mb-8 ">Perfect Job</div> */}
            <div className="text-black font-Poppins">
                {comment}
            </div>
                <div className='absolute bottom-3 w-[70%]'>
                    <hr className="mt-5 w-[100%]" />
                    <div className="flex mt-3 items-center w-[100%]">
                        <div>
                            <Image
                                src={'/assests/avatar.png'}
                                width={60}
                                height={60}
                                alt=""
                                className="object-contain "
                            />
                        </div>
                        <div className="pl-7">
                            <div className="text-md font-semibold text-black">{name}</div>
                            <div className="text-xs text-black">{profession}</div>
                        </div>
                    </div>
                </div>


        </div>
    )
}


export default PeopleReview