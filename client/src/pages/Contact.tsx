import { Helmet } from 'react-helmet';
import Contact from "@/components/sections/Contact";
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Radiant Agility Technology</title>
        <meta name="description" content="Get in touch with Radiant Agility Technology to discuss how we can help transform your business with our marketing automation, app development, and agility consulting services." />
      </Helmet>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-gray-600">
              Have questions about our services or ready to start your business transformation? 
              Our team is here to help you automate, innovate, and scale your business.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Contact />
    </>
  );
}
