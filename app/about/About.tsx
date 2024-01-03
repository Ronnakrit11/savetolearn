import React from "react";
import { styles } from "../styles/style";
import Link from 'next/link'



const About = () => {
  return (
    <div className="text-black dark:text-white pb-24">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">Save2learn</span>
      </h1>

      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto text-[22px]">
        <p className="font-Anuphan text-[21px]  ">
          &nbsp;&nbsp;IDEAINSIDE  “แพลตฟอร์มการเรียนออนไลน์” โดยกลุ่ม "SAVE2PLAY" เป็นโครงการที่ให้ความใส่ใจในการผสมผสาน
          ดิจิตอลเทคโนโลยีเข้ากับการทำตลาดออนไลน์ โดยมุ่งเน้นให้ความสำคัญ กับ กลุ่มผู้สนใจในการลงทุนทางด้านความรู้
          ซึ่งสามารถนำเอาความรู้จากที่ได้ไปใช้ต่อยอดเป็นอาชีพ ความน่าสนใจหลักๆของแนวคิดนี้ คือ การสร้างรายได้ควบคู่
          ไปกับการเรียนรู้การใช้งานเครื่องมือต่างๆ ของระบบที่สร้างขึ้น ทำให้ผู้ใช้งานสามารถมีบทบาทเป็นทั้งผู้รับและผู้ให้
          ได้ในเวลาเดียวกันแบบแท้จริง จนเกิดเป็น Community Commerce ขนาดใหญ่ที่พร้อมจะขยายขอบเขตความน่าสนใจ
          ให้บุคคลภายนอก และพัฒนาต่อยอดเป็น Platform Community ในอนาคต เพื่อเตรียมความพร้อมในการรับโอกาสใหม่ๆ
          ที่กำลังจะเกิดขึ้นด้วยการแข่งขันทางเทคโนโลยีของกลุ่มบริษัทยักษ์ใหญ่ที่มีเงินทุนระดับโลก
          <br />
          <br />




          <div className="text-[20px] font-Anuphan">
            มาร่วมเปิดประสบการณ์การเรียนรู้ และไอเดียการต่อยอดที่สร้างสรรค์ด้วยตัวคุณเอง
            WWW.IDEAINSIDE.ONLINE
          </div>
        </p>
      </div>
    </div>
  );
};

export default About;
