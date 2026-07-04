import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/ui/Divider";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Industries } from "@/components/sections/Industries";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TechStack } from "@/components/sections/TechStack";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { AICapabilities } from "@/components/sections/AICapabilities";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <WhatWeBuild />
        <Divider />
        <FeaturedProducts />
        <Divider />
        <Industries />
        <WhyChooseUs />
        <Divider />
        <TechStack />
        <Divider />
        <Process />
        <Divider />
        <Services />
        <AICapabilities />
        <Divider />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
