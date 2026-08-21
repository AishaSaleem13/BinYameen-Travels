import dynamic from "next/dynamic";
import Heronew from "@/components/Heronew";
import BookingWidget from "@/components/formbooking";
import About from "@/components/about";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Below-the-fold sections: don't block initial hydration
const CuratedActivities = dynamic(() => import("@/components/preview2"));
const WhyChooseUs = dynamic(() => import("@/components/whychooseus"));
const ServicesFeatures = dynamic(() => import("@/components/googlereviews"));
const ValuedPilgrims = dynamic(() => import("@/components/clientreview"));
const ContactUs = dynamic(() => import("@/components/Contact"));
const FooterSection = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <div className="bg-white">
      <Heronew />
      <BookingWidget />
      <About />
      <CuratedActivities />
      <WhyChooseUs />
      <ServicesFeatures />
      <ValuedPilgrims />
      <ContactUs />
      <FooterSection />
      <SpeedInsights />
    </div>
  );
}