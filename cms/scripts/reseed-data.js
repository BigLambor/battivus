/**
 * Re-seed script to populate Strapi with categories matching frontend navigation
 * Categories: FPV, Agricultural, VTOL, Industrial
 */

const API_URL = 'http://localhost:1337/api';
const ADMIN_URL = 'http://localhost:1337/admin';

// Admin credentials - will prompt for first-time setup
let AUTH_TOKEN = null;

async function loginAdmin() {
  // Try to login with default dev credentials
  const credentials = [
    { email: 'admin@battivus.com', password: 'Admin123!' },
    { email: 'admin@strapi.io', password: 'Admin123!' },
  ];
  
  for (const cred of credentials) {
    try {
      const response = await fetch(`${ADMIN_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cred)
      });
      if (response.ok) {
        const result = await response.json();
        AUTH_TOKEN = result.data?.token;
        console.log(`✓ Logged in as ${cred.email}`);
        return true;
      }
    } catch (e) {}
  }
  console.log('⚠️  Could not auto-login. Will try public API...');
  return false;
}

function getHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  if (AUTH_TOKEN) {
    headers['Authorization'] = `Bearer ${AUTH_TOKEN}`;
  }
  return headers;
}

// Categories matching frontend navigation (config.ts)
const categories = [
  {
    name: 'FPV Batteries',
    slug: 'fpv',
    description: 'High discharge rate batteries designed for FPV racing and freestyle drones. Lightweight with exceptional power delivery for aggressive flight maneuvers.',
    seo_title: 'FPV Racing Drone Batteries | Battivus',
    seo_description: 'High-performance FPV drone batteries with extreme discharge rates. Perfect for racing and freestyle flying.'
  },
  {
    name: 'Agricultural Drone Batteries',
    slug: 'agricultural',
    description: 'High capacity batteries for agricultural spray drones. Extended flight time and reliable performance in demanding outdoor conditions.',
    seo_title: 'Agricultural Drone Batteries | Battivus',
    seo_description: 'Heavy-duty batteries for agricultural spray drones. High capacity, rugged design for farming operations.'
  },
  {
    name: 'VTOL Batteries',
    slug: 'vtol',
    description: 'Specialized batteries for Vertical Take-Off and Landing aircraft. Optimized for long-range missions and hybrid flight profiles.',
    seo_title: 'VTOL Drone Batteries | Battivus',
    seo_description: 'High energy density batteries for VTOL fixed-wing drones. Maximum flight time for mapping and surveying.'
  },
  {
    name: 'Industrial Inspection',
    slug: 'industrial',
    description: 'Reliable batteries for industrial inspection and surveillance drones. Built for consistent performance in professional applications.',
    seo_title: 'Industrial Drone Batteries | Battivus',
    seo_description: 'Professional-grade batteries for industrial inspection drones. Reliable power for critical operations.'
  }
];

// Products for each category
const products = [
  // FPV Batteries
  {
    name: '1300mAh 6S FPV Racing Battery',
    slug: '1300mah-6s-fpv-racing',
    sku: 'BV-FPV-1300-6S',
    short_description: 'High discharge rate battery for FPV racing drones. 100C burst for explosive power.',
    full_description: '## 1300mAh 6S FPV Racing Battery\n\nDominate the race track with this purpose-built racing battery.\n\n### Key Features\n- 100C burst / 75C continuous discharge\n- Ultra-low internal resistance\n- Rigid case for crash protection\n- Competition-proven performance\n\n### Specifications\n- Capacity: 1300mAh\n- Voltage: 22.2V (6S)\n- Weight: 195g\n- Connector: XT60',
    voltage: 6,
    capacity: 1300,
    c_rate: 75,
    weight: 195,
    dimensions: '72×35×42mm',
    connector_type: 'XT60',
    cell_type: 'LiPo',
    featured: true,
    category_slug: 'fpv'
  },
  {
    name: '650mAh 4S FPV Micro Battery',
    slug: '650mah-4s-fpv-micro',
    sku: 'BV-FPV-650-4S',
    short_description: 'Lightweight battery for micro FPV quads and whoops. Perfect for indoor racing.',
    full_description: '## 650mAh 4S FPV Micro Battery\n\nCompact power for micro quads and whoops.\n\n### Features\n- Ultra-lightweight design\n- High C-rate for punch\n- Compact form factor\n- XT30 connector standard',
    voltage: 4,
    capacity: 650,
    c_rate: 50,
    weight: 75,
    dimensions: '55×30×22mm',
    connector_type: 'XT30',
    cell_type: 'LiPo',
    featured: false,
    category_slug: 'fpv'
  },
  {
    name: '1550mAh 6S Freestyle Battery',
    slug: '1550mah-6s-freestyle',
    sku: 'BV-FPV-1550-6S',
    short_description: 'Perfect balance of power and flight time for freestyle flying and long range.',
    full_description: '## 1550mAh 6S Freestyle Battery\n\nThe go-to choice for freestyle pilots who want longer flight times without sacrificing power.',
    voltage: 6,
    capacity: 1550,
    c_rate: 60,
    weight: 220,
    dimensions: '78×38×45mm',
    connector_type: 'XT60',
    cell_type: 'LiPo',
    featured: true,
    category_slug: 'fpv'
  },
  {
    name: '1100mAh 6S Ultra-Light Racing',
    slug: '1100mah-6s-ultralight',
    sku: 'BV-FPV-1100-6S',
    short_description: 'Ultra-lightweight racing battery for maximum speed and agility. Competition grade.',
    full_description: '## 1100mAh 6S Ultra-Light Racing Battery\n\nWhen every gram counts. Our lightest 6S racing pack.',
    voltage: 6,
    capacity: 1100,
    c_rate: 100,
    weight: 165,
    dimensions: '65×32×38mm',
    connector_type: 'XT60',
    cell_type: 'LiPo',
    featured: false,
    category_slug: 'fpv'
  },

  // Agricultural Drone Batteries
  {
    name: '22000mAh 12S Agricultural Battery',
    slug: '22000mah-12s-agricultural',
    sku: 'BV-AG-22000-12S',
    short_description: 'High capacity battery for agricultural spray drones. Extended flight time for large field coverage.',
    full_description: '## 22000mAh 12S Agricultural Battery\n\nOur flagship agricultural drone battery, designed for demanding spray operations.\n\n### Key Features\n- Premium grade LiPo cells\n- Built-in smart BMS\n- Rugged casing for outdoor use\n- Quick-release mounting\n- Temperature sensors\n\n### Compatibility\n- DJI Agras T30, T40\n- XAG P40, P80\n- Custom agricultural platforms',
    voltage: 12,
    capacity: 22000,
    c_rate: 25,
    weight: 4850,
    dimensions: '205×90×68mm',
    connector_type: 'AS150U',
    cell_type: 'LiPo',
    featured: true,
    category_slug: 'agricultural'
  },
  {
    name: '30000mAh 12S Heavy Lift Agricultural',
    slug: '30000mah-12s-heavy-lift',
    sku: 'BV-AG-30000-12S',
    short_description: 'Ultra-high capacity for heavy lift agricultural applications. Maximum payload support.',
    full_description: '## 30000mAh 12S Heavy Lift Agricultural Battery\n\nMaximum capacity for heavy spraying operations.',
    voltage: 12,
    capacity: 30000,
    c_rate: 25,
    weight: 6500,
    dimensions: '245×100×85mm',
    connector_type: 'AS150U',
    cell_type: 'LiPo',
    featured: true,
    category_slug: 'agricultural'
  },
  {
    name: '16000mAh 14S Agricultural Pro',
    slug: '16000mah-14s-agricultural-pro',
    sku: 'BV-AG-16000-14S',
    short_description: 'Professional agricultural battery with 14S configuration for higher voltage platforms.',
    full_description: '## 16000mAh 14S Agricultural Pro\n\nFor agricultural drones requiring higher voltage systems.',
    voltage: 14,
    capacity: 16000,
    c_rate: 25,
    weight: 4200,
    dimensions: '195×85×72mm',
    connector_type: 'AS150U',
    cell_type: 'LiPo',
    featured: false,
    category_slug: 'agricultural'
  },

  // VTOL Batteries
  {
    name: '16000mAh 14S VTOL Battery Pack',
    slug: '16000mah-14s-vtol',
    sku: 'BV-VTOL-16000-14S',
    short_description: 'High energy density battery for VTOL fixed-wing drones. Optimized for long-range missions.',
    full_description: '## 16000mAh 14S VTOL Battery Pack\n\nEngineered for maximum endurance in VTOL aircraft.\n\n### Key Features\n- High energy density Li-ion cells\n- Optimized weight-to-capacity ratio\n- Stable voltage throughout discharge\n- Wide temperature range operation\n\n### Applications\n- Aerial mapping\n- Long-range survey\n- Border patrol\n- Pipeline inspection',
    voltage: 14,
    capacity: 16000,
    c_rate: 15,
    weight: 4200,
    dimensions: '220×85×75mm',
    connector_type: 'AS150U',
    cell_type: 'Li-ion',
    featured: true,
    category_slug: 'vtol'
  },
  {
    name: '12000mAh 12S VTOL Endurance',
    slug: '12000mah-12s-vtol-endurance',
    sku: 'BV-VTOL-12000-12S',
    short_description: 'Long endurance VTOL battery with excellent energy density for extended mapping missions.',
    full_description: '## 12000mAh 12S VTOL Endurance\n\nMaximize your survey coverage with extended flight time.',
    voltage: 12,
    capacity: 12000,
    c_rate: 15,
    weight: 3200,
    dimensions: '185×78×65mm',
    connector_type: 'AS150U',
    cell_type: 'Li-ion',
    featured: true,
    category_slug: 'vtol'
  },
  {
    name: '22000mAh 14S VTOL Long Range',
    slug: '22000mah-14s-vtol-long-range',
    sku: 'BV-VTOL-22000-14S',
    short_description: 'Maximum capacity VTOL battery for ultra long-range missions and heavy payloads.',
    full_description: '## 22000mAh 14S VTOL Long Range\n\nOur highest capacity VTOL battery for maximum mission range.',
    voltage: 14,
    capacity: 22000,
    c_rate: 12,
    weight: 5800,
    dimensions: '250×95×82mm',
    connector_type: 'AS150U',
    cell_type: 'Li-ion',
    featured: false,
    category_slug: 'vtol'
  },

  // Industrial Inspection Batteries
  {
    name: '10000mAh 6S Industrial Battery',
    slug: '10000mah-6s-industrial',
    sku: 'BV-IND-10000-6S',
    short_description: 'Reliable battery for industrial inspection and surveillance drones. Wide temperature range.',
    full_description: '## 10000mAh 6S Industrial Inspection Battery\n\nBuilt for professional inspection operations.\n\n### Key Features\n- Wide temperature range (-20°C to 60°C)\n- Quick-swap design\n- Advanced BMS protection\n- Consistent discharge curve\n\n### Applications\n- Power line inspection\n- Cell tower survey\n- Building inspection\n- Security patrol',
    voltage: 6,
    capacity: 10000,
    c_rate: 25,
    weight: 1450,
    dimensions: '145×50×52mm',
    connector_type: 'XT90',
    cell_type: 'LiPo',
    featured: true,
    category_slug: 'industrial'
  },
  {
    name: '8000mAh 6S Patrol Battery',
    slug: '8000mah-6s-patrol',
    sku: 'BV-IND-8000-6S',
    short_description: 'Compact industrial battery for patrol and security drones. Quick deployment ready.',
    full_description: '## 8000mAh 6S Patrol Battery\n\nOptimized for security and patrol operations requiring quick deployment.',
    voltage: 6,
    capacity: 8000,
    c_rate: 30,
    weight: 1150,
    dimensions: '130×48×48mm',
    connector_type: 'XT90',
    cell_type: 'LiPo',
    featured: false,
    category_slug: 'industrial'
  },
  {
    name: '12000mAh 6S Enterprise Inspection',
    slug: '12000mah-6s-enterprise',
    sku: 'BV-IND-12000-6S',
    short_description: 'Enterprise-grade inspection battery with extended flight time for comprehensive surveys.',
    full_description: '## 12000mAh 6S Enterprise Inspection Battery\n\nMaximum flight time for detailed industrial inspections.',
    voltage: 6,
    capacity: 12000,
    c_rate: 20,
    weight: 1680,
    dimensions: '160×55×55mm',
    connector_type: 'XT90',
    cell_type: 'LiPo',
    featured: true,
    category_slug: 'industrial'
  },
  {
    name: '6000mAh 4S Compact Inspection',
    slug: '6000mah-4s-compact',
    sku: 'BV-IND-6000-4S',
    short_description: 'Compact inspection battery for smaller industrial drones. Lightweight and reliable.',
    full_description: '## 6000mAh 4S Compact Inspection Battery\n\nLightweight solution for compact inspection platforms.',
    voltage: 4,
    capacity: 6000,
    c_rate: 25,
    weight: 620,
    dimensions: '115×42×40mm',
    connector_type: 'XT60',
    cell_type: 'LiPo',
    featured: false,
    category_slug: 'industrial'
  }
];

// Fetch existing data and delete it
async function deleteExistingData() {
  console.log('\n🗑️  Clearing existing data...\n');
  
  // Get and delete all products
  try {
    const productsRes = await fetch(`${API_URL}/products?pagination[limit]=100`, { headers: getHeaders() });
    const productsData = await productsRes.json();
    
    for (const product of productsData.data || []) {
      await fetch(`${API_URL}/products/${product.documentId}`, { method: 'DELETE', headers: getHeaders() });
      console.log(`  Deleted product: ${product.name}`);
    }
  } catch (e) {
    console.log('  No products to delete or error:', e.message);
  }
  
  // Get and delete all categories
  try {
    const categoriesRes = await fetch(`${API_URL}/categories?pagination[limit]=100`, { headers: getHeaders() });
    const categoriesData = await categoriesRes.json();
    
    for (const category of categoriesData.data || []) {
      await fetch(`${API_URL}/categories/${category.documentId}`, { method: 'DELETE', headers: getHeaders() });
      console.log(`  Deleted category: ${category.name}`);
    }
  } catch (e) {
    console.log('  No categories to delete or error:', e.message);
  }
  
  console.log('\n✓ Existing data cleared\n');
}

async function createCategory(category) {
  try {
    const response = await fetch(`${API_URL}/categories`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ data: category })
    });
    const result = await response.json();
    if (result.error) {
      console.error(`Failed to create category ${category.name}:`, result.error.message);
      return null;
    }
    console.log(`✓ Created category: ${category.name} (slug: ${category.slug})`);
    return result.data;
  } catch (error) {
    console.error(`Error creating category ${category.name}:`, error.message);
    return null;
  }
}

async function publishCategory(documentId) {
  try {
    await fetch(`${API_URL}/categories/${documentId}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({ data: { publishedAt: new Date().toISOString() } })
    });
  } catch (e) {}
}

