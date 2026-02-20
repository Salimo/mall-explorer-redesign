// Import existing data
import {
  STORES,
  MALLS,
  searchStores,
  globalSearch,
  findMall,
  getStoresForMall,
  LEVELS,
  LEVEL_SHORT,
  CATEGORIES,
  CATEGORY_CONFIG
} from '../data/stores'

// Image URLs for Unsplash placeholder images
export const IMAGE_URLS = {
  hero: 'https://images.unsplash.com/photo-1555529669-2269d7dd0c00?w=1200&h=600&fit=crop',
  malls: {
    'abu-dhabi-mall': 'https://images.unsplash.com/photo-1555529669-2269d7dd0c00?w=600&h=400&fit=crop',
    'yas-mall': 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop',
    'al-wahda-mall': 'https://images.unsplash.com/photo-1519098901362-13baccc3c4e4?w=600&h=400&fit=crop'
  },
  events: {
    'ramadan-nights': 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
    'fashion-week': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    'kids-festival': 'https://images.unsplash.com/photo-1503921276902-b3b63eb7b59e?w=600&h=400&fit=crop',
    'food-festival': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop'
  }
}

// Helper function to map level strings to floor numbers
const levelToFloor = (levelStr) => {
  if (!levelStr) return 0
  const str = levelStr.toLowerCase()
  if (str.includes('ground') || str.includes('mezzanine')) return 0
  if (str.includes('level 1')) return 1
  if (str.includes('level 2')) return 2
  if (str.includes('level 3')) return 3
  return 0
}

// Helper function to map old categories to new categories
const mapCategory = (oldCategory, storeName) => {
  const name = storeName.toLowerCase()
  
  if (oldCategory === 'Shop' || oldCategory === 'shop') {
    // Map specific stores to Electronics, Beauty, Home & Living, Services
    if (name.includes('apple') || name.includes('tech') || name.includes('electronic') || name.includes('computer')) {
      return 'Electronics'
    }
    if (name.includes('salon') || name.includes('spa') || name.includes('beauty') || name.includes('cosmetic') || name.includes('perfume') || name.includes('oud')) {
      return 'Beauty'
    }
    if (name.includes('home') || name.includes('furniture') || name.includes('ikea') || name.includes('decor')) {
      return 'Home & Living'
    }
    if (name.includes('bank') || name.includes('atm') || name.includes('exchange') || name.includes('service')) {
      return 'Services'
    }
    // Default Shop to Fashion
    return 'Fashion'
  }
  
  if (oldCategory === 'Dine' || oldCategory === 'dine') {
    return 'Food & Dining'
  }
  
  if (oldCategory === 'Play' || oldCategory === 'play') {
    return 'Entertainment'
  }
  
  if (oldCategory === 'Learn' || oldCategory === 'learn') {
    return 'Services'
  }
  
  return 'Fashion'
}

// Map STORES to new Store interface
const mappedStores = STORES.map((store, index) => ({
  id: String(store.id),
  name: store.name,
  category: mapCategory(store.category, store.name),
  floor: levelToFloor(store.level),
  mallId: store.mallId,
  isNew: Math.random() < 0.05, // ~5% of stores are new
  openedDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
  description: `Discover ${store.name} at our mall. Shop the latest collections and exclusive deals.`,
  level: store.level,
  imageURL: store.imageURL
}))

