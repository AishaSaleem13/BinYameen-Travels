
// import Navbar from "@/components/Navbar";

import Heronew from "@/components/Heronew";
import About from "@/components/about";
import BookingWidget from "@/components/formbooking"

import HeroSlider from "@/components/hero1";

export default function Home() {
  return (
  <>
  
     <div className="bg-gray-50">
       <Heronew/>
  <BookingWidget/>
  <About/>
  
  
     </div>
{/* <HeroSlider/> */}
 
  </>
  );
}
