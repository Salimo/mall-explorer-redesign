/*
 * DESIGN: Mall Explorer - Cartographic Modernism
 * - Professional B2B + B2C dual messaging
 * - Asymmetric layouts (60/40, 70/30)
 * - Mint accent (#00D9B1) for CTAs
 * - Navy primary (#0F172A)
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Navigation, 
  Store, 
  Sparkles, 
  Tag, 
  ChevronRight,
  Smartphone,
  Building2,
  Clock,
  ArrowRight,
  BarChart3,
  TrendingUp,
  Users,
  Search,
  Target,
  Zap,
  CheckCircle2
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

// Mall data - updated with new malls
const malls = [
  {
    id: "abu-dhabi-mall",
    name: "Abu Dhabi Mall",
    location: "Tourist Club Area, Abu Dhabi",
    description: "The heart of the city - iconic shopping destination with luxury brands and dining options.",
    image: "/images/abu-dhabi-mall.jpg",
    stores: 200,
    floors: 3,
    features: ["Luxury Brands", "Restaurants", "Entertainment"],
    status: "live",
  },
  {
    id: "yas-mall",
    name: "Yas Mall",
    location: "Yas Island, Abu Dhabi",
    description: "Abu Dhabi's biggest shopping center with 366+ brands across fashion, dining, and entertainment.",
    image: "/images/yas-mall.jpg",
    stores: 366,
    floors: 3,
    features: ["IMAX Cinema", "Food Court", "Kids Zone"],
    status: "coming-soon",
  },
  {
    id: "galleria-mall",
    name: "The Galleria Mall",
    location: "Al Maryah Island, Abu Dhabi",
    description: "Premium luxury destination featuring world-class brands and waterfront dining experiences.",
    image: "/images/mall-experience.jpg",
    stores: 130,
    floors: 2,
    features: ["Luxury Shopping", "Fine Dining", "Waterfront"],
    status: "coming-soon",
  },
  {
    id: "marina-mall",
    name: "Marina Mall",
    location: "Corniche, Abu Dhabi",
    description: "Iconic waterfront shopping destination with panoramic views and diverse retail offerings.",
    image: "/images/hero-bg.jpg",
    stores: 400,
    floors: 4,
    features: ["Observation Deck", "Cinema", "Hypermarket"],
    status: "coming-soon",
  },
];

const features = [
  {
    icon: Store,
    title: "Mall Directory",
    description: "Browse complete store listings with categories, floor locations, and operating hours.",
  },
  {
    icon: Navigation,
    title: "Indoor Wayfinding",
    description: "Find the shop you're looking for 10x faster with turn-by-turn indoor navigation.",
  },
  {
    icon: Sparkles,
    title: "Events & What's New",
    description: "Discover new store openings, seasonal events, and mall happenings.",
  },
  {
    icon: Tag,
    title: "Deals & Promotions",
    description: "Real-time deals and discounts from stores across all partner malls.",
  },
];

const comparisonData = [
  { traditional: "Counts bodies", explorer: "Captures intent" },
  { traditional: "Knows how many entered", explorer: "Knows where they wanted to go" },
  { traditional: "Anonymous", explorer: "Can build opted-in profiles" },
  { traditional: "Hardware cost + maintenance", explorer: "Zero infrastructure" },
  { traditional: "No engagement channel", explorer: "Direct promo channel to shoppers" },
];

const demandMetrics = [
  { label: "Top searched stores", value: "10", icon: Search },
  { label: "Category insights", value: "5", icon: Target },
  { label: "Unmet demand signals", value: "34", icon: TrendingUp },
  { label: "Promo conversions tracked", value: "892", icon: BarChart3 },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/images/mall-explorer-logo.jpg" 
              alt="Mall Explorer" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="font-bold text-lg text-foreground">Mall Explorer</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#malls" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Malls
            </a>
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#insights" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              For Operators
            </a>
            <a href="#app" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Get App
            </a>
          </nav>
          
          <Button className="bg-[#00D9B1] hover:bg-[#00C4A0] text-[#0F172A] font-semibold">
            <Smartphone className="w-4 h-4 mr-2" />
            Download App
          </Button>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/hero-bg.jpg" 
              alt="Modern shopping mall interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent" />
          </div>
          
          {/* Content */}
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Left content - 60% */}
              <motion.div 
                className="lg:col-span-3 space-y-8"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="w-2 h-2 bg-[#00D9B1] rounded-full animate-pulse" />
                  <span className="text-sm text-white/90">Abu Dhabi Mall is now live</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
                  Explore malls
                  <br />
                  <span className="text-[#00D9B1]">like never before</span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                  Discover events, shops, and deals. Find the store you're looking for 
                  <strong className="text-[#00D9B1]"> 10x faster</strong> with indoor navigation.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="/mall/abu-dhabi-mall">
                    <Button 
                      size="lg" 
                      className="bg-[#00D9B1] hover:bg-[#00C4A0] text-[#0F172A] font-semibold h-14 px-8"
                    >
                      <Navigation className="w-5 h-5 mr-2" />
                      Start Exploring
                    </Button>
                  </Link>
                  <a href="#insights">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white/30 text-white hover:bg-white/10 h-14 px-8"
                    >
                      For Mall Operators
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                </div>
                
                {/* Stats */}
                <div className="flex gap-12 pt-8 border-t border-white/20">
                  <div>
                    <div className="text-3xl font-bold text-white">4</div>
                    <div className="text-sm text-white/60">Partner Malls</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">1,000+</div>
                    <div className="text-sm text-white/60">Stores Listed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">0</div>
                    <div className="text-sm text-white/60">Beacons Required</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Right content - 40% */}
              <motion.div 
                className="lg:col-span-2 hidden lg:block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  <img 
                    src="/images/wayfinding-illustration.png" 
                    alt="Mall Explorer app interface" 
                    className="w-full max-w-md mx-auto drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative path line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00D9B1] to-transparent opacity-50" />
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-background relative">
          <div className="container relative">
            <motion.div 
              className="text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 border-[#00D9B1] text-[#00D9B1]">
                For Shoppers
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Everything you need to
                <br />
                <span className="text-[#00D9B1]">explore with ease</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                From finding stores to discovering deals, Mall Explorer makes shopping effortless.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border hover:border-[#00D9B1] transition-colors group">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-[#00D9B1]/10 flex items-center justify-center group-hover:bg-[#00D9B1] transition-colors">
                        <feature.icon className="w-6 h-6 text-[#00D9B1] group-hover:text-[#0F172A] transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Malls Section */}
        <section id="malls" className="py-24 bg-secondary/30">
          <div className="container">
            <motion.div 
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <Badge variant="outline" className="mb-4 border-[#00D9B1] text-[#00D9B1]">
                  Partner Malls
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Explore Abu Dhabi's
                  <br />
                  <span className="text-[#00D9B1]">premier destinations</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-md">
                Indoor navigation available at these shopping centers. More locations coming soon.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {malls.map((mall, index) => (
                <motion.div
                  key={mall.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {mall.status === "live" ? (
                    <Link href={`/mall/${mall.id}`}>
                      <Card className="overflow-hidden h-full border-border hover:border-[#00D9B1] transition-all hover:shadow-xl group cursor-pointer">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={mall.image} 
                            alt={mall.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <Badge className="absolute top-3 right-3 bg-[#10B981] text-white">
                            Live
                          </Badge>
                          <div className="absolute bottom-3 left-3 right-3">
                            <h3 className="text-xl font-bold text-white">{mall.name}</h3>
                            <div className="flex items-center gap-1 text-white/80 text-sm">
                              <MapPin className="w-3 h-3" />
                              {mall.location}
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-4 space-y-3">
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Store className="w-4 h-4 text-[#00D9B1]" />
                              <span className="text-foreground font-medium">{mall.stores}+</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Building2 className="w-4 h-4 text-[#00D9B1]" />
                              <span className="text-foreground font-medium">{mall.floors} floors</span>
                            </div>
                          </div>
                          <div className="pt-2 border-t border-border">
                            <span className="inline-flex items-center text-[#00D9B1] font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                              Explore Now
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ) : (
                    <Card className="overflow-hidden h-full border-border opacity-80">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={mall.image} 
                          alt={mall.name}
                          className="w-full h-full object-cover grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                        <Badge className="absolute top-3 right-3 bg-amber-500 text-white">
                          Coming Soon
                        </Badge>
                        <div className="absolute bottom-3 left-3 right-3">
                          <h3 className="text-xl font-bold text-white">{mall.name}</h3>
                          <div className="flex items-center gap-1 text-white/80 text-sm">
                            <MapPin className="w-3 h-3" />
                            {mall.location}
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Store className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground font-medium">{mall.stores}+</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground font-medium">{mall.floors} floors</span>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-border">
                          <span className="text-muted-foreground text-sm">
                            Launching soon
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* B2B Insights Section */}
        <section id="insights" className="py-24 bg-[#0F172A] text-white">
          <div className="container">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-[#00D9B1] text-[#0F172A]">
                For Mall Operators
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Beyond footfall.
                <br />
                <span className="text-[#00D9B1]">Capture shopper intent.</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                Your footfall counters tell you how many people came. Our app tells you 
                <strong className="text-white"> what they were looking for</strong> — which stores they searched for, 
                which ones they couldn't find, and which promotions actually drove action.
              </p>
              <p className="text-lg text-[#00D9B1] font-semibold mt-4">
                Zero beacons, zero hardware — just insights from real shopper intent.
              </p>
            </motion.div>

            {/* Comparison Table */}
            <motion.div 
              className="max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                <div className="grid grid-cols-2 bg-white/10">
                  <div className="p-4 text-center font-semibold text-white/60">
                    Traditional Footfall Tech
                  </div>
                  <div className="p-4 text-center font-semibold text-[#00D9B1]">
                    Mall Explorer
                  </div>
                </div>
                {comparisonData.map((row, index) => (
                  <div key={index} className="grid grid-cols-2 border-t border-white/10">
                    <div className="p-4 text-white/60 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                      {row.traditional}
                    </div>
                    <div className="p-4 text-white font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00D9B1]" />
                      {row.explorer}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Monthly Demand Report Preview */}
            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Monthly Demand Report</h3>
                <p className="text-white/60">Sample insights from our analytics dashboard</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {demandMetrics.map((metric, index) => (
                  <Card key={index} className="bg-white/5 border-white/10">
                    <CardContent className="p-6 text-center">
                      <metric.icon className="w-8 h-8 text-[#00D9B1] mx-auto mb-3" />
                      <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-sm text-white/60">{metric.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-4">
                <div className="flex items-center gap-3 text-white/80">
                  <TrendingUp className="w-5 h-5 text-[#00D9B1]" />
                  <span><strong className="text-white">34 searches for "Nike"</strong> — no Nike store (demand signal)</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <BarChart3 className="w-5 h-5 text-[#00D9B1]" />
                  <span><strong className="text-white">Ramadan Night Market promo:</strong> 892 impressions → 156 clicks → 89 navigations</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Users className="w-5 h-5 text-[#00D9B1]" />
                  <span><strong className="text-white">Busiest navigation days:</strong> Thursday, Friday</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin className="w-5 h-5 text-[#00D9B1]" />
                  <span><strong className="text-white">Most common entry point:</strong> Parking Level 2</span>
                </div>
              </div>

              <div className="text-center mt-10">
                <Button 
                  size="lg" 
                  className="bg-[#00D9B1] hover:bg-[#00C4A0] text-[#0F172A] font-semibold h-14 px-8"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Request Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* App Download Section */}
        <section id="app" className="py-24 bg-background relative overflow-hidden">
          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="bg-[#00D9B1] text-[#0F172A] hover:bg-[#00D9B1]">
                  Mobile App
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Explore in your pocket
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Download the Mall Explorer app for the complete indoor navigation experience. 
                  Get turn-by-turn directions, save favorite stores, and receive personalized deal alerts.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Indoor navigation without beacons",
                    "Offline maps available",
                    "Personalized recommendations",
                    "Exclusive in-app promotions"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <div className="w-6 h-6 rounded-full bg-[#00D9B1] flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-[#0F172A]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-[#0F172A] text-white hover:bg-[#1E293B] h-14 px-6"
                  >
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    App Store
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A]/5 h-14 px-6"
                  >
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                    </svg>
                    Google Play
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative hidden lg:block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/images/app-mockup.png" 
                  alt="Mall Explorer mobile app" 
                  className="w-full max-w-sm mx-auto drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Mall Explorer Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/images/mall-experience.jpg" 
                  alt="Luxury mall atrium" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#00D9B1]/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#00D9B1]" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">10x</div>
                      <div className="text-sm text-muted-foreground">Faster to find stores</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="border-[#00D9B1] text-[#00D9B1]">
                  Why Mall Explorer
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Shopping made
                  <br />
                  <span className="text-[#00D9B1]">effortless</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Large malls can be overwhelming. Mall Explorer transforms your shopping experience 
                  with precise indoor navigation, helping you find exactly what you need without 
                  wandering aimlessly.
                </p>
                
                <div className="space-y-4 pt-4">
                  {[
                    { title: "Explore", desc: "Discover events, new stores, and what's happening at your favorite malls" },
                    { title: "Navigate", desc: "Turn-by-turn indoor directions without beacons or hardware" },
                    { title: "Discover", desc: "Find deals, promotions, and hidden gems you'd otherwise miss" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-1 bg-[#00D9B1] rounded-full" />
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/mall-explorer-logo.jpg" 
                  alt="Mall Explorer" 
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <span className="font-bold text-lg">Mall Explorer</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Explore. Navigate. Discover. Your guide to Abu Dhabi's premier shopping destinations.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Partner Malls</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/mall/abu-dhabi-mall" className="hover:text-[#00D9B1] transition-colors">Abu Dhabi Mall</Link></li>
                <li><span className="text-white/40">Yas Mall (Coming Soon)</span></li>
                <li><span className="text-white/40">The Galleria Mall (Coming Soon)</span></li>
                <li><span className="text-white/40">Marina Mall (Coming Soon)</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-[#00D9B1] transition-colors">Mall Directory</a></li>
                <li><a href="#" className="hover:text-[#00D9B1] transition-colors">Indoor Wayfinding</a></li>
                <li><a href="#" className="hover:text-[#00D9B1] transition-colors">Events & What's New</a></li>
                <li><a href="#" className="hover:text-[#00D9B1] transition-colors">Deals & Promotions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Operators</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#insights" className="hover:text-[#00D9B1] transition-colors">Shopper Intent Data</a></li>
                <li><a href="#insights" className="hover:text-[#00D9B1] transition-colors">Monthly Reports</a></li>
                <li><a href="#insights" className="hover:text-[#00D9B1] transition-colors">Request Demo</a></li>
                <li><a href="#" className="hover:text-[#00D9B1] transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2026 Mall Explorer. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/60">Available on</span>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