async function createProduct(product, categoryId) {
  const { category_slug, ...productData } = product;
  productData.category = categoryId;
  
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ data: productData })
    });
    const result = await response.json();
    if (result.error) {
      console.error(`Failed to create product ${product.name}:`, result.error.message);
      return null;
    }
    console.log(`  ✓ Created: ${product.name} (${product.sku})`);
    return result.data;
  } catch (error) {
    console.error(`Error creating product ${product.name}:`, error.message);
    return null;
  }
}

async function publishProduct(documentId) {
  try {
    await fetch(`${API_URL}/products/${documentId}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({ data: { publishedAt: new Date().toISOString() } })
    });
  } catch (e) {}
}

async function seed() {
  console.log('\n🔋 Battivus Database Re-seeding');
  console.log('   Matching Frontend Navigation\n');
  console.log('='.repeat(50));
  
  // Try to login first
  await loginAdmin();
  
  // Delete existing data first
  await deleteExistingData();
  
  // Create categories and store their IDs
  console.log('📁 Creating Categories...\n');
  const categoryMap = {};
  const categoryDocs = {};
  
  for (const category of categories) {
    const created = await createCategory(category);
    if (created) {
      categoryMap[category.slug] = created.id;
      categoryDocs[category.slug] = created.documentId;
      await publishCategory(created.documentId);
    }
  }
  
  // Create products with category references
  console.log('\n📦 Creating Products...\n');
  const createdProducts = [];
  
  for (const product of products) {
    const categoryId = categoryMap[product.category_slug];
    if (categoryId) {
      const created = await createProduct(product, categoryId);
      if (created) {
        createdProducts.push(created);
        await publishProduct(created.documentId);
      }
    } else {
      console.error(`  ✗ Skipping ${product.name} - category not found`);
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('✅ Re-seeding complete!\n');
  console.log(`Categories created: ${Object.keys(categoryMap).length}`);
  console.log(`Products created: ${createdProducts.length}`);
  console.log('\nCategories:');
  categories.forEach(c => console.log(`  - ${c.name} (/${c.slug})`));
  console.log('\n🌐 Frontend navigation now matches Strapi data!');
}

seed().catch(console.error);
