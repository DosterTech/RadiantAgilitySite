import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Check, Users, Award, Target, TrendingUp, Phone } from 'lucide-react';

export default function AgileArmies() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
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
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Private SAFe Certification for Teams & Enterprises
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold"
          >
            <Phone className="mr-2 h-5 w-5" />
            Book a Free Discovery Call
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Train With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Users, text: "Live private SAFe cohorts for your teams" },
              { icon: Target, text: "Free Agile team health assessment" },
              { icon: Award, text: "Product Owner & Scrum Master bundle options" },
              { icon: TrendingUp, text: "Enterprise-wide discount tiers" },
              { icon: Check, text: "Taught by a Certified SAFe Practice Consultant (SPC)" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-gray-700 font-medium">{feature.text}</p>
              </div>
            ))}
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
                <Badge variant="outline" className="w-fit mx-auto mb-2">Team Training</Badge>
                <CardTitle className="text-xl text-purple-600">Core Team Boost</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  10 Scrum Masters<br />
                  + Certification
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Live virtual training</p>
                  <p>• SAFe 6.0 materials</p>
                  <p>• Exam vouchers included</p>
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
                  8 Product Owners<br />
                  + Certification
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Strategic planning focus</p>
                  <p>• Leadership coaching</p>
                  <p>• Enterprise alignment</p>
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
                  10 SMs + 8 POs<br />
                  + Team Coaching
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Complete transformation</p>
                  <p>• 3-month support</p>
                  <p>• Custom workshops</p>
                </div>
              </CardContent>
            </Card>
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

      {/* Contact Form */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Let's Talk
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form and we'll follow up within 24 hours.
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
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? 'Submitting...' : 'Request Info'}
                  </Button>
                </form>
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