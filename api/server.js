const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 1337; // Strapi default port

app.use(cors());
app.use(express.json());

// Mock Data - Strapi format
const categories = [
  {
    id: 1,
    documentId: 'cat-fpv',
    name: 'FPV Batteries',
    slug: 'fpv',
    description: 'High discharge rate batteries designed for FPV racing and freestyle drones.',
    image: { url: '/uploads/categories/fpv.jpg' },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 2,
    documentId: 'cat-agricultural',
    name: 'Agricultural Drone Batteries',
    slug: 'agricultural',
    description: 'High capacity batteries for agricultural spraying drones.',
    image: { url: '/uploads/categories/agricultural.jpg' },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 3,
    documentId: 'cat-vtol',
    name: 'VTOL Batteries',
    slug: 'vtol',
    description: 'Specialized batteries for Vertical Take-Off and Landing aircraft.',
    image: { url: '/uploads/categories/vtol.jpg' },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 4,
    documentId: 'cat-industrial',
    name: 'Industrial Inspection',
    slug: 'industrial',
    description: 'Reliable batteries for industrial inspection and surveillance drones.',
    image: { url: '/uploads/categories/industrial.jpg' },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
];

const products = [
  {
    id: 1,
    documentId: 'prod-ag-22000-12s',
    name: '22000mAh 12S Agricultural Drone Battery',
    slug: '22000mah-12s-agricultural',
    sku: 'BV-AG-22000-12S',
    shortDescription: 'High capacity battery for agricultural spray drones with extended flight time.',
    fullDescription: '<p>The BV-AG-22000-12S is our flagship agricultural drone battery, designed specifically for demanding spray operations.</p><h3>Key Features:</h3><ul><li>Premium grade LiPo cells</li><li>Built-in smart BMS</li><li>Rugged casing</li></ul>',
    voltage: 12,
    capacity: 22000,
    cRate: 25,
    weight: 4850,
    dimensions: '205×90×68mm',
    connectorType: 'AS150U',
    cellType: 'LiPo',
    featured: true,
    images: [{ url: '/uploads/products/ag-22000-12s.jpg' }],
    dischargeCurve: { url: '/uploads/products/discharge-ag-22000.jpg' },
    datasheet: { url: '/uploads/docs/BV-AG-22000-12S-datasheet.pdf' },
    msds: { url: '/uploads/docs/BV-AG-22000-12S-msds.pdf' },
    category: { id: 2, slug: 'agricultural', name: 'Agricultural Drone Batteries' },
    faqs: [
      { question: 'What is the expected flight time?', answer: 'Typically 15-25 minutes depending on drone weight and payload.' },
      { question: 'Is this compatible with DJI Agras?', answer: 'Yes, compatible with DJI Agras T30, T40 and similar platforms.' },
      { question: 'What certifications does it have?', answer: 'CE certified, UN38.3 tested, RoHS compliant.' },
    ],
    seo: { metaTitle: '22000mAh 12S Agricultural Drone Battery | Battivus', metaDescription: 'High capacity 22000mAh 12S LiPo battery for agricultural spray drones.' },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 2,
    documentId: 'prod-fpv-1300-6s',
    name: '1300mAh 6S FPV Racing Battery',
    slug: '1300mah-6s-fpv',
    sku: 'BV-FPV-1300-6S',
    shortDescription: 'High discharge rate battery for FPV racing drones.',
    fullDescription: '<p>Ultra-lightweight high-performance battery designed for competitive FPV racing.</p>',
    voltage: 6,
    capacity: 1300,
    cRate: 45,
    weight: 195,
    dimensions: '72×35×42mm',
    connectorType: 'XT60',
    cellType: 'LiPo',
    featured: true,
    images: [{ url: '/uploads/products/fpv-1300-6s.jpg' }],
    category: { id: 1, slug: 'fpv', name: 'FPV Batteries' },
    faqs: [
      { question: 'What is the burst discharge rate?', answer: 'Up to 90C burst for 10 seconds.' },
    ],
    seo: { metaTitle: '1300mAh 6S FPV Racing Battery | Battivus', metaDescription: 'High discharge 1300mAh 6S LiPo for FPV racing.' },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 3,
    documentId: 'prod-vtol-16000-14s',
    name: '16000mAh 14S VTOL Battery Pack',
    slug: '16000mah-14s-vtol',
    sku: 'BV-VTOL-16000-14S',
    shortDescription: 'High energy density battery for VTOL fixed-wing drones.',
    fullDescription: '<p>Optimized for long-range VTOL missions with excellent energy density.</p>',
    voltage: 14,
    capacity: 16000,
    cRate: 15,
    weight: 4200,
    dimensions: '220×85×75mm',
    connectorType: 'AS150U',
    cellType: 'Li-ion',
    featured: false,
    images: [{ url: '/uploads/products/vtol-16000-14s.jpg' }],
    category: { id: 3, slug: 'vtol', name: 'VTOL Batteries' },
    faqs: [],
    seo: { metaTitle: '16000mAh 14S VTOL Battery | Battivus', metaDescription: 'High energy VTOL battery for long range missions.' },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 4,
    documentId: 'prod-ind-10000-6s',
    name: '10000mAh 6S Industrial Inspection Battery',
    slug: '10000mah-6s-industrial',
    sku: 'BV-IND-10000-6S',
    shortDescription: 'Reliable battery for industrial inspection and surveillance drones.',
    fullDescription: '<p>Built for consistent performance in professional inspection applications.</p>',
    voltage: 6,
    capacity: 10000,
    cRate: 25,
    weight: 1450,
    dimensions: '145×50×52mm',
    connectorType: 'XT90',
    cellType: 'LiPo',
    featured: true,
    images: [{ url: '/uploads/products/ind-10000-6s.jpg' }],
    category: { id: 4, slug: 'industrial', name: 'Industrial Inspection' },
    faqs: [],
    seo: { metaTitle: '10000mAh 6S Industrial Battery | Battivus', metaDescription: 'Reliable battery for industrial inspection drones.' },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 5,
    documentId: 'prod-ag-30000-12s',
    name: '30000mAh 12S Heavy Lift Battery',
    slug: '30000mah-12s-heavy-lift',
    sku: 'BV-AG-30000-12S',
    shortDescription: 'Ultra-high capacity for heavy lift agricultural applications.',
    fullDescription: '<p>Maximum capacity battery for heavy payload operations.</p>',
    voltage: 12,
    capacity: 30000,
    cRate: 25,
    weight: 6500,
    dimensions: '245×100×85mm',
    connectorType: 'AS150U',
    cellType: 'LiPo',
    featured: false,
    images: [{ url: '/uploads/products/ag-30000-12s.jpg' }],
    category: { id: 2, slug: 'agricultural', name: 'Agricultural Drone Batteries' },
    faqs: [],
    seo: { metaTitle: '30000mAh 12S Heavy Lift Battery | Battivus', metaDescription: 'Ultra high capacity battery for heavy lift drones.' },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 6,
    documentId: 'prod-fpv-650-4s',
    name: '650mAh 4S FPV Micro Battery',
    slug: '650mah-4s-fpv-micro',
    sku: 'BV-FPV-650-4S',
    shortDescription: 'Lightweight battery for micro FPV quads and whoops.',
    fullDescription: '<p>Perfect for micro quads and indoor flying.</p>',
    voltage: 4,
    capacity: 650,
    cRate: 50,
    weight: 75,
    dimensions: '55×30×22mm',
    connectorType: 'XT30',
    cellType: 'LiPo',
    featured: false,
    images: [{ url: '/uploads/products/fpv-650-4s.jpg' }],
    category: { id: 1, slug: 'fpv', name: 'FPV Batteries' },
    faqs: [],
    seo: { metaTitle: '650mAh 4S Micro FPV Battery | Battivus', metaDescription: 'Lightweight battery for micro FPV quads.' },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
];

const blogPosts = [
  {
    id: 1,
    documentId: 'blog-choose-battery',
    title: 'How to Choose the Right Drone Battery',
    slug: 'how-to-choose-drone-battery',
    content: `<h2>Introduction</h2>
<p>Choosing the right battery is crucial for optimal drone performance. Whether you're a hobbyist flying for fun or a professional conducting commercial operations, understanding battery specifications will help you make informed decisions.</p>
<h2>Understanding Battery Specifications</h2>
<p>Key specifications include voltage (measured in S count), capacity (mAh), and discharge rate (C-rating). Each of these factors plays a crucial role in determining how your drone performs.</p>
<h3>Voltage (S Count)</h3>
<p>The S count indicates the number of cells in series. Common configurations include 4S (14.8V), 6S (22.2V), and 12S (44.4V). Higher voltage generally means more power, but your drone must be designed to handle it.</p>
<h3>Capacity (mAh)</h3>
<p>Capacity determines how long you can fly. A 5000mAh battery holds more energy than a 3000mAh battery, but it's also heavier. Finding the right balance is key.</p>
<h3>Discharge Rate (C-Rating)</h3>
<p>The C-rating tells you how fast the battery can safely deliver its energy. For aggressive flying, you need higher C-ratings (45C+). For gentle cruising, lower ratings (15-25C) are sufficient.</p>
<h2>Matching Battery to Application</h2>
<ul>
<li><strong>FPV Racing:</strong> High C-rating, moderate capacity (1300-2200mAh)</li>
<li><strong>Cinematography:</strong> High capacity, moderate C-rating</li>
<li><strong>Agricultural:</strong> Maximum capacity, rugged construction</li>
<li><strong>Long Range:</strong> High energy density Li-ion cells</li>
</ul>
<p>Contact Battivus to find the perfect battery for your specific application.</p>`,
    excerpt: 'A comprehensive guide to selecting the perfect battery for your UAV application, covering voltage, capacity, and C-rating specifications.',
    featuredImage: null,
    author: { name: 'Battivus Team', avatar: null },
    tags: [{ name: 'Guide', slug: 'guide' }, { name: 'Battery Basics', slug: 'battery-basics' }],
    publishedAt: '2024-01-15T00:00:00.000Z',
    seo: { metaTitle: 'How to Choose the Right Drone Battery | Battivus Blog', metaDescription: 'Learn how to select the perfect drone battery for your needs.' },
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z',
  },
  {
    id: 2,
    documentId: 'blog-lipo-safety',
    title: 'LiPo Battery Safety Guide: Essential Practices',
    slug: 'lipo-battery-safety-guide',
    content: `<h2>Why Safety Matters</h2>
<p>Lithium polymer (LiPo) batteries store tremendous amounts of energy in a compact package. While this makes them perfect for drones, it also means they require careful handling to prevent accidents.</p>
<h2>Charging Safety</h2>
<ul>
<li>Always use a quality balance charger designed for LiPo batteries</li>
<li>Never charge unattended</li>
<li>Charge on a fireproof surface or in a LiPo safe bag</li>
<li>Never charge at more than 1C unless the battery is rated for fast charging</li>
<li>Don't charge batteries that are hot, damaged, or swollen</li>
</ul>
<h2>Storage Best Practices</h2>
<ul>
<li>Store at 3.8V per cell (storage charge)</li>
<li>Keep in a cool, dry place (20-25°C ideal)</li>
<li>Use a fireproof container or LiPo bag</li>
<li>Never store fully charged or fully depleted</li>
</ul>
<h2>Signs of Damage</h2>
<p>Inspect your batteries regularly for:</p>
<ul>
<li>Swelling or puffing</li>
<li>Dents or punctures</li>
<li>Unusual warmth during storage</li>
<li>Cells out of balance (more than 0.05V difference)</li>
</ul>
<h2>Disposal</h2>
<p>Never throw LiPo batteries in regular trash. Discharge fully, then take to a battery recycling facility or electronics store with battery recycling programs.</p>`,
    excerpt: 'Essential safety practices for charging, storing, and using LiPo batteries. Protect yourself and your equipment with these proven guidelines.',
    featuredImage: null,
    author: { name: 'Battivus Safety Team', avatar: null },
    tags: [{ name: 'Safety', slug: 'safety' }, { name: 'LiPo', slug: 'lipo' }],
    publishedAt: '2024-01-20T00:00:00.000Z',
    seo: { metaTitle: 'LiPo Battery Safety Guide | Battivus Blog', metaDescription: 'Essential safety practices for LiPo batteries.' },
    createdAt: '2024-01-20T00:00:00.000Z',
    updatedAt: '2024-01-20T00:00:00.000Z',
  },
  {
    id: 3,
    documentId: 'blog-agricultural-drones',
    title: 'Battery Requirements for Agricultural Drones',
    slug: 'battery-requirements-agricultural-drones',
    content: `<h2>The Agricultural Drone Revolution</h2>
<p>Agricultural drones are transforming modern farming, enabling precision spraying, crop monitoring, and field mapping. These demanding applications require batteries that can deliver high capacity, withstand harsh conditions, and provide reliable performance.</p>
<h2>Unique Power Demands</h2>
<p>Agricultural spray drones face challenges unlike any other drone category:</p>
<ul>
<li><strong>Heavy Payloads:</strong> Spray tanks can add 10-40kg of weight</li>
<li><strong>Long Operating Hours:</strong> Commercial farms require all-day operations</li>
<li><strong>Environmental Exposure:</strong> Dust, humidity, temperature extremes</li>
<li><strong>High Cycle Counts:</strong> Intensive use during growing seasons</li>
</ul>
<h2>Recommended Specifications</h2>
<p>For most agricultural applications, we recommend:</p>
<ul>
<li><strong>Capacity:</strong> 22,000-30,000mAh</li>
<li><strong>Voltage:</strong> 12S-14S (44.4V-51.8V)</li>
<li><strong>C-Rating:</strong> 25C continuous minimum</li>
<li><strong>Cycle Life:</strong> 500+ cycles</li>
</ul>
<h2>Our Agricultural Solutions</h2>
<p>Battivus offers purpose-built batteries for agricultural applications, featuring rugged enclosures, smart BMS with real-time monitoring, and premium cells rated for 500+ cycles.</p>`,
    excerpt: 'Understanding the specific battery needs for agricultural spray drones, from capacity requirements to environmental protection.',
    featuredImage: null,
    author: { name: 'Agricultural Solutions Team', avatar: null },
    tags: [{ name: 'Agricultural', slug: 'agricultural' }, { name: 'Industry', slug: 'industry' }],
    publishedAt: '2024-01-25T00:00:00.000Z',
    seo: { metaTitle: 'Agricultural Drone Battery Requirements | Battivus Blog', metaDescription: 'Battery requirements for agricultural spray drones.' },
    createdAt: '2024-01-25T00:00:00.000Z',
    updatedAt: '2024-01-25T00:00:00.000Z',
  },
  {
    id: 4,
    documentId: 'blog-battery-chemistry',
    title: 'Understanding Drone Battery Chemistry: LiPo vs Li-ion',
    slug: 'understanding-drone-battery-chemistry',
    content: `<h2>Introduction to Battery Chemistry</h2>
<p>The chemistry of your drone battery directly impacts flight time, power output, weight, safety, and cost. Let's break down the two most common types.</p>
<h2>Lithium Polymer (LiPo)</h2>
<p>LiPo batteries are the most popular choice for drones due to their excellent power-to-weight ratio.</p>
<h3>Advantages:</h3>
<ul>
<li>High discharge rates (up to 100C for racing)</li>
<li>Lightweight and flexible form factors</li>
<li>Good energy density (150-200 Wh/kg)</li>
<li>Relatively affordable</li>
</ul>
<h3>Disadvantages:</h3>
<ul>
<li>Shorter cycle life (300-500 cycles)</li>
<li>Requires careful handling</li>
<li>Sensitive to temperature extremes</li>
</ul>
<h2>Lithium-ion (Li-ion)</h2>
<p>Li-ion batteries excel where flight time and longevity matter most.</p>
<h3>Advantages:</h3>
<ul>
<li>Excellent cycle life (1000-2000+ cycles)</li>
<li>Higher energy density (200-260 Wh/kg)</li>
<li>More stable chemistry</li>
<li>Better for long-duration flights</li>
</ul>
<h3>Disadvantages:</h3>
<ul>
<li>Lower discharge rates (typically 10-25C)</li>
<li>Heavier for same power output</li>
<li>Higher upfront cost</li>
</ul>
<h2>Which Should You Choose?</h2>
<p>Racing/Freestyle: LiPo. Mapping/Survey: Li-ion. The right choice depends on your specific application needs.</p>`,
    excerpt: 'A comprehensive comparison of LiPo and Li-ion batteries, helping you choose the right chemistry for your drone application.',
    featuredImage: null,
    author: { name: 'Dr. James Chen, CTO', avatar: null },
    tags: [{ name: 'Technology', slug: 'technology' }, { name: 'Battery Basics', slug: 'battery-basics' }],
    publishedAt: '2024-02-01T00:00:00.000Z',
    seo: { metaTitle: 'LiPo vs Li-ion: Drone Battery Chemistry Explained', metaDescription: 'Compare LiPo and Li-ion drone batteries to find the right choice for your application.' },
    createdAt: '2024-02-01T00:00:00.000Z',
    updatedAt: '2024-02-01T00:00:00.000Z',
  },
  {
    id: 5,
    documentId: 'blog-cold-weather',
    title: 'Cold Weather Drone Operations: Battery Best Practices',
    slug: 'cold-weather-drone-battery-best-practices',
    content: `<h2>The Cold Weather Challenge</h2>
<p>Cold temperatures are one of the biggest challenges for drone batteries. Understanding these effects is crucial for safe winter operations.</p>
<h2>How Cold Affects Batteries</h2>
<ul>
<li><strong>Capacity Reduction:</strong> Batteries may lose 20-40% capacity at -10°C</li>
<li><strong>Voltage Sag:</strong> More pronounced under load in cold temperatures</li>
<li><strong>Internal Resistance:</strong> Increases, reducing available power</li>
<li><strong>Charging:</strong> Cannot safely charge below 0°C</li>
</ul>
<h2>Pre-Flight Preparation</h2>
<p>The most important step is starting with warm batteries:</p>
<ul>
<li>Keep batteries inside your vehicle or in insulated containers until ready</li>
<li>Use battery warmers or heating pads</li>
<li>Target a minimum of 20°C (68°F) before flight</li>
<li>Never attempt to fly with batteries below 10°C</li>
</ul>
<h2>In-Flight Tips</h2>
<ul>
<li>Hover first for 30-60 seconds to let motors warm the battery</li>
<li>Monitor temperature if your battery supports it</li>
<li>Reduce expected flight time by 30-40%</li>
<li>Avoid aggressive maneuvers</li>
<li>Land with higher reserve (30-40%)</li>
</ul>
<p>Our Low Temperature series (LT-4500 Arctic, LT-6000 Polar) is specifically designed for cold weather operations down to -40°C.</p>`,
    excerpt: 'Essential guidelines for operating drone batteries in cold environments, from pre-flight preparation to in-flight monitoring.',
    featuredImage: null,
    author: { name: 'Field Operations Team', avatar: null },
    tags: [{ name: 'Tips', slug: 'tips' }, { name: 'Cold Weather', slug: 'cold-weather' }],
    publishedAt: '2024-02-10T00:00:00.000Z',
    seo: { metaTitle: 'Cold Weather Drone Battery Guide | Battivus', metaDescription: 'Complete guide to operating drone batteries in cold weather conditions.' },
    createdAt: '2024-02-10T00:00:00.000Z',
    updatedAt: '2024-02-10T00:00:00.000Z',
  },
  {
    id: 6,
    documentId: 'blog-maximize-lifespan',
    title: 'How to Maximize Your Drone Battery Lifespan',
    slug: 'maximize-drone-battery-lifespan',
    content: `<h2>Introduction</h2>
<p>Drone batteries represent a significant investment. Proper care can dramatically extend their useful life, saving money and ensuring reliable performance.</p>
<h2>Storage Best Practices</h2>
<ul>
<li><strong>Storage Voltage:</strong> Store at 3.8V per cell. Never store fully charged or depleted.</li>
<li><strong>Temperature:</strong> Store in a cool, dry place between 20-25°C (68-77°F).</li>
<li><strong>Duration:</strong> If storing for more than a week, put batteries into storage mode.</li>
<li><strong>Container:</strong> Use a fireproof LiPo bag for safety.</li>
</ul>
<h2>Charging Guidelines</h2>
<ul>
<li><strong>Balance Charging:</strong> Always use a balance charger.</li>
<li><strong>Charge Rate:</strong> Use 1C or lower for regular charging.</li>
<li><strong>Cool Down:</strong> Let batteries cool after flight before charging.</li>
</ul>
<h2>Flight Habits</h2>
<ul>
<li><strong>Avoid Deep Discharge:</strong> Land with 20-30% remaining.</li>
<li><strong>Monitor Temperature:</strong> Allow cooling between flights.</li>
<li><strong>Match C-Rating:</strong> Don't use racing batteries for casual flying.</li>
</ul>
<h2>Regular Maintenance</h2>
<ul>
<li>Inspect for swelling, damage, or unusual warmth</li>
<li>Track internal resistance over time</li>
<li>Monitor cycle counts and retire degraded batteries</li>
</ul>
<p>Following these guidelines can extend battery life by 2-3x compared to neglecting proper care.</p>`,
    excerpt: 'Practical tips and best practices to extend the life of your drone batteries, saving money and ensuring reliable performance.',
    featuredImage: null,
    author: { name: 'Battivus Support Team', avatar: null },
    tags: [{ name: 'Tips', slug: 'tips' }, { name: 'Maintenance', slug: 'maintenance' }],
    publishedAt: '2024-02-15T00:00:00.000Z',
    seo: { metaTitle: 'How to Extend Drone Battery Life | Battivus', metaDescription: 'Expert tips to maximize your drone battery lifespan and save money.' },
    createdAt: '2024-02-15T00:00:00.000Z',
    updatedAt: '2024-02-15T00:00:00.000Z',
  },
];

const solutions = [
  {
    id: 1,
    documentId: 'sol-aerial-mapping',
    title: 'Aerial Mapping & Survey',
    slug: 'aerial-mapping',
    industry: 'Mapping & Survey',
    heroImage: { url: '/uploads/solutions/aerial-mapping.jpg' },
    painPoints: '<ul><li>Insufficient flight time for large area coverage</li><li>Voltage sag affecting sensor accuracy</li><li>Weight constraints</li></ul>',
    ourSolution: '<ul><li>High energy density Li-ion cells</li><li>Stable voltage output</li><li>Optimized weight-to-capacity ratio</li></ul>',
    featuredProducts: [3, 4],
    caseStudy: '<p>A surveying company increased their coverage by 40% using our VTOL batteries.</p>',
    seo: { metaTitle: 'Aerial Mapping Battery Solutions | Battivus', metaDescription: 'Power solutions for mapping and survey drones.' },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 2,
    documentId: 'sol-agricultural',
    title: 'Agricultural Spraying',
    slug: 'agricultural-spraying',
    industry: 'Agriculture',
    heroImage: { url: '/uploads/solutions/agricultural.jpg' },
    painPoints: '<ul><li>High capacity requirements</li><li>Harsh outdoor conditions</li><li>Frequent charge cycles</li></ul>',
    ourSolution: '<ul><li>Ultra-high capacity packs</li><li>Ruggedized enclosure</li><li>Premium cells with 500+ cycle life</li></ul>',
    featuredProducts: [1, 5],
    caseStudy: '<p>Farm operations achieved 30% longer spray times with our 30000mAh packs.</p>',
    seo: { metaTitle: 'Agricultural Drone Battery Solutions | Battivus', metaDescription: 'Heavy-duty batteries for agricultural spray drones.' },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
];

// Helper: Strapi response format
const strapiResponse = (data, meta = {}) => ({
  data: Array.isArray(data) ? data : [data],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: Array.isArray(data) ? data.length : 1 }, ...meta },
});

const strapiSingleResponse = (data) => ({ data });

// Routes - Strapi REST API format

// Categories
app.get('/api/categories', (req, res) => {
  res.json(strapiResponse(categories));
});

app.get('/api/categories/:documentId', (req, res) => {
  const cat = categories.find(c => c.documentId === req.params.documentId || c.slug === req.params.documentId);
  if (!cat) return res.status(404).json({ error: 'Not found' });
  res.json(strapiSingleResponse(cat));
});

// Products
app.get('/api/products', (req, res) => {
  let filtered = [...products];
  
  // Filter by category
  if (req.query['filters[category][slug][$eq]']) {
    filtered = filtered.filter(p => p.category.slug === req.query['filters[category][slug][$eq]']);
  }
  
  // Filter by voltage
  if (req.query['filters[voltage][$in]']) {
    const voltages = req.query['filters[voltage][$in]'].split(',').map(Number);
    filtered = filtered.filter(p => voltages.includes(p.voltage));
  }
  
  // Filter by featured
  if (req.query['filters[featured][$eq]'] === 'true') {
    filtered = filtered.filter(p => p.featured);
  }
  
  // Populate relations
  if (req.query.populate === '*' || req.query.populate?.includes('category')) {
    // Already populated in mock data
  }
  
  res.json(strapiResponse(filtered));
});

app.get('/api/products/:documentId', (req, res) => {
  const product = products.find(p => p.documentId === req.params.documentId || p.slug === req.params.documentId);
  if (!product) return res.status(404).json({ error: 'Not found' });
  res.json(strapiSingleResponse(product));
});

// Blog Posts
app.get('/api/blog-posts', (req, res) => {
  let filtered = [...blogPosts];
  
  // Sort by publishedAt
  if (req.query.sort === 'publishedAt:desc') {
    filtered.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  }
  
  res.json(strapiResponse(filtered));
});

app.get('/api/blog-posts/:documentId', (req, res) => {
  const post = blogPosts.find(p => p.documentId === req.params.documentId || p.slug === req.params.documentId);
  if (!post) return res.status(404).json({ error: 'Not found' });
  res.json(strapiSingleResponse(post));
});

// Solutions
app.get('/api/solutions', (req, res) => {
  res.json(strapiResponse(solutions));
});

app.get('/api/solutions/:documentId', (req, res) => {
  const solution = solutions.find(s => s.documentId === req.params.documentId || s.slug === req.params.documentId);
  if (!solution) return res.status(404).json({ error: 'Not found' });
  res.json(strapiSingleResponse(solution));
});

// Inquiries (POST)
app.post('/api/inquiries', (req, res) => {
  console.log('New inquiry received:', req.body);
  res.json(strapiSingleResponse({
    id: Date.now(),
    documentId: `inq-${Date.now()}`,
    ...req.body,
    createdAt: new Date().toISOString(),
  }));
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Mock Strapi API running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`
🚀 Mock Strapi API running on http://localhost:${PORT}
   
   Available endpoints:
   - GET  /api/categories
   - GET  /api/categories/:id
   - GET  /api/products
   - GET  /api/products/:id
   - GET  /api/blog-posts
   - GET  /api/blog-posts/:id
   - GET  /api/solutions
   - GET  /api/solutions/:id
   - POST /api/inquiries
   - GET  /api/health
  `);
});
