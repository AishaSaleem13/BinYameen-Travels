
// import Navbar from "@/components/Navbar";

import AboutUs from "@/components/Aboutpage";
import OurStory from "@/components/Aboutpage";
import Heronew from "@/components/Heronew";
import UmrahIntroSection from "@/components/Umrah";
import About from "@/components/about";
import Hero from "@/components/about2";
import FooterSection from "@/components/footer";
import BookingWidget from "@/components/formbooking"

import HeroSlider from "@/components/hero1";
import InternationalPage from "@/components/international";

export default function Home() {
  return (
  <>
  
     <div className="bg-gray-50">
       <Heronew/>
  <BookingWidget/>
  <About/>
  <Hero/>

<FooterSection/>

     </div>
    
{/* <HeroSlider/> */}
 
  </>
  );
}
