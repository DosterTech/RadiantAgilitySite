import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import HowWeWork from "@/components/sections/HowWeWork";
import About from "@/components/sections/About";
import CaseStudies from "@/components/sections/CaseStudies";
import CallToAction from "@/components/sections/CallToAction";
import Contact from "@/components/sections/Contact";
import Blog from "@/components/sections/Blog";
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Radiant Agility Technology | Marketing Automation, App Development & Agility Consulting</title>
        <meta name="description" content="Radiant Agility Technology offers marketing automation, app development, and agility consulting services to help small to mid-sized businesses automate, innovate, and scale." />
      </Helmet>
      <Hero />
      <Services />
      <HowWeWork />
      <About />
      <CaseStudies />
      <CallToAction />
      <Contact />
      <Blog />
    </>
  );
}
