/**
 * Strapi API Client
 * Handles all communication with Strapi CMS
 * In development: connects to mock API (localhost:1337)
 * In production: connects to Strapi Cloud
 */

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || process.env.API_TOKEN || '';

export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is already a full URL
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }

  // Otherwise prepend the Strapi URL
  return `${STRAPI_URL}${url}`;
}

interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiSingleResponse<T> {
  data: T;
}

interface FetchOptions {
  populate?: string | string[];
  filters?: Record<string, unknown>;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
}

async function fetchAPI<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<StrapiResponse<T>> {
  const { populate, filters, sort, pagination } = options;

  const params = new URLSearchParams();

  // Handle populate
  if (populate) {
    if (Array.isArray(populate)) {
      populate.forEach((p) => params.append('populate', p));
    } else {
      params.append('populate', populate);
    }
  }

  // Handle filters - supports nested relation filters like { category: { slug: { $eq: 'value' } } }
  if (filters) {
    const buildFilterParams = (obj: Record<string, unknown>, prefix: string) => {
      Object.entries(obj).forEach(([key, value]) => {
        const paramKey = prefix ? `${prefix}[${key}]` : `filters[${key}]`;
        if (typeof value === 'object' && value !== null) {
          buildFilterParams(value as Record<string, unknown>, paramKey);
        } else {
          params.append(paramKey, String(value));
        }
      });
    };
    buildFilterParams(filters, '');
  }

  // Handle sort
  if (sort) {
    if (Array.isArray(sort)) {
      params.append('sort', sort.join(','));
    } else {
      params.append('sort', sort);
    }
  }

  // Handle pagination
  if (pagination) {
    if (pagination.page) params.append('pagination[page]', String(pagination.page));
    if (pagination.pageSize) params.append('pagination[pageSize]', String(pagination.pageSize));
  }

  const queryString = params.toString();
  const url = `${STRAPI_URL}${endpoint}${queryString ? `?${queryString}` : ''}`;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
  }

  const response = await fetch(url, {
    headers,
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function fetchSingleAPI<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T | null> {
  try {
    const { populate } = options;
    const params = new URLSearchParams();

    if (populate) {
      if (Array.isArray(populate)) {
        populate.forEach((p) => params.append('populate', p));
      } else {
        params.append('populate', populate);
      }
    }

    const queryString = params.toString();
    const url = `${STRAPI_URL}${endpoint}${queryString ? `?${queryString}` : ''}`;

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (STRAPI_TOKEN) {
      headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
    }

    const response = await fetch(url, {
      headers,
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Strapi API error: ${response.status}`);
    }

    const json: StrapiSingleResponse<T> = await response.json();
    return json.data;
  } catch (error) {
    console.error('Strapi fetch error:', error);
    return null;
  }
}

// ============================================
// API Functions
// ============================================

// Categories
export async function getCategories() {
  const response = await fetchAPI<Category>('/api/categories', {
    populate: '*',
  });
  return response.data;
}

export async function getCategoryBySlug(slug: string) {
  return fetchSingleAPI<Category>(`/api/categories/${slug}`, {
    populate: '*',
  });
}

// Products
export async function getProducts(options: {
  category?: string;
  voltage?: number[];
  capacityMin?: number;
  capacityMax?: number;
  cRate?: number[];
  cellType?: string[];
  featured?: boolean;
  page?: number;
  pageSize?: number;
} = {}) {
  const filters: Record<string, unknown> = {};

  if (options.category) {
    filters['category'] = { slug: { $eq: options.category } };
  }
  if (options.voltage?.length) {
    filters['voltage'] = { $in: options.voltage.join(',') };
  }
  if (options.featured !== undefined) {
    filters['featured'] = { $eq: options.featured };
  }

  const response = await fetchAPI<Product>('/api/products', {
    filters,
    populate: '*',
    sort: 'createdAt:desc',
    pagination: {
      page: options.page || 1,
      pageSize: options.pageSize || 25,
    },
  });

  return response;
}

export async function getProductBySlug(slug: string) {
  return fetchSingleAPI<Product>(`/api/products/${slug}`, {
    populate: '*',
  });
}

export async function getFeaturedProducts(limit = 4) {
  const response = await fetchAPI<Product>('/api/products', {
    filters: { featured: { $eq: true } },
    populate: '*',
    pagination: { pageSize: limit },
  });
  return response.data;
}

// Blog Posts
export async function getBlogPosts(options: {
  page?: number;
  pageSize?: number;
  tag?: string;
} = {}) {
  const filters: Record<string, unknown> = {};

  if (options.tag) {
    filters['tags'] = { slug: { $eq: options.tag } };
  }

  const response = await fetchAPI<BlogPost>('/api/blog-posts', {
    filters,
    populate: '*',
    sort: 'publishedAt:desc',
    pagination: {
      page: options.page || 1,
      pageSize: options.pageSize || 10,
    },
  });

  return response;
}

export async function getBlogPostBySlug(slug: string) {
  return fetchSingleAPI<BlogPost>(`/api/blog-posts/${slug}`, {
    populate: '*',
  });
}

export async function getLatestBlogPosts(limit = 3) {
  const response = await fetchAPI<BlogPost>('/api/blog-posts', {
    populate: '*',
    sort: 'publishedAt:desc',
    pagination: { pageSize: limit },
  });
  return response.data;
}

// Solutions
export async function getSolutions() {
  const response = await fetchAPI<Solution>('/api/solutions', {
    populate: '*',
  });
  return response.data;
}

export async function getSolutionBySlug(slug: string) {
  return fetchSingleAPI<Solution>(`/api/solutions/${slug}`, {
    populate: '*',
  });
}

// Inquiries
export async function submitInquiry(data: InquiryData) {
  const response = await fetch(`${STRAPI_URL}/api/inquiries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
    },
    body: JSON.stringify({ data }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit inquiry');
  }

  return response.json();
}

// Health Check
export async function checkAPIHealth() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/health`);
    return response.ok;
  } catch {
    return false;
  }
}

// ============================================
// Type Definitions (matching Strapi schema)
// ============================================

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  image?: { url: string };
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  sku: string;
  // Strapi returns snake_case, so we support both
  short_description: string;
  shortDescription?: string;
  full_description?: string;
  fullDescription?: string;
  voltage: number;
  capacity: number;
  c_rate: number;
  cRate?: number;
  weight: number;
  dimensions: string;
  connector_type: string;
  connectorType?: string;
  cell_type: 'LiPo' | 'Li-ion' | 'LiFePO4';
  cellType?: 'LiPo' | 'Li-ion' | 'LiFePO4';
  featured: boolean;
  images?: { url: string }[];
  dischargeCurve?: { url: string };
  datasheet?: { url: string };
  msds?: { url: string };
  category?: Category;
  faqs?: { question: string; answer: string }[];
  seo_title?: string;
  seo_description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: { url: string };
  featured_image?: { url: string };
  author: { name: string; avatar?: string };
  tags: { name: string; slug: string }[];
  publishedAt: string;
  seo: { metaTitle: string; metaDescription: string };
  createdAt: string;
  updatedAt: string;
}

export interface Solution {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  industry: string;
  heroImage?: { url: string };
  painPoints: string;
  ourSolution: string;
  featuredProducts: number[];
  caseStudy?: string;
  seo: { metaTitle: string; metaDescription: string };
  createdAt: string;
  updatedAt: string;
}

export interface InquiryData {
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
