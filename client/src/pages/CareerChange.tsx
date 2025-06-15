import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Users, 
  Award, 
  Clock,
  DollarSign,
  BookOpen,
  Target,
  ArrowRight,
  Briefcase,
  Zap
} from 'lucide-react';

const CareerChange = () => {
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
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { icon: <DollarSign className="h-6 w-6" />, number: "$125K+", label: "Average SAFe Agilist Salary" },
    { icon: <TrendingUp className="h-6 w-6" />, number: "87%", label: "Job Growth in Agile Roles" },
    { icon: <Users className="h-6 w-6" />, number: "500K+", label: "SAFe Certified Professionals" },
    { icon: <Star className="h-6 w-6" />, number: "98%", label: "Course Satisfaction Rate" }
  ];

  const successStories = [
    {
      name: "Maria Rodriguez",
      role: "Former Teacher → SAFe Agilist",
      company: "Fortune 500 Tech Company",
      quote: "The transition from education to tech seemed impossible until I found SAFe. Now I'm leading agile transformations and earning double my teaching salary.",
      timeframe: "6 months"
    },
    {
      name: "James Chen",
      role: "Former Accountant → Scrum Master",
      company: "Financial Services Firm",
      quote: "My analytical background from accounting translates perfectly to Scrum Master work. The certification opened doors I never knew existed.",
      timeframe: "4 months"
    },
    {
      name: "Sarah Johnson",
      role: "Former Retail Manager → RTE",
      company: "Healthcare Technology",
      quote: "Managing teams in retail prepared me for coordinating Agile Release Trains. The skills transfer was amazing, and the career growth has been incredible.",
      timeframe: "8 months"
    }
  ];

  const certificationPaths = [
    {
      title: "SAFe Agilist (SA)",
      subtitle: "Perfect for Leaders & Career Changers",
      description: "Lead enterprise agile transformations and coordinate large-scale development efforts.",
      duration: "2 days",
      price: "$1,295",
      idealFor: [
        "Former project managers",
        "Business analysts transitioning",
        "Team leads seeking advancement",
        "Career changers with leadership experience"
      ],
      outcomes: [
        "Lead enterprise agile transformations",
        "Coordinate multiple development teams",
        "Drive business agility initiatives",
        "Command $100K+ starting salaries"
      ]
    },
    {
      title: "SAFe Scrum Master (SSM)",
      subtitle: "Gateway to Agile Career Success",
      description: "Facilitate agile teams and coach organizations in SAFe practices.",
      duration: "2 days",
      price: "$1,195",
      idealFor: [
        "First-time agile practitioners",
        "Former teachers or trainers",
        "Customer service professionals",
        "Anyone with team coordination experience"
      ],
      outcomes: [
        "Facilitate high-performing teams",
        "Coach agile practices",
        "Remove team impediments",
        "Start at $85K+ with growth potential"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
              <Zap className="h-4 w-4 mr-1" />
              Transform Your Career in 90 Days
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Break Into Tech with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                SAFe Certification
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who've successfully transitioned to high-paying agile careers. 
              No tech background required – just the drive to learn and grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="#certification-paths">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold">
                  <Target className="h-5 w-5 mr-2" />
                  Find Your Path
                </Button>
              </Link>
              <Link href="#success-stories">
                <Button size="lg" variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold">
                  <Users className="h-5 w-5 mr-2" />
                  Success Stories
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-yellow-500" />
                <span>Official SAFe Training Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>100% Pass Rate Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>4.9/5 Student Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why SAFe Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why SAFe is Perfect for Career Changers
            </h2>
            <p className="text-lg text-gray-600">
              SAFe certification provides a clear pathway into high-demand tech roles without requiring years of programming experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "Transferable Skills",
                description: "Your leadership, communication, and problem-solving experience from other industries directly applies to agile roles."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "High Demand Market",
                description: "Enterprise agile adoption is exploding, creating thousands of new opportunities for certified professionals."
              },
              {
                icon: <DollarSign className="h-8 w-8" />,
                title: "Immediate ROI",
                description: "Most career changers see salary increases of 40-100% within their first year of certification."
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Fast Track to Success",
                description: "Get certified in 2 days and start applying for positions immediately. No lengthy degree programs required."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "People-Focused Work",
                description: "Agile roles emphasize collaboration, coaching, and team facilitation – perfect for people-oriented professionals."
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Clear Career Progression",
                description: "SAFe provides a structured path from team-level roles to enterprise leadership positions."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Real Career Transformation Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how professionals from diverse backgrounds successfully transitioned to thriving agile careers.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold mr-4">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{story.name}</div>
                    <div className="text-sm text-gray-600">{story.role}</div>
                    <div className="text-sm text-purple-600">{story.company}</div>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{story.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <Clock className="h-3 w-3 mr-1" />
                    {story.timeframe}
                  </Badge>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Paths */}
      <section id="certification-paths" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choose Your Career Path
            </h2>
            <p className="text-lg text-gray-600">
              Both certifications lead to rewarding careers, but each appeals to different strengths and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {certificationPaths.map((path, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 hover:border-purple-200 transition-colors">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <Badge className="bg-purple-100 text-purple-800">
                        {path.duration}
                      </Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{path.price}</div>
                        <div className="text-sm text-gray-600">per person</div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{path.title}</CardTitle>
                    <p className="text-purple-600 font-medium mb-3">{path.subtitle}</p>
                    <p className="text-gray-600">{path.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Ideal for:</h4>
                      <ul className="space-y-2">
                        {path.idealFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Career outcomes:</h4>
                      <ul className="space-y-2">
                        {path.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 space-y-3">
                      <Link href="/safe-training">
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                          View Course Details
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                          Schedule Career Consultation
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your New Career Starts Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't wait another day to transform your career. Join our next certification cohort and 
              take the first step toward a fulfilling, high-paying role in tech.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/safe-training">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Browse All Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold">
                  <Users className="h-5 w-5 mr-2" />
                  Free Career Consultation
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-75">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Next cohort starts in 2 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Small class sizes (max 20 students)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Job placement assistance included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareerChange;