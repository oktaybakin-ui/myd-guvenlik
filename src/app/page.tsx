import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import References from "@/components/sections/References";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Sectors from "@/components/sections/Sectors";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <References />
      <About />
      <Gallery />
      <Sectors />
      <WhyUs />
      <CTA />
    </>
  );
}
