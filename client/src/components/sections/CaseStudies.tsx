import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { RiLineChartLine, RiDashboard3Line, RiUserStarLine } from 'react-icons/ri';

const caseStudies = [
  {
    title: 'TechStart Inc.',
    category: 'Marketing Automation & Lead Generation',
    description: 'Implemented marketing automation that increased qualified leads by 150% and reduced customer acquisition costs by 40%.',
    metric: '150% Growth',
    icon: <RiLineChartLine className="mr-2" />,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'GlobalFirm',
    category: 'Custom App Development',
    description: 'Developed a custom workflow application that streamlined operations and reduced processing time by 65%.',
    metric: '65% Faster',
    icon: <RiDashboard3Line className="mr-2" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80'
  },
  {
    title: 'Innovex Solutions',
    category: 'Agility Consulting & Training',
    description: 'Guided Agile transformation that improved team productivity by 78% and reduced time-to-market by half.',
    metric: '78% More Productive',
    icon: <RiUserStarLine className="mr-2" />,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
];

const testimonials = [
  {
    quote: "Radiant Agility Technology transformed our marketing operations. The automation systems they implemented saved us countless hours and increased our lead conversion by 87%. Truly a game-changer for our business.",
    author: "Sarah Johnson",
    title: "CMO, TechStart Inc."
  },
  {
    quote: "The custom application developed by the Radiant team streamlined our entire operation. What used to take days now takes hours, and our team can focus on growth instead of manual processes.",
    author: "Michael Chen",
    title: "CEO, GlobalFirm"
  }
];

const CaseStudies = () => {
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
    <section id="case-studies" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-gray-600 text-lg">
            See how we've helped businesses like yours transform their operations and achieve remarkable growth.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            >
              <Card className="overflow-hidden h-full">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{study.category}</p>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-medium flex items-center">
                      {study.icon} {study.metric}
                    </span>
                    <a href="#" className="text-primary-600 hover:text-primary-800 font-medium">Read More</a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">What Our Clients Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-primary-400 text-6xl absolute -top-6 left-6 opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144-.377.13-.892.354-1.460.662-.553.315-1.163.631-1.667 1.135-.506.488-.937 1.076-1.267 1.700-.341.59-.587 1.254-.738 1.985-.16.721-.23 1.493-.23 2.29 0 .808.086 1.621.23 2.290.15.731.397 1.395.738 2.000.329.606.76 1.219 1.266 1.700.503.504 1.114.82 1.667 1.136.802.424 1.537.67 1.996.804L11.245 18c0 0-.346-.120-.781-.318-.174-.092-.358-.183-.538-.284-.243-.142-.513-.317-.726-.498-.217-.201-.491-.362-.675-.605-.184-.242-.445-.439-.594-.73-.176-.269-.355-.535-.469-.844-.114-.209-.187-.446-.254-.677.214.031.428.064.651.064.905 0 1.635-.723 1.635-1.615 0-.59-.352-1.096-.863-1.321.512-.225.863-.731.863-1.321 0-.892-.73-1.615-1.635-1.615z"></path>
                    <path d="M16.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L19.758 4.03c0 0-.218.052-.597.144-.377.13-.892.354-1.460.662-.553.315-1.163.631-1.667 1.135-.506.488-.937 1.076-1.267 1.700-.341.59-.587 1.254-.738 1.985-.16.721-.23 1.493-.23 2.290 0 .808.086 1.621.23 2.290.15.731.397 1.395.738 2.000.329.606.76 1.219 1.266 1.700.503.504 1.114.82 1.667 1.136.802.424 1.537.67 1.996.804L21.245 18c0 0-.346-.12-.781-.318-.174-.092-.358-.183-.538-.284-.243-.142-.513-.317-.726-.498-.217-.201-.491-.362-.675-.605-.184-.242-.445-.439-.594-.73-.176-.269-.355-.535-.469-.844-.114-.209-.187-.446-.254-.677.214.031.428.064.651.064.905 0 1.635-.723 1.635-1.615 0-.59-.352-1.096-.863-1.321.512-.225.863-.731.863-1.321C18.135 10.723 17.405 10 16.5 10z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 relative z-10 mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
