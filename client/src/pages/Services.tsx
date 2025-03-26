import { Helmet } from 'react-helmet';
import Services from "@/components/sections/Services";
import HowWeWork from "@/components/sections/HowWeWork";
import CallToAction from "@/components/sections/CallToAction";
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Radiant Agility Technology</title>
        <meta name="description" content="Explore our marketing automation, app development, lead generation, and agility consulting services designed to help your business grow." />
      </Helmet>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-lg text-gray-600">
              At Radiant Agility Technology, we offer comprehensive solutions that help your business adapt, grow, and thrive in the digital landscape. 
              Our expert team delivers tailored services across marketing automation, app development, lead generation, and agility consulting.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Services />
      <HowWeWork />
      <CallToAction />
    </>
  );
}
