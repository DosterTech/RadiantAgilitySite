import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Clock, Award, Users, CheckCircle, Star, Calendar } from 'lucide-react';

const courses = [
  {
    id: 'leading-safe',
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
    features: [
      'Apply SAFe to scale Lean and Agile development',
      'Apply Lean-Agile mindset and principles',
      'Plan and successfully execute Program Increments',
      'Build an Agile Release Train (ART)',
      'Lead the transformation to Business Agility'
    ],
    outcomes: [
      'Certified SAFe Agilist (SA) credential',
      'Digital badge and certificate',
      'One-year membership to the SAFe Community Platform',
      'Access to SAFe 6.0 courseware and resources'
    ],
    color: 'bg-blue-500',
    accent: 'border-blue-200 bg-blue-50'
  },
  {
    id: 'safe-devops',
    title: 'SAFe DevOps',
    subtitle: 'Certified SAFe DevOps Practitioner (SDP)',
    description: 'Learn the technical practices and cultural changes needed to implement DevOps in a SAFe environment. Master Continuous Delivery Pipeline and DevOps practices that enable rapid value delivery.',
    duration: '2 days (16 hrs)',
    level: 'Technical',
    originalPrice: '$950',
    salePrice: '$750',
    savings: '$200',
    saleLabel: 'Summer Sale - $200 Off!',
    features: [
      'Map the current value stream and identify bottlenecks',
      'Design and implement a Continuous Delivery Pipeline',
      'Apply DevOps practices for automated testing',
      'Build a culture of shared responsibility',
      'Implement effective release strategies'
    ],
    outcomes: [
      'Certified SAFe DevOps Practitioner (SDP) credential',
      'Digital badge and certificate',
      'One-year membership to the SAFe Community Platform',
      'DevOps toolkit and implementation guides'
    ],
    color: 'bg-green-500',
    accent: 'border-green-200 bg-green-50'
  },
  {
    id: 'safe-popm',
    title: 'SAFe POPM',
    subtitle: 'Certified SAFe Product Owner/Product Manager (POPM)',
    description: 'Develop the skills needed to guide the delivery of value in a Lean enterprise by becoming a SAFe Product Owner/Product Manager. Learn to apply Lean-Agile mindset and principles.',
    duration: '2 days (16 hrs)',
    level: 'Product',
    originalPrice: '$995',
    salePrice: '$580',
    savings: '$415',
    saleLabel: 'Limited-Time Discount',
    features: [
      'Apply Design Thinking for customer-centricity',
      'Build and prioritize the Team and Program Backlogs',
      'Support the execution of Program Increments',
      'Work effectively with Agile Teams and Stakeholders',
      'Plan and participate in Agile Release Train events'
    ],
    outcomes: [
      'Certified SAFe Product Owner/Product Manager (POPM) credential',
      'Digital badge and certificate',
      'One-year membership to the SAFe Community Platform',
      'Product management templates and tools'
    ],
    color: 'bg-purple-500',
    accent: 'border-purple-200 bg-purple-50'
  },
  {
    id: 'safe-scrum-master',
    title: 'SAFe Scrum Master',
    subtitle: 'Certified SAFe Scrum Master (SSM)',
    description: 'Learn the role of Scrum Master in a SAFe enterprise. Unlike traditional Scrum Master training, this course explores the role in the context of the entire enterprise.',
    duration: '2 days (16 hrs)',
    level: 'Team',
    originalPrice: '$1,125',
    salePrice: '$580',
    savings: '$545',
    saleLabel: 'Limited Time Offer',
    features: [
      'Facilitate Agile Team events and processes',
      'Support Program Increment planning and execution',
      'Coach teams to improve their results',
      'Support the adoption of engineering practices',
      'Build high-performing Agile teams'
    ],
    outcomes: [
      'Certified SAFe Scrum Master (SSM) credential',
      'Digital badge and certificate',
      'One-year membership to the SAFe Community Platform',
      'Scrum Master toolkit and coaching resources'
    ],
    color: 'bg-orange-500',
    accent: 'border-orange-200 bg-orange-50'
  }
];

const SafeTraining = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-6">
              <Award className="h-5 w-5 text-purple-600" />
              <span className="text-purple-700 font-medium">Professional Certification Training</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              SAFe Certification <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Courses</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Live instructor-led training with certification exams and hands-on practice. 
              Master the Scaled Agile Framework and advance your career with industry-recognized credentials.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span>Live Instructor-Led</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-500" />
                <span>2 Days Per Course</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-500" />
                <span>Official Certification</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span>Expert Instructors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {courses.map((course) => (
              <motion.div key={course.id} variants={itemVariants}>
                <Card className={`h-full hover:shadow-lg transition-all duration-300 border-l-4 ${course.accent}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg ${course.color} flex items-center justify-center text-white`}>
                        <Award className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                        {course.level}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-blue-600 mb-3">
                      {course.subtitle}
                    </CardDescription>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {course.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Duration and Info */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span>Certification included</span>
                      </div>
                    </div>

                    {/* Pricing Section */}
                    {course.salePrice && (
                      <div className={`p-4 rounded-lg border ${course.bestSeller ? 'bg-gradient-to-r from-green-50 to-blue-50 border-green-100' : 'bg-gradient-to-r from-red-50 to-orange-50 border-red-100'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={`text-white font-semibold ${course.bestSeller ? 'bg-green-500' : 'bg-red-500'}`}>
                            {course.saleLabel}
                          </Badge>
                          <div className="text-right">
                            <div className="text-sm text-gray-400 line-through">{course.originalPrice}</div>
                            <div className={`text-2xl font-bold ${course.bestSeller ? 'text-green-600' : 'text-red-600'}`}>
                              {course.salePrice}
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <Badge className={`text-sm ${course.bestSeller ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            Save {course.savings} - Limited Time!
                          </Badge>
                        </div>
                        {course.bestSeller && (
                          <div className="text-center mt-2">
                            <Badge className="bg-orange-100 text-orange-800 text-xs">
                              💥 Limited Seats Available
                            </Badge>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {course.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certification Outcomes */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">You'll Receive:</h4>
                      <ul className="space-y-2">
                        {course.outcomes.slice(0, 2).map((outcome, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Award className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t space-y-3">
                      <Link href={`/safe-training/${course.id}`}>
                        <Button 
                          variant="outline" 
                          className="w-full border-gray-300 hover:bg-gray-50"
                        >
                          Learn More
                        </Button>
                      </Link>
                      <Link href={`/safe-training/${course.id}`}>
                        <Button 
                          className="w-full gradient-bg hover:opacity-90 text-white"
                        >
                          Register Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of professionals who have advanced their careers with SAFe certification. 
              Choose the course that fits your role and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-bg hover:opacity-90 text-white">
                  Contact Us for Details
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://scaledagile.com', '_blank')}
              >
                Learn More About SAFe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SafeTraining;