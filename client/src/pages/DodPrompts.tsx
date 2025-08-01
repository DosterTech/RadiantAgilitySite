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
import { Download, CheckCircle, Bot, Zap, Target, ArrowDown, Star, Code, Database, Bug, RefreshCw, Sparkles, Copy } from 'lucide-react';

const leadFormSchema = insertLeadSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

type LeadForm = z.infer<typeof leadFormSchema>;

export default function DodPrompts() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<LeadForm>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "DoD Prompts Library",
    },
  });

  const onSubmit = async (data: LeadForm) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/leads", data);
      
      // Auto-download the prompts library
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/dod/DoD-Prompts-Library.pdf';
        link.download = 'RadiantAgility-DoD-Prompts-Library.pdf';
        link.click();
      }, 1000);

      setIsSubmitted(true);
      toast({
        title: "Prompts Library Sent!",
        description: "Check your email and downloads folder for the AI DoD Prompts Library.",
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

  const copyPrompt = (prompt: string, id: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(id);
    setTimeout(() => setCopiedPrompt(null), 2000);
    toast({
      title: "Prompt Copied!",
      description: "Ready to paste into ChatGPT, Claude, or Gemini.",
    });
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
                  Your AI DoD Prompts Library is Ready!
                </h1>
                <p className="text-gray-600 mb-6">
                  Check your email and downloads folder for the complete AI prompts library. 
                  Start creating perfect Definition of Done criteria in minutes.
                </p>
                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={() => window.location.href = '/dod-template'}
                    className="w-full radiant-primary-gradient text-white"
                  >
                    Get the DoD Template Too
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/dod/DoD-Prompts-Library.pdf';
                      link.download = 'RadiantAgility-DoD-Prompts-Library.pdf';
                      link.click();
                    }}
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
                  >
                    Download Prompts Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  const prompts = [
    {
      id: 'foundational',
      title: 'Foundational DoD',
      icon: Target,
      color: 'purple',
      prompt: 'Create a comprehensive Definition of Done for Agile user stories that includes:\n- Code standards\n- Testing requirements\n- Documentation\n- Stakeholder approval\n- Deployment criteria\nFormat as a checklist.',
    },
    {
      id: 'frontend',
      title: 'Frontend Feature',
      icon: Code,
      color: 'blue',
      prompt: 'Create a DoD checklist for a frontend feature including browser compatibility, accessibility checks, and UI test coverage.',
    },
    {
      id: 'backend',
      title: 'Backend/API',
      icon: Database,
      color: 'green',
      prompt: 'Build a Definition of Done for a backend API endpoint that includes code coverage, error handling, API documentation, and performance testing.',
    },
    {
      id: 'bugfix',
      title: 'Bug Fix',
      icon: Bug,
      color: 'red',
      prompt: 'Write a lightweight Definition of Done for a critical bug fix that still meets quality standards.',
    },
    {
      id: 'refactor',
      title: 'Technical Debt',
      icon: RefreshCw,
      color: 'orange',
      prompt: 'Suggest a DoD for refactoring legacy code that includes code quality improvements and no regression validation.',
    },
    {
      id: 'enhancer',
      title: 'Story-Specific Enhancer',
      icon: Sparkles,
      color: 'indigo',
      prompt: 'Given this user story, refine the Definition of Done to align with the acceptance criteria:\n[Paste user story and AC here]',
    },
  ];

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
                AI-Powered Prompts
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered Prompts to Define 
                <span className="block text-2xl md:text-3xl text-purple-600 mt-4">
                  'Done' in Minutes
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                Transform vague requirements into testable DoD criteria using ChatGPT, Claude, or Gemini. 
                Perfect for Scrum Masters, Product Owners, and QA leads.
              </p>
              <Button 
                onClick={scrollToForm}
                size="lg"
                className="radiant-primary-gradient text-white text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Get the AI DoD Prompt Library
                <ArrowDown className="h-5 w-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Prompts Preview */}
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
                Try These AI Prompts Right Now
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Click any prompt to copy it, then paste into your favorite AI tool. Each prompt is optimized 
                for creating specific types of Definition of Done criteria.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {prompts.map((promptItem, index) => {
                const IconComponent = promptItem.icon;
                const colorClasses = {
                  purple: 'bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-200',
                  blue: 'bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200',
                  green: 'bg-green-100 text-green-600 border-green-200 hover:bg-green-200',
                  red: 'bg-red-100 text-red-600 border-red-200 hover:bg-red-200',
                  orange: 'bg-orange-100 text-orange-600 border-orange-200 hover:bg-orange-200',
                  indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200 hover:bg-indigo-200',
                };

                return (
                  <motion.div
                    key={promptItem.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-gray-100">
                      <CardHeader className="pb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses[promptItem.color as keyof typeof colorClasses].split(' ').slice(0, 2).join(' ')}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg">{promptItem.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-50 p-4 rounded-lg mb-4 text-sm text-gray-700 font-mono leading-relaxed max-h-32 overflow-hidden">
                          {promptItem.prompt.length > 120 
                            ? `${promptItem.prompt.substring(0, 120)}...` 
                            : promptItem.prompt
                          }
                        </div>
                        <Button
                          onClick={() => copyPrompt(promptItem.prompt, promptItem.id)}
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          {copiedPrompt === promptItem.id ? (
                            <>
                              <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-2" />
                              Copy Prompt
                            </>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
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
                Why AI-Powered DoD Creation Works
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div variants={itemVariants}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">10x Faster</CardTitle>
                    <CardDescription>
                      Generate comprehensive DoD criteria in minutes instead of hours of team meetings
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Bot className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">AI-Optimized</CardTitle>
                    <CardDescription>
                      Prompts are crafted to get the best results from ChatGPT, Claude, and Gemini
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Context-Specific</CardTitle>
                    <CardDescription>
                      Different prompts for frontend, backend, bug fixes, and technical debt
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
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
                Used by Agile teams at startups and Fortune 500 companies
              </p>
              <div className="flex items-center justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-gray-600">Perfect for AI-assisted DoD creation</span>
              </div>
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
                  Get the Complete AI DoD Prompt Library
                </CardTitle>
                <CardDescription className="text-lg">
                  20+ ready-to-use prompts for every type of Agile work. Download instantly and start creating better DoDs today.
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
                          Sending Library...
                        </>
                      ) : (
                        <>
                          <Download className="h-5 w-5 mr-2" />
                          Get the AI DoD Prompt Library Now
                        </>
                      )}
                    </Button>
                  </form>
                </Form>

                <p className="text-sm text-gray-500 text-center mt-6">
                  By downloading, you agree to receive occasional updates about our Agile AI tools and training programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cross-Promotion Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
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
                Complete Your DoD Toolkit
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                Get the comprehensive DoD template to go with your AI prompts
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/dod-template'}
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4"
                >
                  Get the DoD Template
                  <Target className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  onClick={() => window.location.href = '/ai-ci-toolkit'}
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 bg-transparent"
                >
                  <span className="text-white group-hover:text-blue-600">Explore AI-CI Toolkit</span>
                  <Zap className="h-5 w-5 ml-2 text-white group-hover:text-blue-600" />
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
                  Empowering teams with AI-enhanced agile practices, SAFe training, and intelligent automation tools.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">AI Tools</h4>
                <ul className="space-y-2">
                  <li><a href="/ai-ci-toolkit" className="text-gray-400 hover:text-white transition-colors">AI-CI Toolkit</a></li>
                  <li><a href="/dod-template" className="text-gray-400 hover:text-white transition-colors">DoD Template</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="/free" className="text-gray-400 hover:text-white transition-colors">Free Guides</a></li>
                  <li><a href="/safe-training" className="text-gray-400 hover:text-white transition-colors">SAFe Training</a></li>
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