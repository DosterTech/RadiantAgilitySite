import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { 
  RiRobot2Line, 
  RiCodeSSlashLine, 
  RiLineChartLine, 
  RiDashboard3Line,
  RiMailLine,
  RiUserVoiceLine,
  RiDeviceLine,
  RiDatabase2Line,
  RiSearchEyeLine,
  RiAdvertisementLine,
  RiTeamLine,
  RiTodoLine
} from 'react-icons/ri';

const serviceItems = [
  {
    id: 'marketing',
    title: 'Marketing Automation',
    description: 'Streamline your marketing efforts and nurture leads automatically with our comprehensive marketing automation solutions, designed to save you time while boosting conversion rates.',
    icon: <RiRobot2Line className="text-2xl" />,
    features: [
      'Email campaign automation and management',
      'CRM setup, integration, and optimization',
      'Customer journey and funnel optimization',
      'Marketing analytics and performance tracking',
    ],
    detailedFeatures: [
      {
        icon: <RiMailLine />,
        title: 'Email Marketing Automation',
        description: 'Develop sophisticated drip campaigns and personalized customer journeys that automatically nurture leads and customers through the sales pipeline.'
      },
      {
        icon: <RiUserVoiceLine />,
        title: 'CRM Integration & Management',
        description: 'Seamlessly integrate your CRM with marketing tools to create a unified view of customer interactions and behaviors.'
      },
      {
        icon: <RiDeviceLine />,
        title: 'Multi-channel Automation',
        description: 'Create consistent customer experiences across email, SMS, social media, and web channels through integrated automation workflows.'
      },
      {
        icon: <RiDatabase2Line />,
        title: 'Analytics & Reporting',
        description: 'Track campaign performance with custom dashboards and reports that help you optimize your marketing ROI.'
      }
    ]
  },
  {
    id: 'app',
    title: 'Custom App Development',
    description: 'Create powerful, tailored applications that solve your unique business challenges and streamline operations, from internal tools to customer-facing platforms.',
    icon: <RiCodeSSlashLine className="text-2xl" />,
    features: [
      'Business workflow and productivity applications',
      'E-commerce platforms and integrations',
      'Business automation tools and dashboards',
      'Mobile app development for iOS and Android',
    ],
    detailedFeatures: [
      {
        icon: <RiTodoLine />,
        title: 'Business Process Applications',
        description: 'Digitize and optimize your business workflows with custom applications that automate repetitive tasks and streamline operations.'
      },
      {
        icon: <RiDeviceLine />,
        title: 'Cross-platform Development',
        description: 'Build applications that work seamlessly across web, mobile, and desktop platforms, ensuring a consistent experience for all users.'
      },
      {
        icon: <RiDatabase2Line />,
        title: 'Integration Solutions',
        description: 'Connect your existing systems and third-party services with custom APIs and middleware that ensure data flows smoothly across your tech stack.'
      },
      {
        icon: <RiLineChartLine />,
        title: 'Performance Optimization',
        description: 'Enhance user experience with applications designed for speed, responsiveness, and reliability even under heavy loads.'
      }
    ]
  },
  {
    id: 'lead',
    title: 'Lead Generation & Growth',
    description: 'Attract and convert more qualified leads through data-driven strategies tailored to your business goals, focusing on sustainable growth and measurable ROI.',
    icon: <RiLineChartLine className="text-2xl" />,
    features: [
      'SEO optimization and content strategy',
      'Paid advertising campaigns (Google, Social)',
      'Social media marketing and management',
      'Lead nurturing and conversion optimization',
    ],
    detailedFeatures: [
      {
        icon: <RiSearchEyeLine />,
        title: 'Comprehensive SEO Strategy',
        description: 'Increase organic traffic with technical optimization, content strategy, and link building programs tailored to your industry and audience.'
      },
      {
        icon: <RiAdvertisementLine />,
        title: 'Targeted Paid Campaigns',
        description: 'Drive qualified traffic with meticulously crafted paid advertising campaigns across search engines and social platforms.'
      },
      {
        icon: <RiUserVoiceLine />,
        title: 'Content Marketing & Distribution',
        description: 'Develop valuable content that addresses customer pain points and positions your brand as an authority in your industry.'
      },
      {
        icon: <RiLineChartLine />,
        title: 'Conversion Rate Optimization',
        description: 'Implement A/B testing and analytics-based improvements to maximize your conversion rates and reduce acquisition costs.'
      }
    ]
  },
  {
    id: 'agility',
    title: 'Agility Consulting & Training',
    description: 'Transform your organization with Agile methodologies that increase efficiency, collaboration, and delivery speed, creating a more adaptive and responsive business.',
    icon: <RiDashboard3Line className="text-2xl" />,
    features: [
      'Scrum and SAFe coaching and implementation',
      'Agile transformation roadmap and guidance',
      'Workflow optimization and process improvement',
      'Team building and Agile workshops',
    ],
    detailedFeatures: [
      {
        icon: <RiTeamLine />,
        title: 'Agile Transformation',
        description: 'Guide your organization through the complete Agile transformation process with customized roadmaps and executive coaching.'
      },
      {
        icon: <RiTodoLine />,
        title: 'Scrum & Kanban Implementation',
        description: 'Train teams on Agile methodologies with hands-on workshops and ongoing coaching to ensure successful adoption.'
      },
      {
        icon: <RiUserVoiceLine />,
        title: 'Leadership Coaching',
        description: 'Develop servant-leaders who can effectively support Agile teams and foster a culture of continuous improvement.'
      },
      {
        icon: <RiLineChartLine />,
        title: 'Metrics & Performance',
        description: 'Implement the right metrics to track your Agile transformation and continuously improve team performance and business outcomes.'
      }
    ]
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
          className="grid grid-cols-1 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {serviceItems.map((service) => (
            <motion.div 
              key={service.id}
              className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              variants={itemVariants}
            >
              <div className="md:grid md:grid-cols-12 gap-8">
                {/* Service Overview */}
                <div className="md:col-span-4 mb-8 md:mb-0">
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
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services#${service.id}`} className="inline-block text-primary-600 font-medium hover:text-primary-800 transition-colors">
                    View details <span aria-hidden="true">→</span>
                  </Link>
                </div>
                
                {/* Service Details */}
                <div className="md:col-span-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.detailedFeatures.map((feature, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <div className="w-10 h-10 rounded-md bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                          {feature.icon}
                        </div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-100 text-right">
                <Link href="/contact">
                  <Button className="gradient-bg hover:opacity-90 text-white">
                    Request a Consultation
                  </Button>
                </Link>
              </div>
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
