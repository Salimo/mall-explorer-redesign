/*
 * DESIGN: Cartographic Modernism
 * Mall detail page with directory, wayfinding info, news, and promotions
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Navigation, 
  Store, 
  Sparkles, 
  Tag, 
  ChevronLeft,
  Search,
  Clock,
  Phone,
  Globe,
  Building2,
  Smartphone,
  ArrowRight,
  Percent,
  Calendar
} from "lucide-react";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

// Mall data with stores
const mallsData: Record<string, MallData> = {
  "yas-mall": {
    id: "yas-mall",
    name: "Yas Mall",
    location: "Yas Island, Abu Dhabi",
    description: "Abu Dhabi's biggest and the UAE's second-largest shopping center offering an incredible shopping, dining, and entertainment experience.",
    image: "/images/yas-mall.jpg",
    interiorImage: "/images/yas-mall-interior.jpg",
    stores: 366,
    floors: 3,
    hours: "Sun-Thu: 10AM-10PM, Fri-Sat: 10AM-12AM",
    phone: "800-9276255",
    website: "yasmall.ae",
    features: ["IMAX Cinema", "Food Court", "Kids Zone", "Valet Parking"],
    categories: [
      { name: "Fashion", count: 51 },
      { name: "Health & Beauty", count: 64 },
      { name: "Electronics", count: 11 },
      { name: "Footwear", count: 25 },
      { name: "Watches & Jewelry", count: 20 },
      { name: "Sports", count: 15 },
    ],
    directory: [
      { name: "Abercrombie & Fitch", category: "Fashion", floor: "Ground Floor" },
      { name: "Adidas", category: "Sports", floor: "Ground Floor" },
      { name: "Apple Store", category: "Electronics", floor: "Ground Floor" },
      { name: "H&M", category: "Fashion", floor: "First Floor" },
      { name: "Zara", category: "Fashion", floor: "Ground Floor" },
      { name: "Sephora", category: "Health & Beauty", floor: "Ground Floor" },
      { name: "Nike", category: "Sports", floor: "Ground Floor" },
      { name: "Tryano", category: "Department Store", floor: "Ground Floor" },
      { name: "VOX Cinemas", category: "Entertainment", floor: "First Floor" },
      { name: "Shake Shack", category: "Dining", floor: "Food Court" },
      { name: "The Cheesecake Factory", category: "Dining", floor: "Ground Floor" },
      { name: "Gucci", category: "Fashion", floor: "Ground Floor" },
    ],
    news: [
      { title: "New Apple Store Opening", date: "Jan 15, 2026", description: "Experience the all-new Apple Store with expanded Genius Bar." },
      { title: "Spring Collection Arrivals", date: "Jan 10, 2026", description: "Fresh spring collections now available at major fashion retailers." },
    ],
    promotions: [
      { store: "H&M", discount: "30% OFF", description: "Winter clearance sale on selected items", validUntil: "Jan 31, 2026" },
      { store: "Adidas", discount: "Buy 2 Get 1", description: "On all footwear and apparel", validUntil: "Jan 20, 2026" },
      { store: "Sephora", discount: "20% OFF", description: "Beauty insider exclusive savings", validUntil: "Jan 25, 2026" },
    ],
  },
  "shams-boutik": {
    id: "shams-boutik",
    name: "Shams Boutik",
    location: "Al Reem Island, Abu Dhabi",
    description: "Neighborhood community complex bridging the iconic Sun and Sky Towers with the Gate and Arc Towers, offering interesting brands and dining.",
    image: "/images/shams-boutik.jpg",
    interiorImage: "/images/mall-experience.jpg",
    stores: 82,
    floors: 2,
    hours: "Daily: 9AM-10PM",
    phone: "800-ALDAR",
    website: "aldar.com",
    features: ["Cafes", "Supermarket", "Salons", "Community Events"],
    categories: [
      { name: "Dining", count: 25 },
      { name: "Services", count: 20 },
      { name: "Retail", count: 22 },
      { name: "Health & Wellness", count: 15 },
    ],
    directory: [
      { name: "Action Zone", category: "Entertainment", floor: "Ground Floor" },
      { name: "Art Central", category: "Retail", floor: "Ground Floor" },
      { name: "Caffe Nero", category: "Dining", floor: "Ground Floor" },
      { name: "Nando's", category: "Dining", floor: "Ground Floor" },
      { name: "Nail Arts Salon", category: "Services", floor: "First Floor" },
      { name: "Burjeel Day Surgery", category: "Health & Wellness", floor: "Ground Floor" },
      { name: "Spinneys", category: "Supermarket", floor: "Ground Floor" },
      { name: "Costa Coffee", category: "Dining", floor: "Ground Floor" },
    ],
    news: [
      { title: "Community Yoga Sessions", date: "Jan 12, 2026", description: "Free yoga classes every Saturday morning at the central plaza." },
    ],
    promotions: [
      { store: "Nando's", discount: "15% OFF", description: "Weekday lunch special", validUntil: "Feb 28, 2026" },
      { store: "Costa Coffee", discount: "Buy 1 Get 1", description: "On all hot beverages after 4PM", validUntil: "Jan 31, 2026" },
    ],
  },
  "abu-dhabi-mall": {
    id: "abu-dhabi-mall",
    name: "Abu Dhabi Mall",
    location: "Tourist Club Area, Abu Dhabi",
    description: "The heart of the city - an iconic shopping destination featuring luxury brands, diverse dining options, and entertainment for all ages.",
    image: "/images/abu-dhabi-mall.jpg",
    interiorImage: "/images/abu-dhabi-mall-interior.jpg",
    stores: 200,
    floors: 3,
    hours: "Sun-Wed: 10AM-10PM, Thu-Sat: 10AM-11PM",
    phone: "+971 2 645 4858",
    website: "abudhabi-mall.com",
    features: ["Luxury Brands", "Restaurants", "Entertainment", "Kids Play Area"],
    categories: [
      { name: "Fashion", count: 45 },
      { name: "Dining", count: 35 },
      { name: "Beauty", count: 25 },
      { name: "Electronics", count: 15 },
      { name: "Jewelry", count: 20 },
      { name: "Services", count: 30 },
    ],
    directory: [
      { name: "Polo Ralph Lauren", category: "Fashion", floor: "Level 1" },
      { name: "Sephora", category: "Beauty", floor: "Level 1" },
      { name: "Go Sport", category: "Sports", floor: "Level 2" },
      { name: "Guess", category: "Fashion", floor: "Level 2" },
      { name: "AD Coop", category: "Supermarket", floor: "Ground Floor" },
      { name: "Al Jaber Optical", category: "Services", floor: "Level 1" },
      { name: "Abdul Samad Al Qurashi", category: "Beauty", floor: "Level 1" },
      { name: "Tavola", category: "Home", floor: "Level 1" },
      { name: "Mom Store", category: "Children", floor: "Level 2" },
      { name: "Aeropostale", category: "Fashion", floor: "Level 2" },
    ],
    news: [
      { title: "New Dining Wing Opening", date: "Jan 20, 2026", description: "Expanded food court with 10 new restaurant concepts." },
      { title: "Weekend Entertainment", date: "Jan 8, 2026", description: "Live music performances every Friday evening." },
    ],
    promotions: [
      { store: "Polo Ralph Lauren", discount: "Up to 40% OFF", description: "End of season sale", validUntil: "Jan 25, 2026" },
      { store: "Go Sport", discount: "25% OFF", description: "New year fitness gear sale", validUntil: "Jan 31, 2026" },
      { store: "Sephora", discount: "Free Gift", description: "With purchases over AED 300", validUntil: "Jan 20, 2026" },
    ],
  },
};

interface MallData {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  interiorImage: string;
  stores: number;
  floors: number;
  hours: string;
  phone: string;
  website: string;
  features: string[];
  categories: { name: string; count: number }[];
  directory: { name: string; category: string; floor: string }[];
  news: { title: string; date: string; description: string }[];
  promotions: { store: string; discount: string; description: string; validUntil: string }[];
}

export default function MallDetail() {
  const params = useParams<{ id: string }>();
  const mall = mallsData[params.id || ""];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredStores = useMemo(() => {
    if (!mall) return [];
    return mall.directory.filter((store) => {
      const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || store.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [mall, searchQuery, selectedCategory]);

  if (!mall) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Mall not found</h1>
          <Link href="/">
            <Button>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
            <div className="h-6 w-px bg-border" />
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/images/mall-explorer-logo.jpg" 
                alt="Mall Explorer" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="font-bold text-lg text-foreground hidden sm:inline">Mall Explorer</span>
            </Link>
          </div>
          
          <Link href={mall.id === 'abu-dhabi-mall' ? '/map/abu-dhabi-mall' : '#'}>
            <Button className="bg-[#00D9B1] hover:bg-[#00C4A0] text-[#0F172A] font-semibold">
              <Navigation className="w-4 h-4 mr-2" />
              {mall.id === 'abu-dhabi-mall' ? 'Open Map' : 'Coming Soon'}
            </Button>
          </Link>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img 
            src={mall.image} 
            alt={mall.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
  <h1 className="text-4xl md:text-5xl font-bold text-white">{mall.name}</h1>
                <p className="text-lg text-white/80 max-w-2xl">{mall.description}</p>
                
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-2 text-white/90">
                    <Store className="w-5 h-5 text-[#00D9B1]" />
                    <span className="font-medium">{mall.stores}+ stores</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Building2 className="w-5 h-5 text-[#00D9B1]" />
                    <span className="font-medium">{mall.floors} floors</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock className="w-5 h-5 text-[#00D9B1]" />
                    <span className="font-medium">{mall.hours.split(',')[0]}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-primary text-primary-foreground py-4">
          <div className="container flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <a href={`tel:${mall.phone}`} className="flex items-center gap-2 hover:text-[#00D9B1] transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{mall.phone}</span>
              </a>
              <a href={`https://${mall.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#00D9B1] transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm">{mall.website}</span>
              </a>
            </div>
            <Button size="sm" className="bg-[#00D9B1] hover:bg-[oklch(0.72_0.14_175)] text-[#0F172A]">
              <Smartphone className="w-4 h-4 mr-2" />
              Get App for Navigation
            </Button>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="directory" className="space-y-8">
              <TabsList className="grid w-full max-w-lg grid-cols-4 mx-auto">
                <TabsTrigger value="directory" className="gap-2">
                  <Store className="w-4 h-4" />
                  <span className="hidden sm:inline">Directory</span>
                </TabsTrigger>
                <TabsTrigger value="wayfinding" className="gap-2">
                  <Navigation className="w-4 h-4" />
                  <span className="hidden sm:inline">Navigate</span>
                </TabsTrigger>
                <TabsTrigger value="news" className="gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="hidden sm:inline">What's New</span>
                </TabsTrigger>
                <TabsTrigger value="promotions" className="gap-2">
                  <Tag className="w-4 h-4" />
                  <span className="hidden sm:inline">Offers</span>
                </TabsTrigger>
              </TabsList>

              {/* Directory Tab */}
              <TabsContent value="directory" className="space-y-8">
                <div className="grid lg:grid-cols-4 gap-8">
                  {/* Sidebar - Categories */}
                  <div className="lg:col-span-1 space-y-4">
                    <h3 className="font-semibold text-foreground">Categories</h3>
                    <div className="space-y-2">
                      <Button
                        variant={selectedCategory === null ? "default" : "ghost"}
                        className={`w-full justify-between ${selectedCategory === null ? 'bg-[#00D9B1] text-[#0F172A]' : ''}`}
                        onClick={() => setSelectedCategory(null)}
                      >
                        All Stores
                        <Badge variant="secondary">{mall.directory.length}</Badge>
                      </Button>
                      {mall.categories.map((cat) => (
                        <Button
                          key={cat.name}
                          variant={selectedCategory === cat.name ? "default" : "ghost"}
                          className={`w-full justify-between ${selectedCategory === cat.name ? 'bg-[#00D9B1] text-[#0F172A]' : ''}`}
                          onClick={() => setSelectedCategory(cat.name)}
                        >
                          {cat.name}
                          <Badge variant="secondary">{cat.count}</Badge>
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Main Content - Store List */}
                  <div className="lg:col-span-3 space-y-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        placeholder="Search stores..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {filteredStores.map((store, index) => (
                        <motion.div
                          key={store.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Card className="hover:border-[#00D9B1] transition-colors cursor-pointer group">
                            <CardContent className="p-4 flex items-center justify-between">
                              <div className="space-y-1">
                                <h4 className="font-semibold text-foreground group-hover:text-[#00D9B1] transition-colors">
                                  {store.name}
                                </h4>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                  <Badge variant="outline" className="text-xs">{store.category}</Badge>
                                  <span className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {store.floor}
                                  </span>
                                </div>
                              </div>
                              <Button size="sm" variant="ghost" className="text-[#00D9B1]">
                                <Navigation className="w-4 h-4" />
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>

                    {filteredStores.length === 0 && (
                      <div className="text-center py-12 text-muted-foreground">
                        No stores found matching your search.
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Wayfinding Tab */}
              <TabsContent value="wayfinding" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">
                      Indoor Navigation
                      <span className="text-[#00D9B1]"> Made Easy</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Get turn-by-turn directions to any store in {mall.name}. 
                      Our precise indoor positioning technology guides you through every floor.
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        "Real-time indoor positioning",
                        "Multi-floor navigation",
                        "Accessible routes available",
                        "Works offline once downloaded"
                      ].map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#00D9B1] flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-[#0F172A]" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button className="bg-[#00D9B1] hover:bg-[oklch(0.72_0.14_175)] text-[#0F172A]">
                        <Smartphone className="w-4 h-4 mr-2" />
                        Download App
                      </Button>
                      <Button variant="outline">
                        View Mall Map
                      </Button>
                    </div>
                  </div>

                  <div className="relative">
                    <img 
                      src="/images/wayfinding-illustration.png" 
                      alt="Indoor navigation app" 
                      className="w-full max-w-md mx-auto"
                    />
                  </div>
                </div>
              </TabsContent>

              {/* News Tab */}
              <TabsContent value="news" className="space-y-8">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold text-foreground mb-8">
                    What's New at <span className="text-[#00D9B1]">{mall.name}</span>
                  </h2>
                  
                  <div className="space-y-6">
                    {mall.news.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="overflow-hidden">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-lg bg-[#00D9B1]/10 flex items-center justify-center shrink-0">
                                <Sparkles className="w-6 h-6 text-[#00D9B1]" />
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                  <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                                  <Badge variant="outline" className="text-xs">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {item.date}
                                  </Badge>
                                </div>
                                <p className="text-muted-foreground">{item.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Promotions Tab */}
              <TabsContent value="promotions" className="space-y-8">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-foreground mb-8">
                    Live <span className="text-[#00D9B1]">Promotions</span>
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mall.promotions.map((promo, index) => (
                      <motion.div
                        key={`${promo.store}-${index}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="h-full border-border hover:border-[#00D9B1] transition-colors">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg">{promo.store}</CardTitle>
                              <Badge className="bg-[#00D9B1] text-[#0F172A]">
                                <Percent className="w-3 h-3 mr-1" />
                                {promo.discount}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-muted-foreground">{promo.description}</p>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Valid until {promo.validUntil}</span>
                              <Button size="sm" variant="ghost" className="text-[#00D9B1] p-0 h-auto">
                                <Navigation className="w-4 h-4 mr-1" />
                                Navigate
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 bg-secondary/30">
          <div className="container">
            <h3 className="text-xl font-semibold text-foreground mb-6">Mall Features</h3>
            <div className="flex flex-wrap gap-3">
              {mall.features.map((feature) => (
                <Badge key={feature} variant="secondary" className="text-sm py-2 px-4">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img 
              src="/images/mall-explorer-logo.jpg" 
              alt="Mall Explorer" 
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="font-bold">Mall Explorer</span>
          </div>
          <p className="text-sm text-primary-foreground/60">
            © 2026 Mall Explorer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
