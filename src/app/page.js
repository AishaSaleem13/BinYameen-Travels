
// import Navbar from "@/components/Navbar";

import AboutUs from "@/components/Aboutpage";
import OurStory from "@/components/Aboutpage";
import ContactUs from "@/components/Contact";
import Heronew from "@/components/Heronew";
import UmrahIntroSection from "@/components/Umrah";
import About from "@/components/about";
import Hero from "@/components/about2";
import ValuedPilgrims from "@/components/clientreview";
import FooterSection from "@/components/footer";
import BookingWidget from "@/components/formbooking"
import ServicesFeatures from "@/components/googlereviews";
import GoogleReviews from "@/components/googlereviews";

import HeroSlider from "@/components/hero1";
import InternationalPage from "@/components/international";
import CuratedActivities from "@/components/preview2";
import WhyChooseUs from "@/components/whychooseus";

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