// Map MALLS to new Mall interface
export const malls = [
  {
    id: 'abu-dhabi-mall',
    name: 'Abu Dhabi Mall',
    location: 'Abu Dhabi',
    city: 'Abu Dhabi',
    storeCount: 212,
    floors: 4,
    image: IMAGE_URLS.malls['abu-dhabi-mall'],
    status: 'live',
    mapUrl: 'https://app.mappedin.com/map/698ddfafaef5cb000b3a0f8b',
    openingHours: {
      weekday: '10:00 AM - 10:00 PM',
      weekend: '10:00 AM - 11:00 PM'
    },
    description: 'Abu Dhabi\'s premier shopping destination with 212 stores across 4 floors, featuring luxury brands, dining, and entertainment.',
    gradient: 'from-blue-600 to-blue-400'
  },
  {
    id: 'yas-mall',
    name: 'Yas Mall',
    location: 'Abu Dhabi',
    city: 'Abu Dhabi',
    storeCount: 370,
    floors: 3,
    image: IMAGE_URLS.malls['yas-mall'],
    status: 'coming-soon',
    mapUrl: 'https://map.mallframe.com/yas-mall/',
    openingHours: {
      weekday: 'Coming Soon',
      weekend: 'Coming Soon'
    },
    description: 'Yas Mall is set to become Abu Dhabi\'s largest shopping destination with 370 stores and world-class entertainment facilities.',
    gradient: 'from-purple-600 to-pink-400'
  },
  {
    id: 'al-wahda-mall',
    name: 'Al Wahda Mall',
    location: 'Abu Dhabi',
    city: 'Abu Dhabi',
    storeCount: 150,
    floors: 3,
    image: IMAGE_URLS.malls['al-wahda-mall'],
    status: 'coming-soon',
    mapUrl: 'https://map.mallframe.com/yas-mall/',
    openingHours: {
      weekday: 'Coming Soon',
      weekend: 'Coming Soon'
    },
    description: 'Al Wahda Mall will soon offer 150 premium stores and dining experiences across 3 floors.',
    gradient: 'from-amber-600 to-orange-400'
  }
]

// Compute categories from mapped stores
export const categories = (() => {
  const categoryMap = {}
  
  mappedStores.forEach(store => {
    if (!categoryMap[store.category]) {
      categoryMap[store.category] = 0
    }
    categoryMap[store.category]++
  })
  
  return [
    {
      id: 'fashion',
      name: 'Fashion',
      icon: '👗',
      count: categoryMap['Fashion'] || 0
    },
    {
      id: 'food-dining',
      name: 'Food & Dining',
      icon: '🍴',
      count: categoryMap['Food & Dining'] || 0
    },
    {
      id: 'entertainment',
      name: 'Entertainment',
      icon: '🎮',
      count: categoryMap['Entertainment'] || 0
    },
    {
      id: 'services',
      name: 'Services',
      icon: '🔧',
      count: categoryMap['Services'] || 0
    },
    {
      id: 'electronics',
      name: 'Electronics',
      icon: '📱',
      count: categoryMap['Electronics'] || 0
    },
    {
      id: 'beauty',
      name: 'Beauty',
      icon: '💄',
      count: categoryMap['Beauty'] || 0
    },
    {
      id: 'sports',
      name: 'Sports',
      icon: '⚽',
      count: categoryMap['Sports'] || 0
    },
    {
      id: 'home-living',
      name: 'Home & Living',
      icon: '🏠',
      count: categoryMap['Home & Living'] || 0
    }
  ]
})()

// Mock events array
export const events = [
  {
    id: 'event-1',
    title: 'Ramadan Nights',
    description: 'Celebrate Ramadan with exclusive shopping deals, special performances, and traditional dining experiences throughout the mall.',
    mallId: 'abu-dhabi-mall',
    image: IMAGE_URLS.events['ramadan-nights'],
    startDate: '2026-03-01',
    endDate: '2026-03-30',
    category: 'Festival',
    attendeeCount: 5000
  },
  {
    id: 'event-2',
    title: 'Fashion Week',
    description: 'Experience the latest fashion collections from international and local designers. Fashion shows, trunk sales, and styling sessions.',
    mallId: 'abu-dhabi-mall',
    image: IMAGE_URLS.events['fashion-week'],
    startDate: '2026-04-15',
    endDate: '2026-04-22',
    category: 'Shopping',
    attendeeCount: 3000
  },
  {
    id: 'event-3',
    title: 'Kids Festival',
    description: 'Fun-filled activities for children including games, workshops, character meet-and-greets, and entertainment shows.',
    mallId: 'abu-dhabi-mall',
    image: IMAGE_URLS.events['kids-festival'],
    startDate: '2026-05-01',
    endDate: '2026-05-07',
    category: 'Family',
    attendeeCount: 8000
  },
  {
    id: 'event-4',
    title: 'Food Festival',
    description: 'Culinary celebration featuring cuisines from around the world. Live cooking demonstrations, tastings, and food competitions.',
    mallId: 'yas-mall',
    image: IMAGE_URLS.events['food-festival'],
    startDate: '2026-06-01',
    endDate: '2026-06-15',
    category: 'Dining',
    attendeeCount: 6000
  }
]

