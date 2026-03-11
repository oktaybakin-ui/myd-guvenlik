import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import References from "@/components/sections/References";
import Sectors from "@/components/sections/Sectors";
import WhyUs from "@/components/sections/WhyUs";
import Gallery from "@/components/sections/Gallery";
import Training from "@/components/sections/Training";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Sectors />
      <Training />
      <WhyUs />
      <Gallery />
      <References />
      <CTA />
    </>
  );
}
