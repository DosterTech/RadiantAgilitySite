import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: 'Discovery',
    description: 'We analyze your business needs, challenges, and goals to create a custom roadmap.'
  },
  {
    number: 2,
    title: 'Strategy',
    description: 'Our team develops a tailored strategy to optimize your processes and technology.'
  },
  {
    number: 3,
    title: 'Implementation',
    description: 'We execute the plan with agile methodologies, ensuring quick adaptability.'
  },
  {
    number: 4,
    title: 'Optimization',
    description: 'Continuous improvement through data-driven refinements and ongoing support.'
  }
];

const HowWeWork = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
          <p className="text-gray-600 text-lg">
            Our proven process helps businesses transform their operations through technology and Agile methodologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
