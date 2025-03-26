import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import LeadCaptureForm from '../forms/LeadCaptureForm';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const companies = [
    "ACME Corp", "TechStart", "GlobalFirm", "Innovex", "PrimeSoft"
  ];

  return (
    <section className="relative hero-pattern" id="hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Automate, Innovate, and <span className="gradient-text">Scale Your Business</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Radiant Agility Technology helps small to mid-sized businesses transform their operations through marketing automation, app development, and agility consulting.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="w-full sm:w-auto gradient-bg hover:opacity-90 text-white font-medium rounded-lg shadow-md hover:shadow-lg">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="w-full sm:w-auto text-primary-600 border-primary-600 font-medium rounded-lg hover:bg-primary-50">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:ml-auto"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto lg:mr-0">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get Your Free Digital Audit</h2>
              <p className="text-gray-600 mb-6">Discover how you can optimize your business processes and increase revenue.</p>
              
              <LeadCaptureForm />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Trusted By Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 font-medium mb-6">Trusted by innovative businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {companies.map((company, index) => (
              <motion.div 
                key={index} 
                className="text-gray-400 text-xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
