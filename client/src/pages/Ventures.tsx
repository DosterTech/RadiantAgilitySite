import { motion } from "framer-motion";
import { ExternalLink, Download, Rocket, TrendingUp, Target, DollarSign } from "lucide-react";

const products = [
  {
    emoji: "🍽️",
    name: "ReelBite (ReelBite Inc.)",
    description: "Mood-based food discovery powered by social reels. Crave IQ™ helps users match with restaurants and foodie friends.",
    monetization: "Subscriptions, affiliate deals, partner integrations"
  },
  {
    emoji: "🧠",
    name: "SimStack",
    description: "Role-based Agile simulations for Scrum Masters, Product Owners, and DevOps professionals. Adaptive scoring + AI coaching.",
    monetization: "B2B licensing, L&D platform sales"
  },
  {
    emoji: "📈",
    name: "ZinnFluence",
    description: "Dual-mode Chrome CRM for influencers and brands to manage outreach, DMs, campaigns, and smart templates.",
    monetization: "Pro plan subscription, brand partnerships"
  },
  {
    emoji: "💼",
    name: "Smart Job Hunter",
    description: "Job-seeking browser extension that autofills applications, creates AI cover letters, and tracks the entire process.",
    monetization: "Freemium + Pro extension sales"
  },
  {
    emoji: "🧘",
    name: "PlanFuel",
    description: "Wellness-driven digital planner and journal with vision boards, weekly goals, and habit tracking.",
    monetization: "Low-cost subscriptions"
  },
  {
    emoji: "🤖",
    name: "ZinnBots",
    description: "Custom-branded AI chatbots for lead capture, sales, and onboarding — tailored for small businesses and service pros.",
    monetization: "SaaS license + setup service"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">{product.emoji}</span>
                  {product.name}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-sm text-gray-800">
                    <span className="font-semibold text-purple-700">Monetization:</span> {product.monetization}
                  </p>
                </div>
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