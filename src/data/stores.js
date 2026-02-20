// Category definitions
export const CATEGORIES = {
  shop: 'Shop',
  dine: 'Dine',
  play: 'Play',
  learn: 'Learn'
}

export const CATEGORY_CONFIG = {
  Shop: { icon: '🛍️', color: '#3B82F6' },
  Dine: { icon: '🍴', color: '#F97316' },
  Play: { icon: '🎮', color: '#8B5CF6' },
  Learn: { icon: '📚', color: '#10B981' },
}

export const LEVELS = ['Ground Floor', 'Mezzanine', 'Level 1', 'Level 2', 'Level 3']

export const LEVEL_SHORT = {
  'Ground Floor': 'GF',
  'Mezzanine': 'M',
  'Level 1': 'L1',
  'Level 2': 'L2',
  'Level 3': 'L3',
  'Ground Floor/Level 3': 'GF/L3',
}

export const NATIONALITIES = [
  'Emirati',
  'Indian',
  'Pakistani',
  'Filipino',
  'Egyptian',
  'British',
  'American',
  'French',
  'Italian',
  'Spanish',
  'German',
  'Dutch',
  'Swedish',
  'Swiss',
  'Australian',
  'Canadian',
  'Mexican',
  'Brazilian',
  'Japanese',
  'Korean',
  'Chinese',
  'Thai',
  'Vietnamese',
  'Lebanese',
  'Saudi',
  'Jordanian',
  'Turkish',
  'Malaysian',
  'Indonesian',
  'Singaporean',
]

// Malls
export const MALLS = [
  { id: 'abu-dhabi-mall', name: 'Abu Dhabi Mall', shortName: 'AD Mall', location: 'Abu Dhabi', navigationURL: 'https://app.mappedin.com/map/698ddfafaef5cb000b3a0f8b' },
  { id: 'yas-mall', name: 'Yas Mall', shortName: 'Yas Mall', location: 'Abu Dhabi', navigationURL: 'https://map.mallframe.com/yas-mall/' },
  { id: 'al-wahda-mall', name: 'Al Wahda Mall', shortName: 'Al Wahda', location: 'Abu Dhabi', navigationURL: 'https://map.mallframe.com/yas-mall/' },
]

