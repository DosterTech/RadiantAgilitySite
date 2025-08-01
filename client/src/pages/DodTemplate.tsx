import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { insertLeadSchema } from '@shared/schema';
import { Download, CheckCircle, Users, Clock, Shield, Target, ArrowDown, Star, Quote, Bot, Zap } from 'lucide-react';

const leadFormSchema = insertLeadSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

type LeadForm = z.infer<typeof leadFormSchema>;

export default function DodTemplate() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<LeadForm>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "DoD Template",
    },
  });

  const onSubmit = async (data: LeadForm) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/leads", data);
      
      // Auto-download the template
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/dod/DoD-Template.pdf';
        link.download = 'RadiantAgility-DoD-Checklist-Template.pdf';
        link.click();
      }, 1000);

      setIsSubmitted(true);
      toast({
        title: "Template Sent!",
        description: "Check your email and downloads folder for the DoD Template.",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Download Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  Your DoD Template is Ready!
                </h1>
                <p className="text-gray-600 mb-6">
                  Check your email and downloads folder for the Definition of Done Template. 
                  Start using it in your next sprint planning session.
                </p>
                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={() => window.location.href = '/safe-training'}
                    className="w-full radiant-primary-gradient text-white"
                  >
                    Explore Our SAFe Training Programs
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/dod/DoD-Template.pdf';
                      link.download = 'RadiantAgility-DoD-Checklist-Template.pdf';
                      link.click();
                    }}
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
                  >
                    Download Template Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mb-4">
                Free Agile Resource
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Definition of Done (DoD) Template
                <span className="block text-2xl md:text-3xl text-purple-600 mt-4">
                  for Agile Teams
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                Transform your team's quality and velocity with our comprehensive DoD checklist. 
                Includes customization guides, AI automation prompts, and implementation roadmap.
              </p>
              <Button 
                onClick={scrollToForm}
                size="lg"
                className="radiant-primary-gradient text-white text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Download Free Template
                <ArrowDown className="h-5 w-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Definition of Done Matters
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive DoD template covers 6 key areas: Development Standards, Quality Assurance, 
                Documentation, Stakeholder Validation, Deployment Readiness, plus team-specific customizations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Eliminates Ambiguity</CardTitle>
                    <CardDescription>
                      Clear criteria for "done" removes confusion during sprint reviews and prevents 
                      back-and-forth discussions about completion status.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Improves Collaboration</CardTitle>
                    <CardDescription>
                      Aligns Development, QA, and Product teams with shared expectations, 
                      reducing handoff friction and miscommunication.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Builds Trust</CardTitle>
                    <CardDescription>
                      Consistent quality standards create confidence with stakeholders and 
                      demonstrate professional delivery capabilities.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">Saves Time</CardTitle>
                    <CardDescription>
                      Prevents costly rework by ensuring quality standards are met upfront, 
                      reducing technical debt and production issues.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Complete DoD Implementation Kit
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Universal checklist + customization guides + AI automation + 4-week implementation roadmap
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <Card className="max-w-2xl mx-auto shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8">
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-900">Definition of Done</h4>
                      <Target className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="space-y-3 text-left">
                      <div className="text-xs text-purple-600 font-semibold mb-2">✅ DEVELOPMENT STANDARDS</div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-green-500 rounded flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                        </div>
                        <span className="text-sm text-gray-700">Code peer reviewed and approved</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-green-500 rounded flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                        </div>
                        <span className="text-sm text-gray-700">Unit tests pass (80% coverage)</span>
                      </div>
                      <div className="text-xs text-blue-600 font-semibold mb-1 mt-3">✅ QUALITY ASSURANCE</div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-green-500 rounded flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                        </div>
                        <span className="text-sm text-gray-700">All acceptance criteria met</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                        <span className="text-sm text-gray-500">Cross-browser testing completed</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-2">+ 20+ more criteria...</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-lg text-gray-600 mb-8">
                Trusted by Agile Coaches, Scrum Masters, and Product Owners worldwide
              </p>
              <div className="flex items-center justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-gray-600">Used by 1000+ teams</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="text-left">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-purple-400 mb-4" />
                  <p className="text-gray-700 mb-4">
                    "The AI automation prompts and customization guides made implementation seamless. 
                    Our sprint reviews are 50% faster now."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Rachel Brown</p>
                      <p className="text-sm text-gray-500">Scrum Master, TechCorp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-left">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-blue-400 mb-4" />
                  <p className="text-gray-700 mb-4">
                    "The 4-week implementation roadmap helped us roll this out without disrupting our delivery. 
                    Quality improved immediately."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Target className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Daniel Kim</p>
                      <p className="text-sm text-gray-500">Product Owner, StartupXYZ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  Get Your Free DoD Template
                </CardTitle>
                <CardDescription className="text-lg">
                  Get your free copy of the Definition of Done Template delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your work email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full radiant-primary-gradient text-white text-lg py-6"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                          Sending Template...
                        </>
                      ) : (
                        <>
                          <Download className="h-5 w-5 mr-2" />
                          Send Me the Template
                        </>
                      )}
                    </Button>
                  </form>
                </Form>

                <p className="text-sm text-gray-500 text-center mt-6">
                  By downloading, you agree to receive occasional updates about our Agile resources and training programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cross-Promotion Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Want the Complete DoD Toolkit?
              </h3>
              <p className="text-xl text-purple-100 mb-8">
                Supercharge your Definition of Done process with AI-powered prompts
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/dod-prompts'}
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4"
                >
                  Get the AI DoD Prompt Library
                  <Bot className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  onClick={() => window.location.href = '/ai-ci-toolkit'}
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 bg-transparent"
                >
                  <span className="text-white group-hover:text-purple-600">Check Out AI-CI Toolkit</span>
                  <Zap className="h-5 w-5 ml-2 text-white group-hover:text-purple-600" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4">Radiant Agility Technology</h3>
                <p className="text-gray-400 mb-4">
                  Empowering teams with agile practices, SAFe training, and quality resources for continuous improvement.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Training</h4>
                <ul className="space-y-2">
                  <li><a href="/safe-training" className="text-gray-400 hover:text-white transition-colors">SAFe Certification</a></li>
                  <li><a href="/agile-armies" className="text-gray-400 hover:text-white transition-colors">Team Training</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="/free" className="text-gray-400 hover:text-white transition-colors">Free Guides</a></li>
                  <li><a href="/ai-ci-toolkit" className="text-gray-400 hover:text-white transition-colors">AI-CI Toolkit</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400">
                © 2025 Radiant Agility Technology. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}