import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { RiRobot2Line, RiCodeSSlashLine, RiLineChartLine, RiDashboard3Line } from 'react-icons/ri';

const serviceItems = [
  {
    id: 'marketing',
    title: 'Marketing Automation',
    description: 'Streamline your marketing efforts and nurture leads automatically with our comprehensive marketing automation solutions.',
    icon: <RiRobot2Line className="text-2xl" />,
    features: [
      'Email campaign automation and management',
      'CRM setup, integration, and optimization',
      'Customer journey and funnel optimization',
      'Marketing analytics and performance tracking',
    ],
  },
  {
    id: 'app',
    title: 'Custom App Development',
    description: 'Create powerful, tailored applications that solve your unique business challenges and streamline operations.',
    icon: <RiCodeSSlashLine className="text-2xl" />,
    features: [
      'Business workflow and productivity applications',
      'E-commerce platforms and integrations',
      'Business automation tools and dashboards',
      'Mobile app development for iOS and Android',
    ],
  },
  {
    id: 'lead',
    title: 'Lead Generation & Growth',
    description: 'Attract and convert more qualified leads through data-driven strategies tailored to your business goals.',
    icon: <RiLineChartLine className="text-2xl" />,
    features: [
      'SEO optimization and content strategy',
      'Paid advertising campaigns (Google, Social)',
      'Social media marketing and management',
      'Lead nurturing and conversion optimization',
    ],
  },
  {
    id: 'agility',
    title: 'Agility Consulting & Training',
    description: 'Transform your organization with Agile methodologies that increase efficiency, collaboration, and delivery speed.',
    icon: <RiDashboard3Line className="text-2xl" />,
    features: [
      'Scrum and SAFe coaching and implementation',
      'Agile transformation roadmap and guidance',
      'Workflow optimization and process improvement',
      'Team building and Agile workshops',
    ],
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Comprehensive solutions that help your business adapt, grow, and thrive in the digital landscape.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {serviceItems.map((service) => (
            <motion.div 
              key={service.id}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              variants={itemVariants}
            >
              <div className="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block text-primary-600 font-medium hover:text-primary-800 transition-colors">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <Link href="/contact">
            <Button className="px-8 py-6 gradient-bg hover:opacity-90 text-white font-medium rounded-lg shadow-md hover:shadow-lg">
              Request a Custom Solution
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
