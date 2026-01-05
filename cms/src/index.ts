// Seed data for categories - Matching frontend navigation
const seedCategories = [
  {
    name: 'FPV Batteries',
    slug: 'fpv',
    description: 'High discharge rate batteries designed for FPV racing and freestyle drones. Lightweight with exceptional power delivery.',
    seo_title: 'FPV Racing Drone Batteries | Battivus',
    seo_description: 'High-performance FPV drone batteries with extreme discharge rates for racing and freestyle flying.'
  },
  {
    name: 'Agricultural Drone Batteries',
    slug: 'agricultural',
    description: 'High capacity batteries for agricultural spray drones. Extended flight time and reliable performance in demanding conditions.',
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

// Seed data for products - Matching frontend categories
const seedProducts = [
  // FPV Batteries
  {
    name: '1300mAh 6S FPV Racing Battery',
    slug: '1300mah-6s-fpv-racing',
    sku: 'BV-FPV-1300-6S',
    short_description: 'High discharge rate battery for FPV racing drones. 100C burst for explosive power.',
    voltage: 6, capacity: 1300, c_rate: 75, weight: 195,
    dimensions: '72×35×42mm', connector_type: 'XT60', cell_type: 'LiPo', featured: true,
    category_slug: 'fpv'
  },
  {
    name: '650mAh 4S FPV Micro Battery',
    slug: '650mah-4s-fpv-micro',
    sku: 'BV-FPV-650-4S',
    short_description: 'Lightweight battery for micro FPV quads and whoops. Perfect for indoor racing.',
    voltage: 4, capacity: 650, c_rate: 50, weight: 75,
    dimensions: '55×30×22mm', connector_type: 'XT30', cell_type: 'LiPo', featured: false,
    category_slug: 'fpv'
  },
  {
    name: '1550mAh 6S Freestyle Battery',
    slug: '1550mah-6s-freestyle',
    sku: 'BV-FPV-1550-6S',
    short_description: 'Perfect balance of power and flight time for freestyle flying.',
    voltage: 6, capacity: 1550, c_rate: 60, weight: 220,
    dimensions: '78×38×45mm', connector_type: 'XT60', cell_type: 'LiPo', featured: true,
    category_slug: 'fpv'
  },
  // Agricultural Drone Batteries
  {
    name: '22000mAh 12S Agricultural Battery',
    slug: '22000mah-12s-agricultural',
    sku: 'BV-AG-22000-12S',
    short_description: 'High capacity battery for agricultural spray drones. Extended flight time for large field coverage.',
    voltage: 12, capacity: 22000, c_rate: 25, weight: 4850,
    dimensions: '205×90×68mm', connector_type: 'AS150U', cell_type: 'LiPo', featured: true,
    category_slug: 'agricultural'
  },
  {
    name: '30000mAh 12S Heavy Lift Agricultural',
    slug: '30000mah-12s-heavy-lift',
    sku: 'BV-AG-30000-12S',
    short_description: 'Ultra-high capacity for heavy lift agricultural applications. Maximum payload support.',
    voltage: 12, capacity: 30000, c_rate: 25, weight: 6500,
    dimensions: '245×100×85mm', connector_type: 'AS150U', cell_type: 'LiPo', featured: true,
    category_slug: 'agricultural'
  },
  {
    name: '16000mAh 14S Agricultural Pro',
    slug: '16000mah-14s-agricultural-pro',
    sku: 'BV-AG-16000-14S',
    short_description: 'Professional agricultural battery with 14S configuration for higher voltage platforms.',
    voltage: 14, capacity: 16000, c_rate: 25, weight: 4200,
    dimensions: '195×85×72mm', connector_type: 'AS150U', cell_type: 'LiPo', featured: false,
    category_slug: 'agricultural'
  },
  // VTOL Batteries
  {
    name: '16000mAh 14S VTOL Battery Pack',
    slug: '16000mah-14s-vtol',
    sku: 'BV-VTOL-16000-14S',
    short_description: 'High energy density battery for VTOL fixed-wing drones. Optimized for long-range missions.',
    voltage: 14, capacity: 16000, c_rate: 15, weight: 4200,
    dimensions: '220×85×75mm', connector_type: 'AS150U', cell_type: 'Li-ion', featured: true,
    category_slug: 'vtol'
  },
  {
    name: '12000mAh 12S VTOL Endurance',
    slug: '12000mah-12s-vtol-endurance',
    sku: 'BV-VTOL-12000-12S',
    short_description: 'Long endurance VTOL battery with excellent energy density for extended mapping missions.',
    voltage: 12, capacity: 12000, c_rate: 15, weight: 3200,
    dimensions: '185×78×65mm', connector_type: 'AS150U', cell_type: 'Li-ion', featured: true,
    category_slug: 'vtol'
  },
  {
    name: '22000mAh 14S VTOL Long Range',
    slug: '22000mah-14s-vtol-long-range',
    sku: 'BV-VTOL-22000-14S',
    short_description: 'Maximum capacity VTOL battery for ultra long-range missions and heavy payloads.',
    voltage: 14, capacity: 22000, c_rate: 12, weight: 5800,
    dimensions: '250×95×82mm', connector_type: 'AS150U', cell_type: 'Li-ion', featured: false,
    category_slug: 'vtol'
  },
  // Industrial Inspection Batteries
  {
    name: '10000mAh 6S Industrial Battery',
    slug: '10000mah-6s-industrial',
    sku: 'BV-IND-10000-6S',
    short_description: 'Reliable battery for industrial inspection and surveillance drones. Wide temperature range.',
    voltage: 6, capacity: 10000, c_rate: 25, weight: 1450,
    dimensions: '145×50×52mm', connector_type: 'XT90', cell_type: 'LiPo', featured: true,
    category_slug: 'industrial'
  },
  {
    name: '8000mAh 6S Patrol Battery',
    slug: '8000mah-6s-patrol',
    sku: 'BV-IND-8000-6S',
    short_description: 'Compact industrial battery for patrol and security drones. Quick deployment ready.',
    voltage: 6, capacity: 8000, c_rate: 30, weight: 1150,
    dimensions: '130×48×48mm', connector_type: 'XT90', cell_type: 'LiPo', featured: false,
    category_slug: 'industrial'
  },
  {
    name: '12000mAh 6S Enterprise Inspection',
    slug: '12000mah-6s-enterprise',
    sku: 'BV-IND-12000-6S',
    short_description: 'Enterprise-grade inspection battery with extended flight time for comprehensive surveys.',
    voltage: 6, capacity: 12000, c_rate: 20, weight: 1680,
    dimensions: '160×55×55mm', connector_type: 'XT90', cell_type: 'LiPo', featured: true,
    category_slug: 'industrial'
  }
];

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register(/* { strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   * Sets up public API permissions automatically.
   */
  async bootstrap({ strapi }: { strapi: any }) {
    // Get the public role
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!publicRole) {
      strapi.log.warn('Public role not found, skipping permission setup');
      return;
    }

    // Define permissions to enable for public access
    const apiPermissions = [
      // Categories
      { action: 'api::category.category.find' },
      { action: 'api::category.category.findOne' },
      // Products
      { action: 'api::product.product.find' },
      { action: 'api::product.product.findOne' },
      // Blog Posts
      { action: 'api::blog-post.blog-post.find' },
      { action: 'api::blog-post.blog-post.findOne' },
      // Solutions
      { action: 'api::solution.solution.find' },
      { action: 'api::solution.solution.findOne' },
      // Inquiries - allow create for public form submission
      { action: 'api::inquiry.inquiry.create' },
    ];

    // Enable each permission
    for (const perm of apiPermissions) {
      const existingPerm = await strapi
        .query('plugin::users-permissions.permission')
        .findOne({
          where: {
            action: perm.action,
            role: publicRole.id,
          },
        });

      if (!existingPerm) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: perm.action,
            role: publicRole.id,
          },
        });
        strapi.log.info(`Created permission: ${perm.action}`);
      }
    }

    strapi.log.info('Public API permissions configured successfully');

    // Seed data if database is empty
    await seedDatabase(strapi);
  },
};

