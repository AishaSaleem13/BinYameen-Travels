
// import Navbar from "@/components/Navbar";

import ContactUs from "@/components/Contact";
import Heronew from "@/components/Heronew";
import UmrahIntroSection from "@/components/Umrah";
import About from "@/components/about";
import Hero from "@/components/about2";
import ValuedPilgrims from "@/components/clientreview";
import FooterSection from "@/components/footer";
import BookingWidget from "@/components/formbooking"
import ServicesFeatures from "@/components/googlereviews";

import CuratedActivities from "@/components/preview2";
import WhyChooseUs from "@/components/whychooseus";
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function Home() {
  return (
  <>
  
     <div className="bg-white">
       <Heronew/>
  <BookingWidget/>
  <About/>
  <CuratedActivities/>
<WhyChooseUs/>
<ServicesFeatures/>
<ValuedPilgrims/>
<ContactUs/>
<FooterSection/>

     </div>
    
{/* <HeroSlider/> */}
 
  </>
  );
}
