import type { CompanyInfo, Certification, Category } from '@/types';

export const siteConfig = {
  name: 'Battivus',
  tagline: 'Professional Drone Battery Manufacturer',
  description: 'Leading drone battery manufacturer specializing in custom UAV power solutions. High-performance LiPo batteries for FPV, agricultural, VTOL, and industrial drones.',
  url: 'https://www.Battivus.com',
  ogImage: '/images/og-default.jpg',

  // Contact Information
  contact: {
    email: 'devinhe@battivus.com',
    phone: '(+86)15920969710',
    whatsapp: ['8615920969710', '8618719491606'],
    whatsappDisplay: ['(+86)15920969710', '(+86)18719491606'],
    address: '5th Floor, Building 22, LianDong U Valley, Tonghu Industrial Park, Zhongkai High-Tech Zone, Huizhou, Guangdong, China',
  },

  // Social Links
  social: {
    linkedin: 'https://www.linkedin.com/company/Battivus',
    youtube: 'https://www.youtube.com/@Battivus',
    twitter: '',
  },

  // Navigation
  navigation: {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Products', href: '/products' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Technology', href: '/technology' },
      { name: 'Customization', href: '/customization' },
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    products: [
      { name: 'FPV Batteries', href: '/products?category=fpv' },
      { name: 'Agricultural Drone', href: '/products?category=agricultural' },
      { name: 'VTOL Batteries', href: '/products?category=vtol' },
      { name: 'Industrial', href: '/products?category=industrial' },
    ],
    solutions: [
      { name: 'Aerial Mapping', href: '/solutions#aerial-mapping' },
      { name: 'Agricultural Spraying', href: '/solutions#agricultural-spraying' },
      { name: 'Inspection & Patrol', href: '/solutions#inspection-patrol' },
      { name: 'Heavy Lift', href: '/solutions#heavy-lift' },
    ],
  },

  // SEO Defaults
  seo: {
    titleTemplate: '%s | Battivus - Drone Battery Manufacturer',
    defaultTitle: 'Battivus - Professional Drone Battery Manufacturer | Custom UAV Power Solutions',
    defaultDescription: 'Leading drone battery manufacturer specializing in custom UAV power solutions. High-performance LiPo, Li-ion batteries for FPV, agricultural, VTOL, and industrial drones. OEM & ODM services available.',
    keywords: [
      'drone battery',
      'UAV battery',
      'drone battery manufacturer',
      'LiPo battery',
      'FPV battery',
      'agricultural drone battery',
      'custom drone battery',
      'OEM battery',
      'high discharge battery',
      'VTOL battery',
    ],
  },
};

export const companyInfo: CompanyInfo = {
  name: 'Battivus',
  tagline: 'Powering the Future of Flight',
  description: 'Battivus is a leading drone battery manufacturer based in Huizhou, Guangdong, China. We specialize in designing and manufacturing high-performance lithium batteries for UAV applications, including FPV racing drones, agricultural spraying drones, VTOL aircraft, and industrial inspection drones.',
  email: 'devinhe@battivus.com',
  whatsapp: ['(+86)15920969710', '(+86)18719491606'],
  address: '5th Floor, Building 22, LianDong U Valley, Tonghu Industrial Park, Zhongkai High-Tech Zone, Huizhou, Guangdong, China',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/Battivus',
    youtube: 'https://www.youtube.com/@Battivus',
  },
};

export const certifications: Certification[] = [
  {
    id: 'ce',
    name: 'CE Certification',
    image: '/images/certifications/ce.svg',
    description: 'European Conformity',
  },
  {
    id: 'un38-3',
    name: 'UN38.3',
    image: '/images/certifications/un38-3.svg',
    description: 'UN Transportation Testing',
  },
  {
    id: 'rohs',
    name: 'RoHS',
    image: '/images/certifications/rohs.svg',
    description: 'Restriction of Hazardous Substances',
  },
  {
    id: 'msds',
    name: 'MSDS',
    image: '/images/certifications/msds.svg',
    description: 'Material Safety Data Sheet',
  },
  {
    id: 'iso9001',
    name: 'ISO 9001',
    image: '/images/certifications/iso9001.svg',
    description: 'Quality Management System',
  },
];

export const productCategories: Category[] = [
  {
    id: 'fpv',
    name: 'FPV Batteries',
    slug: 'fpv',
    description: 'High discharge rate batteries designed for FPV racing and freestyle drones. Lightweight with exceptional power delivery.',
    image: '/images/categories/fpv.jpg',
  },
  {
    id: 'agricultural',
    name: 'Agricultural Drone Batteries',
    slug: 'agricultural',
    description: 'High capacity batteries for agricultural spraying drones. Extended flight time and reliable performance in demanding conditions.',
    image: '/images/categories/agricultural.jpg',
  },
  {
    id: 'vtol',
    name: 'VTOL Batteries',
    slug: 'vtol',
    description: 'Specialized batteries for Vertical Take-Off and Landing aircraft. Optimized for long-range missions and hybrid flight profiles.',
    image: '/images/categories/vtol.jpg',
  },
  {
    id: 'industrial',
    name: 'Industrial Inspection',
    slug: 'industrial',
    description: 'Reliable batteries for industrial inspection and surveillance drones. Built for consistent performance in professional applications.',
    image: '/images/categories/industrial.jpg',
  },
];

// Filter options for parametric search
export const filterOptions = {
  voltage: [
    { value: 3, label: '3S (11.1V)' },
    { value: 4, label: '4S (14.8V)' },
    { value: 6, label: '6S (22.2V)' },
    { value: 8, label: '8S (29.6V)' },
    { value: 12, label: '12S (44.4V)' },
    { value: 14, label: '14S (51.8V)' },
  ],
  cRate: [
    { value: 15, label: '15C' },
    { value: 25, label: '25C' },
    { value: 35, label: '35C' },
    { value: 45, label: '45C' },
    { value: 50, label: '50C+' },
  ],
  cellType: [
    { value: 'LiPo', label: 'LiPo' },
    { value: 'Li-ion', label: 'Li-ion' },
    { value: 'LiFePO4', label: 'LiFePO4' },
  ],
  capacity: {
    min: 1000,
    max: 50000,
    step: 1000,
  },
};
