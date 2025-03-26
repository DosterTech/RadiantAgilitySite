import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const blogPosts = [
  {
    id: '1',
    title: 'The Future of Marketing Automation: AI and Beyond',
    date: 'July 25, 2023',
    author: 'Sarah Johnson',
    readTime: '8 min read',
    category: 'Marketing',
    tags: ['AI', 'Automation', 'Marketing'],
    excerpt: 'Discover how artificial intelligence is revolutionizing marketing automation and how businesses can leverage these technologies to stay ahead of the competition.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: true,
    content: `
      <p>The marketing landscape is evolving rapidly, with AI-powered automation at the forefront of this transformation. Today, businesses of all sizes can leverage sophisticated marketing automation tools that were once only available to enterprise-level companies.</p>
      <h2>How AI is Transforming Marketing Automation</h2>
      <p>Artificial intelligence is revolutionizing marketing automation in several key ways:</p>
      <ul>
        <li><strong>Hyper-personalization</strong>: AI algorithms analyze vast amounts of customer data to deliver personalized content, recommendations, and offers at scale.</li>
        <li><strong>Predictive analytics</strong>: Machine learning models can predict customer behavior, allowing marketers to proactively address needs and optimize campaigns.</li>
        <li><strong>Conversational marketing</strong>: AI-powered chatbots and virtual assistants provide immediate, personalized support to prospects and customers.</li>
      </ul>
      <p>As these technologies continue to mature, the gap between companies embracing AI-powered marketing automation and those relying on traditional methods will only widen.</p>
    `
  },
  {
    id: '2',
    title: '5 App Development Trends Reshaping Business in 2023',
    date: 'July 18, 2023',
    author: 'Michael Chen',
    readTime: '6 min read',
    category: 'Development',
    tags: ['Mobile Apps', 'Technology', 'Business'],
    excerpt: 'Explore the latest trends in app development that are helping businesses streamline operations and enhance customer experiences in unprecedented ways.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    featured: false,
    content: `
      <p>As technology continues to evolve at an accelerating pace, businesses are leveraging new app development trends to stay competitive and meet changing customer expectations.</p>
      <h2>Top 5 App Development Trends in 2023</h2>
      <ol>
        <li><strong>Progressive Web Apps (PWAs)</strong>: Combining the best of web and mobile apps, PWAs offer offline capability, fast loading times, and responsive design.</li>
        <li><strong>Low-Code/No-Code Development</strong>: These platforms are democratizing app development, allowing businesses to create solutions with minimal coding knowledge.</li>
        <li><strong>IoT Integration</strong>: Apps are increasingly connecting with IoT devices to collect data and provide seamless experiences across physical and digital touchpoints.</li>
        <li><strong>AI and ML Features</strong>: From personalization to predictive maintenance, AI and machine learning are enhancing app capabilities and value.</li>
        <li><strong>Super Apps</strong>: Following the success of WeChat and Grab, more businesses are creating comprehensive platforms that offer multiple services within a single app.</li>
      </ol>
    `
  },
  {
    id: '3',
    title: 'How Agile Methodology Can Transform Your Business Operations',
    date: 'July 10, 2023',
    author: 'Jennifer Martinez',
    readTime: '7 min read',
    category: 'Agility',
    tags: ['Agile', 'Business', 'Productivity'],
    excerpt: 'Learn how implementing Agile practices can improve team collaboration, increase productivity, and drive better business results across your organization.',
    image: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80',
    featured: false,
    content: `
      <p>Agile methodology has expanded far beyond software development to become a powerful approach for improving overall business operations and adaptability.</p>
      <h2>Benefits of Implementing Agile Across Your Organization</h2>
      <p>When properly implemented, Agile practices can transform how your entire business operates:</p>
      <ul>
        <li><strong>Increased adaptability</strong>: Agile teams can quickly pivot in response to market changes or customer feedback.</li>
        <li><strong>Enhanced collaboration</strong>: Cross-functional teams work together more effectively, breaking down traditional silos.</li>
        <li><strong>Faster time to market</strong>: Iterative development and continuous delivery allow for quicker release of products and features.</li>
        <li><strong>Higher quality outcomes</strong>: Regular testing and feedback loops help identify and address issues early.</li>
        <li><strong>Improved customer satisfaction</strong>: Customer-centric approach ensures solutions actually meet user needs.</li>
      </ul>
    `
  },
  {
    id: '4',
    title: 'Integrating CRM with Marketing Automation: A Complete Guide',
    date: 'July 3, 2023',
    author: 'David Wilson',
    readTime: '9 min read',
    category: 'Marketing',
    tags: ['CRM', 'Integration', 'Automation'],
    excerpt: 'Discover the benefits and best practices of integrating your CRM system with marketing automation tools for a unified customer experience.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: false,
    content: `
      <p>Integrating your CRM with marketing automation creates a seamless flow of data between sales and marketing, enhancing both customer acquisition and retention efforts.</p>
      <h2>Key Benefits of CRM and Marketing Automation Integration</h2>
      <ul>
        <li><strong>360-degree customer view</strong>: Access comprehensive customer data across both marketing and sales touchpoints.</li>
        <li><strong>Improved lead scoring</strong>: Combine marketing engagement data with sales intelligence for more accurate lead prioritization.</li>
        <li><strong>Streamlined handoffs</strong>: Create automated workflows for seamless transitions between marketing and sales teams.</li>
        <li><strong>Enhanced reporting</strong>: Track the complete customer journey from first touch to closed deal and beyond.</li>
      </ul>
      <p>When properly integrated, these systems provide the foundation for true revenue operations alignment.</p>
    `
  },
  {
    id: '5',
    title: 'Building a Successful Mobile App: From Concept to Launch',
    date: 'June 28, 2023',
    author: 'Emily Parker',
    readTime: '10 min read',
    category: 'Development',
    tags: ['Mobile', 'App Development', 'Product Launch'],
    excerpt: 'Follow this comprehensive guide to navigate the mobile app development process from initial concept to successful market launch.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: false,
    content: `
      <p>Creating a successful mobile app requires careful planning, execution, and marketing. This guide walks you through each phase of the development process.</p>
      <h2>Key Phases of Mobile App Development</h2>
      <ol>
        <li><strong>Concept and Research</strong>: Define your app's purpose, target audience, and key features. Research competitors and market needs.</li>
        <li><strong>Planning and Design</strong>: Create wireframes, user flows, and visual designs that align with user expectations and business goals.</li>
        <li><strong>Development</strong>: Build your app using the appropriate technology stack, following best practices for performance and security.</li>
        <li><strong>Testing</strong>: Conduct thorough testing across different devices, operating systems, and use cases.</li>
        <li><strong>Launch and Marketing</strong>: Deploy your app to stores and implement a comprehensive marketing strategy to drive downloads.</li>
        <li><strong>Post-Launch Iteration</strong>: Collect user feedback and usage data to inform ongoing improvements.</li>
      </ol>
    `
  },
  {
    id: '6',
    title: 'Measuring ROI from Your Marketing Automation Investment',
    date: 'June 20, 2023',
    author: 'Robert Thompson',
    readTime: '8 min read',
    category: 'Marketing',
    tags: ['ROI', 'Analytics', 'Metrics'],
    excerpt: 'Learn how to effectively measure and optimize the return on investment from your marketing automation tools and campaigns.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: false,
    content: `
      <p>Marketing automation represents a significant investment for many organizations. Understanding how to measure its impact is essential for optimizing performance and securing continued support.</p>
      <h2>Key Metrics for Marketing Automation ROI</h2>
      <ul>
        <li><strong>Lead generation metrics</strong>: Volume of leads, cost per lead, lead quality and conversion rates</li>
        <li><strong>Engagement metrics</strong>: Email open rates, click-through rates, website engagement, and content consumption</li>
        <li><strong>Pipeline metrics</strong>: Sales velocity, opportunity creation rate, and average deal size</li>
        <li><strong>Efficiency metrics</strong>: Time savings, resource allocation, and campaign execution speed</li>
        <li><strong>Customer metrics</strong>: Retention rates, upsell/cross-sell success, and customer lifetime value</li>
      </ul>
    `
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

  // Get featured post and remaining posts
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured).slice(0, 5);

  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest trends, strategies, and insights in marketing, app development, and business agility.
          </p>
        </div>
        
        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:grid md:grid-cols-2">
                <div className="md:order-2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-8 md:p-10 md:order-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-primary-500 hover:bg-primary-600">Featured</Badge>
                    <Badge variant="outline" className="text-gray-700 border-gray-300">
                      {featuredPost.category}
                    </Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    <Link href={`/blog/${featuredPost.id}`} className="hover:text-primary-600 transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center mb-6 text-sm text-gray-500">
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <div>
                    <Link href={`/blog/${featuredPost.id}`}>
                      <Button className="gradient-bg text-white hover:opacity-90">
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Badge className="cursor-pointer bg-primary-500 hover:bg-primary-600 px-4 py-2 text-sm">
            All
          </Badge>
          <Badge className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 text-sm">
            Marketing
          </Badge>
          <Badge className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 text-sm">
            Development
          </Badge>
          <Badge className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 text-sm">
            Agility
          </Badge>
        </div>
        
        {/* Regular Posts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {regularPosts.map((post, index) => (
            <motion.article 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className="text-sm text-gray-700 border-gray-300">
                    {post.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-primary-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <Link href={`/blog/${post.id}`} className="text-primary-600 hover:text-primary-800 font-medium flex items-center">
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
