import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { RiLightbulbLine, RiApps2Line, RiTimerLine, RiStore2Line, RiBuilding4Line, RiRestaurantLine } from 'react-icons/ri';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const serviceShowcases = [
  {
    title: 'Marketing Automation',
    category: 'Digital Marketing Solutions',
    description: 'Our approach to marketing automation focuses on personalized customer journeys, lead scoring, and campaign analytics to help your business grow efficiently.',
    benefit: 'Smart Lead Management',
    icon: <RiLightbulbLine className="mr-2" />,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Custom App Development',
    category: 'Technology Solutions',
    description: 'We design and build customized applications tailored to your unique workflow needs, focusing on usability, efficiency, and scalability.',
    benefit: 'Simplified Operations',
    icon: <RiApps2Line className="mr-2" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80'
  },
  {
    title: 'Agility Consulting',
    category: 'Business Process Optimization',
    description: 'Our agile methodology implementation helps businesses respond faster to market changes and customer needs through improved team collaboration and workflow efficiency.',
    benefit: 'Enhanced Adaptability',
    icon: <RiTimerLine className="mr-2" />,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
];

const approachPoints = [
  {
    title: "Our Approach",
    description: "As a new company, we're taking a fresh approach to technology solutions. We focus on understanding your business thoroughly before recommending any technology. This means we spend time learning about your operations, challenges, and goals to deliver truly tailored solutions.",
  },
  {
    title: "Working With Us",
    description: "We believe in transparent communication throughout the project lifecycle. You'll always know where things stand, what's coming next, and have direct access to our team. We're building our business one successful relationship at a time.",
  }
];

const exampleScenarios = [
  {
    icon: <RiStore2Line className="h-10 w-10 text-primary-600 mb-4" />,
    businessName: "Local Boutique Retailer",
    challenge: "A small clothing boutique struggling to manage inventory and customer relationships while competing with larger retailers.",
    solution: "Custom inventory management system integrated with a marketing automation platform for personalized email campaigns based on purchase history.",
    potentialOutcome: "More efficient inventory management and targeted marketing to increase customer loyalty and repeat purchases."
  },
  {
    icon: <RiBuilding4Line className="h-10 w-10 text-primary-600 mb-4" />,
    businessName: "Regional Consulting Firm",
    challenge: "Mid-sized business consulting firm with inefficient client management processes and limited visibility into project status.",
    solution: "Custom client portal application with integrated project management tools and automated reporting capabilities.",
    potentialOutcome: "Streamlined operations, improved client communication, and better resource allocation across projects."
  },
  {
    icon: <RiRestaurantLine className="h-10 w-10 text-primary-600 mb-4" />,
    businessName: "Restaurant Chain",
    challenge: "Small restaurant group struggling with staff scheduling, inventory management, and coordinating between multiple locations.",
    solution: "Implementation of agile methodologies and custom workflow application connecting all business processes across locations.",
    potentialOutcome: "Reduced food waste, optimized staffing, and consistent customer experience across all restaurant locations."
  }
];

const ServicesShowcase = () => {
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
    <section id="services-showcase" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Here's how we can help transform your business operations and drive growth.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {serviceShowcases.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            >
              <Card className="overflow-hidden h-full">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{service.category}</p>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-medium flex items-center">
                      {service.icon} {service.benefit}
                    </span>
                    <Link href="/services" className="text-primary-600 hover:text-primary-800 font-medium">Learn More</Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Our Approach Section (replaces testimonials) */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">Working With Us</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approachPoints.map((point, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{point.title}</h4>
                <p className="text-gray-600 mb-6">
                  {point.description}
                </p>
                <div className="flex justify-start">
                  <Link href="/contact">
                    <Button variant="outline" className="text-primary-600 border-primary-600 hover:bg-primary-50">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Example Scenarios Section */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Example Application Scenarios</h3>
            <p className="text-gray-600">
              While we're a new company, here are some examples of how our solutions could be applied to help businesses like yours.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {exampleScenarios.map((scenario, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-md flex flex-col h-full"
              >
                <div className="flex justify-center">
                  {scenario.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">{scenario.businessName}</h4>
                <div className="flex-grow">
                  <div className="mb-4">
                    <h5 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Challenge</h5>
                    <p className="text-gray-600">{scenario.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Our Approach</h5>
                    <p className="text-gray-600">{scenario.solution}</p>
                  </div>
                  <div>
                    <h5 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Potential Outcome</h5>
                    <p className="text-gray-600">{scenario.potentialOutcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Commitment Banner */}
        <motion.div 
          className="mt-20 bg-primary-50 border border-primary-100 rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Commitment to Transparency</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            As a new company, we understand that trust is earned through honest communication and delivering on our promises. 
            We're committed to being upfront about what we can and can't do, providing realistic timelines, and focusing on quality over quantity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;