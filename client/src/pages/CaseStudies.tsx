import { Helmet } from 'react-helmet';
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import CallToAction from "@/components/sections/CallToAction";
import { motion } from 'framer-motion';

export default function CaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Radiant Agility Technology</title>
        <meta name="description" content="Explore our range of services at Radiant Agility Technology designed to help your business grow with marketing automation, custom app development, and agility consulting." />
      </Helmet>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services & Approach</h1>
            <p className="text-lg text-gray-600">
              At Radiant Agility Technology, we focus on delivering practical technology solutions tailored to your business needs. As a new company, we're committed to transparency, quality, and building long-term relationships with our clients.
            </p>
          </motion.div>
        </div>
      </section>
      
      <ServicesShowcase />
      <CallToAction />
    </>
  );
}
