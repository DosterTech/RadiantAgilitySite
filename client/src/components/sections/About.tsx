import { motion } from 'framer-motion';
import { LightbulbIcon, HeartHandshakeIcon, RocketIcon, ZapIcon } from 'lucide-react';

const values = [
  { 
    icon: <HeartHandshakeIcon className="h-8 w-8 text-primary-600 mb-3" />,
    title: 'Transparency', 
    description: 'We believe in being honest about our capabilities and limitations. No false promises, just genuine service.' 
  },
  { 
    icon: <ZapIcon className="h-8 w-8 text-primary-600 mb-3" />,
    title: 'Agility', 
    description: 'As a nimble startup, we adapt quickly to your changing needs and market conditions.' 
  },
  { 
    icon: <LightbulbIcon className="h-8 w-8 text-primary-600 mb-3" />,
    title: 'Innovation', 
    description: 'We stay current with the latest technologies to provide fresh, forward-thinking solutions.' 
  },
  { 
    icon: <RocketIcon className="h-8 w-8 text-primary-600 mb-3" />,
    title: 'Growth-Focused', 
    description: 'We measure our success by your growth. Your business goals are our priority.' 
  }
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Radiant Agility Technology</h2>
            <p className="text-gray-600 text-lg mb-6">
              We're a fresh, innovative technology company founded in 2024 with a passion for helping small and mid-sized businesses 
              grow through smart automation, custom tech solutions, and agile approaches.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Our team brings energy, current industry knowledge, and a personalized approach to each project. We're committed to 
              delivering high-quality solutions with dedication, attention to detail, and a genuine desire to see your business succeed.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg mb-8">
              To empower businesses with accessible technology solutions that drive growth, 
              increase efficiency, and create sustainable competitive advantages - without the enterprise-level price tag.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
                >
                  {value.icon}
                  <h4 className="text-gray-900 font-semibold text-lg mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Team working together" 
              className="rounded-xl shadow-lg w-full max-w-md object-cover h-[400px] sm:h-[500px] hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
