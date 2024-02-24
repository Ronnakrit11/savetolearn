
import Home from "./components/HomeNew/Home";


export const metadata = {
  title: 'IdeaInside เเหล่งรวบรวมความรู้คนคนยุคใหม่',
  description: 'สถาบันการสอนคอร์สการตลาดออนไลน์ การลงทุน เทคโนโลยีเอไอ เเละ อสังหาริมทรัพย์​  ',
  keywords : 'คอร์สการตลาดออนไลน์ , การลงทุน , เทคโนโลยีเอไอ, อสังหาริมทรัพย์​',
  openGraph: {
    title: 'IdeaInside เเหล่งรวบรวมความรู้คนคนยุคใหม่',
    description: 'สถาบันการสอนเเละเเหล่งการเรียนรู้คอร์สการตลาดออนไลน์ การลงทุน เทคโนโลยีเอไอ เเละ อสังหาริมทรัพย์​ ',
    url: 'https://www.ideainside.online',
    
    siteName: 'IdeaInside',
    images: [
      {
        url: 'https://res.cloudinary.com/dugevwb3g/image/upload/v1708788908/Logo-new_ssalc9.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'th-TH',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'IdeaInside เเหล่งรวบรวมความรู้คนคนยุคใหม่',
    description: 'เเหล่งการเรียนรู้คอร์สการตลาดออนไลน์ การลงทุน เทคโนโลยีเอไอ เเละ อสังหาริมทรัพย์',
    images: ['https://res.cloudinary.com/dugevwb3g/image/upload/v1708788908/Logo-new_ssalc9.png'],
  },
}


export const revalidate = 180

// http://localhost:8000/api/v1/get-layout/Banner
const Page = async () => {
  console.log('porcess env =>',process.env.NEXT_PUBLIC_SERVER_URI);
  
  const pmBanner = fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Banner`, {})
  const pmCategory = fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Categories`, {})
  const [resBanner, resCategory] = await Promise.all([pmBanner, pmCategory])
  const banner = await resBanner.json()
  const category = await resCategory.json()


  const webInfo = {
    banner: banner?.layout?.banner || {},
    category: category?.layout?.categories || []
  }

  return (
    <Home webInfo={webInfo} />
  );
};

export default Page;
