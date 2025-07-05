import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Check, Users, Award, Target, TrendingUp, Phone, Download } from 'lucide-react';

export default function AgileArmies() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [sprintEmail, setSprintEmail] = useState('');
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest('POST', '/api/contact', {
        ...data,
        service: 'Agile Army Training',
        consent: true
      });
    },
    onSuccess: () => {
      toast({
        title: "Request Submitted!",
        description: "We'll follow up within 24 hours to discuss your team training needs.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const sprintSignupMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest('POST', '/api/leads', {
        name: 'Sprint Signup',
        email: email,
        company: 'Unknown',
        service: '5-Day SAFe Sprint'
      });
    },
    onSuccess: () => {
      toast({
        title: "Welcome to the 5-Day SAFe Sprint!",
        description: "Check your email for Day 1 content. We'll send you one lesson per day.",
      });
      setSprintEmail('');
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to sign up for the sprint. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleSprintSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (sprintEmail) {
      sprintSignupMutation.mutate(sprintEmail);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Train Your Agile Army™
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Private SAFe Certification for Teams & Enterprises
          </p>
          <p className="text-lg mb-8 opacity-80">
            Upskill your workforce. Transform delivery. Align your enterprise.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold"
          >
            <Phone className="mr-2 h-5 w-5" />
            Schedule a Free Discovery Call
          </Button>
        </div>
      </section>

      {/* Why Settle Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            Why Settle for Generic Agile Training?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Your team deserves more than theory. They need tools, techniques, and real-world application. With Radiant Agility's private SAFe certification cohorts, your organization will learn by doing—and emerge with the certifications to prove it.
          </p>
          
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            What You Get with a Corporate Cohort:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Private SAFe Certification Course</h4>
                  <p className="text-gray-600">Taught live by a SAFe Practice Consultant (SPC) with real-world Agile experience.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Free Agile Team Health Assessment</h4>
                  <p className="text-gray-600">We evaluate your team's current Agile maturity across 6 key dimensions—and give you a custom report.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Done-For-You Training Logistics</h4>
                  <p className="text-gray-600">We handle everything: registration, exams, materials, and scheduling.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Post-Cert Coaching Session (Optional)</h4>
                  <p className="text-gray-600">A 60-minute follow-up to reinforce learning and prep for implementation.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Bundle Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative">
              <CardHeader className="text-center pb-4">
                <Badge variant="outline" className="w-fit mx-auto mb-2">Delivery Teams</Badge>
                <CardTitle className="text-xl text-purple-600">Core Team Boost</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  SAFe Scrum Master Cert<br />
                  (10 people)
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Best for delivery teams</p>
                  <p>• Perfect for pilot squads</p>
                  <p>• Includes all materials & exams</p>
                </div>
              </CardContent>
            </Card>

            <Card className="relative border-purple-200 border-2">
              <CardHeader className="text-center pb-4">
                <Badge className="w-fit mx-auto mb-2 bg-purple-600">Most Popular</Badge>
                <CardTitle className="text-xl text-purple-600">Agile Leadership Track</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  SAFe Product Owner/PM Cert<br />
                  (8 people)
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Ideal for PMs & Product Leaders</p>
                  <p>• Strategic planning focus</p>
                  <p>• Enterprise alignment training</p>
                </div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center pb-4">
                <Badge variant="outline" className="w-fit mx-auto mb-2">Enterprise</Badge>
                <CardTitle className="text-xl text-purple-600">Full-Stack Transformation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Combo: 10 SMs + 8 POs<br />
                  + Team Coaching
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Complete scaling solution</p>
                  <p>• For scaling Agile orgs</p>
                  <p>• Includes implementation support</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Need a custom bundle? We can tailor one just for your org.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            Enterprise Pricing
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Save big when certifying your whole department or Agile Release Train.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <Card className="text-center p-6">
              <div className="text-2xl font-bold text-purple-600 mb-2">10–19 seats</div>
              <div className="text-lg font-semibold text-red-600">10% off</div>
            </Card>
            <Card className="text-center p-6 border-purple-200 border-2">
              <div className="text-2xl font-bold text-purple-600 mb-2">20–49 seats</div>
              <div className="text-lg font-semibold text-red-600">15% off</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-2xl font-bold text-purple-600 mb-2">50+ seats</div>
              <div className="text-lg font-semibold text-red-600">20% off + free executive workshop</div>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">
              💡 Government or nonprofit? Ask about special pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Outcomes You Can Expect
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-semibold text-gray-800 mb-2">Improved Velocity</h3>
              <p className="text-gray-600">Better delivery predictability across teams</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="font-semibold text-gray-800 mb-2">Shared Language</h3>
              <p className="text-gray-600">Common framework across teams and roles</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-semibold text-gray-800 mb-2">Global Recognition</h3>
              <p className="text-gray-600">Industry-recognized SAFe certifications</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="font-semibold text-gray-800 mb-2">Faster Maturity</h3>
              <p className="text-gray-600">Better cross-team alignment and collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            What Our Clients Say
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-8">
                <blockquote className="text-lg md:text-xl italic text-gray-700 mb-4">
                  "This training transformed our teams. The SAFe framework finally clicked—and we've seen real improvements in delivery."
                </blockquote>
                <footer className="text-gray-600 font-medium">
                  — VP of Engineering, FinTech Company
                </footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            Certify With Confidence
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600">
              Your team will be trained by Jasmine Doster, Certified SAFe Practice Consultant (SPC) and industry veteran. We've helped professionals get certified and lead transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Micro-learning Module Teaser */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Ready for Full Training Yet?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Start with our free micro-learning series
            </p>
            
            <Card className="bg-white text-gray-800 p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-purple-100 p-4 rounded-full">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-purple-800">
                5-Day SAFe Sprint
              </h3>
              <p className="text-gray-600 mb-6">
                Learn the Basics in 5 Minutes a Day
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6 text-left">
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Day 1: SAFe Fundamentals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Day 2: Agile Release Trains</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Day 3: Lean Portfolio Management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Day 4: Continuous Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Day 5: SAFe Implementation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Bonus: Team Assessment Tool</span>
                </div>
              </div>
              
              <form onSubmit={handleSprintSignup} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={sprintEmail}
                  onChange={(e) => setSprintEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  disabled={sprintSignupMutation.isPending}
                >
                  {sprintSignupMutation.isPending ? 'Signing Up...' : 'Start Free Sprint'}
                </Button>
              </form>
              
              <p className="text-xs text-gray-500 mt-3">
                No spam. Unsubscribe anytime. Perfect for busy executives.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Ready to Train Your Agile Army?
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll follow up within 24 hours.
            </p>
            
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                  <Textarea
                    placeholder="Tell us about your team or training needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold mb-4"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? 'Submitting...' : 'Request Info'}
                  </Button>
                </form>
                
                <div className="mt-6 space-y-3">
                  <p className="text-sm text-gray-600">Or choose an option below:</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={scrollToContact}
                      variant="outline"
                      className="border-purple-600 text-purple-600 hover:bg-purple-50"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Schedule Discovery Call
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-purple-600 text-purple-600 hover:bg-purple-50"
                      onClick={() => window.open('mailto:hello@radiantagility.tech?subject=Corporate Training Info Pack Request&body=Please send me the corporate training information pack for the Agile Army program.', '_blank')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Info Pack
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 text-center text-gray-600">
        <p>© 2025 Radiant Agility Tech | radiantagility.tech</p>
      </footer>
    </div>
  );
}