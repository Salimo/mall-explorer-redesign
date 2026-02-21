import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Info, Maximize2, Minimize2 } from 'lucide-react'
import { Link, useRoute } from 'wouter'
import { getMallById } from '../lib/data'

export default function IndoorMap() {
  const [, params] = useRoute('/map/:mallId')
  const mall = getMallById(params?.mallId)
  const [showInfo, setShowInfo] = useState(true)
  const [fullscreen, setFullscreen] = useState(false)

  if (!mall || !mall.mapUrl) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Indoor map not available for this mall</p>
          <Link href="/"><span className="text-teal text-sm mt-2 block">Go back home</span></Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex flex-col h-screen bg-background ${fullscreen ? 'fixed inset-0 z-[70]' : ''}`}>
      {/* Top Bar */}
      <div className="bg-white/90 backdrop-blur-lg border-b border-border shadow-sm px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <Link href={`/mall/${mall.id}`}>
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </div>
          </Link>
          <div>
            <h1 className="font-display font-bold text-foreground text-sm">{mall.name}</h1>
            <p className="text-xs text-muted-foreground">Indoor Navigation</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowInfo(!showInfo)} className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${showInfo ? 'bg-teal/20 text-teal' : 'bg-secondary text-muted-foreground'}`}>
            <Info className="w-5 h-5" />
          </button>
          <button onClick={() => setFullscreen(!fullscreen)} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            {fullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Info Banner */}
      <AnimatePresence>
        {showInfo && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex-shrink-0">
            <div className="bg-teal/8 border-b border-teal/15 px-4 py-3">
              <p className="text-sm text-teal-dark">Use the interactive map below to find stores and get turn-by-turn directions inside {mall.name}. Tap on any store to see details and navigate.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map iframe */}
      <div className="flex-1 relative">
        <iframe src={mall.mapUrl} className="absolute inset-0 w-full h-full border-0" allow="geolocation; accelerometer; gyroscope" loading="lazy" title={`${mall.name} Indoor Map`} />
      </div>
    </div>
  )
}