// Mock deals array
export const deals = [
  {
    id: 'deal-1',
    title: 'Summer Sale',
    description: 'Up to 50% off on selected items',
    discount: 50,
    storeIds: ['1', '5', '21', '27', '32'],
    mallId: 'abu-dhabi-mall',
    startDate: '2026-02-20',
    endDate: '2026-03-15',
    category: 'Fashion'
  },
  {
    id: 'deal-2',
    title: 'Dining Delights',
    description: 'Buy one get one 50% off on selected restaurants',
    discount: 50,
    storeIds: ['15', '17', '23', '24'],
    mallId: 'abu-dhabi-mall',
    startDate: '2026-02-25',
    endDate: '2026-03-10',
    category: 'Food & Dining'
  },
  {
    id: 'deal-3',
    title: 'Tech Tuesday',
    description: 'Special discounts on electronics every Tuesday',
    discount: 30,
    storeIds: [],
    mallId: 'abu-dhabi-mall',
    startDate: '2026-02-20',
    endDate: '2026-03-31',
    category: 'Electronics'
  },
  {
    id: 'deal-4',
    title: 'Beauty Bonanza',
    description: 'Up to 40% off beauty and personal care products',
    discount: 40,
    storeIds: ['19', '25'],
    mallId: 'abu-dhabi-mall',
    startDate: '2026-03-01',
    endDate: '2026-03-20',
    category: 'Beauty'
  },
  {
    id: 'deal-5',
    title: 'Entertainment Extravaganza',
    description: 'Special packages and discounts on entertainment venues',
    discount: 35,
    storeIds: ['20'],
    mallId: 'abu-dhabi-mall',
    startDate: '2026-02-20',
    endDate: '2026-04-30',
    category: 'Entertainment'
  },
  {
    id: 'deal-6',
    title: 'Grand Opening Special',
    description: 'Early bird discounts and exclusive offers at Yas Mall',
    discount: 25,
    storeIds: [],
    mallId: 'yas-mall',
    startDate: '2026-03-01',
    endDate: '2026-04-30',
    category: 'General'
  }
]

// Helper functions
export const getMalls = () => {
  return malls
}

export const getMallById = (id) => {
  return malls.find(mall => mall.id === id)
}

export const getStoresByMall = (mallId) => {
  return mappedStores.filter(store => store.mallId === mallId)
}

export const getNewStores = () => {
  return mappedStores.filter(store => store.isNew === true)
}

export const getEventsByMall = (mallId) => {
  return events.filter(event => event.mallId === mallId)
}

export const getDealsByMall = (mallId) => {
  return deals.filter(deal => deal.mallId === mallId)
}

export const searchAll = (query) => {
  const lowerQuery = query.toLowerCase()
  
  const stores = mappedStores.filter(store =>
    store.name.toLowerCase().includes(lowerQuery) ||
    store.category.toLowerCase().includes(lowerQuery) ||
    store.description.toLowerCase().includes(lowerQuery)
  )
  
  const eventResults = events.filter(event =>
    event.title.toLowerCase().includes(lowerQuery) ||
    event.description.toLowerCase().includes(lowerQuery) ||
    event.category.toLowerCase().includes(lowerQuery)
  )
  
  const dealResults = deals.filter(deal =>
    deal.title.toLowerCase().includes(lowerQuery) ||
    deal.description.toLowerCase().includes(lowerQuery) ||
    deal.category.toLowerCase().includes(lowerQuery)
  )
  
  return {
    stores,
    events: eventResults,
    deals: dealResults
  }
}

export const getCategories = () => {
  return categories
}
