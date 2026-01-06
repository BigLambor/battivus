// Product Types
export interface ProductSpecifications {
  voltage: number; // S count (e.g., 6 for 6S)
  capacity: number; // mAh
  cRate: number;
  weight: number; // grams
  dimensions: string; // L×W×H mm
  connectorType: string;
  cellType: 'LiPo' | 'Li-ion' | 'LiFePO4';
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SEOFields {
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  category: Category;
  shortDescription: string;
  fullDescription: string;
  specifications: ProductSpecifications;
  images: string[];
  dischargeCurve?: string;
  datasheet?: string;
  msds?: string;
  featured: boolean;
  relatedProducts?: string[]; // Product IDs
  applications?: string[]; // Solution IDs
  faqs: FAQ[];
  seo: SEOFields;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  parentCategory?: string;
}

// Blog Types
export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  author: Author;
  tags: Tag[];
  publishedAt: string;
  seo: SEOFields;
}

// Solution Types
export interface Solution {
  id: string;
  title: string;
  slug: string;
  industry: string;
  heroImage?: string;
  painPoints: string;
  ourSolution: string;
  featuredProducts: string[]; // Product IDs
  caseStudy?: string;
  seo: SEOFields;
}

// Page Types
export interface PageSection {
  type: 'hero' | 'text' | 'gallery' | 'cta' | 'features' | 'testimonials';
  content: Record<string, unknown>;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  sections: PageSection[];
  seo: SEOFields;
}

// Inquiry Form Types
export interface InquiryFormData {
  name: string;
  email: string;
  company?: string;
  country?: string;
  quantity?: string;
  message: string;
  productName?: string;
  productSku?: string;
  productUrl?: string;
  source: string;
}

// Filter Types for Parametric Search
export interface ProductFilters {
  voltage?: number[];
  capacityMin?: number;
  capacityMax?: number;
  cRate?: number[];
  application?: string[];
  cellType?: ('LiPo' | 'Li-ion' | 'LiFePO4')[];
  category?: string;
}

// Company Info
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone?: string;
  whatsapp?: string | string[];
  address?: string;
  socialLinks: {
    linkedin?: string;
    youtube?: string;
    twitter?: string;
  };
}

// Certification
export interface Certification {
  id: string;
  name: string;
  image: string;
  description?: string;
}
