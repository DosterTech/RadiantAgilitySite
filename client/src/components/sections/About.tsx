import { motion } from 'framer-motion';

const stats = [
  { label: 'Clients Served', value: '100+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Projects Completed', value: '200+' },
  { label: 'Industry Experts', value: '15+' }
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Radiant Agility Technology</h2>
            <p className="text-gray-600 text-lg mb-6">
              We are a team of technology and business process experts dedicated to helping small and mid-sized businesses 
              scale through automation, innovative technology solutions, and Agile methodologies.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Founded in 2018, Radiant Agility Technology brings together the expertise of marketing technologists, 
              software developers, and Agile coaches to provide comprehensive business transformation services.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg mb-8">
              To empower businesses with technology solutions and Agile methodologies that drive growth, 
              increase efficiency, and create sustainable competitive advantages.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="text-primary-600 font-bold text-4xl mb-2">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Team working together" 
              className="rounded-xl shadow-lg w-full max-w-md object-cover h-[500px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
