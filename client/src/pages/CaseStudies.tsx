import { Helmet } from 'react-helmet';
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import CallToAction from "@/components/sections/CallToAction";
import { motion } from 'framer-motion';

export default function CaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title>Sample Scenarios & Services | Radiant Agility Technology</title>
        <meta name="description" content="Explore our service examples at Radiant Agility Technology and see how our marketing automation, custom app development, and agility consulting could help businesses like yours." />
      </Helmet>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Services & Example Scenarios</h1>
            <p className="text-lg text-gray-600">
              At Radiant Agility Technology, we focus on delivering practical technology solutions tailored to your business needs. Below you'll find some example scenarios that illustrate how our services could help businesses similar to yours.
            </p>
            <p className="mt-4 text-sm bg-primary-50 p-3 rounded-md inline-block">
              <strong>Note:</strong> As a new business, these are example applications rather than completed case studies. We look forward to creating real success stories with clients like you!
            </p>
          </motion.div>
        </div>
      </section>
      
      <ServicesShowcase />
      <CallToAction />
    </>
  );
}
