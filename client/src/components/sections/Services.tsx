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
    id: 'digital-growth',
    title: 'Digital Growth Solutions',
    description: 'Comprehensive digital transformation combining marketing automation, custom app development, and funnel optimization to accelerate your business growth.',
    icon: <RiRobot2Line className="text-2xl" />,
    features: [
      'CRM + Email Campaign Integration',
      'Custom App + Platform Development',
      'Funnel + Marketing Automation',
    ],
    detailedFeatures: [
      {
        icon: <RiMailLine />,
        title: 'Marketing Automation',
        description: 'Develop sophisticated drip campaigns and personalized customer journeys that automatically nurture leads through the sales pipeline.'
      },
      {
        icon: <RiCodeSSlashLine />,
        title: 'Custom Development',
        description: 'Build applications that work seamlessly across web, mobile, and desktop platforms with custom APIs and integrations.'
      },
      {
        icon: <RiDatabase2Line />,
        title: 'CRM Integration',
        description: 'Seamlessly integrate your CRM with marketing tools and custom applications to create a unified business ecosystem.'
      },
      {
        icon: <RiLineChartLine />,
        title: 'Growth Analytics',
        description: 'Track performance across all digital touchpoints with custom dashboards that help optimize your growth strategies.'
      }
    ]
  },
  {
    id: 'safe-training',
    title: 'SAFe Certification Courses',
    description: 'Get your team certified in SAFe® with expert-led instruction, interactive simulations, and post-training support.',
    icon: <RiTodoLine className="text-2xl" />,
    features: [
      'Leading SAFe (Certified SAFe Agilist)',
      'SAFe DevOps (Certified SAFe DevOps Practitioner)',
      'SAFe POPM (Product Owner/Product Manager)',
      'SAFe Scrum Master (Certified SAFe Scrum Master)',
    ],
    detailedFeatures: [
      {
        icon: <RiTeamLine />,
        title: 'Expert-Led Training',
        description: 'Learn from certified SAFe Program Consultants with real-world implementation experience across multiple industries.'
      },
      {
        icon: <RiTodoLine />,
        title: 'Interactive Simulations',
        description: 'Practice SAFe concepts through hands-on exercises and real-world scenarios that reinforce learning outcomes.'
      },
      {
        icon: <RiDatabase2Line />,
        title: 'Post-Training Support',
        description: 'Receive ongoing guidance and resources to successfully implement SAFe practices in your organization.'
      },
      {
        icon: <RiLineChartLine />,
        title: 'Corporate Training Programs',
        description: 'Customized training programs designed for teams and organizations ready to scale Agile practices enterprise-wide.'
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
  {
    id: 'safe-certification',
    title: 'SAFe Certification Courses',
    description: 'Live instructor-led training with certification exams and hands-on practice to master the Scaled Agile Framework and advance your career.',
    icon: <RiTeamLine className="text-2xl" />,
    features: [
      'Live instructor-led training sessions',
      'Certification exams and hands-on practice',
      'Expert-level SAFe framework mastery',
    ],
    detailedFeatures: [
      {
        icon: <RiTeamLine />,
        title: 'Leading SAFe',
        description: 'Learn to lead a Lean-Agile transformation by leveraging the Scaled Agile Framework and its underlying principles.'
      },
      {
        icon: <RiTodoLine />,
        title: 'SAFe DevOps',
        description: 'Master the technical practices and cultural changes needed to implement DevOps in a SAFe environment.'
      },
      {
        icon: <RiUserVoiceLine />,
        title: 'SAFe POPM',
        description: 'Develop skills as a Product Owner/Product Manager to effectively manage the product backlog in SAFe.'
      },
      {
        icon: <RiDashboard3Line />,
        title: 'SAFe Scrum Master',
        description: 'Learn to facilitate Agile teams and programs while coaching others in Scrum and SAFe practices.'
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
                {service.id === 'safe-training' ? (
                  <Link href="/safe-training">
                    <Button className="gradient-bg hover:opacity-90 text-white">
                      View Courses
                    </Button>
                  </Link>
                ) : (
                  <Link href="/contact">
                    <Button className="gradient-bg hover:opacity-90 text-white">
                      Request a Consultation
                    </Button>
                  </Link>
                )}
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
