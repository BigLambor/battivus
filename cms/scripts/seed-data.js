/**
 * Seed script to populate Strapi with battery categories and products
 * Based on Battivus product lineup for drone batteries
 */

const API_URL = 'http://localhost:1337/api';

// Categories based on the product classification
const categories = [
  {
    name: 'Semi-Solid State Battery',
    slug: 'semi-solid-state-battery',
    description: 'Next-generation semi-solid state batteries offering superior safety, higher energy density, and longer cycle life. Ideal for high-end drone applications requiring maximum reliability.',
    seo_title: 'Semi-Solid State Drone Batteries | Battivus',
    seo_description: 'Premium semi-solid state batteries for drones with enhanced safety, higher energy density, and extended cycle life. Perfect for professional UAV applications.'
  },
  {
    name: 'Lithium Polymer Battery',
    slug: 'lithium-polymer-battery',
    description: 'High-performance LiPo batteries designed for drones. Lightweight design with excellent power-to-weight ratio, flexible form factors, and reliable discharge rates.',
    seo_title: 'LiPo Drone Batteries | Battivus',
    seo_description: 'Professional-grade Lithium Polymer (LiPo) batteries for drones. Lightweight, high discharge rate, and optimized for UAV performance.'
  },
  {
    name: 'Lithium-ion Battery',
    slug: 'lithium-ion-battery',
    description: 'Reliable Li-ion batteries with excellent energy density and long cycle life. Cost-effective solution for commercial drone operations.',
    seo_title: 'Lithium-ion Drone Batteries | Battivus',
    seo_description: 'High-quality Lithium-ion batteries for commercial drones. Long cycle life, stable performance, and excellent value.'
  },
  {
    name: 'High Energy Density Battery',
    slug: 'high-energy-density-battery',
    description: 'Ultra-high energy density batteries maximizing flight time and range. Engineered for long-endurance missions and heavy payload applications.',
    seo_title: 'High Energy Density Drone Batteries | Battivus',
    seo_description: 'Maximum flight time with our high energy density drone batteries. Perfect for long-range missions and extended operations.'
  },
  {
    name: 'High Discharge Rate Battery',
    slug: 'high-discharge-rate-battery',
    description: 'High C-rate batteries designed for aggressive flight maneuvers, racing drones, and applications requiring burst power. Delivers peak performance on demand.',
    seo_title: 'High C-Rate Drone Batteries | Battivus',
    seo_description: 'High discharge rate batteries for racing drones and high-performance UAVs. Superior burst power and responsive throttle.'
  },
  {
    name: 'High Voltage Battery',
    slug: 'high-voltage-battery',
    description: 'High voltage (HV) LiPo batteries with 4.35V per cell for increased power output. Ideal for professional cinematography drones and heavy-lift applications.',
    seo_title: 'High Voltage HV Drone Batteries | Battivus',
    seo_description: 'Professional HV LiPo batteries with 4.35V cells. More power, better efficiency for cinematography and industrial drones.'
  },
  {
    name: 'Low Temperature Battery',
    slug: 'low-temperature-battery',
    description: 'Specially designed batteries for cold weather operations down to -40°C. Maintains performance and capacity in extreme cold environments.',
    seo_title: 'Cold Weather Drone Batteries | Battivus',
    seo_description: 'Low temperature drone batteries rated for -40°C operations. Reliable power in arctic and winter conditions.'
  },
  {
    name: 'High Temperature Battery',
    slug: 'high-temperature-battery',
    description: 'Heat-resistant batteries engineered for hot climate operations up to +60°C. Thermal management optimized for desert and tropical environments.',
    seo_title: 'Heat Resistant Drone Batteries | Battivus',
    seo_description: 'High temperature drone batteries for hot climate operations. Stable performance in desert and tropical conditions.'
  }
];

