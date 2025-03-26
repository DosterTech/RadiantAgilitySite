import { Link } from 'wouter';
import ContactForm from '../forms/ContactForm';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: <MapPin className="text-xl" />,
    title: 'Office Location',
    value: '123 Innovation Drive, San Francisco, CA 94103'
  },
  {
    icon: <Mail className="text-xl" />,
    title: 'Email Us',
    value: 'info@radiantagility.tech'
  },
  {
    icon: <Phone className="text-xl" />,
    title: 'Call Us',
    value: '(555) 123-4567'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 text-lg mb-8">
              Have questions about our services or ready to start your business transformation? 
              Fill out the form, and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-white mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
