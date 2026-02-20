import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link, useRoute } from 'wouter'
import { ArrowLeft, Navigation, MapPin, Clock, Store, Sparkles, Filter, Layers, ChevronRight, Calendar, Tag } from 'lucide-react'
import { getMallById, getStoresByMall, getNewStores, getEventsByMall, getDealsByMall } from '../lib/data'
import { useAuth } from '../contexts/AuthContext'

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.03 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function MallDetail() {
  const [, params] = useRoute('/mall/:id')
  const mallId = params?.id
  const mall = getMallById(mallId)
  const { logStoreSelect } = useAuth()

  const allStores = useMemo(() => getStoresByMall(mallId), [mallId])
  const newStores = useMemo(() => allStores.filter(s => s.isNew), [allStores])
  const mallEvents = useMemo(() => getEventsByMall(mallId), [mallId])
  const mallDeals = useMemo(() => getDealsByMall(mallId), [mallId])

  const [categoryFilter, setCategoryFilter] = useState('all')
  const [floorFilter, setFloorFilter] = useState('all')

  const storeCategories = useMemo(() => [...new Set(allStores.map(s => s.category))].sort(), [allStores])
  const storeFloors = useMemo(() => [...new Set(allStores.map(s => s.floor))].sort((a, b) => a - b), [allStores])

  const filteredStores = useMemo(() => {
    return allStores.filter(s => {
      if (categoryFilter !== 'all' && s.category !== categoryFilter) return false
      if (floorFilter !== 'all' && s.floor !== floorFilter) return false
      return true
    })
  }, [allStores, categoryFilter, floorFilter])

  if (!mall) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Mall not found</p>
          <Link href="/"><span className="text-teal text-sm mt-2 block">Go back home</span></Link>
        </div>
      </div>
    )
  }

  function handleStoreNav(store) {
    logStoreSelect({ query: '', store: { id: store.id, name: store.name, mallId: store.mallId } })
  }

  return (
    <div className="pb-20">
      {/* Hero */}
      <div className="relative h-[260px]">
        <img src={mall.image} alt={mall.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-black/5" />
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <Link href="/">
            <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white transition-colors">
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </div>
          </Link>
          {mall.status === 'live' && mall.mapUrl && (
            <Link href={`/map/${mall.id}`}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal text-white font-medium text-sm map-pulse shadow-sm">
                <Navigation className="w-4 h-4" />
                Navigate
              </div>
            </Link>
          )}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="font-display text-2xl font-bold text-white">{mall.name}</h1>
          <div className="flex items-center gap-4 mt-1 text-sm text-white/70">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-teal-light" />{mall.location}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-teal-light" />{mall.openingHours}</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-around py-4 px-4">
        {[
          { value: `${mall.storeCount}+`, label: 'STORES', color: 'text-teal' },
          { value: mall.floors, label: 'FLOORS' },
          { value: newStores.length, label: 'NEW STORES' },
          { value: mallEvents.length, label: 'EVENTS' },
        ].map((stat, i) => (
          <React.Fragment key={stat.label}>
            {i > 0 && <div className="w-px h-8 bg-border/50" />}
            <div className="text-center">
              <div className={`font-display text-xl font-bold ${stat.color || 'text-foreground'}`}>{stat.value}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="container space-y-6">
        {/* Indoor Map CTA */}
        {mall.status === 'live' && mall.mapUrl && (
          <Link href={`/map/${mall.id}`}>
            <div className="rounded-2xl bg-gradient-to-r from-teal/15 to-teal/5 border border-teal/20 p-5 flex items-center gap-4 group hover:border-teal/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-teal/15 flex items-center justify-center map-pulse flex-shrink-0">
                <Navigation className="w-5 h-5 text-teal" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground">Open Indoor Map</h3>
                <p className="text-sm text-muted-foreground">Navigate to any store with turn-by-turn directions</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-teal transition-colors" />
            </div>
          </Link>
        )}

        {/* New Stores */}
        {newStores.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-teal" />
              <h2 className="font-display text-lg font-bold text-foreground">Just Opened</h2>
            </div>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar -mx-4 px-4">
              {newStores.map(store => (
                <div key={store.id} className="w-[180px] flex-shrink-0 glass-card rounded-2xl p-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal/20 to-teal/5 flex items-center justify-center mb-2">
                    <span className="font-display font-bold text-sm text-teal">{store.name[0]}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-foreground truncate">{store.name}</h4>
                  <p className="text-[10px] text-muted-foreground mt-1">Opened {store.openedDate}</p>
                  <p className="text-[10px] text-muted-foreground">Floor {store.floor} · {store.category}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Store Directory */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Store className="w-5 h-5 text-teal" />
              <h2 className="font-display text-lg font-bold text-foreground">Store Directory</h2>
            </div>
            <span className="text-xs text-muted-foreground">{filteredStores.length} stores</span>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-4 px-4 mb-2">
            <button onClick={() => setCategoryFilter('all')} className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${categoryFilter === 'all' ? 'bg-teal text-white' : 'bg-secondary text-muted-foreground hover:bg-secondary/80 border border-border'}`}>
              <Filter className="w-3 h-3" />All
            </button>
            {storeCategories.map(cat => (
              <button key={cat} onClick={() => setCategoryFilter(cat)} className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${categoryFilter === cat ? 'bg-teal text-white' : 'bg-secondary text-muted-foreground hover:bg-secondary/80 border border-border'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Floor Filters */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-4 px-4 mb-3">
            <button onClick={() => setFloorFilter('all')} className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${floorFilter === 'all' ? 'bg-secondary border border-teal/50 text-foreground' : 'bg-secondary/40 text-muted-foreground'}`}>
              <Layers className="w-3 h-3" />All Floors
            </button>
            {storeFloors.map(floor => (
              <button key={floor} onClick={() => setFloorFilter(floor)} className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${floorFilter === floor ? 'bg-secondary border border-teal/50 text-foreground' : 'bg-secondary/40 text-muted-foreground'}`}>
                {floor === 0 ? 'Ground' : `Floor ${floor}`}
              </button>
            ))}
          </div>

          {/* Store List */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-1.5">
            {filteredStores.map(store => (
              <motion.div key={store.id} variants={fadeUp} className="flex items-center gap-3 p-3 rounded-xl glass-card group">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-sm text-teal">{store.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-sm text-foreground truncate">{store.name}</span>
                    {store.isNew && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-teal/20 text-teal font-medium flex-shrink-0">NEW</span>}
                  </div>
                  <p className="text-xs text-muted-foreground">Floor {store.floor} · {store.category}</p>
                </div>
                {mall.status === 'live' && mall.mapUrl && (
                  <Link href={`/map/${mall.id}`}>
                    <button onClick={() => handleStoreNav(store)} className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center hover:bg-teal/20 transition-colors flex-shrink-0">
                      <Navigation className="w-4 h-4 text-teal" />
                    </button>
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Events */}
        {mallEvents.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-display text-lg font-bold text-foreground">Upcoming Events</h2>
              <Link href="/events"><span className="text-sm text-teal font-medium">View All</span></Link>
            </div>
            <div className="rounded-2xl overflow-hidden glass-card">
              <div className="relative h-[160px]">
                <img src={mallEvents[0].image} alt={mallEvents[0].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-display font-bold text-white">{mallEvents[0].title}</h3>
                  <span className="text-xs text-teal-light">{mallEvents[0].startDate} - {mallEvents[0].endDate}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Deals */}
        {mallDeals.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-display text-lg font-bold text-foreground">Active Deals</h2>
              <Link href="/deals"><span className="text-sm text-teal font-medium">View All</span></Link>
            </div>
            <div className="space-y-2">
              {mallDeals.slice(0, 3).map(deal => (
                <div key={deal.id} className="flex items-start gap-4 p-4 rounded-2xl glass-card">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal/20 to-teal/5 flex flex-col items-center justify-center flex-shrink-0">
                    <span className="font-display text-lg font-bold text-teal">{deal.discount}</span>
                    <span className="text-[8px] text-teal/70 uppercase tracking-wider">OFF</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-sm text-foreground">{deal.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{deal.storeName} · Until {deal.validUntil}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
