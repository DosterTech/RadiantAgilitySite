import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { 
  Brain, 
  Target, 
  CheckCircle, 
  Download, 
  Users,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Lightbulb,
  FlaskConical,
  BarChart3,
  Zap,
  FileText,
  ChevronRight,
  Microscope
} from 'lucide-react';

export default function AIHypothesisToolkit() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const downloadMutation = useMutation({
    mutationFn: async (data: { email: string; leadMagnet: string }) => {
      return apiRequest('POST', '/api/leads', {
        ...data,
        name: 'Lead Magnet Download',
        company: 'Not specified',
        service: 'AI Hypothesis Toolkit Download'
      });
    },
    onSuccess: () => {
      toast({
        title: "Download Started!",
        description: "Your AI Hypothesis Toolkit is downloading now.",
      });
      
      // Download Smart Hypothesis Templates PDF
      setTimeout(() => {
        const link1 = document.createElement('a');
        link1.href = '/attached_assets/RadiantAgility_Smart_Hypothesis_Templates_1754587134294.pdf';
        link1.download = 'RadiantAgility_Smart_Hypothesis_Templates.pdf';
        link1.style.display = 'none';
        document.body.appendChild(link1);
        link1.click();
        document.body.removeChild(link1);
      }, 1000);

      // Download AI Prompts Library PDF with delay
      setTimeout(() => {
        const link2 = document.createElement('a');
        link2.href = '/attached_assets/RadiantAgility_AI_Prompts_Library_Hypothesis_Driven_Development_1754587134295.pdf';
        link2.download = 'RadiantAgility_AI_Prompts_Library_Hypothesis_Driven_Development.pdf';
        link2.style.display = 'none';
        document.body.appendChild(link2);
        link2.click();
        document.body.removeChild(link2);
      }, 2500);
      
      setEmail('');
    },
    onError: (error) => {
      toast({
        title: "Download Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
      console.error('Download error:', error);
    },
  });

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email to download the toolkit.",
        variant: "destructive",
      });
      return;
    }
    
    downloadMutation.mutate({ 
      email: email.trim(), 
      leadMagnet: 'AI Hypothesis Toolkit' 
    });
  };

  const features = [
    {
      icon: FlaskConical,
      title: "Smart Hypothesis Templates",
      description: "Ready-to-use templates for feature, UX, performance, and business impact hypotheses"
    },
    {
      icon: Brain,
      title: "AI Prompts Library",
      description: "ChatGPT and Claude prompts to generate, refine, and analyze hypotheses instantly"
    },
    {
      icon: BarChart3,
      title: "Measurement Frameworks",
      description: "Complete metrics hierarchies, success criteria, and learning capture systems"
    }
  ];

  const benefits = [
    "Transform product ideas into testable experiments",
    "Generate multiple hypothesis variations with AI assistance",
    "Design statistically rigorous A/B tests and MVPs",
    "Analyze results and extract actionable insights",
    "Build hypothesis roadmaps aligned with business objectives",
    "Reduce experiment setup time from hours to minutes"
  ];

  const templateTypes = [
    {
      icon: Target,
      title: "Core Hypothesis Template",
      description: "Basic structure for any testable hypothesis with success criteria"
    },
    {
      icon: Zap,
      title: "Feature Hypothesis",
      description: "New feature validation with adoption and engagement metrics"
    },
    {
      icon: Users,
      title: "Behavioral Change",
      description: "User adoption and engagement improvement hypotheses"
    },
    {
      icon: TrendingUp,
      title: "Business Impact",
      description: "Revenue growth and cost reduction hypothesis templates"
    },
    {
      icon: Microscope,
      title: "Experiment Design",
      description: "A/B test and MVP experiment planning frameworks"
    },
    {
      icon: BarChart3,
      title: "Success Measurement",
      description: "Metrics hierarchy and learning capture systems"
    }
  ];

  const aiPrompts = [
    {
      category: "Hypothesis Generation",
      prompts: [
        "Feature Hypothesis Generator",
        "User Behavior Hypothesis Creator",
        "Business Impact Hypothesis Designer"
      ]
    },
    {
      category: "Experiment Design",
      prompts: [
        "A/B Test Designer",
        "MVP Experiment Planner",
        "Multivariate Test Optimizer"
      ]
    },
    {
      category: "Analysis & Learning",
      prompts: [
        "Experiment Results Analyzer",
        "Learning Synthesizer",
        "Hypothesis Refinement Assistant"
      ]
    },
    {
      category: "Strategic Planning",
      prompts: [
        "Hypothesis Roadmap Builder",
        "Risk Assessment Framework"
      ]
    }
  ];

  const toolkitCrossPromo = [
    {
      title: "Epic Toolkit",
      description: "Dependency mapping and AI-powered epic splitting",
      href: "/epic-toolkit"
    },
    {
      title: "Flow Toolkit", 
      description: "Daily stand-up questions and WIP calculator",
      href: "/flow-toolkit"
    },
    {
      title: "Gestalt Toolkit",
      description: "Design principles and UX audit templates",
      href: "/gestalt-toolkit"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#4c63d2] to-[#3B1F56] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Agile Alphabet Series: H — Hypothesis-Driven Development
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              🧪 AI Hypothesis Toolkit
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Transform product ideas into testable experiments with Smart Hypothesis Templates and AI-powered prompts for ChatGPT, Claude, and more
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#3B1F56] hover:bg-purple-50 font-semibold px-8 py-4 text-lg"
                onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="h-5 w-5 mr-2" />
                Get Free AI Toolkit
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Hypothesis-Driven Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete toolkit with templates, AI prompts, and frameworks to accelerate your product experimentation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-[#4c63d2] to-[#3B1F56] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Template Types Section */}
      <div className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Smart Hypothesis Templates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional templates for every type of product experiment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templateTypes.map((template, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#4c63d2] to-[#3B1F56] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <template.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{template.title}</h3>
                    <p className="text-gray-600 text-sm">{template.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Prompts Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Prompts Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready-to-use prompts for ChatGPT, Claude, and other AI tools to accelerate your hypothesis development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {aiPrompts.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Brain className="h-6 w-6 text-[#4c63d2]" />
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.prompts.map((prompt, promptIndex) => (
                    <div key={promptIndex} className="flex items-center gap-3 text-gray-700">
                      <ChevronRight className="h-4 w-4 text-[#4c63d2] flex-shrink-0" />
                      <span className="font-medium">{prompt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Hypothesis-Driven Development Matters
              </h2>
              <p className="text-xl text-gray-600">
                Build products based on validated learning, not assumptions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Download Form Section */}
      <div id="download-form" className="py-20 bg-gradient-to-r from-[#4c63d2] to-[#3B1F56]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Download Your Free AI Hypothesis Toolkit
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get instant access to Smart Hypothesis Templates and AI Prompts Library (2 comprehensive PDFs)
            </p>
            
            <form onSubmit={handleDownload} className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <Input
                  type="email"
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-lg py-4 px-6 border-2 border-gray-200 focus:border-[#4c63d2] rounded-xl"
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-[#4c63d2] to-[#3B1F56] hover:from-[#3B1F56] hover:to-[#4c63d2] text-white font-semibold py-4 text-lg rounded-xl"
                disabled={downloadMutation.isPending}
              >
                {downloadMutation.isPending ? (
                  <>
                    <Brain className="h-5 w-5 mr-2 animate-spin" />
                    Preparing Downloads...
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5 mr-2" />
                    Download AI Toolkit (2 PDFs)
                  </>
                )}
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                No spam, ever. Unsubscribe anytime. Toolkit includes templates and AI prompts.
              </p>
            </form>

            {/* What's Included */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Smart Hypothesis Templates</h3>
                </div>
                <ul className="text-purple-100 space-y-2 text-sm">
                  <li>• Core hypothesis framework</li>
                  <li>• Feature & UX improvement templates</li>
                  <li>• Business impact hypotheses</li>
                  <li>• Experiment design templates</li>
                  <li>• Success measurement frameworks</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="h-6 w-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">AI Prompts Library</h3>
                </div>
                <ul className="text-purple-100 space-y-2 text-sm">
                  <li>• Hypothesis generation prompts</li>
                  <li>• A/B test & MVP design prompts</li>
                  <li>• Results analysis prompts</li>
                  <li>• Strategic planning prompts</li>
                  <li>• Learning synthesis prompts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toolkit Cross-Promotion */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Your Agile Toolkit Collection
            </h2>
            <p className="text-xl text-gray-600">
              Explore other toolkits in the Agile Alphabet Series
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {toolkitCrossPromo.map((toolkit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{toolkit.title}</h3>
                <p className="text-gray-600 mb-6">{toolkit.description}</p>
                <a 
                  href={toolkit.href}
                  className="inline-flex items-center text-[#4c63d2] font-semibold hover:text-[#3B1F56] transition-colors"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-[#3B1F56] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with New Toolkits</h2>
          <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
            Get notified when we release new tools in the Agile Alphabet Series
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border-white/20 text-white placeholder-purple-200"
            />
            <Button className="bg-white text-[#3B1F56] hover:bg-purple-50 font-semibold whitespace-nowrap">
              <Lightbulb className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}