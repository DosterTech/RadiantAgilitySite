import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of Marketing Automation: AI and Beyond',
    date: 'July 25, 2023',
    category: 'Marketing',
    excerpt: 'Discover how artificial intelligence is revolutionizing marketing automation and how businesses can leverage these technologies.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: '5 App Development Trends Reshaping Business in 2023',
    date: 'July 18, 2023',
    category: 'Development',
    excerpt: 'Explore the latest trends in app development that are helping businesses streamline operations and enhance customer experiences.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
  },
  {
    title: 'How Agile Methodology Can Transform Your Business Operations',
    date: 'July 10, 2023',
    category: 'Agility',
    excerpt: 'Learn how implementing Agile practices can improve team collaboration, increase productivity, and drive better business results.',
    image: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80'
  }
];

const Blog = () => {
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
    <section id="blog" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest trends, strategies, and insights in marketing, app development, and business agility.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogPosts.map((post, index) => (
            <motion.article 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              variants={itemVariants}
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date} • {post.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <a href="#" className="hover:text-primary-600 transition-colors">{post.title}</a>
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <a href="#" className="text-primary-600 hover:text-primary-800 font-medium flex items-center">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button variant="outline" className="px-6 py-3 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
