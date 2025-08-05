import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { insertLeadSchema } from '@shared/schema';
import {
  CheckCircle,
  Download,
  BookOpen,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Calculator,
  Users,
  Target,
  Clock,
  Zap,
  ListChecks,
  Star,
  Award,
  Network,
  Brain
} from 'lucide-react';

const formSchema = insertLeadSchema.pick({
  name: true,
  email: true
}).extend({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address')
});

type FormData = z.infer<typeof formSchema>;

export default function FlowToolkit() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const leadMutation = useMutation({
    mutationFn: async (data: FormData) => {
      return apiRequest('POST', '/api/leads', {
        ...data,
        company: 'Not specified',
        service: 'Flow Toolkit',
        leadMagnet: 'flow-toolkit'
      });
    },
    onSuccess: () => {
      setIsSubmitted(true);
      reset();
      
      // Future: Trigger automatic downloads when PDFs are ready
      toast({
        title: "Success!",
        description: "Your Flow Toolkit will be available soon. We'll notify you when it's ready!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      console.error('Lead submission error:', error);
    },
  });

  const onSubmit = (data: FormData) => {
    leadMutation.mutate(data);
  };

  const toolkitComponents = [
    {
      icon: Users,
      title: "Daily Stand-up Flow Questions",
      description: "Pre-designed question sets to identify flow blockers and bottlenecks in daily standups",
      features: [
        "Flow-focused question templates",
        "Blocker identification framework",
        "Team alignment guides"
      ]
    },
    {
      icon: BarChart3,
      title: "Flow Metrics Dashboard Template",
      description: "Visual dashboard template to track and monitor your team's flow metrics",
      features: [
        "Lead time tracking charts",
        "Cycle time visualization",
        "Throughput metrics display"
      ]
    },
    {
      icon: Calculator,
      title: "WIP Limit Calculator",
      description: "Interactive tool to calculate optimal Work-in-Progress limits for your team",
      features: [
        "Team size optimization",
        "Blocker rate analysis",
        "Personalized recommendations"
      ]
    }
  ];

  const benefits = [
    "Reduce cycle time by up to 50%",
    "Identify bottlenecks before they impact delivery",
    "Improve team predictability and planning",
    "Optimize WIP limits based on team capacity",
    "Create flow-focused daily standups"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Thank You! Your Flow Toolkit is Coming Soon! 🎉
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              We're putting the finishing touches on your Flow Toolkit. You'll be notified as soon as it's ready for download.
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                While you wait, try our WIP Calculator:
              </h3>
              
              <Button asChild className="bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-700 hover:to-red-600 text-white px-8 py-3 mb-6">
                <a href="/wip-calculator">
                  <Calculator className="w-5 h-5 mr-2" />
                  Try WIP Calculator Now
                </a>
              </Button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="/epic-toolkit" 
                  className="p-4 border rounded-lg hover:border-purple-300 transition-colors"
                >
                  <h4 className="font-semibold text-purple-600 mb-2">Epic Toolkit</h4>
                  <p className="text-sm text-gray-600">Dependency mapping and AI prompts</p>
                </a>
                
                <a 
                  href="/dod-template" 
                  className="p-4 border rounded-lg hover:border-purple-300 transition-colors"
                >
                  <h4 className="font-semibold text-purple-600 mb-2">DoD Template</h4>
                  <p className="text-sm text-gray-600">Definition of Done framework</p>
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">Ready to level up your Agile skills?</p>
              <Button asChild className="bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-700 hover:to-red-600 text-white px-8 py-3">
                <a href="/safe-training">Explore SAFe Certification Classes</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            {/* Agile Alphabet Series Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Agile Alphabet Series: F — Flow Optimization
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master Your Team's 
              <span className="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent"> Flow State</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get the complete Flow Toolkit: Daily stand-up questions, metrics dashboard template, and WIP calculator to optimize your team's delivery flow.
            </p>
            
            {/* Credibility Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Flow Engineering Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Star className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Used by 1000+ Agile Teams</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Features & Benefits */}
            <div>
              {/* Agile Alphabet Explanation */}
              <Card className="mb-8 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      F
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        About the Agile Alphabet Series
                      </h3>
                      <p className="text-gray-600">
                        This toolkit represents 'F' for Flow — the holy grail of Agile delivery. 
                        Get practical tools to measure, monitor, and optimize your team's flow state.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Toolkit Components */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Flow Toolkit</h2>
                <div className="space-y-4">
                  {toolkitComponents.map((component, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <component.icon className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{component.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{component.description}</p>
                          <ul className="space-y-1">
                            {component.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Team's Flow</h2>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Download Form */}
            <div className="lg:sticky lg:top-8">
              <Card className="border-2 border-purple-200 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Get Your Free Flow Toolkit
                    </h3>
                    <p className="text-gray-600">
                      Join 1,000+ Agile teams optimizing their delivery flow
                    </p>
                  </div>

                  {/* Toolkit Preview */}
                  <div className="bg-purple-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-center">Coming Soon:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-gray-900">Daily Stand-up Flow Questions</h5>
                          <p className="text-sm text-gray-600">Flow-focused templates for effective standups</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <BarChart3 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-gray-900">Flow Metrics Dashboard</h5>
                          <p className="text-sm text-gray-600">Track lead time, cycle time, and throughput</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calculator className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-gray-900">WIP Limit Calculator</h5>
                          <p className="text-sm text-gray-600">Optimize work-in-progress limits</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        {...register('name')}
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Work Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="mt-1"
                        placeholder="Enter your work email"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={leadMutation.isPending}
                      className="w-full bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-700 hover:to-red-600 text-white py-3 text-lg font-semibold"
                    >
                      {leadMutation.isPending ? (
                        <>
                          <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5 mr-2" />
                          Get Notified When Ready
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="text-center mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      Early access • No spam • Unsubscribe anytime
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Try WIP Calculator Now */}
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-3">Try our WIP Calculator now:</p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  <a href="/wip-calculator" className="flex items-center gap-2">
                    <Calculator className="w-4 h-4" />
                    WIP Calculator Tool
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Trusted by Flow Engineering Teams
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">1,000+</div>
                <p className="text-gray-600">Teams Using Our Tools</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
                <p className="text-gray-600">Average Cycle Time Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
                <p className="text-gray-600">Improved Predictability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools Footer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Complete Your Agile Alphabet Collection
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Network className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Epic Toolkit</h3>
                  <p className="text-sm text-gray-600 mb-4">Dependency mapping and AI prompts</p>
                  <Button asChild variant="outline" size="sm">
                    <a href="/epic-toolkit">Get Toolkit</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <ListChecks className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">DoD Template</h3>
                  <p className="text-sm text-gray-600 mb-4">Definition of Done framework</p>
                  <Button asChild variant="outline" size="sm">
                    <a href="/dod-template">Get Template</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Zap className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">AI-CI Toolkit</h3>
                  <p className="text-sm text-gray-600 mb-4">AI-enhanced CI/CD templates</p>
                  <Button asChild variant="outline" size="sm">
                    <a href="/ai-ci-toolkit">Get Toolkit</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Target className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Flow Bingo</h3>
                  <p className="text-sm text-gray-600 mb-4">Interactive retrospective game</p>
                  <Button asChild variant="outline" size="sm">
                    <a href="/flow-bingo">Play Game</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}