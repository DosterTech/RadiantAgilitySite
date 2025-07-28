import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Target, BarChart3, RefreshCw, Lightbulb, ArrowRight, Download, Share } from 'lucide-react';
import { Helmet } from 'react-helmet';

const ValueFirstAssessment = () => {
  const [currentStep, setCurrentStep] = useState('intro'); // intro, assessment, results
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [score, setScore] = useState(0);
  const [resultLevel, setResultLevel] = useState('');
  const { toast } = useToast();

  const questions = [
    {
      section: "Value Definition & Alignment",
      icon: <Target className="h-6 w-6" />,
      questions: [
        {
          id: "q1",
          text: "How clearly can your team articulate the customer value of their current work?",
          options: [
            { value: 1, text: "We focus on completing tickets, not customer outcomes" },
            { value: 2, text: "Some team members can explain value, but it's inconsistent" },
            { value: 3, text: "Everyone can clearly connect their work to customer outcomes" }
          ]
        },
        {
          id: "q2", 
          text: "How often do stakeholders change priorities mid-sprint?",
          options: [
            { value: 1, text: "Constantly - priorities shift multiple times per sprint" },
            { value: 2, text: "Occasionally - maybe once per sprint with good reasons" },
            { value: 3, text: "Rarely - we have clear, stable value-based priorities" }
          ]
        }
      ]
    },
    {
      section: "Measurement & Feedback",
      icon: <BarChart3 className="h-6 w-6" />,
      questions: [
        {
          id: "q3",
          text: "What metrics does your team primarily track?",
          options: [
            { value: 1, text: "Velocity, story points, and burndown charts" },
            { value: 2, text: "Mix of activity metrics and some outcome measures" },
            { value: 3, text: "Customer behavior, business outcomes, and impact metrics" }
          ]
        },
        {
          id: "q4",
          text: "How quickly do you get feedback on whether your work creates value?",
          options: [
            { value: 1, text: "Months later, if at all" },
            { value: 2, text: "Within a few weeks through various channels" },
            { value: 3, text: "Within days through direct customer feedback loops" }
          ]
        }
      ]
    },
    {
      section: "Delivery & Adaptation",
      icon: <RefreshCw className="h-6 w-6" />,
      questions: [
        {
          id: "q5",
          text: "When you discover a feature isn't working as expected, what happens?",
          options: [
            { value: 1, text: "We finish building it anyway - the plan is the plan" },
            { value: 2, text: "We sometimes adjust, but it requires approval processes" },
            { value: 3, text: "We immediately pivot based on data and customer feedback" }
          ]
        },
        {
          id: "q6",
          text: "How does your team approach feature releases?",
          options: [
            { value: 1, text: "Big bang releases with everything planned upfront" },
            { value: 2, text: "Regular releases but features are still built completely before testing" },
            { value: 3, text: "Early and frequent releases with MVPs and iterative improvements" }
          ]
        }
      ]
    },
    {
      section: "Learning & Experimentation",
      icon: <Lightbulb className="h-6 w-6" />,
      questions: [
        {
          id: "q7",
          text: "How often does your team run experiments or tests?",
          options: [
            { value: 1, text: "Never - we build what's requested" },
            { value: 2, text: "Occasionally when there's uncertainty" },
            { value: 3, text: "Regularly - experimentation is part of our process" }
          ]
        },
        {
          id: "q8",
          text: "What happens when a project fails or doesn't meet expectations?",
          options: [
            { value: 1, text: "We blame external factors and move to the next project" },
            { value: 2, text: "We do a post-mortem but lessons learned aren't always applied" },
            { value: 3, text: "We celebrate fast failures and apply learnings to improve our approach" }
          ]
        }
      ]
    }
  ];

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    setScore(totalScore);
    
    if (totalScore >= 8 && totalScore <= 12) {
      setResultLevel('activity-focused');
    } else if (totalScore >= 13 && totalScore <= 18) {
      setResultLevel('transitioning');
    } else if (totalScore >= 19 && totalScore <= 24) {
      setResultLevel('value-champions');
    }
    
    setCurrentStep('results');
  };

  const getResultContent = () => {
    switch(resultLevel) {
      case 'activity-focused':
        return {
          title: "Activity-Focused Teams",
          scoreRange: "8-12 points",
          description: "Your team is currently focused on completing tasks rather than delivering customer value.",
          color: "bg-red-50 border-red-200",
          textColor: "text-red-800",
          badgeColor: "bg-red-500",
          recommendations: [
            "Start measuring customer outcomes instead of just output metrics",
            "Implement regular customer feedback sessions",
            "Train the team on value stream mapping",
            "Establish clear definition of value for each work item"
          ]
        };
      case 'transitioning':
        return {
          title: "Transitioning Teams", 
          scoreRange: "13-18 points",
          description: "Your team is making progress toward value-driven practices but has room for improvement.",
          color: "bg-orange-50 border-orange-200",
          textColor: "text-orange-800", 
          badgeColor: "bg-orange-500",
          recommendations: [
            "Strengthen customer feedback loops",
            "Implement experimentation frameworks",
            "Improve measurement of business outcomes",
            "Enhance stakeholder alignment on value priorities"
          ]
        };
      case 'value-champions':
        return {
          title: "Value-First Champions",
          scoreRange: "19-24 points", 
          description: "Congratulations! Your team demonstrates strong value-first practices.",
          color: "bg-green-50 border-green-200",
          textColor: "text-green-800",
          badgeColor: "bg-green-500",
          recommendations: [
            "Share your practices with other teams",
            "Explore advanced experimentation techniques", 
            "Mentor other teams in value-driven development",
            "Continuously refine your value measurement approach"
          ]
        };
      default:
        return {
          title: "Assessment Incomplete",
          scoreRange: "",
          description: "",
          color: "bg-gray-50 border-gray-200",
          textColor: "text-gray-800",
          badgeColor: "bg-gray-500", 
          recommendations: []
        };
    }
  };

  const handleStartAssessment = () => {
    if (!userInfo.name || !userInfo.email) {
      toast({
        title: "Information Required",
        description: "Please provide your name and email to continue.",
        variant: "destructive"
      });
      return;
    }
    setCurrentStep('assessment');
  };

  const allQuestionsAnswered = () => {
    return questions.every(section => 
      section.questions.every(q => answers[q.id] !== undefined)
    );
  };

  const resultContent = getResultContent();

  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Helmet>
          <title>Free Agile Assessment - Value-First Team Evaluation | Radiant Agility</title>
          <meta name="description" content="Take our free Value-First Agile Assessment. Discover if your team is trapped in feature factory mode or delivering real customer value. Get personalized recommendations in 5 minutes." />
          <meta name="keywords" content="agile assessment, value delivery, team evaluation, agile transformation, feature factory, customer value" />
        </Helmet>

        {/* Hero Section */}
        <section className="radiant-gradient-bg text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Are Your Teams Building the Right Things?
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Discover how effectively your agile team delivers customer value with our free 5-minute assessment
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                The Hidden Challenge Every Agile Team Faces
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">Feature Factory Mode</h3>
                    <ul className="space-y-2 text-red-700">
                      <li>• Teams focus on output over outcomes</li>
                      <li>• Success measured by tickets closed</li>
                      <li>• Limited customer feedback loops</li>
                      <li>• Features built without validation</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Value-Driven Teams</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• Clear connection to customer outcomes</li>
                      <li>• Success measured by impact</li>
                      <li>• Regular experimentation and learning</li>
                      <li>• Fast feedback and adaptation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center bg-gray-100 p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  <strong>70% of agile teams</strong> are stuck in feature factory mode, building busy work instead of valuable outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Value-First Agile Assessment
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Get personalized insights into your team's value delivery capabilities
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">8 targeted questions across 4 critical areas</h3>
                      <p className="text-gray-600">Comprehensive evaluation of your value delivery practices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Interactive scoring with immediate results</h3>
                      <p className="text-gray-600">Get your assessment results instantly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Personalized recommendations</h3>
                      <p className="text-gray-600">Actionable steps based on your specific score</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Professional design optimized for all devices</h3>
                      <p className="text-gray-600">Take the assessment on desktop, tablet, or mobile</p>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Start Your Assessment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={userInfo.name}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <Button 
                      onClick={handleStartAssessment}
                      className="w-full radiant-primary-gradient text-white"
                    >
                      Take the Assessment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Four Critical Areas We Evaluate
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {questions.map((section, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg radiant-primary-gradient text-white flex items-center justify-center">
                          {section.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{section.section}</h3>
                      </div>
                      <p className="text-gray-600">
                        {section.section === "Value Definition & Alignment" && "How well does your team understand and align on customer value?"}
                        {section.section === "Measurement & Feedback" && "What metrics do you track and how quickly do you get feedback?"}
                        {section.section === "Delivery & Adaptation" && "How effectively does your team adapt based on learning?"}
                        {section.section === "Learning & Experimentation" && "How well does your team embrace experimentation and learning?"}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Your Personalized Results
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-red-200">
                  <CardContent className="pt-6 text-center">
                    <Badge className="bg-red-500 text-white mb-4">8-12 points</Badge>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Activity-Focused Teams</h3>
                    <p className="text-sm text-red-600">Teams focused on completing tasks rather than delivering customer value</p>
                  </CardContent>
                </Card>
                <Card className="border-orange-200">
                  <CardContent className="pt-6 text-center">
                    <Badge className="bg-orange-500 text-white mb-4">13-18 points</Badge>
                    <h3 className="text-lg font-semibold text-orange-800 mb-2">Transitioning Teams</h3>
                    <p className="text-sm text-orange-600">Making progress toward value-driven practices with room for improvement</p>
                  </CardContent>
                </Card>
                <Card className="border-green-200">
                  <CardContent className="pt-6 text-center">
                    <Badge className="bg-green-500 text-white mb-4">19-24 points</Badge>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Value-First Champions</h3>
                    <p className="text-sm text-green-600">Demonstrates strong value-first practices and customer focus</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 radiant-primary-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your team from busy to valuable?</h2>
            <p className="text-xl mb-8 opacity-90">Get your personalized assessment results and actionable recommendations</p>
            <Button 
              onClick={handleStartAssessment}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Start Assessment Now
            </Button>
          </div>
        </section>
      </div>
    );
  }

  if (currentStep === 'assessment') {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Value-First Agile Assessment</h1>
              <p className="text-gray-600">Answer honestly for the most accurate insights</p>
            </div>

            <div className="space-y-8">
              {questions.map((section, sectionIndex) => (
                <Card key={sectionIndex} className="border-2 hover:border-purple-300 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-purple-700">
                      <div className="w-8 h-8 rounded-lg radiant-primary-gradient text-white flex items-center justify-center">
                        {section.icon}
                      </div>
                      {section.section}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {section.questions.map((question, questionIndex) => (
                      <div key={question.id} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-4">{question.text}</h4>
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <label 
                              key={optionIndex}
                              className="flex items-start gap-3 p-3 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:border-purple-300 transition-colors"
                            >
                              <input
                                type="radio"
                                name={question.id}
                                value={option.value}
                                checked={answers[question.id] === option.value}
                                onChange={() => handleAnswerChange(question.id, option.value)}
                                className="mt-1 text-purple-600"
                              />
                              <span className="text-gray-700">{option.text}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                onClick={calculateScore}
                disabled={!allQuestionsAnswered()}
                size="lg"
                className="radiant-primary-gradient text-white px-8 py-3"
              >
                Get My Results
              </Button>
              {!allQuestionsAnswered() && (
                <p className="text-sm text-gray-500 mt-2">Please answer all questions to see your results</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'results') {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Assessment Results</h1>
              <div className="text-6xl font-bold text-purple-600 mb-2">{score}/24</div>
              <p className="text-gray-600">Thank you, {userInfo.name}! Here are your personalized results.</p>
            </div>

            <Card className={`${resultContent.color} border-2 mb-8`}>
              <CardContent className="pt-6 text-center">
                <Badge className={`${resultContent.badgeColor} text-white text-lg px-4 py-2 mb-4`}>
                  {resultContent.scoreRange}
                </Badge>
                <h2 className={`text-2xl font-bold ${resultContent.textColor} mb-4`}>
                  {resultContent.title}
                </h2>
                <p className={`text-lg ${resultContent.textColor} opacity-80`}>
                  {resultContent.description}
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  Personalized Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {resultContent.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span className="text-gray-700">{rec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Button className="radiant-primary-gradient text-white">
                <Download className="mr-2 h-4 w-4" />
                Download Results PDF
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600">
                <Share className="mr-2 h-4 w-4" />
                Share Results
              </Button>
            </div>

            <Card className="radiant-primary-gradient text-white">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Transform Your Team?</h3>
                <p className="mb-6 opacity-90">
                  Get expert guidance to move from activity-focused to value-driven development
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
                    Schedule Free Consultation
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-purple-600">
                    Explore SAFe Training
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
};

export default ValueFirstAssessment;