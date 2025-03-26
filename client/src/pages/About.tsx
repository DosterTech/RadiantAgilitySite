import { Helmet } from 'react-helmet';
import About from "@/components/sections/About";
import CallToAction from "@/components/sections/CallToAction";
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Radiant Agility Technology</title>
        <meta name="description" content="Learn about Radiant Agility Technology, our mission, and how we help businesses streamline and scale using technology and Agile methodologies." />
      </Helmet>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
            <p className="text-lg text-gray-600">
              Discover how Radiant Agility Technology is transforming businesses through innovative technology solutions and Agile methodologies. Our team of experts is dedicated to helping you automate, innovate, and scale.
            </p>
          </motion.div>
        </div>
      </section>
      
      <About />
      <CallToAction />
    </>
  );
}
