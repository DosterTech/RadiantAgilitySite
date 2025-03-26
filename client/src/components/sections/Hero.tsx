import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import LeadCaptureForm from '../forms/LeadCaptureForm';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const expertiseAreas = [
    "Marketing Automation", "Custom App Development", "Agility Consulting", "Growth Strategy", "Digital Transformation"
  ];

  return (
    <section className="relative hero-pattern overflow-hidden" id="hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Automate, Innovate, and <span className="gradient-text">Scale Your Business</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-lg">
              Radiant Agility Technology helps small to mid-sized businesses transform their operations through marketing automation, app development, and agility consulting.
            </p>
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={staggerChildren}
            >
              <motion.div variants={fadeInUp}>
                <Link href="/contact">
                  <Button className="w-full sm:w-auto gradient-bg hover:opacity-90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Book a Free Consultation
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Link href="/services">
                  <Button variant="outline" className="w-full sm:w-auto text-primary border-primary font-medium rounded-lg hover:bg-gray-50 transition-all duration-300">
                    Explore Our Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            className="order-1 lg:order-2 lg:ml-auto"
          >
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg max-w-md mx-auto lg:mr-0 transform hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Get Your Free Digital Audit</h2>
              <p className="text-gray-600 mb-5 sm:mb-6 text-sm sm:text-base">Discover how you can optimize your business processes and increase revenue.</p>
              
              <LeadCaptureForm />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Areas of Expertise Section */}
      <div className="bg-gray-100 py-8 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p 
            className="text-center text-gray-500 font-medium mb-5 sm:mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Our Areas of Expertise
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-12 gap-y-6 sm:gap-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            {expertiseAreas.map((area, index) => (
              <motion.div 
                key={index} 
                className="text-primary-600 text-lg sm:text-xl font-medium px-3 py-1 bg-primary-50 rounded-full border border-primary-100"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.4 }
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {area}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
