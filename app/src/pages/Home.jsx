import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'wouter'
import { MapPin, Store, ChevronRight, ArrowRight, Navigation, Sparkles, Calendar } from 'lucide-react'
import { getMalls, getCategories, getNewStores, getEventsByMall } from '../lib/data'

const IMAGE_URLS = {
  hero: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1200&q=80',
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Home() {
  const malls = getMalls()
  const categories = getCategories()
  const newStores = getNewStores()
  const events = getEventsByMall('abu-dhabi-mall').slice(0, 2)

  return (
    <div className="space-y-8 pb-20">
      {/* Hero */}
      <div className="relative h-[320px] sm:h-[380px] overflow-hidden">
        <img src={IMAGE_URLS.hero} alt="Mall interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" style={{ height: '100%' }} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-[2]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2BB57D] shadow-[0_2px_8px_rgba(0,0,0,0.3)] mb-3">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white text-xs font-bold tracking-wide">Abu Dhabi Mall is now live</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            Explore malls<br /><span className="text-teal-light">like never before</span>
          </h1>
          <p className="text-white/70 text-sm mt-2 max-w-md" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Discover events, shops, and deals. Find the store you're looking for with indoor navigation.</p>
        </motion.div>
      </div>

      {/* Malls Section */}
      <div className="container">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-xl font-bold text-foreground">Malls</h2>
          <span className="text-xs text-muted-foreground">{malls.length} locations</span>
        </div>
        <motion.div variants={stagger} initial="hidden" animate="show" className="flex gap-4 overflow-x-auto hide-scrollbar -mx-4 px-4">
          {malls.map(mall => (
            <motion.div key={mall.id} variants={fadeUp}>
              <Link href={mall.status === 'live' ? `/mall/${mall.id}` : '#'}>
                <div className="w-[260px] flex-shrink-0 rounded-2xl glass-card overflow-hidden group hover:border-teal/30 transition-all">
                  <div className="relative h-[140px] overflow-hidden">
                    <div className={`absolute inset-0 ${mall.gradient}`} />
                    <img src={mall.image} alt={mall.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-3 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-teal" />
                      <span className="text-xs text-white/90">{mall.city}</span>
                    </div>
                    <div className="absolute top-3 right-3">
                      {mall.status === 'live' ? (
                        <span className="text-[10px] px-2 py-1 rounded-full bg-teal text-white font-semibold">Live</span>
                      ) : (
                        <span className="text-[10px] px-2 py-1 rounded-full bg-black/30 text-white/90 font-medium backdrop-blur-sm">Coming Soon</span>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-sm text-foreground group-hover:text-teal transition-colors">{mall.name}</h3>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Store className="w-3 h-3" />{mall.storeCount}+ stores</span>
                      <span>{mall.floors} floors</span>
                    </div>
                    {mall.status === 'live' && (
                      <div className="flex items-center gap-1.5 mt-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <span className="text-[10px] text-teal font-medium">Open Now</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Indoor Navigation CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="container">
        <Link href="/map/abu-dhabi-mall">
          <div className="rounded-2xl glass-card border-teal/20 hover:border-teal/40 p-5 flex items-center gap-4 group transition-all">
            <div className="w-14 h-14 rounded-2xl bg-teal/15 flex items-center justify-center map-pulse flex-shrink-0">
              <Navigation className="w-6 h-6 text-teal" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-bold text-foreground">Indoor Navigation</h3>
              <p className="text-sm text-muted-foreground mt-0.5">Find any store with turn-by-turn directions inside the mall</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-teal group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
        </Link>
      </motion.div>

      {/* Categories */}
      <div className="container">
        <h2 className="font-display text-xl font-bold text-foreground mb-3">Browse Categories</h2>
        <motion.div variants={stagger} initial="hidden" animate="show" className="flex gap-2 overflow-x-auto hide-scrollbar -mx-4 px-4">
          {categories.map(cat => (
            <motion.div key={cat.id} variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1, transition: { duration: 0.3 } } }}>
              <Link href={`/search?q=${cat.name}`}>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/60 border border-border/50 hover:bg-secondary hover:border-teal/30 whitespace-nowrap transition-all">
                  <span>{cat.icon}</span>
                  <span className="text-sm text-muted-foreground">{cat.name}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* New Openings */}
      {newStores.length > 0 && (
        <div className="container">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal" />
              <h2 className="font-display text-xl font-bold text-foreground">New Openings</h2>
            </div>
            <span className="text-xs text-muted-foreground">{newStores.length} new stores</span>
          </div>
          <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-2">
            {newStores.slice(0, 5).map(store => (
              <motion.div key={store.id} variants={fadeUp}>
                <Link href={`/mall/${store.mallId}`}>
                  <div className="flex items-center gap-3 p-3 rounded-xl glass-card hover:border-teal/30 group transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal/20 to-teal/5 flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-teal">{store.name[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-sm text-foreground truncate">{store.name}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-teal/20 text-teal font-medium flex-shrink-0">NEW</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">Opened {store.openedDate} · Floor {store.floor}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-teal transition-colors flex-shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Featured Events */}
      {events.length > 0 && (
        <div className="container">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-xl font-bold text-foreground">Explore</h2>
            <Link href="/events">
              <span className="text-sm text-teal font-medium flex items-center gap-1 hover:gap-2 transition-all">View All <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
          <div className="space-y-3">
            {events.map(event => (
              <Link key={event.id} href="/events">
                <div className="rounded-2xl overflow-hidden glass-card group">
                  <div className="relative h-[200px] overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display text-lg font-bold text-white">{event.title}</h3>
                      <p className="text-sm text-white/70 line-clamp-2 mt-1">{event.description}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-teal-light">{event.startDate} - {event.endDate}</span>
                        <span className="text-xs text-teal-light font-medium flex items-center gap-1">Explore Now <ChevronRight className="w-3 h-3" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
