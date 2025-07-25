import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Mail, CheckCircle, Home } from "lucide-react";
import { Link } from "wouter";

export default function ThankYouPopm() {
  const handleAddToCalendar = () => {
    const startDate = new Date('2025-08-23T16:00:00Z'); // 12 PM EST = 4 PM UTC
    const endDate = new Date('2025-08-24T00:00:00Z'); // 8 PM EST = 12 AM UTC next day
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=SAFe%20POPM%20Certification%20Class&dates=${startDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}/${endDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}&details=SAFe%20Product%20Owner%20/%20Product%20Manager%20Certification%20Class%20with%20Radiant%20Agility&location=Live%20via%20Zoom`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          
          {/* Success Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              🎉 You're Officially Registered!
            </h1>
            <p className="text-xl text-gray-600">
              Welcome to the SAFe® Product Owner / Product Manager Certification Class
            </p>
          </div>

          {/* Class Details Card */}
          <Card className="border-2 border-purple-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                📅 Your Class Details
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  <div>
                    <span className="font-semibold text-gray-900">Date:</span>
                    <span className="ml-2 text-gray-700">August 23–24, 2025</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <span className="font-semibold text-gray-900">Time:</span>
                    <span className="ml-2 text-gray-700">12 PM – 8 PM EST</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <div>
                    <span className="font-semibold text-gray-900">Location:</span>
                    <span className="ml-2 text-gray-700">Live via Zoom (link will be emailed)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">✅ What's next?</h3>
                <p className="text-yellow-700">
                  Check your inbox for confirmation, Zoom details, and class prep materials within the next 10 minutes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Email Reminder */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📩 Email Reminder</h3>
                  <p className="text-gray-700 mb-2">
                    Be sure to check your <strong>Spam or Promotions</strong> folder if you don't see the email right away.
                  </p>
                  <p className="text-gray-700">
                    If you have any issues, email: <a href="mailto:support@radiantagility.tech" className="text-purple-600 hover:text-purple-700 underline">support@radiantagility.tech</a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleAddToCalendar}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Add to Calendar
            </Button>
            
            <Link href="/" className="flex-1">
              <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 py-3">
                <Home className="h-4 w-4 mr-2" />
                Return to Homepage
              </Button>
            </Link>
          </div>

          {/* Optional Promo Section */}
          <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                🚀 Want to go even further?
              </h3>
              <p className="text-gray-700 mb-4">
                Join our SAFe Scrum Master class or explore bundle pricing for dual certifications.
              </p>
              <Link href="/safe-training">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  Explore More Courses →
                </Button>
              </Link>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}