async function seedDatabase(strapi: any) {
  // Check if we need to reseed - check if products have category relations
  const existingProducts = await strapi.entityService.findMany('api::product.product', { 
    limit: 1, 
    populate: ['category'] 
  });
  
  // Force reseed if products exist but have no category
  const hasOrphanProducts = existingProducts.length > 0 && !existingProducts[0]?.category;
  
  const existingCategories = await strapi.entityService.findMany('api::category.category', { limit: 10 });
  const expectedSlugs = seedCategories.map(c => c.slug);
  const existingSlugs = (existingCategories || []).map((c: any) => c.slug);
  
  // Check if categories match expected
  const needsReseed = hasOrphanProducts || existingCategories.length === 0 || 
    !expectedSlugs.every(slug => existingSlugs.includes(slug));
  
  if (!needsReseed) {
    strapi.log.info('Database already has correct categories and relations, skipping seed...');
    return;
  }

  strapi.log.info('Reseeding database with updated categories...');
  
  // Delete existing products first (due to relations)
  try {
    const existingProducts = await strapi.entityService.findMany('api::product.product', { limit: 100 });
    for (const prod of existingProducts || []) {
      await strapi.entityService.delete('api::product.product', prod.id);
      strapi.log.info(`Deleted product: ${prod.name}`);
    }
  } catch (e) {
    strapi.log.warn('No products to delete');
  }
  
  // Delete existing categories
  try {
    const oldCategories = await strapi.entityService.findMany('api::category.category', { limit: 100 });
    for (const cat of oldCategories || []) {
      await strapi.entityService.delete('api::category.category', cat.id);
      strapi.log.info(`Deleted category: ${cat.name}`);
    }
  } catch (e) {
    strapi.log.warn('No categories to delete');
  }

  // Create categories
  const categoryMap: Record<string, { id: number; documentId: string }> = {};
  for (const cat of seedCategories) {
    try {
      const created = await strapi.entityService.create('api::category.category', {
        data: { ...cat, publishedAt: new Date() }
      });
      categoryMap[cat.slug] = { id: created.id, documentId: created.documentId };
      strapi.log.info(`Created category: ${cat.name} (id: ${created.id}, docId: ${created.documentId})`);
    } catch (error: any) {
      strapi.log.error(`Failed to create category ${cat.name}: ${error.message}`);
    }
  }

  // Create products with proper relation syntax for Strapi v5
  for (const prod of seedProducts) {
    const { category_slug, ...productData } = prod;
    const categoryRef = categoryMap[category_slug];
    
    if (!categoryRef) {
      strapi.log.warn(`Skipping product ${prod.name} - category not found`);
      continue;
    }

    try {
      // In Strapi v5, relations use documentId
      const createdProduct = await strapi.entityService.create('api::product.product', {
        data: { 
          ...productData, 
          publishedAt: new Date() 
        }
      });
      
      // Update the product with the category relation using documents API
      await strapi.documents('api::product.product').update({
        documentId: createdProduct.documentId,
        data: {
          category: categoryRef.documentId
        }
      });
      
      strapi.log.info(`Created product: ${prod.name} with category: ${category_slug}`);
    } catch (error: any) {
      strapi.log.error(`Failed to create product ${prod.name}: ${error.message}`);
    }
  }

  strapi.log.info('Database seeding complete!');
}
