import { motion } from "framer-motion";
import { ExternalLink, Download, Rocket, TrendingUp, Target, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import reelBiteLogo from "@assets/ReelBite logo_1752760777177.png";

const products = [
  {
    emoji: "🍽️",
    name: "ReelBite",
    company: "(ReelBite Inc.)",
    tagline: "Crave better. Discover meals from the reels you love.",
    description: "ReelBite is a mood-based food discovery app powered by social media reels. Users create a Crave IQ™ taste profile, sync saved videos from Instagram or TikTok, and instantly get matched with top-rated restaurants. ReelBite blends AI recommendations, viral food content, and real-time trip planning — turning foodie inspiration into curated experiences.",
    monetization: "Subscriptions, affiliate revenue, and restaurant partnerships",
    status: "Delaware C-Corp. Currently raising funds.",
    cta: "Join Waitlist",
    logo: "@assets/ReelBite logo_1752760777177.png"
  },
  {
    emoji: "🧠",
    name: "SimStack",
    tagline: "Train Agile roles through real-world scenarios.",
    description: "SimStack is an AI-powered simulation platform that helps professionals master Agile roles through hands-on decision-making. Designed for Scrum Masters, Product Owners, and DevOps professionals, SimStack delivers adaptive case studies, branching logic, and personalized coaching — all aligned with SAFe and Scrum certifications.",
    monetization: "B2B licensing, bootcamp partnerships, LMS integration",
    status: "Live MVP | Partnering with agile educators",
    cta: "View Demo"
  },
  {
    emoji: "📈",
    name: "ZinnFluence",
    tagline: "Influencer CRM reimagined for creators and marketers.",
    description: "ZinnFluence is a dual-mode Chrome extension that helps marketers manage influencer campaigns and helps creators track brand outreach. The tool features a smart CRM, pitch templates, DM tracking, team collaboration, and AI contract generation — all in a lightweight UI that supports both solo creators and small brand teams.",
    monetization: "Pro plan subscription, brand-side B2B sales",
    status: "Beta live | Chrome Store launch pending",
    cta: "Join Beta"
  },
  {
    emoji: "💼",
    name: "Smart Job Hunter",
    tagline: "From click to career — simplified.",
    description: "Smart Job Hunter is a browser extension that transforms the job search process. It auto-fills job applications, generates tailored AI cover letters, tracks opportunities, and scans resumes for keyword optimization. Built for job seekers, students, and career switchers, the tool eliminates busywork and boosts application success rates.",
    monetization: "Freemium model with Pro upgrade",
    status: "Alpha build complete",
    cta: "Join Early Access"
  },
  {
    emoji: "🧘",
    name: "PlanFuel",
    tagline: "Reflect, reset, and plan with intention.",
    description: "PlanFuel is a productivity app that blends journaling, vision boarding, and weekly goal setting. Designed for creatives and mindful planners, it offers mood tracking, visualization tools, and easy-to-use planning flows. PlanFuel promotes balance, wellness, and progress in an elegant, low-friction interface.",
    monetization: "Subscription (monthly/yearly)",
    status: "Public MVP live | Available via app stores",
    cta: "Start Free Trial"
  },
  {
    emoji: "🤖",
    name: "ZinnBots",
    tagline: "Your brand. Your bot. No code needed.",
    description: "ZinnBots offers white-labeled AI chat agents for small businesses, coaches, and creators. Each bot can be customized with brand voice, sales flows, onboarding logic, and lead capture automations — all without writing code. Powered by GPT-4 and styled for each use case, ZinnBots serve as a smart front door for digital businesses.",
    monetization: "SaaS license + setup service fees",
    status: "Internal client use | Commercial rollout in progress",
    cta: "Get a Custom Bot"
  }
];

const marketMetrics = [
  { icon: "🌍", label: "TAM", value: "$90B+", description: "across AI tools, EdTech, and FoodTech" },
  { icon: "🎯", label: "SAM", value: "$10B", description: "in highly targeted SaaS segments for SMBs, creators, and learners" },
  { icon: "🚀", label: "SOM", value: "$15M–$20M", description: "ARR within 3 years via direct sales, partner deals, and freemium funnels" }
];

const arrProjections = [
  { product: "Total ARR Goal", amount: "$6.5M+", highlight: true },
  { product: "ReelBite Inc.", amount: "$1.2M+", description: "via subscriptions + affiliate revenue" },
  { product: "Radiant Agility Products", amount: "$5.3M+", description: "across SimStack, ZinnFluence, Smart Job Hunter, PlanFuel, and ZinnBots" }
];

export default function Ventures() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
              <Rocket className="text-purple-600" size={48} />
              Our Products & Vision
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Radiant Agility Technology is a SaaS innovation lab building high-impact tools across AI, food tech, edtech, and productivity. Below are the core products powering our revenue and investor interest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                {/* Logo and Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                    {product.logo ? (
                      <img src={reelBiteLogo} alt={`${product.name} logo`} className="w-12 h-12 object-contain" />
                    ) : (
                      <span className="text-2xl">{product.emoji}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {product.name}
                      {product.company && <span className="text-sm font-normal text-gray-600 ml-1">{product.company}</span>}
                    </h3>
                    <p className="text-purple-600 font-medium text-sm mb-3">{product.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                  {product.description}
                </p>

                {/* Status */}
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-green-800">
                    <span className="font-semibold">Status:</span> {product.status}
                  </p>
                </div>

                {/* Monetization */}
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-purple-800">
                    <span className="font-semibold">Monetization:</span> {product.monetization}
                  </p>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300"
                >
                  {product.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
              <TrendingUp className="text-purple-600" size={40} />
              Market Opportunity
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We build at the intersection of fast-growing markets: AI, food discovery, career tools, and Agile learning. Our multi-product strategy opens access to diverse, scalable revenue streams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {marketMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
              >
                <div className="text-4xl mb-3">{metric.icon}</div>
                <div className="text-sm font-semibold text-gray-600 mb-2">{metric.label}</div>
                <div className="text-2xl font-bold text-purple-600 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-700">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ARR Projections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
              <DollarSign className="text-green-600" size={36} />
              ARR Projection (Year 2)
            </h3>
          </motion.div>

          <div className="space-y-4">
            {arrProjections.map((projection, index) => (
              <motion.div
                key={projection.product}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl p-6 border ${
                  projection.highlight 
                    ? 'bg-purple-50 border-purple-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-2 md:mb-0">
                    <span className="font-semibold text-gray-900">{projection.product}:</span>
                    {projection.description && (
                      <span className="text-gray-700 ml-2">{projection.description}</span>
                    )}
                  </div>
                  <div className={`text-xl font-bold ${
                    projection.highlight ? 'text-purple-600' : 'text-green-600'
                  }`}>
                    {projection.amount}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Ready to Learn More About Our Vision?
            </h3>
            <a
              href="/pitchdeck.pdf"
              className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              <Download size={20} />
              Download Investor Pitch Deck
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}