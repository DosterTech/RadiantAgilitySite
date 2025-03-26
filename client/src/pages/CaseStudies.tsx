import { Helmet } from 'react-helmet';
import CaseStudies from "@/components/sections/CaseStudies";
import CallToAction from "@/components/sections/CallToAction";
import { motion } from 'framer-motion';

export default function CaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title>Case Studies | Radiant Agility Technology</title>
        <meta name="description" content="Explore success stories from businesses that have partnered with Radiant Agility Technology to transform their operations and achieve remarkable growth." />
      </Helmet>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Client Success Stories</h1>
            <p className="text-lg text-gray-600">
              Discover how businesses like yours have achieved remarkable growth and transformation by partnering with Radiant Agility Technology. Our case studies demonstrate the real-world impact of our solutions.
            </p>
          </motion.div>
        </div>
      </section>
      
      <CaseStudies />
      <CallToAction />
    </>
  );
}
