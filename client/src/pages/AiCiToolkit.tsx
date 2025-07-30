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
import { Download, Zap, Bot, CheckCircle, Clock, Users, ArrowRight, Cpu, GitBranch } from 'lucide-react';

const leadFormSchema = insertLeadSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

type LeadForm = z.infer<typeof leadFormSchema>;

export default function AiCiToolkit() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<LeadForm>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "AI-CI Toolkit",
    },
  });

  const onSubmit = async (data: LeadForm) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/leads", data);
      
      // Auto-download the toolkit files
      setTimeout(() => {
        const files = [
          { name: 'GitHub Actions AI-CI Templates Collection.pdf', path: '/ai-ci/GitHub-Actions-AI-CI-Templates-Collection.pdf' },
          { name: 'AI-Enhanced CI-CD Setup Guide.pdf', path: '/ai-ci/AI-Enhanced-CI-CD-Setup-Guide.pdf' }
        ];
        
        files.forEach((file, index) => {
          setTimeout(() => {
            const link = document.createElement('a');
            link.href = file.path;
            link.download = file.name;
            link.click();
          }, index * 500);
        });
      }, 1000);

      setIsSubmitted(true);
      toast({
        title: "Download Started!",
        description: "Your AI-CI Toolkit files are downloading now.",
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
                  Your AI-CI Toolkit is Downloading!
                </h1>
                <p className="text-gray-600 mb-6">
                  Check your downloads folder for the complete toolkit files. Don't see them? Check your browser's download settings.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center gap-2 text-sm text-green-600">
                    <Download className="h-4 w-4" />
                    <span>GitHub Actions AI-CI Templates Collection.pdf</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-green-600">
                    <Download className="h-4 w-4" />
                    <span>AI-Enhanced CI/CD Setup Guide.pdf</span>
                  </div>
                </div>
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
                      const files = [
                        { name: 'GitHub Actions AI-CI Templates Collection.pdf', path: '/ai-ci/GitHub-Actions-AI-CI-Templates-Collection.pdf' },
                        { name: 'AI-Enhanced CI-CD Setup Guide.pdf', path: '/ai-ci/AI-Enhanced-CI-CD-Setup-Guide.pdf' }
                      ];
                      
                      files.forEach((file, index) => {
                        setTimeout(() => {
                          const link = document.createElement('a');
                          link.href = file.path;
                          link.download = file.name;
                          link.click();
                        }, index * 500);
                      });
                    }}
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
                  >
                    Download Files Again
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
            <motion.div variants={itemVariants} className="mb-6">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mb-4">
                Agile Alphabet Series - Tool C
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI-CI Toolkit
                <span className="block text-2xl md:text-3xl text-purple-600 mt-2">
                  Continuous Integration + AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Get complete GitHub Actions templates and a 15-minute setup guide to implement 
                AI-powered merge conflict prediction, intelligent test coverage, and smart deployment risk assessment.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-gray-700">
                <Bot className="h-5 w-5 text-purple-500" />
                <span>AI-Powered Testing</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <GitBranch className="h-5 w-5 text-green-500" />
                <span>Smart CI/CD</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="h-5 w-5 text-blue-500" />
                <span>15-Min Setup</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="h-5 w-5 text-orange-500" />
                <span>Team Ready</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Bot className="h-6 w-6 text-purple-600" />
                    </div>
              <CardTitle className="text-xl">GitHub Actions Templates</CardTitle>
                    <CardDescription>
                      Complete workflow files for AI merge prediction, test coverage analysis, and deployment intelligence
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <GitBranch className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">15-Minute Setup Guide</CardTitle>
                    <CardDescription>
                      Step-by-step implementation guide to go from broken builds to predictive deployments in 15 minutes
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Ready-to-Use Configuration</CardTitle>
                    <CardDescription>
                      Pre-configured risk thresholds, team-specific prompts, and monitoring metrics for immediate deployment
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  Download Your AI-CI Toolkit
                </CardTitle>
                <CardDescription className="text-lg">
                  Get complete GitHub Actions workflows and step-by-step setup guide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                      <Download className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">GitHub Actions Templates Collection</div>
                      <div className="text-sm text-gray-500">Complete workflow files for AI-CI implementation</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <Cpu className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">AI-Enhanced CI/CD Setup Guide</div>
                      <div className="text-sm text-gray-500">15-minute implementation with troubleshooting</div>
                    </div>
                  </div>
                </div>

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
                          Preparing Download...
                        </>
                      ) : (
                        <>
                          <Download className="h-5 w-5 mr-2" />
                          Download AI-CI Toolkit Now
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>

                <p className="text-sm text-gray-500 text-center mt-6">
                  By downloading, you agree to receive occasional updates about our Agile tools and training programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}