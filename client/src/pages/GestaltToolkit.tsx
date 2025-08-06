import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import {
  CheckCircle,
  Download,
  Eye,
  Users,
  Zap,
  Target,
  Layers,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Palette,
  Code
} from 'lucide-react';

export default function GestaltToolkit() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const downloadMutation = useMutation({
    mutationFn: async (data: { email: string; leadMagnet: string }) => {
      return apiRequest('POST', '/api/leads', {
        ...data,
        name: 'Lead Magnet Download',
        company: 'Not specified',
        service: 'Gestalt Toolkit Download'
      });
    },
    onSuccess: () => {
      toast({
        title: "Download Started!",
        description: "Check your downloads folder for the Gestalt Design Principles Toolkit.",
      });
      
      // Trigger download
      setTimeout(() => {
        // Download Gestalt Design Principles Cheatsheet
        const link1 = document.createElement('a');
        link1.href = '/attached_assets/RadiantAgility_Gestalt_Design_Principles_Cheatsheet_1754491988609.pdf';
        link1.download = 'RadiantAgility_Gestalt_Design_Principles_Cheatsheet.pdf';
        document.body.appendChild(link1);
        link1.click();
        document.body.removeChild(link1);
        
        // Download Gestalt UX Audit Template (500ms delay)
        setTimeout(() => {
          const link2 = document.createElement('a');
          link2.href = '/attached_assets/RadiantAgility_Gestalt_UX_Audit_Template_1754491988609.pdf';
          link2.download = 'RadiantAgility_Gestalt_UX_Audit_Template.pdf';
          document.body.appendChild(link2);
          link2.click();
          document.body.removeChild(link2);
        }, 500);
      }, 1000);
      
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
      leadMagnet: 'Gestalt Design Principles Toolkit' 
    });
  };

  const features = [
    {
      icon: Palette,
      title: "Gestalt Cheatsheet",
      description: "6 core principles with agile team applications and quick reference guide"
    },
    {
      icon: CheckCircle,
      title: "UX Audit Template",
      description: "Comprehensive evaluation template with scoring guide and action plans"
    },
    {
      icon: Code,
      title: "Design Tips for Devs",
      description: "Sprint planning integration and design system best practices"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Better Designer-Developer Handoffs",
      description: "Clear visual principles reduce miscommunication"
    },
    {
      icon: Zap,
      title: "Faster Iterations with Fewer UI Bugs",
      description: "Catch design issues early in the development process"
    },
    {
      icon: Target,
      title: "Increased User Satisfaction",
      description: "Consistent visual hierarchy improves user experience"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <BookOpen className="w-4 h-4" />
                  Agile Alphabet Series: G — Gestalt Design
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Unlock Better Design in 
                  <span className="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent"> Agile Teams</span>
                  <br />with Gestalt
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  Free UX audit template + Gestalt cheatsheet to reduce rework and improve usability.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-700 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold"
                    onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download the Toolkit
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
                    onClick={() => window.open('https://thesprintbrief.substack.com/', '_blank')}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    The Sprint Brief Newsletter
                  </Button>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Instant Download
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    No Spam
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Free Forever
                  </div>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <div className="bg-gradient-to-br from-purple-100 to-red-50 p-8 rounded-3xl">
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <Layers className="w-8 h-8 text-purple-600" />
                        <div>
                          <div className="font-semibold text-gray-900">Gestalt Principles</div>
                          <div className="text-sm text-gray-600">Visual Hierarchy Toolkit</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-4 bg-purple-200 rounded"></div>
                        <div className="h-4 bg-purple-400 rounded"></div>
                        <div className="h-4 bg-purple-600 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <Eye className="w-8 h-8 text-red-500" />
                        <div>
                          <div className="font-semibold text-gray-900">UX Audit Checklist</div>
                          <div className="text-sm text-gray-600">Design Review Template</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <div className="h-2 bg-gray-200 rounded flex-1"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Inside the Toolkit</h2>
              <p className="text-xl text-gray-600">Everything you need to apply Gestalt principles in your Agile workflow</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 transition-colors">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Gestalt Principles Matter in Agile</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Applying Gestalt principles during sprints improves user experience, reduces handoff confusion, 
                and minimizes UX debt. When designers and developers share a common visual language, 
                teams deliver more consistent and intuitive interfaces.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Form Section */}
      <section id="download-form" className="py-16 bg-gradient-to-r from-purple-600 to-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Get the Free Gestalt Toolkit</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of Agile practitioners improving their design process
            </p>
            
            <form onSubmit={handleDownload} className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="space-y-4">
                <div className="text-left">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@company.com"
                    className="mt-2 border-2 border-gray-200 focus:border-purple-500 text-lg py-3"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={downloadMutation.isPending}
                  className="w-full bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-700 hover:to-red-600 text-white py-4 text-lg font-semibold"
                >
                  {downloadMutation.isPending ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Preparing Download...
                    </div>
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Download Gestalt Toolkit
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-gray-500">
                  By downloading, you'll also receive occasional emails about Agile design resources. 
                  Unsubscribe anytime.
                </p>
              </div>
            </form>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold">2,500+</div>
                  <div className="opacity-90">Downloads</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">4.8/5</div>
                  <div className="opacity-90">User Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">12min</div>
                  <div className="opacity-90">Setup Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Promotion Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">More Agile Alphabet Series</h2>
              <p className="text-lg text-gray-600">Expand your Agile toolkit with our other resources</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">E</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Epic Toolkit</h3>
                      <p className="text-sm text-gray-600">Dependency Mapping + AI Prompts</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.location.href = '/epic-toolkit'}
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Get Epic Toolkit
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-green-600">F</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Flow Toolkit</h3>
                      <p className="text-sm text-gray-600">Metrics + WIP Calculator</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.location.href = '/flow-toolkit'}
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Get Flow Toolkit
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-purple-600">D</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">DoD Toolkit</h3>
                      <p className="text-sm text-gray-600">Templates + AI Prompts</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.location.href = '/definition-of-done-toolkit'}
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Get DoD Toolkit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900"
                onClick={() => window.open('https://thesprintbrief.substack.com/', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                The Sprint Brief Newsletter
              </Button>
              
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900"
                onClick={() => window.location.href = '/'}
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                RadiantAgility.tech
              </Button>
            </div>
            
            <p className="text-gray-400 mt-6">
              Created by Radiant Agility Technology • Part of the Agile Alphabet Series
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}