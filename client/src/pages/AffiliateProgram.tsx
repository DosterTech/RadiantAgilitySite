import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Users,
  Share2,
  DollarSign,
  CheckCircle,
  Star,
  TrendingUp,
  Calendar,
  Shield,
  Award,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Link as LinkIcon,
  BarChart3,
  Gift,
  Zap
} from 'lucide-react';

export default function AffiliateProgram() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const steps = [
    {
      icon: Users,
      title: "Sign Up & Get Your Link",
      description: "Join our affiliate program and receive your unique tracking link within 24 hours."
    },
    {
      icon: Share2,
      title: "Share with Your Audience",
      description: "Promote our SAFe certification courses through your blog, social media, or email list."
    },
    {
      icon: DollarSign,
      title: "Earn $25 Per Registration",
      description: "Get paid for every successful course registration through your affiliate link."
    }
  ];

  const perks = [
    {
      icon: Gift,
      title: "Exclusive Content & Graphics",
      description: "Access shareable content, course graphics, and promotional materials designed for affiliates."
    },
    {
      icon: BarChart3,
      title: "Track Performance",
      description: "Monitor your clicks, conversions, and earnings through our affiliate dashboard."
    },
    {
      icon: Zap,
      title: "Early Access",
      description: "Get first access to new training offers, course launches, and special promotions."
    },
    {
      icon: Award,
      title: "Featured Partner Recognition",
      description: "Top performers get featured on our website and social media (optional)."
    }
  ];

  const faqs = [
    {
      question: "How do I get my affiliate link?",
      answer: "After approval, you'll receive your unique tracking link within 24 hours via email. This link tracks all referrals and ensures you get credit for every conversion."
    },
    {
      question: "When are commissions paid?",
      answer: "Commissions are paid monthly via PayPal or Stripe. There's a 30-day hold period after the course purchase to account for any refunds or cancellations."
    },
    {
      question: "What courses are eligible for commissions?",
      answer: "All paid SAFe certification courses are eligible, including Scrum Master, Product Owner/Product Manager, and SAFe Agilist classes. Free resources and lead magnets are not eligible."
    },
    {
      question: "Can I promote via social media or email?",
      answer: "Yes! You can promote through any ethical marketing channel including social media, email lists, blogs, websites, or personal recommendations. Spam or misleading advertising is prohibited."
    },
    {
      question: "Is there a minimum payout threshold?",
      answer: "Yes, the minimum payout is $50. If you don't reach this threshold in a month, your earnings roll over to the next month until you reach the minimum."
    },
    {
      question: "How do I track my performance?",
      answer: "You'll have access to a real-time dashboard showing clicks, conversions, pending commissions, and payment history. We also send monthly performance reports."
    },
    {
      question: "Can I offer discounts to my audience?",
      answer: "We occasionally provide affiliate-exclusive discount codes for special promotions. Regular pricing should be maintained to ensure fair competition among affiliates."
    },
    {
      question: "What support do you provide to affiliates?",
      answer: "We provide marketing materials, course information, promotional calendars, and dedicated affiliate support. You'll also get early notice of new courses and special offers."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* SEO Meta Tags - these would be handled by the React Helmet component */}
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Affiliate Program
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Partner with 
              <span className="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent"> Radiant Agility</span>
              <br />– Earn When You Share
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Promote industry-leading SAFe certification courses and earn every time someone signs up using your link.
            </p>
            
            {/* Commission Highlight */}
            <div className="bg-gradient-to-r from-purple-600 to-red-500 text-white p-6 rounded-2xl mb-8 max-w-2xl mx-auto">
              <div className="text-3xl font-bold mb-2">$25 Commission</div>
              <div className="text-lg opacity-90">Per successful course registration</div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-700 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Apply Now
            </Button>
            
            <p className="text-sm text-gray-500 mt-4">
              Join 50+ active affiliates earning with Radiant Agility
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">Simple steps to start earning with our affiliate program</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commission & Payouts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Commission & Payouts</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-purple-200">
                <CardContent className="p-8">
                  <div className="text-center">
                    <DollarSign className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Commission Structure</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-2">$25</div>
                    <p className="text-gray-600 mb-4">
                      Earn $25 for each successful referral to our Scrum Master or Product Owner class.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Eligible Courses:</strong> All paid SAFe certification classes including 
                        Scrum Master, Product Owner/Product Manager, and SAFe Agilist courses.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-green-200">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Calendar className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h3>
                    <div className="space-y-4 text-left">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Monthly Payouts</div>
                          <div className="text-sm text-gray-600">Paid via PayPal or Stripe</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">30-Day Hold Period</div>
                          <div className="text-sm text-gray-600">Protection against refunds</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">$50 Minimum</div>
                          <div className="text-sm text-gray-600">Earnings roll over until threshold met</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Perks Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Affiliate Perks</h2>
              <p className="text-xl text-gray-600">Everything you need to succeed as our partner</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <perk.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{perk.title}</h3>
                    <p className="text-sm text-gray-600">{perk.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about our affiliate program</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Earning?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join our affiliate program today and start earning $25 for every course referral.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <LinkIcon className="w-5 h-5 mr-2" />
                Become an Affiliate
              </Button>
              
              <div className="text-center sm:text-left">
                <div className="text-lg font-semibold">Questions?</div>
                <div className="opacity-90">Contact us at affiliates@radiantagility.tech</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="opacity-90">Active Affiliates</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">$12,500+</div>
                  <div className="opacity-90">Paid in Commissions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">95%</div>
                  <div className="opacity-90">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}