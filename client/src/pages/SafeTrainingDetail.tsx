import { Link, useParams } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Award, 
  Users, 
  CheckCircle, 
  ArrowLeft, 
  BookOpen, 
  Target, 
  Calendar,
  Globe,
  Download,
  Star
} from 'lucide-react';

const courseDetails = {
  'leading-safe': {
    title: 'Leading SAFe',
    subtitle: 'Certified SAFe Agilist (SA)',
    description: 'Learn to lead a Lean-Agile transformation by leveraging the Scaled Agile Framework and its underlying principles derived from Lean, systems thinking, Agile development, product development flow, and DevOps.',
    duration: '2 days (16 hrs)',
    level: 'Leadership',
    originalPrice: '$1,185',
    salePrice: '$895',
    savings: '$290',
    saleLabel: '🔥 Best Seller',
    bestSeller: true,
    color: 'bg-blue-500',
    accent: 'border-blue-200 bg-blue-50',
    overview: 'The Leading SAFe course teaches executives, managers, and other leaders how to lead a Lean-Agile transformation. You will gain the practical tools and techniques necessary to implement the Scaled Agile Framework (SAFe) and lead a transformation that enhances job satisfaction, increases productivity, improves quality, and shortens time-to-market.',
    audience: [
      'Executives and C-level leaders',
      'Portfolio and Program managers',
      'Process leads and change agents',
      'Development, QA, and infrastructure managers',
      'Directors, Project managers, and Product managers'
    ],
    prerequisites: [
      '5+ years experience in software development, testing, business analysis, product or project management',
      'Experience in Scrum is helpful but not required',
      'Familiarity with Agile principles and practices'
    ],
    learningObjectives: [
      'Apply SAFe to scale Lean and Agile development in your enterprise',
      'Apply Lean-Agile mindset and principles to promote the behaviors needed for digital transformation',
      'Plan and successfully execute Program Increments, the primary enabler of alignment and built-in quality',
      'Build an Agile Release Train (ART), a long-lived team of Agile teams, which, along with other stakeholders, incrementally develops, delivers, and where applicable operates, one or more solutions in a value stream',
      'Explore how to build a continuous delivery pipeline and DevOps culture',
      'Lead the transformation to Business Agility by leveraging the Framework as a system of business agility'
    ],
    agenda: [
      {
        day: 'Day 1',
        topics: [
          'Thriving in the digital age with Business Agility',
          'Becoming a Lean-Agile Leader',
          'Establishing Team and Technical Agility',
          'Building Solutions with Agile Product Delivery'
        ]
      },
      {
        day: 'Day 2',
        topics: [
          'Exploring Lean Portfolio Management',
          'Leading the Change',
          'Planning the Program Increment',
          'Executing and Releasing Value'
        ]
      }
    ],
    certification: {
      name: 'Certified SAFe Agilist (SA)',
      validity: '1 year',
      renewal: 'Annual renewal required with continuing education units',
      included: [
        'Official SAFe Agilist certificate',
        'Digital badge for LinkedIn and email signatures',
        'One-year membership to the SAFe Community Platform',
        'Access to additional SAFe resources and case studies'
      ]
    }
  },
  'safe-devops': {
    title: 'SAFe DevOps',
    subtitle: 'Certified SAFe DevOps Practitioner (SDP)',
    description: 'Learn the technical practices and cultural changes needed to implement DevOps in a SAFe environment. Master Continuous Delivery Pipeline and DevOps practices that enable rapid value delivery.',
    duration: '2 days (16 hrs)',
    level: 'Technical',
    originalPrice: '$950',
    salePrice: '$750',
    savings: '$200',
    saleLabel: 'Summer Sale - $200 Off!',
    bestSeller: false,
    color: 'bg-green-500',
    accent: 'border-green-200 bg-green-50',
    overview: 'The SAFe DevOps course provides comprehensive training on implementing DevOps practices within the Scaled Agile Framework. Participants learn to build and optimize continuous delivery pipelines, establish DevOps culture, and implement practices that support faster, more reliable software delivery.',
    audience: [
      'DevOps engineers and practitioners',
      'Software developers and architects',
      'System administrators and infrastructure engineers',
      'Release and deployment managers',
      'QA and testing professionals'
    ],
    prerequisites: [
      'Familiarity with Agile and Lean concepts',
      'Basic understanding of software development lifecycle',
      'Experience with software development, testing, or operations',
      'Knowledge of continuous integration concepts preferred'
    ],
    learningObjectives: [
      'Map the current value stream and identify bottlenecks and delays',
      'Design and implement a Continuous Delivery Pipeline using SAFe practices',
      'Apply DevOps practices for automated testing, continuous integration, and deployment',
      'Build a culture of shared responsibility between development and operations',
      'Implement effective release strategies and deployment patterns',
      'Measure and optimize flow through the delivery pipeline'
    ],
    agenda: [
      {
        day: 'Day 1',
        topics: [
          'Introduction to DevOps in SAFe',
          'Mapping Your Current Value Stream',
          'Building the Continuous Delivery Pipeline',
          'Implementing Continuous Exploration'
        ]
      },
      {
        day: 'Day 2',
        topics: [
          'Mastering Continuous Integration',
          'Optimizing Continuous Deployment',
          'Establishing DevOps Culture and Shared Responsibility',
          'Measuring and Improving Flow'
        ]
      }
    ],
    certification: {
      name: 'Certified SAFe DevOps Practitioner (SDP)',
      validity: '1 year',
      renewal: 'Annual renewal required with continuing education units',
      included: [
        'Official SAFe DevOps Practitioner certificate',
        'Digital badge for professional profiles',
        'One-year membership to the SAFe Community Platform',
        'DevOps toolkit and implementation templates'
      ]
    }
  },
  'safe-popm': {
    title: 'SAFe POPM',
    subtitle: 'Certified SAFe Product Owner/Product Manager (POPM)',
    description: 'Learn how to deliver customer value at scale. This 2-day course covers the key responsibilities of Product Owners and Product Managers working in a SAFe enterprise. Ideal for product leaders, business analysts, and Agile professionals leveling up.',
    duration: '2 days (16 hrs)',
    level: 'Product',
    originalPrice: '$995',
    salePrice: '$580',
    savings: '$415',
    saleLabel: 'Special Pricing',
    bestSeller: false,
    color: 'bg-purple-500',
    accent: 'border-purple-200 bg-purple-50',
    overview: 'The SAFe Product Owner/Product Manager course teaches product owners and product managers how to apply Lean-Agile mindset and practices. Learn to collaborate effectively with customers, proxy customers, development teams, and other stakeholders to deliver solutions that provide maximum economic benefit.',
    audience: [
      'Product Owners and Product Managers',
      'Business Analysts and Solution Managers',
      'Business and Solution Architects',
      'Marketing professionals transitioning to product roles',
      'Anyone responsible for defining and prioritizing stories/features'
    ],
    prerequisites: [
      'Familiarity with Agile concepts and principles',
      'Experience in product management, business analysis, or related field',
      'Understanding of software development processes',
      'Basic knowledge of Lean and systems thinking helpful'
    ],
    learningObjectives: [
      'Apply Design Thinking to ensure customer centricity',
      'Build and prioritize the Team and Program Backlogs effectively',
      'Support the execution of Program Increments and deliver value',
      'Work effectively with Agile Teams, stakeholders, and other Product Owners',
      'Plan and participate in all Agile Release Train events',
      'Contribute to the economic prioritization of features and capabilities'
    ],
    agenda: [
      {
        day: 'Day 1',
        topics: [
          'Becoming a Customer-Centric Product Owner/Manager',
          'Understanding Customer Needs with Design Thinking',
          'Building and Managing Team Backlogs',
          'Planning and Participating in Iterations'
        ]
      },
      {
        day: 'Day 2',
        topics: [
          'Planning and Participating in Program Increments',
          'Collaborating Across the Portfolio',
          'Delivering Continuously with DevOps',
          'Measuring Value and KPIs'
        ]
      }
    ],
    certification: {
      name: 'Certified SAFe Product Owner/Product Manager (POPM)',
      validity: '1 year',
      renewal: 'Annual renewal required with continuing education units',
      included: [
        'Official SAFe POPM certificate',
        'Digital badge and credentials',
        'One-year membership to the SAFe Community Platform',
        'Product management templates and prioritization tools'
      ]
    }
  },
  'safe-scrum-master': {
    title: 'SAFe Scrum Master',
    subtitle: 'Certified SAFe Scrum Master (SSM)',
    description: 'Learn the role of Scrum Master in a SAFe enterprise. Unlike traditional Scrum Master training, this course explores the role in the context of the entire enterprise.',
    duration: '2 days (16 hrs)',
    level: 'Team',
    originalPrice: '$1,125',
    salePrice: '$580',
    savings: '$545',
    saleLabel: 'Limited Time Offer',
    bestSeller: false,
    color: 'bg-orange-500',
    accent: 'border-orange-200 bg-orange-50',
    overview: 'The SAFe Scrum Master course teaches the responsibilities of the Scrum Master role in a SAFe environment. Learn to facilitate Agile team events and processes, coach teams to improved performance, and support the adoption of SAFe across the enterprise.',
    audience: [
      'New or existing Scrum Masters',
      'Team Leads and Project Managers transitioning to Scrum Master',
      'Agile Coaches and Consultants',
      'Anyone responsible for facilitating Agile teams',
      'Managers supporting Agile transformation'
    ],
    prerequisites: [
      'Familiarity with Agile concepts and Scrum practices',
      'Experience working with Agile teams preferred',
      'Basic understanding of software development processes',
      'Completion of Scrum Master training recommended but not required'
    ],
    learningObjectives: [
      'Facilitate Agile Team events and processes for optimal team performance',
      'Support Program Increment planning and execution',
      'Coach teams to improve their results and adopt Agile practices',
      'Support the adoption of engineering practices and DevOps culture',
      'Build high-performing Agile teams through servant leadership',
      'Scale Agile practices across the Agile Release Train'
    ],
    agenda: [
      {
        day: 'Day 1',
        topics: [
          'Introducing Scrum in SAFe',
          'Characterizing the Role of the Scrum Master',
          'Experiencing PI Planning',
          'Facilitating Iteration Execution'
        ]
      },
      {
        day: 'Day 2',
        topics: [
          'Finishing Iterations and PIs',
          'Supporting the Team',
          'Supporting the Program',
          'Advancing as a Scrum Master'
        ]
      }
    ],
    certification: {
      name: 'Certified SAFe Scrum Master (SSM)',
      validity: '1 year',
      renewal: 'Annual renewal required with continuing education units',
      included: [
        'Official SAFe Scrum Master certificate',
        'Digital badge for professional recognition',
        'One-year membership to the SAFe Community Platform',
        'Scrum Master toolkit and coaching resources'
      ]
    }
  }
};

