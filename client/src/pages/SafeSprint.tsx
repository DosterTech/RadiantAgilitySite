import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Check, Target, Clock, BookOpen, Zap, Shield } from 'lucide-react';

export default function SafeSprint() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const signupMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest('POST', '/api/leads', {
        name: 'Sprint Signup',
        email: email,
        company: 'Individual',
        service: '5-Day SAFe Sprint'
      });
    },
    onSuccess: () => {
      toast({
        title: "Welcome to the 5-Day SAFe Sprint!",
        description: "Check your email for Day 1 content. We'll send you one lesson per day.",
      });
      setEmail('');
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to sign up for the sprint. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      signupMutation.mutate(email);
    }
  };

  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white text-purple-800 mb-6 px-4 py-2 text-sm font-semibold">
            FREE 5-Day Email Course
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master SAFe in Just<br />
            <span className="text-yellow-300">5 Minutes a Day</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Transform your Agile career with bite-sized lessons delivered straight to your inbox. 
            Perfect for busy professionals who want to level up without the overwhelm.
          </p>
          
          <Button 
            onClick={scrollToSignup}
            className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 px-8 py-4 text-lg font-bold rounded-lg shadow-lg"
          >
            Start Your Free Sprint →
          </Button>
          
          <p className="text-sm mt-4 opacity-75">
            Join 1,000+ professionals already transforming their careers
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            What You'll Learn in 5 Days
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                day: "Day 1",
                title: "SAFe Fundamentals",
                description: "Core principles, values, and the big picture of Scaled Agile Framework",
                icon: BookOpen
              },
              {
                day: "Day 2", 
                title: "Agile Release Trains",
                description: "How teams align and deliver value at scale using ARTs",
                icon: Target
              },
              {
                day: "Day 3",
                title: "Lean Portfolio Management", 
                description: "Strategic alignment and funding models for Agile enterprises",
                icon: Shield
              },
              {
                day: "Day 4",
                title: "Continuous Delivery",
                description: "DevOps practices and the continuous delivery pipeline",
                icon: Zap
              },
              {
                day: "Day 5",
                title: "SAFe Implementation",
                description: "Practical steps to start your SAFe transformation journey",
                icon: Check
              },
              {
                day: "Bonus",
                title: "Team Assessment Tool",
                description: "Evaluate your team's Agile maturity with our exclusive worksheet",
                icon: Clock
              }
            ].map((lesson, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-purple-600">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <lesson.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <Badge variant="outline" className="text-purple-600 border-purple-600">
                    {lesson.day}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{lesson.title}</h3>
                <p className="text-gray-600">{lesson.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why 5 Minutes a Day Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Fits Your Schedule</h3>
              <p className="text-gray-600">
                No more hour-long videos or overwhelming courses. Learn during your coffee break.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Builds Momentum</h3>
              <p className="text-gray-600">
                Daily lessons create lasting habits and keep you consistently moving forward.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Zap className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Easy to Apply</h3>
              <p className="text-gray-600">
                Bite-sized concepts you can immediately implement in your current role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            What People Are Saying
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <p className="text-gray-700 italic mb-4">
                "Finally, SAFe explained in a way that makes sense! The daily format kept me engaged without overwhelming my schedule."
              </p>
              <div className="font-semibold text-gray-800">— Amy M., Product Manager</div>
            </Card>
            
            <Card className="p-6">
              <p className="text-gray-700 italic mb-4">
                "I went from confused about SAFe to confident enough to lead our transformation. This sprint was the perfect starting point."
              </p>
              <div className="font-semibold text-gray-800">— Jason R., Scrum Master</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Agile Knowledge?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the 5-Day SAFe Sprint and start your journey to Agile mastery today.
            </p>
            
            <Card className="bg-white text-gray-800 p-8">
              <form onSubmit={handleSignup} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-lg p-4"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-800 py-4 text-lg font-bold"
                  disabled={signupMutation.isPending}
                >
                  {signupMutation.isPending ? 'Signing You Up...' : 'Start My Free 5-Day Sprint →'}
                </Button>
              </form>
              
              <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>No Spam</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Unsubscribe Anytime</span>
                </div>
              </div>
            </Card>
            
            <p className="text-sm mt-6 opacity-75">
              Designed by SAFe Practice Consultant Jasmine Doster
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>© 2025 Radiant Agility Tech | radiantagility.tech</p>
      </footer>
    </div>
  );
}