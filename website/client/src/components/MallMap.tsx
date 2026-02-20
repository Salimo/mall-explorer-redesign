/**
 * Interactive Mall Map Component
 * SVG-based floor plan with store polygons, navigation, and pathfinding
 * 
 * Design: Cartographic Modernism
 * - Clean, precise rendering
 * - Mint accent for navigation paths
 * - Navy for UI elements
 */

import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  stores, 
  navigationNodes, 
  categoryColors, 
  findNearestNode, 
  findPath, 
  generateCheckpoints,
  type Store,
  type NavigationNode,
  type Checkpoint
} from '@/data/abuDhabiMallData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  Navigation, 
  MapPin, 
  X, 
  ChevronRight, 
  Check,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ArrowRight,
  Store as StoreIcon,
  Clock
} from 'lucide-react';

interface MallMapProps {
  onStoreSelect?: (store: Store) => void;
  initialFromStore?: string;
  initialToStore?: string;
}

export default function MallMap({ onStoreSelect, initialFromStore, initialToStore }: MallMapProps) {
  console.log('MallMap component rendering, stores count:', stores.length);
  // Map state
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  // Selection state
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [hoveredStore, setHoveredStore] = useState<Store | null>(null);
  
  // Navigation state
  const [fromStore, setFromStore] = useState<Store | null>(null);
  const [toStore, setToStore] = useState<Store | null>(null);
  const [fromSearch, setFromSearch] = useState('');
  const [toSearch, setToSearch] = useState('');
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [navigationPath, setNavigationPath] = useState<NavigationNode[]>([]);
  const [checkpoints, setCheckpoints] = useState<Checkpoint[]>([]);
  const [isNavigating, setIsNavigating] = useState(false);
  const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
  
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Map dimensions
  const mapWidth = 1400;
  const mapHeight = 700;
  
  // Filter stores based on search
  const filteredFromStores = useMemo(() => {
    if (!fromSearch) return [];
    return stores.filter(s => 
      s.name.toLowerCase().includes(fromSearch.toLowerCase()) ||
      s.unit.toLowerCase().includes(fromSearch.toLowerCase())
    ).slice(0, 5);
  }, [fromSearch]);
  
  const filteredToStores = useMemo(() => {
    if (!toSearch) return [];
    return stores.filter(s => 
      s.name.toLowerCase().includes(toSearch.toLowerCase()) ||
      s.unit.toLowerCase().includes(toSearch.toLowerCase())
    ).slice(0, 5);
  }, [toSearch]);
  
  // Calculate path when both stores are selected
  useEffect(() => {
    console.log('Path calculation effect triggered:', { fromStore: fromStore?.name, toStore: toStore?.name });
    if (fromStore && toStore) {
      const fromNode = findNearestNode(fromStore.id);
      const toNode = findNearestNode(toStore.id);
      console.log('Found nodes:', { fromNode: fromNode?.id, toNode: toNode?.id });
      
      if (fromNode && toNode) {
        const path = findPath(fromNode.id, toNode.id);
        console.log('Path found:', path.length, 'nodes');
        setNavigationPath(path);
        setCheckpoints(generateCheckpoints(path));
      } else {
        console.log('Could not find navigation nodes');
      }
    } else {
      setNavigationPath([]);
      setCheckpoints([]);
    }
  }, [fromStore, toStore]);
  
  // Handle store selection
  const handleStoreClick = useCallback((store: Store) => {
    setSelectedStore(store);
    onStoreSelect?.(store);
  }, [onStoreSelect]);
  
  // Handle navigation start
  const handleStartNavigation = () => {
    if (navigationPath.length > 0) {
      setIsNavigating(true);
      setCurrentCheckpoint(0);
    }
  };
  
  // Handle checkpoint completion
  const handleCheckpointComplete = () => {
    if (currentCheckpoint < checkpoints.length - 1) {
      setCurrentCheckpoint(prev => prev + 1);
    } else {
      // Navigation complete
      setIsNavigating(false);
      setCurrentCheckpoint(0);
    }
  };
  
  // Zoom controls
  const handleZoomIn = () => setZoom(prev => Math.min(prev * 1.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev / 1.2, 0.5));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };
  
  // Pan handling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  // Generate SVG path for navigation line
  const navigationPathD = useMemo(() => {
    if (navigationPath.length < 2) return '';
    
    let d = `M ${navigationPath[0].x} ${navigationPath[0].y}`;
    for (let i = 1; i < navigationPath.length; i++) {
      d += ` L ${navigationPath[i].x} ${navigationPath[i].y}`;
    }
    return d;
  }, [navigationPath]);
  
  // Calculate estimated walking time (assuming 1.2 m/s walking speed, 1 unit = 0.5m)
  const estimatedTime = useMemo(() => {
    if (navigationPath.length < 2) return 0;
    let totalDistance = 0;
    for (let i = 1; i < navigationPath.length; i++) {
      const dx = navigationPath[i].x - navigationPath[i-1].x;
      const dy = navigationPath[i].y - navigationPath[i-1].y;
      totalDistance += Math.sqrt(dx*dx + dy*dy);
    }
    // Convert to meters (1 unit = 0.5m) and then to minutes (1.2 m/s)
    const meters = totalDistance * 0.5;
    const seconds = meters / 1.2;
    return Math.ceil(seconds / 60);
  }, [navigationPath]);

  return (
    <div className="relative w-full h-full bg-slate-100 overflow-hidden" ref={containerRef}>
      {/* Navigation Panel */}
      <div className="absolute top-4 left-4 z-20 w-80 space-y-3">
        {/* From Input */}
        <div className="relative">
          <div className="flex items-center gap-2 bg-white rounded-lg shadow-lg p-3">
            <div className="w-3 h-3 rounded-full bg-[#00D9B1]" />
            <div className="flex-1 relative">
              <Input
                placeholder="Starting point..."
                value={fromStore ? fromStore.name : fromSearch}
                onChange={(e) => {
                  setFromSearch(e.target.value);
                  setFromStore(null);
                  setShowFromSuggestions(true);
                }}
                onFocus={() => setShowFromSuggestions(true)}
                onBlur={() => setTimeout(() => setShowFromSuggestions(false), 200)}
                className="border-0 bg-transparent focus-visible:ring-0 p-0 h-auto"
              />
            </div>
            {fromStore && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 w-6 p-0"
                onClick={() => {
                  setFromStore(null);
                  setFromSearch('');
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
          
          {/* From Suggestions */}
          <AnimatePresence>
            {showFromSuggestions && filteredFromStores.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg overflow-hidden z-30"
              >
                {filteredFromStores.map(store => (
                  <button
                    key={store.id}
                    className="w-full px-4 py-3 text-left hover:bg-slate-50 flex items-center gap-3 border-b border-slate-100 last:border-0"
                    onClick={() => {
                      console.log('Setting fromStore:', store.name, store.id);
                      setFromStore(store);
                      setFromSearch('');
                      setShowFromSuggestions(false);
                    }}
                  >
                    <StoreIcon className="w-4 h-4 text-slate-400" />
                    <div>
                      <div className="font-medium text-sm">{store.name}</div>
                      <div className="text-xs text-slate-500">{store.unit} • {store.category}</div>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* To Input */}
        <div className="relative">
          <div className="flex items-center gap-2 bg-white rounded-lg shadow-lg p-3">
            <MapPin className="w-4 h-4 text-red-500" />
            <div className="flex-1 relative">
              <Input
                placeholder="Destination..."
                value={toStore ? toStore.name : toSearch}
                onChange={(e) => {
                  setToSearch(e.target.value);
                  setToStore(null);
                  setShowToSuggestions(true);
                }}
                onFocus={() => setShowToSuggestions(true)}
                onBlur={() => setTimeout(() => setShowToSuggestions(false), 200)}
                className="border-0 bg-transparent focus-visible:ring-0 p-0 h-auto"
              />
            </div>
            {toStore && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 w-6 p-0"
                onClick={() => {
                  setToStore(null);
                  setToSearch('');
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
          
          {/* To Suggestions */}
          <AnimatePresence>
            {showToSuggestions && filteredToStores.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg overflow-hidden z-30"
              >
                {filteredToStores.map(store => (
                  <button
                    key={store.id}
                    className="w-full px-4 py-3 text-left hover:bg-slate-50 flex items-center gap-3 border-b border-slate-100 last:border-0"
                    onClick={() => {
                      console.log('Setting toStore:', store.name, store.id);
                      setToStore(store);
                      setToSearch('');
                      setShowToSuggestions(false);
                    }}
                  >
                    <StoreIcon className="w-4 h-4 text-slate-400" />
                    <div>
                      <div className="font-medium text-sm">{store.name}</div>
                      <div className="text-xs text-slate-500">{store.unit} • {store.category}</div>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Debug Panel */}
        {(fromStore || toStore) && (
          <div className="bg-yellow-100 rounded-lg p-2 text-xs">
            <div>From: {fromStore?.name || 'not set'}</div>
            <div>To: {toStore?.name || 'not set'}</div>
            <div>Path length: {navigationPath.length}</div>
          </div>
        )}
        
        {/* Route Info & Start Button */}
        {fromStore && toStore && navigationPath.length > 0 && !isNavigating && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-600">~{estimatedTime} min walk</span>
              </div>
              <Badge variant="outline" className="text-xs">
                {checkpoints.length} checkpoints
              </Badge>
            </div>
            <Button 
              className="w-full bg-[#00D9B1] hover:bg-[#00c4a0] text-[#0F172A] font-semibold"
              onClick={handleStartNavigation}
            >
              <Navigation className="w-4 h-4 mr-2" />
              Start Navigation
            </Button>
          </motion.div>
        )}
      </div>
      
      {/* Active Navigation Panel */}
      <AnimatePresence>
        {isNavigating && checkpoints.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute bottom-4 left-4 right-4 md:left-4 md:right-auto md:w-96 z-20"
          >
            <Card className="bg-white shadow-xl">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-[#0F172A]">Navigation</h3>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setIsNavigating(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                
                {/* Progress */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#00D9B1]"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentCheckpoint + 1) / checkpoints.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-500">
                    {currentCheckpoint + 1}/{checkpoints.length}
                  </span>
                </div>
                
                {/* Current Checkpoint */}
                <div className="bg-slate-50 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#00D9B1] flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-[#0F172A]">{currentCheckpoint + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-[#0F172A]">
                        {checkpoints[currentCheckpoint]?.instruction}
                      </p>
                      {checkpoints[currentCheckpoint]?.landmark && (
                        <p className="text-sm text-slate-500 mt-1">
                          Look for: {checkpoints[currentCheckpoint].landmark}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Next Checkpoint Preview */}
                {currentCheckpoint < checkpoints.length - 1 && (
                  <div className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Next: {checkpoints[currentCheckpoint + 1]?.instruction}
                  </div>
                )}
                
                {/* Action Button */}
                <Button 
                  className="w-full bg-[#0F172A] hover:bg-[#1e293b] text-white"
                  onClick={handleCheckpointComplete}
                >
                  {currentCheckpoint < checkpoints.length - 1 ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Done - Next Step
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Arrived!
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Zoom Controls */}
      <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2">
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-white shadow-lg"
          onClick={handleZoomIn}
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-white shadow-lg"
          onClick={handleZoomOut}
        >
          <ZoomOut className="w-4 h-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-white shadow-lg"
          onClick={handleReset}
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Floor Selector */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <button className="px-4 py-2 bg-[#00D9B1] text-[#0F172A] font-semibold text-sm">
            L1
          </button>
        </div>
      </div>
      
      {/* Store Info Popup */}
      <AnimatePresence>
        {selectedStore && !isNavigating && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-80"
          >
            <Card className="bg-white shadow-xl">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-[#0F172A]">{selectedStore.name}</h3>
                    <p className="text-sm text-slate-500">{selectedStore.unit} • {selectedStore.category}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 w-6 p-0"
                    onClick={() => setSelectedStore(null)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                {selectedStore.size && (
                  <p className="text-xs text-slate-400 mb-3">Size: {selectedStore.size}</p>
                )}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setFromStore(selectedStore);
                      setSelectedStore(null);
                    }}
                  >
                    Set as Start
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-[#00D9B1] hover:bg-[#00c4a0] text-[#0F172A]"
                    onClick={() => {
                      setToStore(selectedStore);
                      setSelectedStore(null);
                    }}
                  >
                    Navigate Here
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* SVG Map */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${mapWidth} ${mapHeight}`}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        style={{
          transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
          transformOrigin: 'center center'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Background */}
        <rect x="0" y="0" width={mapWidth} height={mapHeight} fill="#f1f5f9" />
        
        {/* Corridor areas (walkable) */}
        <g className="corridors">
          {/* Main horizontal corridor */}
          <rect x="140" y="140" width="1240" height="80" fill="#e2e8f0" rx="4" />
          {/* Left vertical corridor */}
          <rect x="140" y="140" width="80" height="500" fill="#e2e8f0" rx="4" />
          {/* Central atrium */}
          <rect x="600" y="220" width="200" height="200" fill="#e2e8f0" rx="4" />
          {/* Lower horizontal corridor */}
          <rect x="480" y="420" width="900" height="80" fill="#e2e8f0" rx="4" />
          {/* Bottom section corridor */}
          <rect x="480" y="500" width="600" height="80" fill="#e2e8f0" rx="4" />
        </g>
        
        {/* Store polygons */}
        <g className="stores">
          {stores.map(store => {
            const isSelected = selectedStore?.id === store.id;
            const isHovered = hoveredStore?.id === store.id;
            const isFrom = fromStore?.id === store.id;
            const isTo = toStore?.id === store.id;
            const color = categoryColors[store.category] || categoryColors.Default;
            
            return (
              <g key={store.id}>
                <polygon
                  points={store.polygon.map(p => p.join(',')).join(' ')}
                  fill={isFrom ? '#00D9B1' : isTo ? '#ef4444' : color}
                  fillOpacity={isSelected || isHovered ? 0.9 : 0.7}
                  stroke={isSelected || isHovered ? '#0F172A' : '#94a3b8'}
                  strokeWidth={isSelected || isHovered ? 2 : 1}
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => handleStoreClick(store)}
                  onMouseEnter={() => setHoveredStore(store)}
                  onMouseLeave={() => setHoveredStore(null)}
                />
                {/* Store label */}
                <text
                  x={store.labelPosition.x}
                  y={store.labelPosition.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="10"
                  fontWeight="500"
                  fill="#1e293b"
                  className="pointer-events-none select-none"
                  style={{ textShadow: '0 0 3px white, 0 0 3px white' }}
                >
                  {store.name.length > 15 ? store.name.substring(0, 12) + '...' : store.name}
                </text>
              </g>
            );
          })}
        </g>
        
        {/* Navigation path */}
        {navigationPath.length > 0 && (
          <g className="navigation-path">
            {/* Path shadow */}
            <path
              d={navigationPathD}
              fill="none"
              stroke="#0F172A"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.2"
            />
            {/* Main path */}
            <path
              d={navigationPathD}
              fill="none"
              stroke="#00D9B1"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Animated arrows */}
            <path
              d={navigationPathD}
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="10 20"
              className="animate-dash"
            />
          </g>
        )}
        
        {/* Navigation nodes (checkpoints) */}
        {isNavigating && checkpoints.map((checkpoint, index) => {
          const isCompleted = index < currentCheckpoint;
          const isCurrent = index === currentCheckpoint;
          
          return (
            <g key={checkpoint.id}>
              <circle
                cx={checkpoint.node.x}
                cy={checkpoint.node.y}
                r={isCurrent ? 12 : 8}
                fill={isCompleted ? '#00D9B1' : isCurrent ? '#0F172A' : 'white'}
                stroke={isCompleted || isCurrent ? '#00D9B1' : '#94a3b8'}
                strokeWidth="2"
              />
              {isCompleted && (
                <text
                  x={checkpoint.node.x}
                  y={checkpoint.node.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="10"
                  fill="white"
                  fontWeight="bold"
                >
                  ✓
                </text>
              )}
              {isCurrent && (
                <text
                  x={checkpoint.node.x}
                  y={checkpoint.node.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="10"
                  fill="white"
                  fontWeight="bold"
                >
                  {index + 1}
                </text>
              )}
            </g>
          );
        })}
        
        {/* Start marker */}
        {fromStore && (
          <g>
            <circle
              cx={fromStore.labelPosition.x}
              cy={fromStore.labelPosition.y}
              r="15"
              fill="#00D9B1"
              stroke="white"
              strokeWidth="3"
            />
            <text
              x={fromStore.labelPosition.x}
              y={fromStore.labelPosition.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12"
              fill="#0F172A"
              fontWeight="bold"
            >
              A
            </text>
          </g>
        )}
        
        {/* End marker */}
        {toStore && (
          <g>
            <circle
              cx={toStore.labelPosition.x}
              cy={toStore.labelPosition.y}
              r="15"
              fill="#ef4444"
              stroke="white"
              strokeWidth="3"
            />
            <text
              x={toStore.labelPosition.x}
              y={toStore.labelPosition.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12"
              fill="white"
              fontWeight="bold"
            >
              B
            </text>
          </g>
        )}
      </svg>
      
      {/* CSS for animated dashes */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -30;
          }
        }
        .animate-dash {
          animation: dash 0.5s linear infinite;
        }
      `}</style>
    </div>
  );
}
