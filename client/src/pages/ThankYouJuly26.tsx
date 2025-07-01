import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Clock, Mail, Users } from "lucide-react";

export default function ThankYouJuly26() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card className="shadow-xl border-purple-200">
          <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold mb-2">
              Registration Confirmed!
            </CardTitle>
            <p className="text-purple-100 text-lg">
              Thank you for registering for the SAFe Scrum Master Certification Course
            </p>
          </CardHeader>
          
          <CardContent className="p-8 space-y-6">
            {/* Course Details */}
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Course Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge className="bg-purple-600 text-white">
                    Certified SAFe Scrum Master (SSM)
                  </Badge>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  <span className="font-medium">July 26–27, 2025</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span>2-Day Intensive Training (16 hours)</span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Mail className="h-5 w-5 text-purple-600" />
                What Happens Next?
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        Email Confirmation
                      </p>
                      <p className="text-gray-600 text-sm">
                        You'll receive your Zoom link and course materials via email within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        Pre-Course Preparation
                      </p>
                      <p className="text-gray-600 text-sm">
                        Review the pre-course materials to maximize your learning experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        Join the Course
                      </p>
                      <p className="text-gray-600 text-sm">
                        Use your Zoom link to join the live training sessions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-800 text-sm">
                <strong>Important:</strong> Please check your spam/junk folder if you don't see our email within 24 hours. 
                Add hello@radiantagility.tech to your contacts to ensure you receive all course communications.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.location.href = '/safe-training'}
              >
                View All Courses
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-50"
                onClick={() => window.open('mailto:hello@radiantagility.tech?subject=SAFe Scrum Master Course - Support Request', '_blank')}
              >
                Contact Support
              </Button>
            </div>

            {/* Footer */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm mb-2">
                Questions about your registration?
              </p>
              <p className="text-purple-600 font-medium">
                hello@radiantagility.tech
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}