import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { insertLeadSchema } from '@shared/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { 
  Download, 
  CheckCircle, 
  Users, 
  Network, 
  Target, 
  Calendar,
  Shield,
  ListChecks,
  ArrowRight,
  Star,
  BookOpen,
  Award,
  Brain,
  Zap
} from 'lucide-react';

const formSchema = insertLeadSchema.pick({
  name: true,
  email: true
}).extend({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address')
});

type FormData = z.infer<typeof formSchema>;

export default function EpicToolkit() {
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
        company: 'Not specified', // Default value for company
        service: 'Epic Dependency Mapping Template',
        leadMagnet: 'epic-toolkit'
      });
    },
    onSuccess: () => {
      setIsSubmitted(true);
      reset();
      toast({
        title: "Success!",
        description: "Your Epic Dependency Mapping Template is being sent to your email.",
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

  const features = [
    {
      icon: Users,
      title: "Visual Story Inventory Worksheet",
      description: "Map user stories and features with clear visual hierarchy"
    },
    {
      icon: Network,
      title: "Interactive Dependency Matrix", 
      description: "Track cross-team dependencies and integration points"
    },
    {
      icon: Target,
      title: "Critical Path & Bottleneck Analysis",
      description: "Identify risks and blockers before they impact delivery"
    },
    {
      icon: Calendar,
      title: "Sprint Planning Framework",
      description: "Align epic work with sprint boundaries and capacity"
    },
    {
      icon: Shield,
      title: "Risk Mitigation Planner",
      description: "Proactive strategies for dependency management"
    },
    {
      icon: ListChecks,
      title: "Weekly Dependency Review Checklist",
      description: "Stay on track with systematic progress monitoring"
    }
  ];

  const benefits = [
    "Reduce epic delivery time by up to 40%",
    "Eliminate last-minute surprises and blockers",
    "Improve cross-team collaboration and alignment",
    "Make dependency risks visible to stakeholders",
    "Streamline PI planning and release coordination"
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
              Check Your Email! 📧
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Your Epic Toolkit (Dependency Mapping Template + AI Prompts Library) is on its way. Check your inbox (and spam folder) for the download link.
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                While you wait, explore more free Agile tools:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="/dod-template" 
                  className="p-4 border rounded-lg hover:border-purple-300 transition-colors"
                >
                  <h4 className="font-semibold text-purple-600 mb-2">Definition of Done Template</h4>
                  <p className="text-sm text-gray-600">Crystal-clear completion criteria for every story</p>
                </a>
                
                <a 
                  href="/dod-prompts" 
                  className="p-4 border rounded-lg hover:border-purple-300 transition-colors"
                >
                  <h4 className="font-semibold text-purple-600 mb-2">AI DoD Prompts Library</h4>
                  <p className="text-sm text-gray-600">ChatGPT prompts for faster DoD creation</p>
                </a>
                
                <a 
                  href="/ai-ci-toolkit" 
                  className="p-4 border rounded-lg hover:border-purple-300 transition-colors"
                >
                  <h4 className="font-semibold text-purple-600 mb-2">AI-CI Toolkit</h4>
                  <p className="text-sm text-gray-600">AI-enhanced CI/CD templates and workflows</p>
                </a>
                
                <a 
                  href="/flow-bingo" 
                  className="p-4 border rounded-lg hover:border-purple-300 transition-colors"
                >
                  <h4 className="font-semibold text-purple-600 mb-2">Flow Bottleneck Bingo</h4>
                  <p className="text-sm text-gray-600">Interactive retrospective game</p>
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
              Agile Alphabet Series: E — Epic Splitting + AI
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Blueprint for 
              <span className="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent"> Seamless Epic Planning</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Download the Epic Dependency Mapping Template + AI Prompts Library to visualize, manage, and split epics like a pro.
            </p>
            
            {/* Credibility Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Used by Enterprise SAFe Teams</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Star className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Designed by Certified SAFe SPC</span>
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
                      E
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        About the Agile Alphabet Series
                      </h3>
                      <p className="text-gray-600">
                        This toolkit complements our Agile Alphabet series where each letter unpacks a powerful Agile concept. 
                        'E' stands for Epic Splitting — and this download is your practical jumpstart.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Template Features */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Epic Dependency Mapping Template</h2>
                <div className="grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Prompts Library */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-8 h-8 text-purple-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Epic Splitting AI Prompts Library</h2>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Turn Vague 6-Month Initiatives into Sprint-Ready Stories
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Use AI to slice, sequence, and clarify large epics. Ideal for Product Owners, SAFe teams, and anyone doing PI planning.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Epic Breakdown Prompts</h3>
                      <p className="text-gray-600 text-sm">ChatGPT/Claude prompts to decompose large initiatives into manageable user stories</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Sequencing & Prioritization</h3>
                      <p className="text-gray-600 text-sm">AI prompts to order stories by value, risk, and dependencies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Acceptance Criteria Generation</h3>
                      <p className="text-gray-600 text-sm">Create clear, testable acceptance criteria for every story</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Epic Planning</h2>
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
                      <Download className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Get Your Free Epic Toolkit
                    </h3>
                    <p className="text-gray-600">
                      Join 2,500+ Agile professionals who've downloaded our templates
                    </p>
                  </div>

                  {/* Toolkit Contents */}
                  <div className="bg-purple-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-center">What You'll Get:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Network className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-gray-900">Epic Dependency Mapping Template</h5>
                          <p className="text-sm text-gray-600">Visual worksheets for dependency tracking and risk analysis</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Brain className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-gray-900">Epic Splitting AI Prompts Library</h5>
                          <p className="text-sm text-gray-600">Turn 6-month initiatives into sprint-ready stories with AI</p>
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5 mr-2" />
                          Download the Free Epic Toolkit Now
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="text-center mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      Instant download • No spam • Unsubscribe anytime
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Secondary CTA */}
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-3">Ready for advanced SAFe training?</p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  <a href="/safe-training" className="flex items-center gap-2">
                    Explore Certification Classes
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
              Trusted by Agile Teams Worldwide
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">2,500+</div>
                <p className="text-gray-600">Templates Downloaded</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
                <p className="text-gray-600">Enterprise Teams</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
                <p className="text-gray-600">Average Time Savings</p>
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
              Explore More Free Agile Tools
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <ListChecks className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">DoD Template</h3>
                  <p className="text-sm text-gray-600 mb-4">Definition of Done checklist framework</p>
                  <Button asChild variant="outline" size="sm">
                    <a href="/dod-template">Get Template</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Target className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">AI DoD Prompts</h3>
                  <p className="text-sm text-gray-600 mb-4">ChatGPT prompts for DoD creation</p>
                  <Button asChild variant="outline" size="sm">
                    <a href="/dod-prompts">Get Prompts</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Network className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">AI-CI Toolkit</h3>
                  <p className="text-sm text-gray-600 mb-4">AI-enhanced CI/CD templates</p>
                  <Button asChild variant="outline" size="sm">
                    <a href="/ai-ci-toolkit">Get Toolkit</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl mb-4">🎯</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Flow Bingo</h3>
                  <p className="text-sm text-gray-600 mb-4">Interactive retrospective game</p>
                  <Button asChild variant="outline" size="sm">
                    <a href="/flow-bingo">Play Game</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Button asChild className="bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-700 hover:to-red-600 text-white px-8 py-3">
                <a href="/safe-training">Explore SAFe Certification Classes</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}