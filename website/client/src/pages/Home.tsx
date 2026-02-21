/*
 * DESIGN: Mall Explorer — Light Mode Brand Guide
 * Fonts: DM Sans (headings) + Outfit (body)
 * Primary: Teal #00BFA5
 * Background: Off-White #F8F9FB
 * Charcoal: #1A1F2E
 * Glass-card aesthetic, clean and professional
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
  ArrowRight,
  BarChart3,
  TrendingUp,
  Users,
  Search,
  Target,
  Zap,
  CheckCircle2,
  QrCode,
  Compass,
  CalendarDays,
  ShieldCheck,
  Eye,
  MousePointerClick,
  LogIn,
  ExternalLink,
  Monitor,
  Smartphone,
  Globe
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";


const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663069303129/cnNJgidlIBfnGpDw.png";


const malls = [
  {
    id: "abu-dhabi-mall",
    name: "Abu Dhabi Mall",
    description: "Iconic shopping destination in the heart of the city with 200+ stores across 3 floors.",
    stores: 200,
    floors: 3,
    status: "live" as const,
  },
  {
    id: "yas-mall",
    name: "Yas Mall",
    description: "Abu Dhabi's biggest shopping center with 366+ brands on Yas Island.",
    stores: 366,
    floors: 3,
    status: "coming-soon" as const,
  },
  {
    id: "galleria-mall",
    name: "The Galleria Mall",
    description: "Premium luxury destination on Al Maryah Island with waterfront dining.",
    stores: 130,
    floors: 2,
    status: "coming-soon" as const,
  },
  {
    id: "marina-mall",
    name: "Marina Mall",
    description: "Waterfront shopping destination on the Corniche with panoramic views.",
    stores: 400,
    floors: 4,
    status: "coming-soon" as const,
  },
];

const problemStats = [
  { stat: "96%", desc: "of shoppers have left a store without purchasing at least once" },
  { stat: "67%", desc: "couldn't find the product or store they were looking for" },
  { stat: "90%", desc: "would have bought if they got the help they needed" },
];

const comparisonData = [
  { traditional: "Counts bodies", explorer: "Captures intent", icon: Eye },
  { traditional: "Knows how many entered", explorer: "Knows where they wanted to go", icon: Target },
  { traditional: "Anonymous", explorer: "Can build opted-in profiles", icon: Users },
  { traditional: "Hardware cost + maintenance", explorer: "Zero infrastructure", icon: ShieldCheck },
  { traditional: "No engagement channel", explorer: "Direct promo channel to shoppers", icon: MousePointerClick },
];



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src={LOGO_URL}
              alt="Mall Explorer" 
              className="w-9 h-9 rounded-lg object-cover"
            />
            <span className="font-bold text-lg text-charcoal" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Mall Explorer
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-[#5A6178] hover:text-[#1A1F2E] transition-colors">
              How It Works
            </a>
            <a href="#malls" className="text-sm font-medium text-[#5A6178] hover:text-[#1A1F2E] transition-colors">
              Malls
            </a>
            <a href="#insights" className="text-sm font-medium text-[#5A6178] hover:text-[#1A1F2E] transition-colors">
              For Operators
            </a>
            <a href="#dashboard" className="text-sm font-medium text-[#5A6178] hover:text-[#1A1F2E] transition-colors">
              Dashboard
            </a>
          </nav>
          
          <a href="https://app.mall-explorer.com/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#00BFA5] hover:bg-[#00A892] text-white font-semibold shadow-sm">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
          </a>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section — Light, clean, asymmetric */}
        <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#F8F9FB] via-white to-[#E8FAF6]">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle, #1A1F2E 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} />
          
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left — 7 cols */}
              <motion.div 
                className="lg:col-span-7 space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00BFA5]/8 rounded-full border border-[#00BFA5]/20">
                  <span className="w-2 h-2 bg-[#00BFA5] rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-[#00BFA5]">Abu Dhabi Mall is live</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-[#1A1F2E] leading-[1.08] tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Your mall,
                  <br />
                  <span className="text-gradient-teal">in your pocket.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-[#5A6178] max-w-xl leading-relaxed">
                  A unified platform for mall shoppers in Abu Dhabi. Indoor navigation, events, deals, and store directories — all from your phone's browser. 
                  <strong className="text-[#1A1F2E]"> No downloads. No beacons. No hassle.</strong>
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a href="https://app.mall-explorer.com/" target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="lg" 
                      className="bg-[#00BFA5] hover:bg-[#00A892] text-white font-semibold h-14 px-8 teal-glow"
                    >
                      <Compass className="w-5 h-5 mr-2" />
                      Start Exploring
                    </Button>
                  </a>
                  <a href="#insights">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-[#D1D5DE] text-[#1A1F2E] hover:bg-[#F0F1F5] h-14 px-8"
                    >
                      For Mall Operators
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                </div>
                
                {/* Stats row */}
                <div className="flex gap-10 pt-6">
                  {[
                    { value: "4", label: "Partner Malls" },
                    { value: "1,000+", label: "Stores Listed" },
                    { value: "0", label: "Beacons Required" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-bold text-[#1A1F2E]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.value}</div>
                      <div className="text-sm text-[#8B90A0]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Right — 5 cols: App preview */}
              <motion.div 
                className="lg:col-span-5 hidden lg:flex justify-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="relative">
                  {/* Phone frame mockup */}
                  <div className="relative w-[280px] h-[560px] bg-[#1A1F2E] rounded-[2.5rem] p-3 shadow-2xl">
                    <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white">
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#F8F9FB] to-white p-6">
                        <img src={LOGO_URL} alt="Mall Explorer" className="w-16 h-16 rounded-2xl mb-4" />
                        <div className="text-lg font-bold text-[#1A1F2E] mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Mall Explorer</div>
                        <div className="text-xs text-[#8B90A0] mb-6">Your mall, in your pocket</div>
                        
                        {/* Mini search bar */}
                        <div className="w-full bg-[#F0F1F5] rounded-xl px-4 py-3 flex items-center gap-2 mb-4">
                          <Search className="w-4 h-4 text-[#8B90A0]" />
                          <span className="text-sm text-[#8B90A0]">Search stores...</span>
                        </div>
                        
                        {/* Mini mall cards */}
                        <div className="w-full space-y-2">
                          <div className="bg-white border border-[#E2E4EA] rounded-lg p-3 flex items-center justify-between">
                            <div>
                              <div className="text-xs font-semibold text-[#1A1F2E]">Abu Dhabi Mall</div>
                              <div className="text-[10px] text-[#8B90A0]">200+ stores</div>
                            </div>
                            <div className="w-2 h-2 bg-[#00BFA5] rounded-full" />
                          </div>
                          <div className="bg-white border border-[#E2E4EA] rounded-lg p-3 flex items-center justify-between opacity-50">
                            <div>
                              <div className="text-xs font-semibold text-[#1A1F2E]">Yas Mall</div>
                              <div className="text-[10px] text-[#8B90A0]">Coming soon</div>
                            </div>
                          </div>
                          <div className="bg-white border border-[#E2E4EA] rounded-lg p-3 flex items-center justify-between opacity-50">
                            <div>
                              <div className="text-xs font-semibold text-[#1A1F2E]">The Galleria</div>
                              <div className="text-[10px] text-[#8B90A0]">Coming soon</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -right-8 top-20 glass-card rounded-xl px-4 py-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#00BFA5]/10 flex items-center justify-center">
                        <Navigation className="w-4 h-4 text-[#00BFA5]" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#1A1F2E]">No beacons</div>
                        <div className="text-[10px] text-[#8B90A0]">Works instantly</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating badge bottom */}
                  <div className="absolute -left-12 bottom-28 glass-card rounded-xl px-4 py-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#00BFA5]/10 flex items-center justify-center">
                        <QrCode className="w-4 h-4 text-[#00BFA5]" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#1A1F2E]">Scan & Go</div>
                        <div className="text-[10px] text-[#8B90A0]">No download</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div 
              className="text-center max-w-2xl mx-auto mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-red-50 text-red-600 border-red-200 hover:bg-red-50">
                The Problem
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Shoppers are getting lost — literally
              </h2>
              <p className="text-[#5A6178] text-lg">
                Large multi-floor malls disorient residents and tourists alike. Sales go unnoticed, new stores get missed, and shoppers leave frustrated.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {problemStats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="border-[#E2E4EA] bg-[#FAFBFC] hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-8 text-center">
                      <div className="text-5xl font-bold text-[#00BFA5] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {item.stat}
                      </div>
                      <p className="text-[#5A6178] leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-xs text-[#8B90A0] mt-6">
              Sources: Retail TouchPoints / TimeTrade consumer studies
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-[#F8F9FB]">
          <div className="container">
            <motion.div 
              className="text-center max-w-2xl mx-auto mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-[#00BFA5]/8 text-[#00BFA5] border-[#00BFA5]/20 hover:bg-[#00BFA5]/8">
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Three steps. Zero friction.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { step: "1", icon: QrCode, title: "Scan the QR Code", desc: "Available at mall entrances. Opens instantly in your browser — no app download needed." },
                { step: "2", icon: Search, title: "Search & Discover", desc: "Find stores, browse events, check out deals and promotions happening right now." },
                { step: "3", icon: Navigation, title: "Navigate There", desc: "Get indoor turn-by-turn directions on your phone. Arrive at your destination, not lost." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                >
                  <div className="glass-card rounded-2xl p-8 text-center h-full hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-[#00BFA5] flex items-center justify-center mx-auto mb-5">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-xs font-bold text-[#00BFA5] uppercase tracking-wider mb-2">Step {item.step}</div>
                    <h3 className="text-xl font-bold text-[#1A1F2E] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.title}</h3>
                    <p className="text-[#5A6178] leading-relaxed">{item.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-[#D1D5DE]" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div 
              className="text-center max-w-2xl mx-auto mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-[#00BFA5]/8 text-[#00BFA5] border-[#00BFA5]/20 hover:bg-[#00BFA5]/8">
                For Shoppers
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Everything you need in one place
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Navigation, title: "Indoor Navigation", desc: "Turn-by-turn directions inside the mall. No beacons or hardware required.", color: "#00BFA5" },
                { icon: CalendarDays, title: "Events & What's New", desc: "Stay updated on mall events, seasonal sales, and new store openings.", color: "#6366F1" },
                { icon: Store, title: "Store Directory", desc: "Browse every store, restaurant, and service. Filter by category or floor.", color: "#F59E0B" },
                { icon: Tag, title: "Deals & Promotions", desc: "Real-time deals and discounts from stores across all partner malls.", color: "#EF4444" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="border-[#E2E4EA] hover:shadow-md transition-all hover:-translate-y-1 h-full">
                    <CardContent className="p-6">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${item.color}12` }}
                      >
                        <item.icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <h3 className="text-lg font-bold text-[#1A1F2E] mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.title}</h3>
                      <p className="text-sm text-[#5A6178] leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Malls Section */}
        <section id="malls" className="py-20 bg-[#F8F9FB]">
          <div className="container">
            <motion.div 
              className="text-center max-w-2xl mx-auto mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-[#00BFA5]/8 text-[#00BFA5] border-[#00BFA5]/20 hover:bg-[#00BFA5]/8">
                Partner Malls
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Abu Dhabi's top malls, one platform
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {malls.map((mall, i) => (
                <motion.div
                  key={mall.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className={`border-[#E2E4EA] hover:shadow-md transition-all h-full ${mall.status === 'coming-soon' ? 'opacity-70' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-xl bg-[#1A1F2E] flex items-center justify-center">
                          <Store className="w-5 h-5 text-[#00BFA5]" />
                        </div>
                        {mall.status === "live" ? (
                          <Badge className="bg-[#00BFA5]/10 text-[#00BFA5] border-[#00BFA5]/20 hover:bg-[#00BFA5]/10">
                            <span className="w-1.5 h-1.5 bg-[#00BFA5] rounded-full mr-1.5 animate-pulse" />
                            Live
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="border-[#D1D5DE] text-[#8B90A0]">
                            Coming Soon
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-[#1A1F2E] mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{mall.name}</h3>
                      <p className="text-sm text-[#5A6178] mb-4 leading-relaxed">{mall.description}</p>
                      <div className="flex items-center gap-4 text-xs text-[#8B90A0]">
                        <span>{mall.stores}+ stores</span>
                        <span>·</span>
                        <span>{mall.floors} floors</span>
                      </div>
                      {mall.status === "live" && (
                        <Link href={`/mall/${mall.id}`}>
                          <Button className="w-full mt-4 bg-[#00BFA5] hover:bg-[#00A892] text-white font-medium">
                            Explore Mall
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* B2B: Intent Data Section */}
        <section id="insights" className="py-20 bg-[#1A1F2E] text-white">
          <div className="container">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-[#00BFA5]/15 text-[#00BFA5] border-[#00BFA5]/30 hover:bg-[#00BFA5]/15">
                For Mall Operators
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Your footfall counters tell you how many people came.
                <br />
                <span className="text-[#00BFA5]">We tell you what they were looking for.</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Which stores they searched for, which ones they couldn't find, and which promotions actually drove action. 
                <strong className="text-white"> Zero beacons, zero hardware</strong> — just insights from real shopper intent.
              </p>
            </motion.div>

            {/* Comparison Table */}
            <motion.div 
              className="max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl border border-white/10 overflow-hidden">
                <div className="grid grid-cols-2 bg-white/5">
                  <div className="px-6 py-4 text-sm font-semibold text-white/60 border-r border-white/10">Traditional Footfall Tech</div>
                  <div className="px-6 py-4 text-sm font-semibold text-[#00BFA5]">Mall Explorer</div>
                </div>
                {comparisonData.map((row, i) => (
                  <div key={i} className="grid grid-cols-2 border-t border-white/10">
                    <div className="px-6 py-4 text-sm text-white/50 border-r border-white/10">{row.traditional}</div>
                    <div className="px-6 py-4 text-sm text-white font-medium flex items-center gap-2">
                      <row.icon className="w-4 h-4 text-[#00BFA5] shrink-0" />
                      {row.explorer}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Monthly Demand Report */}
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Monthly Demand Report
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Search, label: "Top 10 searched stores", color: "#00BFA5" },
                  { icon: Target, label: "Top 5 searched categories", color: "#6366F1" },
                  { icon: TrendingUp, label: "Unmet demand signals", color: "#F59E0B" },
                  { icon: BarChart3, label: "Promo conversion tracking", color: "#EF4444" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-5 py-4 border border-white/10">
                    <item.icon className="w-5 h-5 shrink-0" style={{ color: item.color }} />
                    <span className="text-sm text-white/80">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-4">
                <div className="flex items-start gap-3 text-white/80">
                  <TrendingUp className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong className="text-white">34 searches for "Nike"</strong> — no Nike store in the mall (demand signal)</span>
                </div>
                <div className="flex items-start gap-3 text-white/80">
                  <BarChart3 className="w-5 h-5 text-[#00BFA5] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Ramadan Night Market promo:</strong> 892 impressions → 156 clicks → 89 navigations</span>
                </div>
                <div className="flex items-start gap-3 text-white/80">
                  <Users className="w-5 h-5 text-[#6366F1] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Busiest navigation days:</strong> Thursday, Friday</span>
                </div>
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Most common entry point:</strong> Parking Level 2</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dashboard Teaser */}
        <section id="dashboard" className="py-20 bg-white">
          <div className="container">
            <motion.div 
              className="text-center max-w-2xl mx-auto mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-[#00BFA5]/8 text-[#00BFA5] border-[#00BFA5]/20 hover:bg-[#00BFA5]/8">
                Live Dashboard
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Real-time CRM & analytics
              </h2>
              <p className="text-[#5A6178] text-lg">
                Every search, every navigation, every unmet demand — captured and visualized in real time.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {[
                { icon: Users, value: "User Signups", desc: "Track new registrations and returning visitors over time", color: "#00BFA5" },
                { icon: Search, value: "Search Analytics", desc: "See what shoppers are searching for in real time", color: "#6366F1" },
                { icon: TrendingUp, value: "Unmet Demand", desc: "Discover brands shoppers want but can't find", color: "#F59E0B" },
                { icon: BarChart3, value: "Promo Tracking", desc: "Measure impressions, clicks, and navigations per campaign", color: "#EF4444" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="border-[#E2E4EA] h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${item.color}12` }}>
                        <item.icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <h3 className="text-base font-bold text-[#1A1F2E] mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.value}</h3>
                      <p className="text-sm text-[#5A6178] leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Blurred preview teaser */}
            <motion.div 
              className="max-w-4xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl border border-[#E2E4EA] overflow-hidden shadow-lg bg-[#F8F9FB]">
                {/* Fake browser chrome */}
                <div className="bg-[#F0F1F5] px-4 py-3 flex items-center gap-2 border-b border-[#E2E4EA]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white rounded-md px-4 py-1 text-xs text-[#8B90A0] border border-[#E2E4EA] max-w-xs w-full text-center">
                      dashboard.mall-explorer.com
                    </div>
                  </div>
                </div>
                {/* Blurred abstract dashboard representation */}
                <div className="relative p-8 min-h-[320px]">
                  {/* Abstract dashboard grid — blurred */}
                  <div className="filter blur-[6px] pointer-events-none select-none">
                    <div className="grid grid-cols-4 gap-4 mb-6">
                      {["#00BFA5", "#6366F1", "#F59E0B", "#EF4444"].map((c, i) => (
                        <div key={i} className="bg-white rounded-xl p-4 border border-[#E2E4EA]">
                          <div className="w-8 h-3 rounded mb-3" style={{ backgroundColor: `${c}30` }} />
                          <div className="w-16 h-6 rounded bg-[#1A1F2E]/80 mb-1" />
                          <div className="w-20 h-2 rounded bg-[#8B90A0]/30" />
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl p-4 border border-[#E2E4EA] h-40">
                        <div className="w-24 h-3 rounded bg-[#1A1F2E]/60 mb-4" />
                        <div className="flex items-end gap-3 h-24">
                          {[40, 65, 50, 80, 70, 90, 55].map((h, i) => (
                            <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: "#00BFA5" }} />
                          ))}
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-[#E2E4EA] h-40">
                        <div className="w-24 h-3 rounded bg-[#1A1F2E]/60 mb-4" />
                        <div className="space-y-3">
                          {[85, 72, 60, 45, 30].map((w, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-8 h-2 rounded bg-[#8B90A0]/30" />
                              <div className="h-3 rounded" style={{ width: `${w}%`, backgroundColor: "#00BFA5" }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Overlay CTA */}
                  <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[2px]">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-[#1A1F2E] flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Monitor className="w-8 h-8 text-[#00BFA5]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1F2E] mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>See the dashboard in action</h3>
                      <p className="text-[#5A6178] mb-5 max-w-sm">Get a personalized walkthrough of how Mall Explorer captures and visualizes shopper intent data.</p>
                      <a href="mailto:hello@mall-explorer.com">
                        <Button className="bg-[#00BFA5] hover:bg-[#00A892] text-white font-semibold px-8 h-12 teal-glow">
                          <Zap className="w-4 h-4 mr-2" />
                          Request a Demo
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Platform Section */}
        <section className="py-20 bg-[#F8F9FB]">
          <div className="container">
            <motion.div 
              className="text-center max-w-2xl mx-auto mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-[#00BFA5]/8 text-[#00BFA5] border-[#00BFA5]/20 hover:bg-[#00BFA5]/8">
                Platform
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Available everywhere
              </h2>
              <p className="text-[#5A6178] text-lg">
                Mall Explorer works instantly in the browser. Native apps are on the way.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Globe, title: "Web App", desc: "Live now — works in any browser. No download required.", status: "Live", link: "https://app.mall-explorer.com/" },
                { icon: Smartphone, title: "iOS App", desc: "Native iPhone app with offline maps and push notifications.", status: "Coming Soon", link: null },
                { icon: Smartphone, title: "Android App", desc: "Native Android app for the full mobile experience.", status: "Coming Soon", link: null },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className={`border-[#E2E4EA] h-full ${item.link ? '' : 'opacity-60'}`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-[#1A1F2E] flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-7 h-7 text-[#00BFA5]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#1A1F2E] mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.title}</h3>
                      <Badge className={`mb-3 ${item.link ? 'bg-[#00BFA5]/10 text-[#00BFA5] border-[#00BFA5]/20' : 'bg-[#F0F1F5] text-[#8B90A0] border-[#E2E4EA]'} hover:bg-transparent`}>
                        {item.status}
                      </Badge>
                      <p className="text-sm text-[#5A6178] leading-relaxed">{item.desc}</p>
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <Button className="mt-4 bg-[#00BFA5] hover:bg-[#00A892] text-white font-medium w-full">
                            Open App
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#1A1F2E] to-[#0D1117]">
          <div className="container">
            <motion.div 
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Ready to explore?
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Whether you're a shopper looking for the fastest way to find your store, or a mall operator who wants to understand what shoppers actually want — Mall Explorer has you covered.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://app.mall-explorer.com/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#00BFA5] hover:bg-[#00A892] text-white font-semibold h-14 px-8 teal-glow">
                    <Compass className="w-5 h-5 mr-2" />
                    Start Exploring
                  </Button>
                </a>
                <a href="mailto:hello@mall-explorer.com">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-8">
                    <Zap className="w-5 h-5 mr-2" />
                    Request Demo
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1F2E] text-white py-14 border-t border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src={LOGO_URL}
                  alt="Mall Explorer" 
                  className="w-9 h-9 rounded-lg object-cover"
                />
                <span className="font-bold text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>Mall Explorer</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Your mall, in your pocket. A unified platform for mall shoppers in Abu Dhabi.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Partner Malls</h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li><Link href="/mall/abu-dhabi-mall" className="hover:text-[#00BFA5] transition-colors">Abu Dhabi Mall</Link></li>
                <li><span className="text-white/30">Yas Mall (Coming Soon)</span></li>
                <li><span className="text-white/30">The Galleria Mall (Coming Soon)</span></li>
                <li><span className="text-white/30">Marina Mall (Coming Soon)</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Product</h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li><a href="https://app.mall-explorer.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00BFA5] transition-colors">Web App</a></li>
                <li><a href="#how-it-works" className="hover:text-[#00BFA5] transition-colors">How It Works</a></li>
                <li><a href="#insights" className="hover:text-[#00BFA5] transition-colors">For Operators</a></li>
                <li><a href="#dashboard" className="hover:text-[#00BFA5] transition-colors">Dashboard</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Connect</h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li><a href="mailto:hello@mall-explorer.com" className="hover:text-[#00BFA5] transition-colors">hello@mall-explorer.com</a></li>
                <li><a href="https://mall-explorer.com/deck/" className="hover:text-[#00BFA5] transition-colors">Pitch Deck</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              © 2026 Mall Explorer. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              Made in Abu Dhabi 🇦🇪
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
