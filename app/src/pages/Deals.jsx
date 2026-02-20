import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Tag, Store, Clock } from 'lucide-react'
import { getMalls, getDealsByMall } from '../lib/data'

const DEAL_CATEGORIES = [
  { id: 'all', name: 'All Deals', icon: '🏷️' },
  { id: 'Fashion', name: 'Fashion', icon: '👗' },
  { id: 'Electronics', name: 'Electronics', icon: '📱' },
  { id: 'Food & Dining', name: 'Food', icon: '🍽️' },
  { id: 'Beauty', name: 'Beauty', icon: '💄' },
  { id: 'Sports', name: 'Sports', icon: '⚽' },
]

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function Deals() {
  const [category, setCategory] = useState('all')
  const malls = getMalls()
  const allDeals = malls.flatMap(m => getDealsByMall(m.id))
  const filtered = category === 'all' ? allDeals : allDeals.filter(d => d.category === category)

  return (
    <div className="container pb-20 pt-4">
      <h1 className="font-display text-2xl font-bold text-foreground">Deals & Promotions</h1>
      <p className="text-sm text-muted-foreground mt-1">Real-time deals from stores across all partner malls</p>

      <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-4 px-4 mt-4 mb-4">
        {DEAL_CATEGORIES.map(cat => (
          <button key={cat.id} onClick={() => setCategory(cat.id)} className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${category === cat.id ? 'bg-teal text-white' : 'bg-secondary text-muted-foreground hover:bg-secondary/80 border border-border'}`}>
            <span>{cat.icon}</span>{cat.name}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Tag className="w-12 h-12 text-muted-foreground mb-3" />
          <p className="text-muted-foreground">No deals in this category</p>
        </div>
      ) : (
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-3">
          {filtered.map(deal => (
            <motion.div key={deal.id} variants={fadeUp} className="p-5 rounded-2xl glass-card hover:border-teal/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal/20 to-teal/5 flex flex-col items-center justify-center flex-shrink-0">
                  <span className="font-display text-xl font-bold text-teal">{deal.discount}</span>
                  <span className="text-[8px] text-teal/70 uppercase tracking-wider">OFF</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-bold text-foreground">{deal.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{deal.description}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Store className="w-3 h-3 text-teal" />{deal.storeName}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />Until {deal.validUntil}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
