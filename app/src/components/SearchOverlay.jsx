import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { searchAll, getCategories } from '../lib/data';
import { useAuth } from '../contexts/AuthContext';
import { useLocation } from 'wouter';

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const [, setLocation] = useLocation();
  const { logSearch } = useAuth();

  // Load categories on mount
  useEffect(() => {
    const cats = getCategories();
    setCategories(cats);
  }, []);

  // Auto-focus search input on open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Search handler with debounce
  useEffect(() => {
    if (!query.trim()) {
      setResults(null);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      const searchResults = searchAll(query);
      setResults(searchResults);
      setLoading(false);

      // Log search event to Firestore (dashboard reads from search_events collection)
      if (logSearch) {
        logSearch({ query, results: searchResults.stores || [], mallId: 'global' });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, logSearch]);

  const handleCategoryClick = (categoryName) => {
    setQuery(categoryName);
  };

  const handleStoreClick = (store) => {
    setLocation(`/mall/${store.mallId}`);
    onClose();
  };

  const handleEventsClick = () => {
    setLocation('/events');
    onClose();
  };

  const handleDealsClick = () => {
    setLocation('/deals');
    onClose();
  };

  const handleClose = () => {
    setQuery('');
    setResults(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Search Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
            <Search className="w-5 h-5 text-teal flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search stores, events, deals..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 hover:bg-secondary rounded transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            )}
            <button
              onClick={handleClose}
              className="px-3 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Cancel
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {!query.trim() ? (
              // Category Quick Filters
              <div className="p-4">
                <motion.div
                  className="grid grid-cols-2 gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {categories.map((category, index) => (
                    <motion.button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.name)}
                      className="p-4 bg-secondary/50 hover:bg-secondary border border-border/50 rounded-xl transition-colors text-left"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                    >
                      <div className="text-2xl mb-2">{category.emoji}</div>
                      <div className="font-medium text-sm">{category.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {category.storeCount} stores
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            ) : loading ? (
              // Loading state
              <div className="flex items-center justify-center py-12">
                <div className="text-muted-foreground">Searching...</div>
              </div>
            ) : results && (results.stores?.length > 0 || results.events?.length > 0 || results.deals?.length > 0) ? (
              // Search Results
              <div className="space-y-6 p-4">
                {/* Stores Section */}
                {results.stores && results.stores.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold text-muted-foreground mb-3 px-2">STORES</h3>
                    <div className="space-y-2">
                      {results.stores.map((store) => (
                        <motion.button
                          key={store.id}
                          onClick={() => handleStoreClick(store)}
                          className="w-full p-3 bg-secondary/50 hover:bg-secondary border border-border/50 rounded-lg transition-colors text-left flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 font-semibold text-teal">
                            {store.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm">{store.name}</span>
                              {store.isNew && (
                                <span className="px-2 py-0.5 bg-teal/20 text-teal text-xs font-medium rounded">
                                  NEW
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {store.floor} • {store.category}
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Events Section */}
                {results.events && results.events.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold text-muted-foreground mb-3 px-2">EVENTS</h3>
                    <div className="space-y-2">
                      {results.events.map((event) => (
                        <motion.button
                          key={event.id}
                          onClick={handleEventsClick}
                          className="w-full p-3 bg-secondary/50 hover:bg-secondary border border-border/50 rounded-lg transition-colors text-left"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="font-medium text-sm">{event.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {event.startDate} - {event.endDate}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Deals Section */}
                {results.deals && results.deals.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold text-muted-foreground mb-3 px-2">DEALS</h3>
                    <div className="space-y-2">
                      {results.deals.map((deal) => (
                        <motion.button
                          key={deal.id}
                          onClick={handleDealsClick}
                          className="w-full p-3 bg-secondary/50 hover:bg-secondary border border-border/50 rounded-lg transition-colors text-left"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="font-medium text-sm">{deal.title}</div>
                              <div className="text-xs text-muted-foreground">
                                {deal.category}
                              </div>
                            </div>
                            <span className="text-teal font-semibold text-sm whitespace-nowrap ml-2">
                              {deal.discount}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Valid until {deal.endDate}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Empty Results State
              <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                <Search className="w-12 h-12 mb-3 opacity-50" />
                <div className="text-sm">No results found for "{query}"</div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
