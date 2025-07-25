import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Home, Mail, Bell } from "lucide-react";
import { Link } from "wouter";

export default function ThankYouWaitlist() {
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
              ✅ You're on the Waitlist!
            </h1>
            <p className="text-xl text-gray-600">
              We'll notify you as soon as spots become available
            </p>
          </div>

          {/* Confirmation Card */}
          <Card className="border-2 border-purple-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                🎯 What Happens Next?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                  <Bell className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Priority Notification:</span>
                    <p className="text-gray-700 mt-1">
                      You'll be the first to know when spots open up or additional seats are added to your preferred session.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Email Updates:</span>
                    <p className="text-gray-700 mt-1">
                      Check your inbox for a confirmation email and future notifications about available seats.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">⚡ Pro Tip</h3>
                <p className="text-yellow-700">
                  Spots fill up quickly! When we notify you of availability, register within 24 hours to secure your seat.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card>
            <CardContent className="p-6">
              <div className="text-center space-y-3">
                <h3 className="font-semibold text-gray-900">Questions or Need Help?</h3>
                <p className="text-gray-700">
                  Contact our team at{" "}
                  <a 
                    href="mailto:support@radiantagility.tech" 
                    className="text-purple-600 hover:text-purple-700 underline"
                  >
                    support@radiantagility.tech
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/safe-training" className="flex-1">
              <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 py-3">
                Browse Other Courses
              </Button>
            </Link>
            
            <Link href="/" className="flex-1">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
                <Home className="h-4 w-4 mr-2" />
                Return to Homepage
              </Button>
            </Link>
          </div>

          {/* Additional Courses Promo */}
          <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                🚀 Don't Wait - Start Learning Today!
              </h3>
              <p className="text-gray-700 mb-4">
                While you're on the waitlist, check out our other available SAFe certification courses with immediate enrollment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/safe-training/safe-agilist">
                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                    SAFe Agilist Course →
                  </Button>
                </Link>
                <Link href="/safe-training/safe-popm">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    SAFe POPM Course →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}