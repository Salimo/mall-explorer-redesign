import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Search, Navigation } from 'lucide-react'
import { Link, useLocation } from 'wouter'
import { searchAll, getCategories } from '../lib/data'
import { useAuth } from '../contexts/AuthContext'

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } }
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } }

export default function SearchPage() {
  const [, setLocation] = useLocation()
  const { logSearch } = useAuth()
  const [query, setQuery] = useState('')
  const categories = getCategories()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const q = params.get('q')
    if (q) setQuery(q)
  }, [])

  const results = query.trim() ? searchAll(query) : null
  const hasResults = results && (results.stores.length > 0 || results.events.length > 0 || results.deals.length > 0)

  useEffect(() => {
    if (results && query.trim()) {
      logSearch({ query, results: results.stores, mallId: 'global' })
    }
  }, [query])

  return (
    <div className="container pb-20 pt-4">
      <div className="flex items-center gap-3 mb-4">
        <Link href="/">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </div>
        </Link>
        <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary border border-border/50 focus-within:border-teal/50 transition-colors">
          <Search className="w-5 h-5 text-teal" />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search stores, events, deals..." className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base" autoFocus />
        </div>
      </div>

      {!query.trim() && (
        <div>
          <h2 className="font-display font-bold text-foreground mb-3">Browse Categories</h2>
          <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-2">
            {categories.map(cat => (
              <motion.div key={cat.id} variants={fadeUp}>
                <button onClick={() => setQuery(cat.name)} className="w-full p-4 rounded-xl glass-card hover:border-teal/30 text-left transition-all">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-display font-bold text-sm text-foreground mt-2">{cat.name}</h3>
                  <p className="text-xs text-muted-foreground">{cat.count} stores</p>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {query.trim() && !hasResults && (
        <div className="flex flex-col items-center justify-center py-20">
          <Search className="w-12 h-12 text-muted-foreground mb-3" />
          <p className="text-muted-foreground">No results found for "{query}"</p>
          <p className="text-xs text-muted-foreground mt-1">Try different search terms</p>
        </div>
      )}

      {results && hasResults && (
        <div className="space-y-6">
          {results.stores.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Stores ({results.stores.length})</h3>
              <div className="space-y-1.5">
                {results.stores.slice(0, 20).map(store => (
                  <Link key={store.id} href={`/mall/${store.mallId}`}>
                    <div className="flex items-center gap-3 p-3 rounded-xl glass-card hover:border-teal/30 transition-all">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                        <span className="font-display font-bold text-sm text-teal">{store.name[0]}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-display font-bold text-sm text-foreground truncate">{store.name}</span>
                          {store.isNew && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-teal/20 text-teal font-medium">NEW</span>}
                        </div>
                        <p className="text-xs text-muted-foreground">Floor {store.floor} · {store.category}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {results.events.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Events ({results.events.length})</h3>
              <div className="space-y-1.5">
                {results.events.map(event => (
                  <Link key={event.id} href="/events">
                    <div className="p-3 rounded-xl glass-card hover:border-teal/30 transition-all">
                      <span className="font-display font-bold text-sm text-foreground">{event.title}</span>
                      <p className="text-xs text-muted-foreground">{event.startDate} - {event.endDate}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {results.deals.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Deals ({results.deals.length})</h3>
              <div className="space-y-1.5">
                {results.deals.map(deal => (
                  <Link key={deal.id} href="/deals">
                    <div className="flex items-center justify-between p-3 rounded-xl glass-card hover:border-teal/30 transition-all">
                      <div>
                        <span className="font-display font-bold text-sm text-foreground">{deal.title}</span>
                        <p className="text-xs text-muted-foreground">{deal.storeName} · Until {deal.validUntil}</p>
                      </div>
                      <span className="text-teal font-display font-bold">{deal.discount}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