// Products for each category
const products = [
  // Semi-Solid State Batteries
  {
    name: 'Battivus SS-6000 Pro',
    slug: 'Battivus-ss-6000-pro',
    sku: 'BV-SS-6000-PRO',
    short_description: 'Premium semi-solid state battery with 6000mAh capacity, 22.2V (6S), exceptional safety and 1000+ cycle life.',
    full_description: '## Battivus SS-6000 Pro Semi-Solid State Battery\n\nThe SS-6000 Pro represents the pinnacle of drone battery technology. Utilizing advanced semi-solid electrolyte technology, this battery offers unparalleled safety and longevity.\n\n### Key Features\n- **Semi-solid electrolyte** - Dramatically reduces fire risk\n- **1000+ cycle life** - Industry-leading durability\n- **Smart BMS** - Real-time monitoring and protection\n- **Fast charging** - 80% in 30 minutes\n\n### Applications\n- Professional cinematography\n- Industrial inspection\n- Survey & mapping\n- Search and rescue',
    voltage: 22,
    capacity: 6000,
    c_rate: 25,
    weight: 820,
    dimensions: '145x50x55mm',
    connector_type: 'XT90-S',
    cell_type: 'LiPo',
    featured: true,
    category_slug: 'semi-solid-state-battery',
    seo_title: 'Battivus SS-6000 Pro Semi-Solid State Drone Battery',
    seo_description: 'Premium 6000mAh semi-solid state drone battery with 22.2V, 25C discharge, 1000+ cycles. The safest choice for professional UAV operations.'
  },
  {
    name: 'Battivus SS-10000 Elite',
    slug: 'Battivus-ss-10000-elite',
    sku: 'BV-SS-10000-ELT',
    short_description: 'Enterprise-grade semi-solid state battery with 10000mAh capacity for heavy-lift drones and extended missions.',
    full_description: '## Battivus SS-10000 Elite\n\nDesigned for enterprise applications requiring maximum endurance and reliability.\n\n### Specifications\n- Capacity: 10000mAh\n- Voltage: 44.4V (12S)\n- Discharge: 20C continuous\n- Cycle life: 800+',
    voltage: 44,
    capacity: 10000,
    c_rate: 20,
    weight: 1650,
    dimensions: '180x75x68mm',
    connector_type: 'AS150',
    cell_type: 'LiPo',
    featured: true,
    category_slug: 'semi-solid-state-battery',
    seo_title: 'Battivus SS-10000 Elite Heavy-Lift Drone Battery',
    seo_description: '10000mAh semi-solid state battery for heavy-lift drones. 44.4V, 20C, enterprise-grade reliability.'
  },

  // Lithium Polymer Batteries
  {
    name: 'Battivus LP-4500 Standard',
    slug: 'Battivus-lp-4500-standard',
    sku: 'BV-LP-4500-STD',
    short_description: 'Reliable LiPo battery with 4500mAh capacity, perfect balance of performance and value for everyday drone operations.',
    full_description: '## Battivus LP-4500 Standard\n\nThe go-to choice for drone operators seeking reliable performance at an accessible price point.\n\n### Features\n- High-quality A-grade cells\n- Balanced discharge characteristics\n- Universal compatibility\n- 500+ cycle life',
    voltage: 14,
    capacity: 4500,
    c_rate: 30,
    weight: 385,
    dimensions: '130x42x35mm',
    connector_type: 'XT60',
    cell_type: 'LiPo',
    featured: false,
    category_slug: 'lithium-polymer-battery',
    seo_title: 'Battivus LP-4500 Standard LiPo Drone Battery',
    seo_description: '4500mAh LiPo drone battery, 14.8V 4S, 30C discharge. Reliable everyday performance for consumer and prosumer drones.'
  },
  {
    name: 'Battivus LP-5200 Performance',
    slug: 'Battivus-lp-5200-performance',
    sku: 'BV-LP-5200-PFM',
    short_description: 'High-performance LiPo with 5200mAh capacity and 40C discharge rate for demanding flight profiles.',
    full_description: '## Battivus LP-5200 Performance\n\nEngineered for pilots who demand more power and longer flight times.',
    voltage: 22,
    capacity: 5200,
    c_rate: 40,
    weight: 620,
    dimensions: '155x48x45mm',
    connector_type: 'XT90',
    cell_type: 'LiPo',
    featured: true,
    category_slug: 'lithium-polymer-battery',
    seo_title: 'Battivus LP-5200 Performance LiPo Battery',
    seo_description: '5200mAh high-performance LiPo, 22.2V 6S, 40C discharge. For demanding drone applications.'
  },

  // Lithium-ion Batteries
  {
    name: 'Battivus LI-8000 Endurance',
    slug: 'Battivus-li-8000-endurance',
    sku: 'BV-LI-8000-END',
    short_description: 'High-capacity Li-ion battery optimized for maximum flight time. 8000mAh with 2000+ cycle life.',
    full_description: '## Battivus LI-8000 Endurance\n\nMaximize your flight time with our high-capacity Li-ion solution.\n\n### Advantages\n- Superior cycle life (2000+)\n- Lower cost per cycle\n- Stable voltage curve\n- Excellent energy density',
    voltage: 22,
    capacity: 8000,
    c_rate: 15,
    weight: 750,
    dimensions: '165x55x50mm',
    connector_type: 'XT60',
    cell_type: 'Li-ion',
    featured: false,
    category_slug: 'lithium-ion-battery',
    seo_title: 'Battivus LI-8000 Endurance Li-ion Drone Battery',
    seo_description: '8000mAh Li-ion drone battery for maximum flight time. 2000+ cycles, excellent value for commercial operations.'
  },

  // High Energy Density Batteries
  {
    name: 'Battivus HED-6500 Ultra',
    slug: 'Battivus-hed-6500-ultra',
    sku: 'BV-HED-6500-ULT',
    short_description: 'Ultra-high energy density battery achieving 260Wh/kg. Maximize flight time without adding weight.',
    full_description: '## Battivus HED-6500 Ultra\n\nPush the boundaries of flight endurance with our highest energy density battery.\n\n### Technology\n- 260Wh/kg energy density\n- Advanced NMC chemistry\n- Optimized cell architecture\n- Precision BMS',
    voltage: 22,
    capacity: 6500,
    c_rate: 20,
    weight: 545,
    dimensions: '140x45x42mm',
    connector_type: 'XT60',
    cell_type: 'Li-ion',
    featured: true,
    category_slug: 'high-energy-density-battery',
    seo_title: 'Battivus HED-6500 Ultra High Energy Density Battery',
    seo_description: '260Wh/kg energy density drone battery. Maximum flight time in a lightweight package.'
  },

  // High Discharge Rate Batteries
  {
    name: 'Battivus HDR-1800 Racing',
    slug: 'Battivus-hdr-1800-racing',
    sku: 'BV-HDR-1800-RAC',
    short_description: 'Purpose-built racing battery with 100C burst discharge. Lightning-fast throttle response for FPV racing.',
    full_description: '## Battivus HDR-1800 Racing\n\nDominate the race track with explosive power delivery.\n\n### Racing Specs\n- 100C burst / 75C continuous\n- Ultra-low internal resistance\n- Rigid case for crash protection\n- Competition-proven performance',
    voltage: 14,
    capacity: 1800,
    c_rate: 100,
    weight: 215,
    dimensions: '75x35x38mm',
    connector_type: 'XT60',
    cell_type: 'LiPo',
    featured: true,
    category_slug: 'high-discharge-rate-battery',
    seo_title: 'Battivus HDR-1800 Racing FPV Drone Battery',
    seo_description: '1800mAh 100C racing LiPo for FPV drones. Maximum power, instant throttle response.'
  },
  {
    name: 'Battivus HDR-2200 Freestyle',
    slug: 'Battivus-hdr-2200-freestyle',
    sku: 'BV-HDR-2200-FRS',
    short_description: 'Freestyle battery with 80C discharge for acrobatic flying. Perfect balance of power and flight time.',
    full_description: '## Battivus HDR-2200 Freestyle\n\nFor pilots who push the limits of what\'s possible in the air.',
    voltage: 22,
    capacity: 2200,
    c_rate: 80,
    weight: 310,
    dimensions: '90x40x45mm',
    connector_type: 'XT60',
    cell_type: 'LiPo',
    featured: false,
    category_slug: 'high-discharge-rate-battery',
    seo_title: 'Battivus HDR-2200 Freestyle Drone Battery',
    seo_description: '2200mAh 80C freestyle LiPo, 22.2V 6S. Power and endurance for acrobatic flying.'
  },

  // High Voltage Batteries
  {
    name: 'Battivus HV-5000 Cinematography',
    slug: 'Battivus-hv-5000-cinematography',
    sku: 'BV-HV-5000-CIN',
    short_description: 'High voltage LiHV battery (4.35V/cell) for cinema drones. More power efficiency for heavy camera payloads.',
    full_description: '## Battivus HV-5000 Cinematography\n\nProfessional-grade HV battery for cinema and broadcast applications.\n\n### HV Advantages\n- 4.35V per cell (vs 4.2V standard)\n- 8-10% more power\n- Better efficiency under load\n- DJI Inspire compatible',
    voltage: 26,
    capacity: 5000,
    c_rate: 25,
    weight: 595,
    dimensions: '150x50x48mm',
    connector_type: 'XT90',
    cell_type: 'LiPo',
    featured: true,
    category_slug: 'high-voltage-battery',
    seo_title: 'Battivus HV-5000 Cinematography Drone Battery',
    seo_description: 'High voltage LiHV drone battery for cinematography. 26.1V 6S HV, 5000mAh, professional performance.'
  },

  // Low Temperature Batteries
  {
    name: 'Battivus LT-4500 Arctic',
    slug: 'Battivus-lt-4500-arctic',
    sku: 'BV-LT-4500-ARC',
    short_description: 'Cold-weather optimized battery operating down to -40°C. Maintains 80% capacity at -20°C.',
    full_description: '## Battivus LT-4500 Arctic\n\nNever let cold weather ground your operations.\n\n### Cold Weather Performance\n- Operating range: -40°C to +45°C\n- 80% capacity retention at -20°C\n- Pre-heat function available\n- Winter-rated cells',
    voltage: 22,
    capacity: 4500,
    c_rate: 25,
    weight: 580,
    dimensions: '145x48x45mm',
    connector_type: 'XT60',
    cell_type: 'LiPo',
    featured: true,
    category_slug: 'low-temperature-battery',
    seo_title: 'Battivus LT-4500 Arctic Cold Weather Drone Battery',
    seo_description: 'Low temperature drone battery for -40°C operations. Reliable performance in arctic conditions.'
  },
  {
    name: 'Battivus LT-6000 Polar',
    slug: 'Battivus-lt-6000-polar',
    sku: 'BV-LT-6000-POL',
    short_description: 'Extended capacity cold-weather battery with integrated heating. For extreme polar expeditions.',
    full_description: '## Battivus LT-6000 Polar\n\nEngineered for the most extreme cold environments on Earth.',
    voltage: 22,
    capacity: 6000,
    c_rate: 20,
    weight: 720,
    dimensions: '155x52x50mm',
    connector_type: 'XT90',
    cell_type: 'LiPo',
    featured: false,
    category_slug: 'low-temperature-battery',
    seo_title: 'Battivus LT-6000 Polar Extreme Cold Battery',
    seo_description: '6000mAh extreme cold weather battery with heating. For polar and arctic drone missions.'
  },

  // High Temperature Batteries
  {
    name: 'Battivus HT-5000 Desert',
    slug: 'Battivus-ht-5000-desert',
    sku: 'BV-HT-5000-DST',
    short_description: 'Heat-resistant battery rated for +60°C operations. Enhanced thermal management for desert climates.',
    full_description: '## Battivus HT-5000 Desert\n\nKeep flying when temperatures soar.\n\n### Thermal Technology\n- Operating range: -10°C to +60°C\n- Advanced thermal interface materials\n- Heat-dissipating case design\n- Thermal cutoff protection',
    voltage: 22,
    capacity: 5000,
    c_rate: 30,
    weight: 610,
    dimensions: '150x50x48mm',
    connector_type: 'XT60',
    cell_type: 'LiPo',
    featured: true,
    category_slug: 'high-temperature-battery',
    seo_title: 'Battivus HT-5000 Desert Heat Resistant Drone Battery',
    seo_description: 'High temperature drone battery for +60°C desert operations. Reliable performance in extreme heat.'
  },
  {
    name: 'Battivus HT-4000 Tropical',
    slug: 'Battivus-ht-4000-tropical',
    sku: 'BV-HT-4000-TRP',
    short_description: 'Humidity and heat resistant battery for tropical climates. Sealed design prevents moisture ingress.',
    full_description: '## Battivus HT-4000 Tropical\n\nBuilt for hot and humid environments.',
    voltage: 14,
    capacity: 4000,
    c_rate: 35,
    weight: 380,
    dimensions: '125x45x40mm',
    connector_type: 'XT60',
    cell_type: 'LiPo',
    featured: false,
    category_slug: 'high-temperature-battery',
    seo_title: 'Battivus HT-4000 Tropical Climate Drone Battery',
    seo_description: '4000mAh tropical climate drone battery. Humidity resistant for rainforest and coastal operations.'
  }
];

