import React from 'react'
import { Link } from 'wouter'
import { MapPin } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center pb-20">
      <div className="text-center">
        <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h1 className="font-display text-2xl font-bold text-foreground mb-2">Page Not Found</h1>
        <p className="text-muted-foreground text-sm mb-4">The page you're looking for doesn't exist.</p>
        <Link href="/"><span className="text-teal font-medium">Go back home</span></Link>
      </div>
    </div>
  )
}
