import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { getEventsByMall, getMallById, getMalls } from '../lib/data'

const EVENT_CATEGORIES = ['All', 'Cultural', 'Fashion', 'Family', 'Food']

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function Events() {
  const [category, setCategory] = useState('All')
  const malls = getMalls()
  const allEvents = malls.flatMap(m => getEventsByMall(m.id))
  const filtered = category === 'All' ? allEvents : allEvents.filter(e => e.category === category)

  return (
    <div className="container pb-20 pt-4">
      <h1 className="font-display text-2xl font-bold text-foreground">Events & What's New</h1>
      <p className="text-sm text-muted-foreground mt-1">Discover what's happening at your favorite malls</p>

      <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-4 px-4 mt-4 mb-4">
        {EVENT_CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)} className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${category === cat ? 'bg-teal text-navy' : 'bg-secondary/60 text-muted-foreground hover:bg-secondary'}`}>
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Calendar className="w-12 h-12 text-muted-foreground mb-3" />
          <p className="text-muted-foreground">No events in this category</p>
        </div>
      ) : (
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-4">
          {filtered.map(event => {
            const mall = getMallById(event.mallId)
            return (
              <motion.div key={event.id} variants={fadeUp} className="rounded-2xl overflow-hidden glass-card group">
                <div className="relative h-[200px] overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] px-2 py-1 rounded-full bg-teal/90 text-navy font-semibold">{event.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-foreground">{event.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{event.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-teal" />{event.startDate} - {event.endDate}</span>
                    {mall && <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-teal" />{mall.name}</span>}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      )}
    </div>
  )
}
