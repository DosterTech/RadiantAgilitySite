import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Download, Star, Users, TrendingUp, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { apiRequest } from '@/lib/queryClient';

const TechRolesGuide = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Information Required",
        description: "Please provide your name and email to download the guide.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await apiRequest('POST', '/api/leads', {
        ...formData,
        company: 'Career Switcher',
        service: '3 High-Paying Tech Roles Guide'
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Success!",
          description: "Your guide is being emailed to you now. Check your inbox!",
        });
        
        // Simulate PDF download (replace with actual PDF URL)
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = '#'; // Replace with actual PDF URL
          link.download = '3-high-paying-tech-roles-guide.pdf';
          link.click();
        }, 1000);
      }
    } catch (error) {
      toast({
        title: "Download failed",
        description: "There was a problem sending your guide. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const roles = [
    {
      title: "Scrum Master",
      salary: "$85K - $135K",
      description: "Lead agile teams, remove blockers, and facilitate meetings. No coding required - just leadership and communication skills.",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Product Owner",
      salary: "$95K - $150K", 
      description: "Define product features, prioritize backlogs, and work with stakeholders. Bridge business needs with technical teams.",
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: "DevOps Enabler",
      salary: "$90K - $140K",
      description: "Improve team processes, implement best practices, and drive continuous improvement. Focus on people, not servers.",
      icon: <Calendar className="h-8 w-8" />
    }
  ];

  const testimonials = [
    {
      text: "I landed a Scrum Master role 6 months after downloading this guide and taking Jasmine's class. It changed my life.",
      author: "Sarah W.",
      role: "Former Teacher"
    },
    {
      text: "This made Agile careers finally make sense to me. Clear, motivating, and practical.",
      author: "Malik J.",
      role: "Career Switcher"
    },
    {
      text: "The salary ranges were eye-opening. I had no idea these roles paid so well without requiring coding skills.",
      author: "Jennifer M.",
      role: "Healthcare Professional"
    }
  ];

  const benefits = [
    "The 3 most accessible, high-paying Agile tech roles",
    "Real-world examples (no fluff, no code)",
    "Career quiz to help you choose your best-fit role", 
    "A 90-day action plan to help you make the leap",
    "The truth about salaries, demand, and breaking in without tech experience"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center"
        >
          <Card className="p-8">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Guide Sent Successfully!</h2>
              <p className="text-gray-600 mb-6">
                Check your email for the "3 High-Paying Tech Roles" guide. It should arrive within the next few minutes.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Don't see it? Check your spam folder and add noreply@radiantagility.tech to your contacts.
              </p>
              <Button 
                onClick={() => window.location.href = '/safe-training'}
                className="w-full radiant-primary-gradient text-white"
              >
                Explore SAFe Training Programs
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Get the Free Guide – 3 High-Paying Tech Roles Without Coding | Radiant Agility</title>
        <meta name="description" content="Download your free guide: 3 High-Paying Tech Roles You Can Land Without Learning to Code. Break into tech with $100K+ salaries in under a year." />
        <meta name="keywords" content="tech careers without coding, agile careers, scrum master, product owner, career change, tech jobs" />
      </Helmet>

      {/* Hero Section */}
      <section className="radiant-gradient-bg text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Break Into Tech — Without Learning to Code
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Download className="h-6 w-6" />
                <p className="text-xl md:text-2xl opacity-90">
                  Download your free guide: <strong>3 High-Paying Tech Roles You Can Land Without Learning to Code</strong>
                </p>
              </div>
              <p className="text-lg md:text-xl mb-8 opacity-80 max-w-3xl mx-auto">
                Think tech is only for coders? Think again. This FREE guide shows you how to launch a $100K+ career in under a year — no IT degree or coding bootcamp required.
              </p>
            </motion.div>

            {/* Lead Capture Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get the Free Guide Instantly</h3>
              <p className="text-gray-600 mb-6">Enter your email below to download the guide + get bonus career tips delivered weekly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700">First Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your first name"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@example.com"
                    className="mt-1"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full radiant-primary-gradient text-white py-3 text-lg font-semibold"
                >
                  {isSubmitting ? 'Sending Guide...' : 'Get the Guide'}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What You'll Learn Inside</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-1 gap-4 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">3 High-Paying Tech Roles (No Coding Required)</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These roles are in high demand, offer excellent salaries, and focus on leadership, communication, and business skills rather than technical coding.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg radiant-primary-gradient text-white flex items-center justify-center mb-4">
                      {role.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                    <div className="text-2xl font-bold text-purple-600 mb-4">{role.salary}</div>
                    <p className="text-gray-600">{role.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Who This Is For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Career Switchers</h3>
                  <p className="text-gray-600 text-sm">Teachers, retail pros, healthcare workers, or anyone ready to switch careers</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Job Seekers</h3>
                  <p className="text-gray-600 text-sm">Looking for a real career path — not just another certification</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Aspiring Leaders</h3>
                  <p className="text-gray-600 text-sm">Future Scrum Masters, Product Owners, and DevOps leads</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What People Are Saying</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Want to Go Further */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Want to Go Further?</h2>
            <p className="text-lg text-gray-600 mb-8">
              After you read the guide, you'll get early access to:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">My SAFe® Certification Bootcamps</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Personalized coaching options</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Career success stories</span>
              </div>
            </div>
            <Button 
              onClick={() => window.location.href = '/safe-training'}
              className="radiant-primary-gradient text-white px-8 py-3"
            >
              Learn About the Bootcamp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 radiant-primary-gradient text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Break Into Tech?</h2>
            <p className="text-xl mb-8 opacity-90">
              This guide has helped hundreds of professionals break into tech — without code.
            </p>
            <Button 
              onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
            >
              Get My Free Guide
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA Button for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <Button 
          onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full radiant-primary-gradient text-white py-3 shadow-lg"
        >
          Get the Free Guide
        </Button>
      </div>
    </div>
  );
};

export default TechRolesGuide;