// All 212 Abu Dhabi Mall stores
export const STORES = [
  { id: 1, name: "Abdul Samad Al Qurashi", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/abdul-samad-768x596.webp", mallId: "abu-dhabi-mall" },
  { id: 2, name: "Abdullah Khunji", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/abdulla-khunji-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 3, name: "AD Coop", level: "Ground Floor", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/ADCOOP-2-768x378.webp", mallId: "abu-dhabi-mall" },
  { id: 4, name: "Aerial Gymnatsics", level: "Level 3", category: "Learn", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/aerial-gymnastics-logo-768x768.webp", mallId: "abu-dhabi-mall" },
  { id: 5, name: "Aeropostale", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Aeropostale-logo-768x94.webp", mallId: "abu-dhabi-mall" },
  { id: 6, name: "Al Ansari Exchange", level: "Ground Floor", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/alansari-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 7, name: "Al Hilal Bank ATM", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Al-Hilal-Bank-ATM.webp", mallId: "abu-dhabi-mall" },
  { id: 8, name: "Al Jaber Optical", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Al-Jaber-Optical-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 9, name: "Al Manara Pharmacy", level: "Ground Floor", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Al-Manara-Pharmacy-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 10, name: "Al Mandoos Jewellery", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Al-Mandoos-Jewellery-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 11, name: "Aldo Accessories", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Aldo-Accessories-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 12, name: "Aldo Shoes", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Aldo-Shoes-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 13, name: "Apple Tree Garden", level: "Level 3", category: "Learn", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Apple-Tree-Garden-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 14, name: "Arabian Oud", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/10/arabian-oud-logo-768x938.webp", mallId: "abu-dhabi-mall" },
  { id: 15, name: "Athena", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Athena-768x576.webp", mallId: "abu-dhabi-mall" },
  { id: 16, name: "Athlete's Co.", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/07/ACO-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 17, name: "Automatic Restaurant", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/automatic-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 18, name: "Autostrad Car Rent", level: "Ground Floor", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/autostrad-768x145.webp", mallId: "abu-dhabi-mall" },
  { id: 19, name: "Aziz Salon", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/AzizSalon.webp", mallId: "abu-dhabi-mall" },
  { id: 20, name: "Back to games", level: "Level 3", category: "Play", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Back-to-Games-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 21, name: "Balmain", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Balmain-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 22, name: "Bank of Sharjah ATM", level: "Ground Floor", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Bank-of-Sharjah-ATM.webp", mallId: "abu-dhabi-mall" },
  { id: 23, name: "Baskin-Robbins", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/Baskin-Robbins_logo.svg-768x768.webp", mallId: "abu-dhabi-mall" },
  { id: 24, name: "Bateel", level: "Level 1", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/bateel-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 25, name: "Bath & Body Works", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/Bath-Body-Works-768x75.webp", mallId: "abu-dhabi-mall" },
  { id: 26, name: "Better Life", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Better-Life-logo-768x338.webp", mallId: "abu-dhabi-mall" },
  { id: 27, name: "Betty Barclay", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Betty-Barclay-logo-768x512.webp", mallId: "abu-dhabi-mall" },
  { id: 28, name: "Beverly Hills Polo Club", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Beverly-Hills-Polo-Club-logo-768x262.webp", mallId: "abu-dhabi-mall" },
  { id: 29, name: "Beyond The Beach", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/beyond-the-beach.webp", mallId: "abu-dhabi-mall" },
  { id: 30, name: "Big Bus Tour", level: "Ground Floor", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/Big-768x422.webp", mallId: "abu-dhabi-mall" },
  { id: 31, name: "Birkenstock", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Birkenstock-logo-768x125.webp", mallId: "abu-dhabi-mall" },
  { id: 32, name: "Boggi Milano", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/boggi-milano-logo-1.webp", mallId: "abu-dhabi-mall" },
  { id: 33, name: "Boots", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/11/Boots.png", mallId: "abu-dhabi-mall" },
  { id: 34, name: "Borders", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Borders-logo-768x512.webp", mallId: "abu-dhabi-mall" },
  { id: 35, name: "Bosporus", level: "Level 1", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/bosporus-logo-1-768x407.webp", mallId: "abu-dhabi-mall" },
  { id: 36, name: "Brands", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/brands-logo-1-768x128.webp", mallId: "abu-dhabi-mall" },
  { id: 37, name: "Brands For Less", level: "Mezzanine", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/07/brand-for-less-1-768x238.webp", mallId: "abu-dhabi-mall" },
  { id: 38, name: "Break Protection", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/break-protection-1-768x178.webp", mallId: "abu-dhabi-mall" },
  { id: 39, name: "Café Nero", level: "Level 1", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/caffenero-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 40, name: "Call it Spring", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Call-it-Spring-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 41, name: "Carolina Herrera", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/carolina-herrera-log-768x361.webp", mallId: "abu-dhabi-mall" },
  { id: 42, name: "Celio", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Celio-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 43, name: "Cerruti 1881", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/11/Cerrutti-1881-768x95.png", mallId: "abu-dhabi-mall" },
  { id: 44, name: "Chanails", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/chanailspa_logo-new.png", mallId: "abu-dhabi-mall" },
  { id: 45, name: "Charles & Keith", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Charles-Keith-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 46, name: "Charleys Philly Steaks", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Charleys-Philly-Steaks-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 47, name: "Choice", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Choice-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 48, name: "Cinnabon", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/cin-brand-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 49, name: "Citi Bank ATM", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Citibank-768x499.webp", mallId: "abu-dhabi-mall" },
  { id: 50, name: "Clarks", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Clarks-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 51, name: "Cold Stone", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/Cold-Stone-Creamery-Logo-768x174.webp", mallId: "abu-dhabi-mall" },
  { id: 52, name: "Combat Sports", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/combat-sports.webp", mallId: "abu-dhabi-mall" },
  { id: 53, name: "Crocs", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Crocs-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 54, name: "Curvy Q", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Curvy-Q-logo-768x445.webp", mallId: "abu-dhabi-mall" },
  { id: 55, name: "Daiso", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Daiso-logo-768x264.webp", mallId: "abu-dhabi-mall" },
  { id: 56, name: "Damas", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Damas-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 57, name: "Denny's", level: "Ground Floor", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Dennys-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 58, name: "DHL", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/DHL-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 59, name: "DKNY", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/DKNY-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 60, name: "Dr Nutrition", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Dr-Nutrition-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 61, name: "Du", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/11/DU-768x529.webp", mallId: "abu-dhabi-mall" },
  { id: 62, name: "Dune London", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/11/Dune-London.png", mallId: "abu-dhabi-mall" },
  { id: 63, name: "Dunkin Donuts", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/Dunkin.webp", mallId: "abu-dhabi-mall" },
  { id: 64, name: "Dwell Furniture", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/dwell_logo.webp", mallId: "abu-dhabi-mall" },
  { id: 65, name: "e&", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/etisalat-768x768.webp", mallId: "abu-dhabi-mall" },
  { id: 66, name: "Emilio Guido", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Emilio-Guido-logo-768x512.webp", mallId: "abu-dhabi-mall" },
  { id: 67, name: "Emirates Islamic Bank", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Emirates-Islamic-Bank-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 68, name: "Emirates Red Crescent", level: "Ground Floor", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/07/Red-Crescent-Logo.webp", mallId: "abu-dhabi-mall" },
  { id: 69, name: "Enrico Marinelli", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Enrico-Marinelli-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 70, name: "Express Studio", level: "Ground Floor", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/express-768x265.webp", mallId: "abu-dhabi-mall" },
  { id: 71, name: "Eyewa", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Eyewa-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 72, name: "Famous Daves", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Famous-Daves-logo-1-768x512.webp", mallId: "abu-dhabi-mall" },
  { id: 73, name: "First Abu Dhabi Bank", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/First-Abu-Dhabi-Bank-1-768x450.webp", mallId: "abu-dhabi-mall" },
  { id: 74, name: "Fitness First", level: "Level 3", category: "Learn", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/fitness-first-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 75, name: "FLO", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/FLO-logo-768x262.webp", mallId: "abu-dhabi-mall" },
  { id: 76, name: "Fujiyama", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Fujiyama-logo-768x512.webp", mallId: "abu-dhabi-mall" },
  { id: 77, name: "Fun City", level: "Level 3", category: "Play", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/funcity-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 78, name: "Gant", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/11/GANT-768x90.png", mallId: "abu-dhabi-mall" },
  { id: 79, name: "Giordano", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Giordano-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 80, name: "Gissah", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Gissah-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 81, name: "Go Sport", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/GS_New_Logo_Primary.webp", mallId: "abu-dhabi-mall" },
  { id: 82, name: "Grand Stores", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/grandstores-the_1.webp", mallId: "abu-dhabi-mall" },
  { id: 83, name: "Green Bird", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Green-Bird-logo-768x597.webp", mallId: "abu-dhabi-mall" },
  { id: 84, name: "Guess", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Guess-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 85, name: "H&M", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/HM-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 86, name: "Häagen-Dazs", level: "Level 2", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/Haagen-Dazs-768x382.webp", mallId: "abu-dhabi-mall" },
  { id: 87, name: "Habib Beirut", level: "Level 1", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Habib-Beirut-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 88, name: "Haibu Space", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/haibu_green_logo_full_colour_rgb_542px@300ppi.webp", mallId: "abu-dhabi-mall" },
  { id: 89, name: "Hardees", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Hardees-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 90, name: "Hatam", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Hatam-logo.png", mallId: "abu-dhabi-mall" },
  { id: 91, name: "Hathi", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/Hathi_Logo_Transparent_Image_5b3be437-4316-4d99-ab67-c57adae655e4-1.webp", mallId: "abu-dhabi-mall" },
  { id: 92, name: "Heritage Oasis", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/Heritage-touch-768x336.webp", mallId: "abu-dhabi-mall" },
  { id: 93, name: "Hertz", level: "Ground Floor", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/hertz-1.webp", mallId: "abu-dhabi-mall" },
  { id: 94, name: "Hiphone", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/hiphone-1.webp", mallId: "abu-dhabi-mall" },
  { id: 95, name: "Hour Choice", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Rivoli-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 96, name: "IL Forno", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/IL-Forno-logo-1-768x254.webp", mallId: "abu-dhabi-mall" },
  { id: 97, name: "Illy Café", level: "Ground Floor", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/12/illy-cafe-logo-768x668.webp", mallId: "abu-dhabi-mall" },
  { id: 98, name: "Inglot", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/Inglot-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 99, name: "Istyle", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/iStyle-1-768x489.webp", mallId: "abu-dhabi-mall" },
  { id: 100, name: "Jamaica Blue", level: "Level 1", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/jb-logo-1-768x391.webp", mallId: "abu-dhabi-mall" },
  { id: 101, name: "Jargee", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/07/jargee-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 102, name: "Jashanmal", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Jashanmal-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 103, name: "Jawhara Jewellery", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Jawhara-Jewellery-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 104, name: "Juan Valdez", level: "Level 1", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/juan-valdez.webp", mallId: "abu-dhabi-mall" },
  { id: 105, name: "Kaya Skin Clinic", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/kaya-logo-768x1013.webp", mallId: "abu-dhabi-mall" },
  { id: 106, name: "KFC", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/KFC-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 107, name: "Kiko Milano", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/kiko-768x276.webp", mallId: "abu-dhabi-mall" },
  { id: 108, name: "Krispy Kreme", level: "Ground Floor", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/KrispyKreme.webp", mallId: "abu-dhabi-mall" },
  { id: 109, name: "La Brioche", level: "Level 1", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/La-Brioche-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 110, name: "La Casa Del Habano", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/La-Casa-Del-Habano-1.webp", mallId: "abu-dhabi-mall" },
  { id: 111, name: "La Senza", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/LaSenza.webp", mallId: "abu-dhabi-mall" },
  { id: 112, name: "Lacoste", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Lacoste-logo-768x403.webp", mallId: "abu-dhabi-mall" },
  { id: 113, name: "Laduree", level: "Level 1", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/laduree-logo-1-768x285.webp", mallId: "abu-dhabi-mall" },
  { id: 114, name: "LaTea", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/Letea_Logo.webp", mallId: "abu-dhabi-mall" },
  { id: 115, name: "Letoile", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/Letoile.webp", mallId: "abu-dhabi-mall" },
  { id: 116, name: "Levis", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/levis-logo-768x355.webp", mallId: "abu-dhabi-mall" },
  { id: 117, name: "Life Pharmacy", level: "Ground Floor", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/life-pharmacy-1.webp", mallId: "abu-dhabi-mall" },
  { id: 118, name: "LifeStyle Jewellery", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/LifeStyle-Jewellery-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 119, name: "Lollipop Factory", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Lollipop-Factory-logo-768x397.webp", mallId: "abu-dhabi-mall" },
  { id: 120, name: "Lush", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/11/Lush.webp", mallId: "abu-dhabi-mall" },
  { id: 121, name: "Luxury Gallery", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Luxury-Gallery-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 122, name: "MAC", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/MAC-logo-768x83.webp", mallId: "abu-dhabi-mall" },
  { id: 123, name: "Manchow Wok", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Manchow-Wok-768x432.webp", mallId: "abu-dhabi-mall" },
  { id: 124, name: "Mango", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Mango-logo-768x128.webp", mallId: "abu-dhabi-mall" },
  { id: 125, name: "Marina Home", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/MHLOGO3-768x768.webp", mallId: "abu-dhabi-mall" },
  { id: 126, name: "Maroosh", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Maroosh-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 127, name: "McDonalds", level: "Ground Floor", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/McDonalds-logo-768x672.webp", mallId: "abu-dhabi-mall" },
  { id: 128, name: "MegaSun Lounge", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/MegaSunLounge.webp", mallId: "abu-dhabi-mall" },
  { id: 129, name: "Melodica", level: "Level 3", category: "Learn", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/melodicaacademy-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 130, name: "Milestone Café", level: "Level 1", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/20250826_1544_Transparent-Coffee-Logo_remix_01k3k2zgesf4cbntfmpphb0b8d-768x512.webp", mallId: "abu-dhabi-mall" },
  { id: 131, name: "Mini Playo by Louna", level: "Level 1", category: "Play", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/playo-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 132, name: "Miniso", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Miniso-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 133, name: "Mobicom", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/06/mobicom.webp", mallId: "abu-dhabi-mall" },
  { id: 134, name: "Mom Store", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/moms-store-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 135, name: "Mont Blanc", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Mont-Blanc-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 136, name: "Mothercare", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Mothercare-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 137, name: "Mumuso", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/11/Mumuso-768x126.png", mallId: "abu-dhabi-mall" },
  { id: 138, name: "MYWALIT", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/MYWALIT-logo-768x593.webp", mallId: "abu-dhabi-mall" },
  { id: 139, name: "Nails", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/nails-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 140, name: "Naturalizer", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/07/Naturalizer-logo-768x1090.webp", mallId: "abu-dhabi-mall" },
  { id: 141, name: "Nayomi", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Nayomi-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 142, name: "Nespresso", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/07/Nespresso-Logo-768x140.webp", mallId: "abu-dhabi-mall" },
  { id: 143, name: "New Balance", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/New-Balance-logo-768x423.webp", mallId: "abu-dhabi-mall" },
  { id: 144, name: "New Yorker", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/12/ny-logo-768x177.webp", mallId: "abu-dhabi-mall" },
  { id: 145, name: "Noon Locker", level: "Mezzanine", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Noon-Locker-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 146, name: "Oakley", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/11/oakley_1.webp", mallId: "abu-dhabi-mall" },
  { id: 147, name: "OVS", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/OVS-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 148, name: "P.F Changs", level: "Level 1", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/P.F-Changs-logo-768x768.webp", mallId: "abu-dhabi-mall" },
  { id: 149, name: "Palazzo Jewellery", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Palazzo-Jewellery-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 150, name: "Pandora", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Pandora-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 151, name: "Papa Johns", level: "Ground Floor", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Papa-Johns-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 152, name: "Parfois", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Parfois-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 153, name: "PAUL CAFÉ", level: "Level 1", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/paul-logo-768x291.webp", mallId: "abu-dhabi-mall" },
  { id: 154, name: "Pierre Cardin", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Pierre-Cardin-logo-768x200.webp", mallId: "abu-dhabi-mall" },
  { id: 155, name: "Pizza Hut", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Pizza-Hut-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 156, name: "Polo Ralph Lauren", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Polo-Ralph-Lauren-logo-768x55.webp", mallId: "abu-dhabi-mall" },
  { id: 157, name: "Popeyes", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Popeyes-logo-1-768x185.webp", mallId: "abu-dhabi-mall" },
  { id: 158, name: "Prison Island", level: "Level 3", category: "Play", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Prisonisland-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 159, name: "Pure Gold", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Pure-Gold-logo-768x236.webp", mallId: "abu-dhabi-mall" },
  { id: 160, name: "Queen Bee", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Queen-Bee-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 161, name: "Rflct Arts", level: "Level 3", category: "Learn", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/rflct_logo_bilingual_transparent.webp", mallId: "abu-dhabi-mall" },
  { id: 162, name: "Riva", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Riva-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 163, name: "Rivoli", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Rivoli-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 164, name: "Rivoli Eyezone", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Rivoli-Eyezone-logo-768x543.webp", mallId: "abu-dhabi-mall" },
  { id: 165, name: "Sacoor Blue", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/sacoor-blue-1-768x863.webp", mallId: "abu-dhabi-mall" },
  { id: 166, name: "Sacoor Brothers", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/sacoor-brothers-2-768x530.webp", mallId: "abu-dhabi-mall" },
  { id: 167, name: "Samsung", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/samsung-logo-768x171.webp", mallId: "abu-dhabi-mall" },
  { id: 168, name: "Schiesser", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Schiesser-logo-768x512.webp", mallId: "abu-dhabi-mall" },
  { id: 169, name: "Seafolly", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/seafolly.webp", mallId: "abu-dhabi-mall" },
  { id: 170, name: "Sephora", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/Sephora-logo-768x156.webp", mallId: "abu-dhabi-mall" },
  { id: 171, name: "Sharaf DG", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Sharaf-DG-Logo-768x206.webp", mallId: "abu-dhabi-mall" },
  { id: 172, name: "Sharjah Islamic Bank", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/sharjah-islamic-bank-1-768x190.webp", mallId: "abu-dhabi-mall" },
  { id: 173, name: "Silkor", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/silkor-new-logo-768x254.webp", mallId: "abu-dhabi-mall" },
  { id: 174, name: "Skechers", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Skechers-logo-768x512.webp", mallId: "abu-dhabi-mall" },
  { id: 175, name: "Socks Collection", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Socks-Collection-logo-768x512.webp", mallId: "abu-dhabi-mall" },
  { id: 176, name: "Springfield", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/11/Springfield-768x87.png", mallId: "abu-dhabi-mall" },
  { id: 177, name: "Starbucks", level: "Level 2", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/Starbucks-768x768.webp", mallId: "abu-dhabi-mall" },
  { id: 178, name: "Steve Madden", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Steve-Madden-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 179, name: "Studiyo Lab", level: "Level 3", category: "Learn", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Studiyo-Lab-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 180, name: "Subway", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Subway-Logo.webp", mallId: "abu-dhabi-mall" },
  { id: 181, name: "Sunglass Hut", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/11/SunglassHut.webp", mallId: "abu-dhabi-mall" },
  { id: 182, name: "Supercare Pharmacy", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Supercare-Pharmacy-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 183, name: "Swarovski", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Swarovski-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 184, name: "Swatch", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Swatch-logo-768x120.webp", mallId: "abu-dhabi-mall" },
  { id: 185, name: "Swiss Arabian", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/Swiss-Arabian-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 186, name: "Taif Al Emarat", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/taif-al-emarat-logo-768x496.webp", mallId: "abu-dhabi-mall" },
  { id: 187, name: "Tavola", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Tavola-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 188, name: "The Body Shop", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/thebodyshop-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 189, name: "The Custom Shop", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/The-Custom-Shop-1.webp", mallId: "abu-dhabi-mall" },
  { id: 190, name: "The Face Shop", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/07/Face-shop-logo-768x226.webp", mallId: "abu-dhabi-mall" },
  { id: 191, name: "The Pizza Company", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/The-Pizza-Company-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 192, name: "The Reformr", level: "Level 1", category: "Learn", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2026/01/reformer-logoi-768x308.webp", mallId: "abu-dhabi-mall" },
  { id: 193, name: "Tim Hortons", level: "Ground Floor/Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/Tim-Hortons-Logo-768x197.webp", mallId: "abu-dhabi-mall" },
  { id: 194, name: "TKD Lingerie", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/TKD-Lingerie-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 195, name: "Tommy Hilfiger", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Tommy-Hilfiger-logo-768x40.webp", mallId: "abu-dhabi-mall" },
  { id: 196, name: "Toys R Us", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Toys-R-Us-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 197, name: "Triumph", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Triumph-logo-768x287.webp", mallId: "abu-dhabi-mall" },
  { id: 198, name: "Tsunami", level: "Level 1", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/tsunami-logo-1.webp", mallId: "abu-dhabi-mall" },
  { id: 199, name: "US Polo", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/US-Polo-logo-768x768.webp", mallId: "abu-dhabi-mall" },
  { id: 200, name: "Vans", level: "Level 3", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/vans-logo-768x714.webp", mallId: "abu-dhabi-mall" },
  { id: 201, name: "Vapiano", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Vapiano-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 202, name: "Victoria Secret", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/victoria-secret-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 203, name: "Villebrequin", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/logo2-retina.webp", mallId: "abu-dhabi-mall" },
  { id: 204, name: "Villeroy & Boch", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Villeroy-Boch-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 205, name: "Vox Cinema", level: "Level 3", category: "Play", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/vox-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 206, name: "wagamama", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/wangama-logo-768x216.webp", mallId: "abu-dhabi-mall" },
  { id: 207, name: "Wall Street Exchange", level: "Ground Floor", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/wall-street-logo-768x365.webp", mallId: "abu-dhabi-mall" },
  { id: 208, name: "Watsons", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/watsons-768x155.webp", mallId: "abu-dhabi-mall" },
  { id: 209, name: "Women's Secret", level: "Level 2", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Women-Secret-logo.webp", mallId: "abu-dhabi-mall" },
  { id: 210, name: "Yamanote Atelier", level: "Level 1", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/08/20250826_1558_Transparent-Logo-Enhancement_remix_01k3k3r4b7fwvs9xhee6crkj3g-768x512.webp", mallId: "abu-dhabi-mall" },
  { id: 211, name: "Yateem", level: "Level 1", category: "Shop", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/yateem-logo-1-768x195.webp", mallId: "abu-dhabi-mall" },
  { id: 212, name: "Zaatar W Zeit", level: "Level 3", category: "Dine", imageURL: "https://www.abudhabi-mall.com/wp-content/uploads/2025/09/Zaatar-W-Zeit-logo.webp", mallId: "abu-dhabi-mall" },
]

// Helper functions

export function getStoresForMall(mallId) {
  return STORES.filter(store => store.mallId === mallId)
}

export function searchStores(query, mallId = null) {
  const lowerQuery = query.toLowerCase()
  let results = STORES

  if (mallId) {
    results = results.filter(store => store.mallId === mallId)
  }

  return results.filter(store =>
    store.name.toLowerCase().includes(lowerQuery) ||
    store.category.toLowerCase().includes(lowerQuery) ||
    store.level.toLowerCase().includes(lowerQuery)
  )
}

export function getStoresByCategory(category, mallId = null) {
  let results = STORES.filter(store => store.category === category)

  if (mallId) {
    results = results.filter(store => store.mallId === mallId)
  }

  return results
}

export function getStoresByLevel(level, mallId = null) {
  let results = STORES.filter(store => store.level === level)

  if (mallId) {
    results = results.filter(store => store.mallId === mallId)
  }

  return results
}

export function globalSearch(query) {
  const lowerQuery = query.toLowerCase()

  return {
    stores: searchStores(query),
    malls: MALLS.filter(mall =>
      mall.name.toLowerCase().includes(lowerQuery) ||
      mall.shortName.toLowerCase().includes(lowerQuery) ||
      mall.location.toLowerCase().includes(lowerQuery)
    )
  }
}

export function findMall(id) {
  return MALLS.find(mall => mall.id === id)
}
