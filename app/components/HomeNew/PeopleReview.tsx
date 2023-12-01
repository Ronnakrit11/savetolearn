import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';

const reviews = [
    {
        name: " มาลัย ธนานันท์",
        // avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "ธุรกิจส่วนตัว",
        comment:
            " หลังจากได้เรียนจากหลักสูตรออนไลน์กับอาจารย์อิสเรศแล้ว ดิฉันรู้สึกมั่นใจมากขึ้นในการนําความรู้ไปประยุกต์ใช้กับธุรกิจส่วนตัว "
    },
    {
        name: "ธีรวัฒน์ พึ่งโพธิ์",
        // avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        profession: "วิศวกร",
        comment:
            "ผมถูกใจวิธีการสอนของอาจารย์อิสเรศมาก เข้าใจง่าย ได้เนื้อหาครบถ้วนในเรื่องของฮวงจุ้ย ทําให้ชีวิตดีขึ้นเยอะ"
    },
    {
        name: "จิราภรณ์ โสพรรณ",
        // avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        profession: "พนักงานออฟฟิศ   ",
        comment:
            "หลังจากปรึกษาอาจารย์ ทําให้มองเห็นแนวทางในการแก้ปัญหาชีวิต และการทํางานได้ชัดเจนยิ่งขึ้น ขอบคุณมากค่ะ"
    },
    {
        name: "มาโนช วีระพงษ์",
        // avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        profession: "เจ้าของธุรกิจ",
        comment:
            "หลังจากที่ได้คําแนะนําจากอาจารย์  ทําให้ตัดสินใจลาออกจากงานเก่า แล้วมาเปิดกิจการเอง บอกเลยว่าชีวิตดีขึ้นเยอะแยะเลย",
    },
    {
        name: "ภคพร จันทรา",
        // avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        profession: "ธุรกิจส่วนตัว",
        comment:
            "ได้ลองนําความรู้ที่ได้จากการเรียนออนไลน์ไปใช้จริง ปรากฏว่าช่วยให้ธุรกิจดีขึ้นอย่างเห็นได้ชัด ขอบคุณอาจารย์มากค่ะ",
    },
    {
        name: "ธนา ทองพูน",
        // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: "พนักงานบริษัท ",
        comment:
            "หลังจากที่ได้พูดคุยกับอาจารย์ มุมมองในการมองปัญหาต่างๆ ก็เปลี่ยนไป ทําให้จิตใจสงบและมีความหวังมากขึ้น",
    },
    {
        name: "ณัฐวุฒิ สุทธิปรีชา",
        // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: "นักศึกษา ",
        comment:
            "ผมแอบอคติคิดว่าโหราศาสตร์คงไม่ใช่วิทยาศาสตร์ แต่หลังฟังการบรรยายของอาจารย์แล้ว ทําให้เปลี่ยนความคิด มองเห็นคุณค่ามากขึ้น",
    },
    {
        name: "พชรพรรณ เอี่ยมสะอาด",
        // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: "แม่บ้าน ",
        comment:
            "หลังจากที่ได้รับคําแนะนําจากอาจารย์ในเรื่องของการตกแต่งบ้าน ทําให้บ้านน่าอยู่ และครอบครัวอบอุ่นมากขึ้น",
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