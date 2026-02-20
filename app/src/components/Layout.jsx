import { useLocation, Link } from 'wouter';
import { motion } from 'framer-motion';
import { Globe, Calendar, Tag, Map, Search, User } from 'lucide-react';
import { useState } from 'react';
import SearchOverlay from './SearchOverlay';
import { useAuth } from '../contexts/AuthContext';

export default function Layout({ children, onShowProfile }) {
  const [location] = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const { profile } = useAuth();

  // Detect if on map page
  const isMapPage = location.startsWith('/map/');

  // If on map page, render only children without header/tabs
  if (isMapPage) {
    return children;
  }

  // Determine active tab
  const isExploreActive = location === '/';
  const isEventsActive = location.startsWith('/events');
  const isDealsActive = location.startsWith('/deals');
  const isMapActive = location.startsWith('/map/');

  const tabs = [
    { label: 'Explore', icon: Globe, href: '/', isActive: isExploreActive },
    { label: 'Events', icon: Calendar, href: '/events', isActive: isEventsActive },
    { label: 'Deals', icon: Tag, href: '/deals', isActive: isDealsActive },
    { label: 'Map', icon: Map, href: '/map/abu-dhabi-mall', isActive: isMapActive },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 glass-card flex items-center justify-between px-4 py-3 border-b border-border/50">
        {/* Left: Logo and Text */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal text-navy font-display font-bold flex items-center justify-center">
            M
          </div>
          <span className="hidden sm:block font-display font-bold">Mall Explorer</span>
        </Link>

        {/* Right: Search */}
        <div className="flex items-center gap-2">
          {/* Search bar - hidden on mobile */}
          <button
            onClick={() => setSearchOpen(true)}
            className="hidden sm:flex items-center gap-2 flex-1 max-w-xs bg-secondary border border-border/50 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Search className="w-4 h-4" />
            <span className="text-sm">Search stores...</span>
          </button>

          {/* Search icon button - visible on mobile */}
          <button
            onClick={() => setSearchOpen(true)}
            className="sm:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Profile avatar */}
          {onShowProfile && (
            <button
              onClick={onShowProfile}
              className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center hover:bg-teal/30 transition-colors"
            >
              {profile?.displayName ? (
                <span className="text-xs font-bold text-teal font-display">{profile.displayName[0].toUpperCase()}</span>
              ) : (
                <User className="w-4 h-4 text-teal" />
              )}
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-20">
        {children}
      </main>

      {/* Fixed Bottom Tab Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-border/50 flex justify-around items-end">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Link key={tab.href} to={tab.href} className="relative flex-1">
              <button className="w-full flex flex-col items-center justify-end gap-1 px-4 py-3 relative">
                {/* Animated indicator bar */}
                {tab.isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full bg-teal"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}

                {/* Icon */}
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    tab.isActive ? 'text-teal' : 'text-muted-foreground'
                  }`}
                />

                {/* Label */}
                <span
                  className={`text-[10px] font-medium transition-colors ${
                    tab.isActive ? 'text-teal' : 'text-muted-foreground'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            </Link>
          );
        })}
      </nav>

      {/* Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