const SafeTrainingDetail = () => {
  const { id } = useParams();
  const course = courseDetails[id as keyof typeof courseDetails];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link href="/safe-training">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/safe-training" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Courses
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-lg ${course.color} flex items-center justify-center text-white`}>
                    <Award className="h-8 w-8" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{course.title}</h1>
                    <p className="text-lg text-blue-600 font-medium">{course.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {course.overview}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.level} Level
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    Virtual or In-Person
                  </Badge>
                </div>
              </div>

              {/* Registration Card */}
              <div className="lg:col-span-1">
                <Card className="sticky top-6">
                  <CardHeader>
                    <CardTitle className="text-center">
                      {course.salePrice ? (
                        <div className="space-y-2">
                          {course.saleLabel && (
                            <Badge className={`${course.bestSeller ? 'bg-green-500' : 'bg-red-500'} text-white font-semibold mb-2`}>
                              {course.saleLabel}
                            </Badge>
                          )}
                          <div className="text-lg text-gray-400 line-through">{course.originalPrice}</div>
                          <div className={`text-3xl font-bold ${course.bestSeller ? 'text-green-600' : 'text-red-600'}`}>
                            {course.salePrice}
                          </div>
                          <Badge className={`${course.bestSeller ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} text-sm`}>
                            Save {course.savings}!
                          </Badge>
                          <span className="text-lg text-gray-600 block">per person</span>
                        </div>
                      ) : (
                        <div>
                          <span className="text-3xl font-bold text-gray-900">Contact for pricing</span>
                          <span className="text-lg text-gray-600 block">per person</span>
                        </div>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      className="w-full gradient-bg hover:opacity-90 text-white"
                      onClick={() => {
                        if (id === 'safe-scrum-master') {
                          document.getElementById('sessions')?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.open('https://eventbrite.com', '_blank');
                        }
                      }}
                    >
                      Register Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('mailto:training@radiantagility.tech?subject=SAFe Training Inquiry', '_blank')}
                    >
                      Contact for Group Rates
                    </Button>
                    <div className="text-sm text-gray-600 space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Certification included</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Digital materials</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>1-year community access</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              
              {/* Learning Objectives */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    Learning Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.learningObjectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Course Agenda */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    Course Agenda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {course.agenda.map((day, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 mb-3">{day.day}</h4>
                        <ul className="space-y-2 ml-4">
                          {day.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Live Sessions - For SAFe Scrum Master and POPM */}
              {(id === 'safe-scrum-master' || id === 'safe-popm') && (
                <Card id="sessions">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      📅 Upcoming Live Sessions – {id === 'safe-scrum-master' ? 'SAFe Scrum Master' : 'SAFe POPM'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {id === 'safe-scrum-master' ? (
                        <>
                          {/* Scrum Master Sessions */}
                          <div className="border border-gray-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Upcoming Live Virtual Weekend Cohort: August 10–11, 2025</h4>
                            <div className="space-y-2 text-gray-700 mb-4">
                              <p>🕘 12:00 PM – 8:00 PM EST (Saturday & Sunday)</p>
                              <p>📍 Live Virtual (Zoom)</p>
                              <p>💳 <strong className="text-purple-600">$499</strong> – One-time payment</p>
                            </div>
                            <Button 
                              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                              onClick={() => window.open('https://buy.stripe.com/prod_SbKSrFUv6WjXwV', '_blank')}
                            >
                              Reserve Your Seat
                            </Button>
                          </div>

                          <div className="border border-gray-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Waitlist Open: August 14–15, 2025</h4>
                            <div className="space-y-2 text-gray-700 mb-4">
                              <p>🕘 10:00 AM – 6:00 PM EST (Tuesday & Wednesday)</p>
                              <p>📍 Live Virtual (Zoom)</p>
                              <p>💳 <strong className="text-purple-600">$499</strong> – One-time payment</p>
                              <p className="text-sm text-orange-600">⚠️ Class runs if 5+ students register</p>
                            </div>
                            <Button 
                              variant="outline"
                              className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
                              onClick={() => window.open('https://buy.stripe.com/prod_SbK2X6uJQ4LbtC', '_blank')}
                            >
                              Join Waitlist
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* POPM Session */}
                          <div className="border border-gray-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-3">August 23–24, 2025</h4>
                            <div className="space-y-2 text-gray-700 mb-4">
                              <p>🕘 12:00 PM – 8:00 PM EST (Saturday & Sunday)</p>
                              <p>📍 Live Virtual (Zoom)</p>
                              <p>💳 <strong className="text-purple-600">$580</strong> – includes all materials + exam voucher</p>
                            </div>
                            <Button 
                              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                              onClick={() => window.open('https://buy.stripe.com/4gM7sK5gdaRA2gC0FJew801', '_blank')}
                            >
                              Register Now
                            </Button>
                          </div>
                        </>
                      )}

                      {/* Course Format Note */}
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-800">
                          <strong>Course Format:</strong> This is a live, instructor-led certification course delivered via Zoom. Includes practice simulations, job interview prep tips, and exam voucher.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Who Should Attend */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Who Should Attend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.audience.map((role, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{role}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    Prerequisites
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Certification Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple-600" />
                    Certification
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">{course.certification.name}</h4>
                    <p className="text-sm text-gray-600">Valid for {course.certification.validity}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Included:</h5>
                    <ul className="space-y-1">
                      {course.certification.included.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-2 border-t">
                    <p className="text-xs text-gray-500">{course.certification.renewal}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Download Brochure */}
              <Card>
                <CardContent className="pt-6">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('mailto:training@radiantagility.tech?subject=Course Brochure Request', '_blank')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Brochure
                  </Button>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ready to Get Started?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full gradient-bg hover:opacity-90 text-white"
                    onClick={() => {
                      if (id === 'safe-scrum-master') {
                        document.getElementById('sessions')?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.open('https://eventbrite.com', '_blank');
                      }
                    }}
                  >
                    Register Today
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    Questions? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link> for more information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafeTrainingDetail;