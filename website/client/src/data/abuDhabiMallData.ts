/**
 * Abu Dhabi Mall Floor 1 - Store and Navigation Data
 * Based on RETAIL-1.pdf floor plan analysis
 * 
 * Coordinate system: 
 * - Origin (0,0) at top-left
 * - Width: 1400 units, Height: 700 units
 * - Scaled from actual floor plan proportions
 */

export interface Store {
  id: string;
  name: string;
  unit: string;
  category: string;
  size?: string;
  polygon: number[][]; // Array of [x, y] coordinates
  labelPosition: { x: number; y: number };
  floor: number;
}

export interface NavigationNode {
  id: string;
  x: number;
  y: number;
  type: 'corridor' | 'intersection' | 'entrance' | 'escalator' | 'elevator' | 'restroom';
  connections: string[]; // IDs of connected nodes
}

export interface Corridor {
  id: string;
  points: number[][]; // Path points for the corridor
  width: number;
}

// Store categories with colors
export const categoryColors: Record<string, string> = {
  'Fashion': '#6366f1',
  'Beauty': '#ec4899',
  'Dining': '#f97316',
  'Electronics': '#3b82f6',
  'Services': '#8b5cf6',
  'Health': '#10b981',
  'Jewelry': '#eab308',
  'Home': '#84cc16',
  'Entertainment': '#ef4444',
  'Supermarket': '#22c55e',
  'Bank': '#64748b',
  'Fitness': '#f43f5e',
  'Default': '#94a3b8'
};

// Abu Dhabi Mall Floor 1 Stores
export const stores: Store[] = [
  // Left Wing - Large Anchor Stores
  {
    id: 'b38',
    name: 'Marina Home Furniture',
    unit: 'B38',
    category: 'Home',
    size: '1,897 m²',
    polygon: [[20, 120], [20, 320], [140, 320], [140, 120]],
    labelPosition: { x: 80, y: 220 },
    floor: 1
  },
  {
    id: 'b41',
    name: 'Juan Valdez Cafe',
    unit: 'B41',
    category: 'Dining',
    size: '145 m²',
    polygon: [[20, 330], [20, 400], [100, 400], [100, 330]],
    labelPosition: { x: 60, y: 365 },
    floor: 1
  },
  {
    id: 'b42a',
    name: 'Fitness First',
    unit: 'B42a',
    category: 'Fitness',
    size: '2,140 m²',
    polygon: [[20, 410], [20, 580], [180, 580], [180, 410]],
    labelPosition: { x: 100, y: 495 },
    floor: 1
  },
  {
    id: 'b42b',
    name: 'Letoile',
    unit: 'B42b',
    category: 'Beauty',
    size: '1,024 m²',
    polygon: [[190, 410], [190, 520], [280, 520], [280, 410]],
    labelPosition: { x: 235, y: 465 },
    floor: 1
  },
  {
    id: 'b43a',
    name: 'Ms. Riva',
    unit: 'B43a',
    category: 'Fashion',
    size: '1,305 m²',
    polygon: [[190, 530], [190, 650], [350, 650], [350, 530]],
    labelPosition: { x: 270, y: 590 },
    floor: 1
  },
  {
    id: 'b43b',
    name: 'Terranova',
    unit: 'B43b',
    category: 'Fashion',
    size: '585 m²',
    polygon: [[360, 530], [360, 650], [480, 650], [480, 530]],
    labelPosition: { x: 420, y: 590 },
    floor: 1
  },
  
  // Upper Section - Mom Store, Mothercare area
  {
    id: 'b37',
    name: 'Mothercare',
    unit: 'B37',
    category: 'Fashion',
    size: '784 m²',
    polygon: [[200, 60], [200, 140], [320, 140], [320, 60]],
    labelPosition: { x: 260, y: 100 },
    floor: 1
  },
  {
    id: 'b34-36',
    name: 'Mom Store',
    unit: 'B34-36',
    category: 'Fashion',
    size: '502 m²',
    polygon: [[330, 60], [330, 140], [420, 140], [420, 60]],
    labelPosition: { x: 375, y: 100 },
    floor: 1
  },
  {
    id: 'b33',
    name: "P.F. Chang's",
    unit: 'B33',
    category: 'Dining',
    size: '199 m²',
    polygon: [[430, 60], [430, 130], [510, 130], [510, 60]],
    labelPosition: { x: 470, y: 95 },
    floor: 1
  },
  
  // Central Upper Row
  {
    id: 'b30',
    name: "P.F. Chang's (Main)",
    unit: 'B30',
    category: 'Dining',
    size: '595 m²',
    polygon: [[580, 40], [580, 120], [700, 120], [700, 40]],
    labelPosition: { x: 640, y: 80 },
    floor: 1
  },
  {
    id: 'b31',
    name: 'Tsunamis',
    unit: 'B31',
    category: 'Dining',
    size: '145 m²',
    polygon: [[520, 60], [520, 120], [575, 120], [575, 60]],
    labelPosition: { x: 547, y: 90 },
    floor: 1
  },
  {
    id: 'b32',
    name: 'Jamaica Blue',
    unit: 'B32',
    category: 'Dining',
    size: '67 m²',
    polygon: [[520, 125], [520, 170], [575, 170], [575, 125]],
    labelPosition: { x: 547, y: 147 },
    floor: 1
  },
  {
    id: 'b27-29',
    name: 'Habib Beirut',
    unit: 'B27-29',
    category: 'Dining',
    size: '722 m²',
    polygon: [[710, 40], [710, 130], [840, 130], [840, 40]],
    labelPosition: { x: 775, y: 85 },
    floor: 1
  },
  {
    id: 'b24-25b',
    name: 'Louma Academy',
    unit: 'B24-25b',
    category: 'Services',
    size: '250 m²',
    polygon: [[850, 40], [850, 110], [950, 110], [950, 40]],
    labelPosition: { x: 900, y: 75 },
    floor: 1
  },
  {
    id: 'b25a-26',
    name: 'Gazebo',
    unit: 'B25a-26',
    category: 'Dining',
    size: '294 m²',
    polygon: [[850, 115], [850, 180], [950, 180], [950, 115]],
    labelPosition: { x: 900, y: 147 },
    floor: 1
  },
  {
    id: 'b23',
    name: 'Al Rasasi',
    unit: 'B23',
    category: 'Beauty',
    size: '130 m²',
    polygon: [[960, 80], [960, 150], [1030, 150], [1030, 80]],
    labelPosition: { x: 995, y: 115 },
    floor: 1
  },
  {
    id: 'b19-22',
    name: 'Grand Stores',
    unit: 'B19-22',
    category: 'Fashion',
    size: '1,037 m²',
    polygon: [[1040, 40], [1040, 180], [1200, 180], [1200, 40]],
    labelPosition: { x: 1120, y: 110 },
    floor: 1
  },
  
  // Middle Row - Beauty & Fashion
  {
    id: 'b78',
    name: 'Katrina',
    unit: 'B78',
    category: 'Fashion',
    size: '77 m²',
    polygon: [[250, 200], [250, 260], [310, 260], [310, 200]],
    labelPosition: { x: 280, y: 230 },
    floor: 1
  },
  {
    id: 'b79b',
    name: 'Birkenstock',
    unit: 'B79b',
    category: 'Fashion',
    size: '93 m²',
    polygon: [[250, 265], [250, 330], [310, 330], [310, 265]],
    labelPosition: { x: 280, y: 297 },
    floor: 1
  },
  {
    id: 'b79a',
    name: 'Reform',
    unit: 'B79a',
    category: 'Fashion',
    size: '137 m²',
    polygon: [[315, 265], [315, 330], [380, 330], [380, 265]],
    labelPosition: { x: 347, y: 297 },
    floor: 1
  },
  {
    id: 'b77',
    name: 'The Arabian Oud',
    unit: 'B77',
    category: 'Beauty',
    size: '152 m²',
    polygon: [[315, 200], [315, 260], [390, 260], [390, 200]],
    labelPosition: { x: 352, y: 230 },
    floor: 1
  },
  {
    id: 'b76',
    name: 'Nayomi',
    unit: 'B76',
    category: 'Fashion',
    size: '148 m²',
    polygon: [[395, 200], [395, 260], [470, 260], [470, 200]],
    labelPosition: { x: 432, y: 230 },
    floor: 1
  },
  {
    id: 'b75',
    name: 'Clarks',
    unit: 'B75',
    category: 'Fashion',
    size: '131 m²',
    polygon: [[475, 200], [475, 260], [545, 260], [545, 200]],
    labelPosition: { x: 510, y: 230 },
    floor: 1
  },
  {
    id: 'b74',
    name: 'DKNY',
    unit: 'B74',
    category: 'Fashion',
    size: '141 m²',
    polygon: [[550, 200], [550, 260], [625, 260], [625, 200]],
    labelPosition: { x: 587, y: 230 },
    floor: 1
  },
  {
    id: 'b80',
    name: 'Lush',
    unit: 'B80',
    category: 'Beauty',
    size: '117 m²',
    polygon: [[250, 335], [250, 395], [320, 395], [320, 335]],
    labelPosition: { x: 285, y: 365 },
    floor: 1
  },
  {
    id: 'b73',
    name: 'MAC',
    unit: 'B73',
    category: 'Beauty',
    size: '68 m²',
    polygon: [[325, 335], [325, 385], [380, 385], [380, 335]],
    labelPosition: { x: 352, y: 360 },
    floor: 1
  },
  {
    id: 'b81',
    name: 'Body Shop',
    unit: 'B81',
    category: 'Beauty',
    size: '120 m²',
    polygon: [[385, 335], [385, 395], [455, 395], [455, 335]],
    labelPosition: { x: 420, y: 365 },
    floor: 1
  },
  {
    id: 'b82a',
    name: 'Super Care',
    unit: 'B82a',
    category: 'Health',
    size: '73 m²',
    polygon: [[460, 335], [460, 385], [520, 385], [520, 335]],
    labelPosition: { x: 490, y: 360 },
    floor: 1
  },
  {
    id: 'b85',
    name: 'Al Jaber Optical',
    unit: 'B85',
    category: 'Health',
    size: '109 m²',
    polygon: [[525, 335], [525, 395], [600, 395], [600, 335]],
    labelPosition: { x: 562, y: 365 },
    floor: 1
  },
  {
    id: 'b87',
    name: 'Rivoli',
    unit: 'B87',
    category: 'Jewelry',
    size: '147 m²',
    polygon: [[605, 335], [605, 395], [685, 395], [685, 335]],
    labelPosition: { x: 645, y: 365 },
    floor: 1
  },
  
  // Central Atrium Area
  {
    id: 'b70b',
    name: 'Watsons',
    unit: 'B70b',
    category: 'Health',
    size: '98 m²',
    polygon: [[630, 200], [630, 260], [700, 260], [700, 200]],
    labelPosition: { x: 665, y: 230 },
    floor: 1
  },
  {
    id: 'b70a',
    name: 'Lacoste',
    unit: 'B70a',
    category: 'Fashion',
    size: '203 m²',
    polygon: [[705, 200], [705, 280], [790, 280], [790, 200]],
    labelPosition: { x: 747, y: 240 },
    floor: 1
  },
  {
    id: 'b71',
    name: 'Rivoli Eyezone',
    unit: 'B71',
    category: 'Health',
    size: '120 m²',
    polygon: [[690, 285], [690, 345], [770, 345], [770, 285]],
    labelPosition: { x: 730, y: 315 },
    floor: 1
  },
  {
    id: 'b68',
    name: 'Chantelle',
    unit: 'B68',
    category: 'Fashion',
    size: '156 m²',
    polygon: [[795, 200], [795, 270], [870, 270], [870, 200]],
    labelPosition: { x: 832, y: 235 },
    floor: 1
  },
  {
    id: 'b67',
    name: 'Life Style',
    unit: 'B67',
    category: 'Fashion',
    size: '85 m²',
    polygon: [[875, 200], [875, 260], [940, 260], [940, 200]],
    labelPosition: { x: 907, y: 230 },
    floor: 1
  },
  {
    id: 'b72a',
    name: 'La Duree',
    unit: 'B72a',
    category: 'Dining',
    size: '139 m²',
    polygon: [[775, 285], [775, 345], [850, 345], [850, 285]],
    labelPosition: { x: 812, y: 315 },
    floor: 1
  },
  {
    id: 'b72b',
    name: 'Tommy Hilfiger',
    unit: 'B72b',
    category: 'Fashion',
    size: '135 m²',
    polygon: [[855, 285], [855, 355], [940, 355], [940, 285]],
    labelPosition: { x: 897, y: 320 },
    floor: 1
  },
  
  // Right Section - Upper
  {
    id: 'b64',
    name: 'BHPC',
    unit: 'B64',
    category: 'Fashion',
    size: '118 m²',
    polygon: [[945, 200], [945, 260], [1020, 260], [1020, 200]],
    labelPosition: { x: 982, y: 230 },
    floor: 1
  },
  {
    id: 'b63',
    name: 'Khunji',
    unit: 'B63',
    category: 'Jewelry',
    size: '167 m²',
    polygon: [[1025, 200], [1025, 270], [1110, 270], [1110, 200]],
    labelPosition: { x: 1067, y: 235 },
    floor: 1
  },
  {
    id: 'b62',
    name: '1B',
    unit: 'B62',
    category: 'Fashion',
    size: '129 m²',
    polygon: [[1115, 200], [1115, 260], [1180, 260], [1180, 200]],
    labelPosition: { x: 1147, y: 230 },
    floor: 1
  },
  {
    id: 'b61',
    name: 'La Brioche',
    unit: 'B61',
    category: 'Dining',
    size: '177 m²',
    polygon: [[1185, 200], [1185, 280], [1270, 280], [1270, 200]],
    labelPosition: { x: 1227, y: 240 },
    floor: 1
  },
  {
    id: 'b60',
    name: 'Heritage Oasis',
    unit: 'B60',
    category: 'Home',
    size: '78 m²',
    polygon: [[1185, 285], [1185, 345], [1260, 345], [1260, 285]],
    labelPosition: { x: 1222, y: 315 },
    floor: 1
  },
  {
    id: 'b59',
    name: 'Jawhara Jewellery',
    unit: 'B59',
    category: 'Jewelry',
    size: '107 m²',
    polygon: [[1265, 285], [1265, 360], [1350, 360], [1350, 285]],
    labelPosition: { x: 1307, y: 322 },
    floor: 1
  },
  
  // Lower Section - Banks and Services
  {
    id: 'b51',
    name: 'Yateen Optics',
    unit: 'B51',
    category: 'Health',
    size: '158 m²',
    polygon: [[690, 400], [690, 470], [770, 470], [770, 400]],
    labelPosition: { x: 730, y: 435 },
    floor: 1
  },
  {
    id: 'b52',
    name: 'Emirates Islamic Bank',
    unit: 'B52',
    category: 'Bank',
    size: '175 m²',
    polygon: [[775, 400], [775, 470], [860, 470], [860, 400]],
    labelPosition: { x: 817, y: 435 },
    floor: 1
  },
  {
    id: 'b53',
    name: 'Sacoor Brothers',
    unit: 'B53',
    category: 'Fashion',
    size: '185 m²',
    polygon: [[865, 400], [865, 480], [960, 480], [960, 400]],
    labelPosition: { x: 912, y: 440 },
    floor: 1
  },
  {
    id: 'b54',
    name: 'Boots',
    unit: 'B54',
    category: 'Health',
    size: '162 m²',
    polygon: [[965, 400], [965, 470], [1050, 470], [1050, 400]],
    labelPosition: { x: 1007, y: 435 },
    floor: 1
  },
  {
    id: 'b55',
    name: 'Pure Gold',
    unit: 'B55',
    category: 'Jewelry',
    size: '71 m²',
    polygon: [[1055, 400], [1055, 455], [1115, 455], [1115, 400]],
    labelPosition: { x: 1085, y: 427 },
    floor: 1
  },
  {
    id: 'b56',
    name: 'Sharjah Islamic Bank',
    unit: 'B56',
    category: 'Bank',
    size: '175 m²',
    polygon: [[1120, 400], [1120, 470], [1210, 470], [1210, 400]],
    labelPosition: { x: 1165, y: 435 },
    floor: 1
  },
  {
    id: 'b57',
    name: 'FAB',
    unit: 'B57',
    category: 'Bank',
    size: '181 m²',
    polygon: [[1215, 400], [1215, 475], [1310, 475], [1310, 400]],
    labelPosition: { x: 1262, y: 437 },
    floor: 1
  },
  {
    id: 'b58',
    name: 'Damas',
    unit: 'B58',
    category: 'Jewelry',
    size: '158 m²',
    polygon: [[1315, 400], [1315, 475], [1380, 475], [1380, 400]],
    labelPosition: { x: 1347, y: 437 },
    floor: 1
  },
  
  // Bottom Section - Polo Ralph Lauren area
  {
    id: 'b44',
    name: 'Nespresso',
    unit: 'B44',
    category: 'Dining',
    size: '93 m²',
    polygon: [[490, 480], [490, 540], [560, 540], [560, 480]],
    labelPosition: { x: 525, y: 510 },
    floor: 1
  },
  {
    id: 'b45a',
    name: 'Bacha Coffee',
    unit: 'B45a',
    category: 'Dining',
    size: '92 m²',
    polygon: [[565, 480], [565, 540], [635, 540], [635, 480]],
    labelPosition: { x: 600, y: 510 },
    floor: 1
  },
  {
    id: 'b45b',
    name: 'Caffe Nero',
    unit: 'B45b',
    category: 'Dining',
    size: '70 m²',
    polygon: [[565, 545], [565, 600], [635, 600], [635, 545]],
    labelPosition: { x: 600, y: 572 },
    floor: 1
  },
  {
    id: 'b02-03',
    name: 'Polo Ralph Lauren',
    unit: 'B02-03',
    category: 'Fashion',
    size: '171 m²',
    polygon: [[640, 480], [640, 560], [740, 560], [740, 480]],
    labelPosition: { x: 690, y: 520 },
    floor: 1
  },
  {
    id: 'b04',
    name: 'Guess',
    unit: 'B04',
    category: 'Fashion',
    size: '103 m²',
    polygon: [[745, 480], [745, 550], [820, 550], [820, 480]],
    labelPosition: { x: 782, y: 515 },
    floor: 1
  },
  {
    id: 'b05',
    name: 'Jashanmal',
    unit: 'B05',
    category: 'Home',
    size: '530 m²',
    polygon: [[640, 565], [640, 660], [780, 660], [780, 565]],
    labelPosition: { x: 710, y: 612 },
    floor: 1
  },
  {
    id: 'b06a',
    name: 'Sephora',
    unit: 'B06a',
    category: 'Beauty',
    size: '252 m²',
    polygon: [[825, 480], [825, 580], [920, 580], [920, 480]],
    labelPosition: { x: 872, y: 530 },
    floor: 1
  },
  {
    id: 'b06b',
    name: 'Pandora',
    unit: 'B06b',
    category: 'Jewelry',
    size: '75 m²',
    polygon: [[925, 480], [925, 540], [990, 540], [990, 480]],
    labelPosition: { x: 957, y: 510 },
    floor: 1
  },
  {
    id: 'b07',
    name: 'Watsons',
    unit: 'B07',
    category: 'Health',
    size: '184 m²',
    polygon: [[995, 480], [995, 560], [1080, 560], [1080, 480]],
    labelPosition: { x: 1037, y: 520 },
    floor: 1
  },
  {
    id: 'b08',
    name: 'Arabica',
    unit: 'B08',
    category: 'Dining',
    size: '193 m²',
    polygon: [[1085, 480], [1085, 570], [1175, 570], [1175, 480]],
    labelPosition: { x: 1130, y: 525 },
    floor: 1
  },
  {
    id: 'b09-10',
    name: 'Haibu Space',
    unit: 'B09-B10',
    category: 'Entertainment',
    size: '1,466 m²',
    polygon: [[1180, 480], [1180, 650], [1380, 650], [1380, 480]],
    labelPosition: { x: 1280, y: 565 },
    floor: 1
  },
  {
    id: 'b01',
    name: 'Paul Cafe',
    unit: 'B01',
    category: 'Dining',
    size: '466 m²',
    polygon: [[490, 605], [490, 690], [620, 690], [620, 605]],
    labelPosition: { x: 555, y: 647 },
    floor: 1
  },
  {
    id: 'b01a',
    name: 'Bosporus',
    unit: 'B01a',
    category: 'Dining',
    size: '571 m²',
    polygon: [[785, 585], [785, 690], [920, 690], [920, 585]],
    labelPosition: { x: 852, y: 637 },
    floor: 1
  },
  {
    id: 'b06c',
    name: 'Dwell',
    unit: 'B06c',
    category: 'Home',
    size: '498 m²',
    polygon: [[925, 585], [925, 690], [1070, 690], [1070, 585]],
    labelPosition: { x: 997, y: 637 },
    floor: 1
  },
];

// Navigation nodes for pathfinding
export const navigationNodes: NavigationNode[] = [
  // Main horizontal corridor - top
  { id: 'n1', x: 150, y: 180, type: 'corridor', connections: ['n2', 'n_left1'] },
  { id: 'n2', x: 280, y: 180, type: 'intersection', connections: ['n1', 'n3', 'n_mid1'] },
  { id: 'n3', x: 400, y: 180, type: 'corridor', connections: ['n2', 'n4'] },
  { id: 'n4', x: 520, y: 180, type: 'intersection', connections: ['n3', 'n5'] },
  { id: 'n5', x: 640, y: 180, type: 'intersection', connections: ['n4', 'n6', 'n_atrium1'] },
  { id: 'n6', x: 760, y: 180, type: 'corridor', connections: ['n5', 'n7'] },
  { id: 'n7', x: 880, y: 180, type: 'intersection', connections: ['n6', 'n8'] },
  { id: 'n8', x: 1000, y: 180, type: 'corridor', connections: ['n7', 'n9'] },
  { id: 'n9', x: 1120, y: 180, type: 'intersection', connections: ['n8', 'n10'] },
  { id: 'n10', x: 1240, y: 180, type: 'corridor', connections: ['n9', 'n_right1'] },
  
  // Left vertical corridor
  { id: 'n_left1', x: 150, y: 280, type: 'corridor', connections: ['n1', 'n_left2'] },
  { id: 'n_left2', x: 150, y: 380, type: 'intersection', connections: ['n_left1', 'n_left3', 'n_mid2'] },
  { id: 'n_left3', x: 150, y: 480, type: 'corridor', connections: ['n_left2', 'n_left4'] },
  { id: 'n_left4', x: 150, y: 580, type: 'entrance', connections: ['n_left3'] },
  
  // Middle section
  { id: 'n_mid1', x: 280, y: 280, type: 'corridor', connections: ['n2', 'n_mid2'] },
  { id: 'n_mid2', x: 280, y: 380, type: 'intersection', connections: ['n_mid1', 'n_left2', 'n_mid3'] },
  { id: 'n_mid3', x: 400, y: 380, type: 'corridor', connections: ['n_mid2', 'n_mid4', 'n_mac_area'] },
  { id: 'n_mid4', x: 520, y: 380, type: 'intersection', connections: ['n_mid3', 'n_atrium2'] },
  
  // Central atrium
  { id: 'n_atrium1', x: 640, y: 280, type: 'intersection', connections: ['n5', 'n_atrium2', 'n_atrium3'] },
  { id: 'n_atrium2', x: 640, y: 380, type: 'intersection', connections: ['n_atrium1', 'n_mid4', 'n_lower1'] },
  { id: 'n_atrium3', x: 760, y: 280, type: 'corridor', connections: ['n_atrium1', 'n_atrium4'] },
  { id: 'n_atrium4', x: 880, y: 280, type: 'intersection', connections: ['n_atrium3', 'n_atrium5'] },
  { id: 'n_atrium5', x: 880, y: 380, type: 'intersection', connections: ['n_atrium4', 'n_lower2'] },
  
  // Lower corridor
  { id: 'n_lower1', x: 640, y: 480, type: 'intersection', connections: ['n_atrium2', 'n_lower2', 'n_lower5'] },
  { id: 'n_lower2', x: 760, y: 480, type: 'corridor', connections: ['n_lower1', 'n_lower3'] },
  { id: 'n_lower3', x: 880, y: 480, type: 'intersection', connections: ['n_lower2', 'n_atrium5', 'n_lower4'] },
  { id: 'n_lower4', x: 1000, y: 480, type: 'corridor', connections: ['n_lower3', 'n_right2', 'n_pandora_area'] },
  { id: 'n_lower5', x: 640, y: 580, type: 'corridor', connections: ['n_lower1', 'n_lower6'] },
  { id: 'n_lower6', x: 760, y: 580, type: 'intersection', connections: ['n_lower5', 'n_lower7'] },
  { id: 'n_lower7', x: 880, y: 580, type: 'corridor', connections: ['n_lower6', 'n_lower8'] },
  { id: 'n_lower8', x: 1000, y: 580, type: 'entrance', connections: ['n_lower7'] },
  
  // Right section
  { id: 'n_right1', x: 1300, y: 280, type: 'intersection', connections: ['n10', 'n_right2'] },
  { id: 'n_right2', x: 1300, y: 380, type: 'corridor', connections: ['n_right1', 'n_lower4'] },
  
  // Additional nodes for better coverage - connected to existing nodes
  { id: 'n_mac_area', x: 350, y: 380, type: 'corridor', connections: ['n_mid3'] },
  { id: 'n_pandora_area', x: 957, y: 510, type: 'corridor', connections: ['n_lower4'] },
];

// Corridor paths for visualization
export const corridors: Corridor[] = [
  {
    id: 'main_horizontal',
    points: [[150, 150], [150, 200], [1350, 200], [1350, 150]],
    width: 50
  },
  {
    id: 'left_vertical',
    points: [[120, 180], [180, 180], [180, 600], [120, 600]],
    width: 60
  },
  {
    id: 'central_atrium',
    points: [[600, 250], [700, 250], [700, 400], [600, 400]],
    width: 100
  },
  {
    id: 'lower_horizontal',
    points: [[500, 450], [500, 510], [1100, 510], [1100, 450]],
    width: 60
  },
];

// Helper function to find nearest navigation node to a store
export function findNearestNode(storeId: string): NavigationNode | null {
  console.log('findNearestNode called with storeId:', storeId);
  const store = stores.find(s => s.id === storeId);
  console.log('Found store:', store?.name);
  if (!store) return null;
  
  const storeCenter = store.labelPosition;
  let nearestNode: NavigationNode | null = null;
  let minDistance = Infinity;
  
  for (const node of navigationNodes) {
    const distance = Math.sqrt(
      Math.pow(node.x - storeCenter.x, 2) + 
      Math.pow(node.y - storeCenter.y, 2)
    );
    if (distance < minDistance) {
      minDistance = distance;
      nearestNode = node;
    }
  }
  
  console.log('Nearest node:', nearestNode?.id, 'distance:', minDistance);
  return nearestNode;
}

// A* pathfinding algorithm
export function findPath(startNodeId: string, endNodeId: string): NavigationNode[] {
  console.log('findPath called:', startNodeId, '->', endNodeId);
  const startNode = navigationNodes.find(n => n.id === startNodeId);
  const endNode = navigationNodes.find(n => n.id === endNodeId);
  
  console.log('Start node:', startNode?.id, 'End node:', endNode?.id);
  if (!startNode || !endNode) {
    console.log('Missing start or end node');
    return [];
  }
  
  const openSet: NavigationNode[] = [startNode];
  const cameFrom: Map<string, NavigationNode> = new Map();
  const gScore: Map<string, number> = new Map();
  const fScore: Map<string, number> = new Map();
  
  gScore.set(startNode.id, 0);
  fScore.set(startNode.id, heuristic(startNode, endNode));
  
  while (openSet.length > 0) {
    // Get node with lowest fScore
    openSet.sort((a, b) => (fScore.get(a.id) || Infinity) - (fScore.get(b.id) || Infinity));
    const current = openSet.shift()!;
    
    if (current.id === endNode.id) {
      // Reconstruct path
      const path: NavigationNode[] = [current];
      let node = current;
      while (cameFrom.has(node.id)) {
        node = cameFrom.get(node.id)!;
        path.unshift(node);
      }
      return path;
    }
    
    for (const neighborId of current.connections) {
      const neighbor = navigationNodes.find(n => n.id === neighborId);
      if (!neighbor) continue;
      
      const tentativeGScore = (gScore.get(current.id) || Infinity) + 
        Math.sqrt(Math.pow(neighbor.x - current.x, 2) + Math.pow(neighbor.y - current.y, 2));
      
      if (tentativeGScore < (gScore.get(neighbor.id) || Infinity)) {
        cameFrom.set(neighbor.id, current);
        gScore.set(neighbor.id, tentativeGScore);
        fScore.set(neighbor.id, tentativeGScore + heuristic(neighbor, endNode));
        
        if (!openSet.find(n => n.id === neighbor.id)) {
          openSet.push(neighbor);
        }
      }
    }
  }
  
  return []; // No path found
}

function heuristic(a: NavigationNode, b: NavigationNode): number {
  return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
}

// Generate checkpoints from path
export interface Checkpoint {
  id: string;
  instruction: string;
  node: NavigationNode;
  landmark?: string;
}

export function generateCheckpoints(path: NavigationNode[]): Checkpoint[] {
  const checkpoints: Checkpoint[] = [];
  
  for (let i = 0; i < path.length; i++) {
    const node = path[i];
    const prevNode = path[i - 1];
    const nextNode = path[i + 1];
    
    let instruction = '';
    let landmark = '';
    
    // Find nearby store for landmark
    const nearbyStore = stores.find(s => {
      const dist = Math.sqrt(
        Math.pow(s.labelPosition.x - node.x, 2) + 
        Math.pow(s.labelPosition.y - node.y, 2)
      );
      return dist < 100;
    });
    
    if (nearbyStore) {
      landmark = nearbyStore.name;
    }
    
    if (i === 0) {
      instruction = 'Start here';
    } else if (i === path.length - 1) {
      instruction = 'You have arrived!';
    } else if (node.type === 'intersection') {
      // Determine turn direction
      if (prevNode && nextNode) {
        const prevDir = Math.atan2(node.y - prevNode.y, node.x - prevNode.x);
        const nextDir = Math.atan2(nextNode.y - node.y, nextNode.x - node.x);
        const angleDiff = nextDir - prevDir;
        
        if (Math.abs(angleDiff) < 0.3) {
          instruction = 'Continue straight';
        } else if (angleDiff > 0) {
          instruction = 'Turn right';
        } else {
          instruction = 'Turn left';
        }
      }
    } else {
      instruction = 'Continue walking';
    }
    
    if (landmark) {
      instruction += ` (near ${landmark})`;
    }
    
    checkpoints.push({
      id: `cp_${i}`,
      instruction,
      node,
      landmark
    });
  }
  
  return checkpoints;
}