async function createCategory(category) {
  try {
    const response = await fetch(`${API_URL}/categories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: category })
    });
    const result = await response.json();
    if (result.error) {
      console.error(`Failed to create category ${category.name}:`, result.error.message);
      return null;
    }
    console.log(`✓ Created category: ${category.name} (ID: ${result.data.id})`);
    return result.data;
  } catch (error) {
    console.error(`Error creating category ${category.name}:`, error.message);
    return null;
  }
}

async function createProduct(product, categoryId) {
  const { category_slug, ...productData } = product;
  productData.category = categoryId;
  
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: productData })
    });
    const result = await response.json();
    if (result.error) {
      console.error(`Failed to create product ${product.name}:`, result.error.message);
      return null;
    }
    console.log(`  ✓ Created product: ${product.name}`);
    return result.data;
  } catch (error) {
    console.error(`Error creating product ${product.name}:`, error.message);
    return null;
  }
}

async function seed() {
  console.log('\n🔋 Battivus Database Seeding\n');
  console.log('='.repeat(50));
  
  // Create categories and store their IDs
  console.log('\n📁 Creating Categories...\n');
  const categoryMap = {};
  
  for (const category of categories) {
    const created = await createCategory(category);
    if (created) {
      categoryMap[category.slug] = created.id;
    }
  }
  
  // Create products with category references
  console.log('\n📦 Creating Products...\n');
  
  for (const product of products) {
    const categoryId = categoryMap[product.category_slug];
    if (categoryId) {
      await createProduct(product, categoryId);
    } else {
      console.error(`  ✗ Skipping ${product.name} - category not found`);
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('✅ Seeding complete!\n');
  console.log(`Categories created: ${Object.keys(categoryMap).length}`);
  console.log(`Products created: ${products.length}`);
}

seed().catch(console.error);
