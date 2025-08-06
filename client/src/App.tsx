import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ChatWidget from "./components/widgets/ChatWidget";
import ZoeChat from "./components/widgets/ZoeChat";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminInquiries from "./pages/AdminInquiries";
import AdminInquiryDetail from "./pages/AdminInquiryDetail";
import AdminLeads from "./pages/AdminLeads";
import SafeTraining from "./pages/SafeTraining";
import SafeTrainingDetail from "./pages/SafeTrainingDetail";
import CareerChange from "./pages/CareerChange";
import AgileArmies from "./pages/AgileArmies";
import SafeSprint from "./pages/SafeSprint";
import Ventures from "./pages/Ventures";
import ThankYouJuly19 from "./pages/ThankYouJuly19";
import ThankYouJuly26 from "./pages/ThankYouJuly26";
import ThankYouPopm from "./pages/ThankYouPopm";
import ThankYouWaitlist from "./pages/ThankYouWaitlist";
import ValueFirstAssessment from "./pages/ValueFirstAssessment";
import TechRolesGuide from "./pages/TechRolesGuide";
import AiCiToolkit from "./pages/AiCiToolkit";
import DodToolkit from "./pages/DodToolkit";
import DodTemplate from "./pages/DodTemplate";
import DodPrompts from "./pages/DodPrompts";
import FlowBingo from "./pages/FlowBingo";
import EpicToolkit from "./pages/EpicToolkit";
import FlowToolkit from "./pages/FlowToolkit";
import AffiliateProgram from "./pages/AffiliateProgram";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/safe-training" component={SafeTraining} />
      <Route path="/safe-training/:id" component={SafeTrainingDetail} />
      <Route path="/career-change" component={CareerChange} />
      <Route path="/agile-armies" component={AgileArmies} />
      <Route path="/safe-sprint" component={SafeSprint} />
      <Route path="/products" component={Ventures} />
      <Route path="/thank-you-july19.html" component={ThankYouJuly19} />
      <Route path="/thank-you-july26.html" component={ThankYouJuly26} />
      <Route path="/thank-you-popm" component={ThankYouPopm} />
      <Route path="/thank-you-pomp" component={ThankYouPopm} />
      <Route path="/thank-you-waitlist" component={ThankYouWaitlist} />
      <Route path="/value-first-assessment" component={ValueFirstAssessment} />
      <Route path="/free" component={TechRolesGuide} />
      <Route path="/ai-ci-toolkit" component={AiCiToolkit} />
      <Route path="/definition-of-done-toolkit" component={DodToolkit} />
      <Route path="/dod-template" component={DodTemplate} />
      <Route path="/dod-prompts" component={DodPrompts} />
      <Route path="/flow-bingo" component={FlowBingo} />
      <Route path="/epic-toolkit" component={EpicToolkit} />
      <Route path="/flow-toolkit" component={FlowToolkit} />
      <Route path="/affiliate" component={AffiliateProgram} />
      <Route path="/admin/inquiries" component={AdminInquiries} />
      <Route path="/admin/inquiries/:id" component={AdminInquiryDetail} />
      <Route path="/admin/leads" component={AdminLeads} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
        <ChatWidget />
        <ZoeChat />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
