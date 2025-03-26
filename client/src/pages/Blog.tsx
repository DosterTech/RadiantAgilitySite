import { Helmet } from 'react-helmet';
import Blog from "@/components/sections/Blog";
import { motion } from 'framer-motion';

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog | Radiant Agility Technology</title>
        <meta name="description" content="Stay updated with the latest trends, strategies, and insights in marketing automation, app development, and business agility from Radiant Agility Technology." />
      </Helmet>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Insights</h1>
            <p className="text-lg text-gray-600">
              Stay updated with the latest trends, strategies, and insights in marketing automation, app development, 
              and business agility from our expert team at Radiant Agility Technology.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Blog />
    </>
  );
}
