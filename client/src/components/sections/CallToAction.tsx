import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-white text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our marketing automation, app development, and agility consulting services can 
            help your business grow, scale, and thrive in today's competitive landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-8 py-6">
                Schedule a Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-medium px-8 py-6">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
