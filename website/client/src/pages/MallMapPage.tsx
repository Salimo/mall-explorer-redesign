/**
 * Mall Map Page - Interactive floor plan with navigation
 * Abu Dhabi Mall Floor 1
 */

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { MapPin, ChevronLeft, List } from 'lucide-react';
import MallMap from '@/components/MallMap';
import { useState } from 'react';
import { stores, type Store } from '@/data/abuDhabiMallData';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function MallMapPage() {
  const [showDirectory, setShowDirectory] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(stores.map(s => s.category))).sort();
  
  // Filter stores
  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.unit.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || store.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="h-screen flex flex-col bg-slate-100">
      {/* Header */}
      <header className="bg-[#0F172A] text-white py-3 px-4 flex items-center justify-between z-30 relative">
        <div className="flex items-center gap-4">
          <Link href="/mall/abu-dhabi-mall">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <div className="h-6 w-px bg-white/20" />
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/images/mall-explorer-logo.jpg" 
              alt="Mall Explorer" 
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="font-bold hidden sm:inline">Mall Explorer</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-white/70 hidden sm:inline">Abu Dhabi Mall</span>
          <Badge className="bg-[#00D9B1] text-[#0F172A]">Floor 1</Badge>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="border-white/30 text-white hover:bg-white/10"
          onClick={() => setShowDirectory(!showDirectory)}
        >
          <List className="w-4 h-4 mr-2" />
          Directory
        </Button>
      </header>
      
      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden">
        {/* Map */}
        <MallMap />
        
        {/* Directory Sidebar */}
        <AnimatePresence>
          {showDirectory && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-full sm:w-96 bg-white shadow-2xl z-20 flex flex-col"
            >
              <div className="p-4 border-b border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-lg text-[#0F172A]">Store Directory</h2>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowDirectory(false)}
                  >
                    ✕
                  </Button>
                </div>
                
                {/* Search */}
                <Input
                  placeholder="Search stores..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="mb-3"
                />
                
                {/* Category filters */}
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant={selectedCategory === null ? 'default' : 'outline'}
                    className={`cursor-pointer ${selectedCategory === null ? 'bg-[#00D9B1] text-[#0F172A]' : ''}`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    All ({stores.length})
                  </Badge>
                  {categories.map(cat => (
                    <Badge
                      key={cat}
                      variant={selectedCategory === cat ? 'default' : 'outline'}
                      className={`cursor-pointer ${selectedCategory === cat ? 'bg-[#00D9B1] text-[#0F172A]' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Store List */}
              <div className="flex-1 overflow-y-auto">
                {filteredStores.map(store => (
                  <div
                    key={store.id}
                    className="p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-[#0F172A]">{store.name}</h3>
                        <p className="text-sm text-slate-500">{store.unit}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {store.category}
                      </Badge>
                    </div>
                    {store.size && (
                      <p className="text-xs text-slate-400 mt-1">{store.size}</p>
                    )}
                  </div>
                ))}
                
                {filteredStores.length === 0 && (
                  <div className="p-8 text-center text-slate-500">
                    No stores found matching your search.
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
