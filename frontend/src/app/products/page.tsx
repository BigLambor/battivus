'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { filterOptions, productCategories } from '@/lib/config';
import { getStrapiMedia } from '@/lib/strapi';
import type { ProductFilters } from '@/types';

// Product type matching Strapi API response
interface StrapiProduct {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  sku: string;
  short_description: string;
  voltage: number;
  capacity: number;
  c_rate: number;
  weight: number;
  dimensions: string;
  connector_type: string;
  cell_type: 'LiPo' | 'Li-ion' | 'LiFePO4';
  featured: boolean;
  images?: { url: string }[];
  category?: {
    id: number;
    name: string;
    slug: string;
  };
}

interface StrapiCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

interface ProductFilterSidebarProps {
  filters: ProductFilters;
  onFilterChange: (filters: ProductFilters) => void;
  categories: { id: string; name: string; slug: string }[];
}

function ProductFilterSidebar({ filters, onFilterChange, categories }: ProductFilterSidebarProps) {
  const handleVoltageChange = (value: number) => {
    const currentVoltages = filters.voltage || [];
    const newVoltages = currentVoltages.includes(value)
      ? currentVoltages.filter((v) => v !== value)
      : [...currentVoltages, value];
    onFilterChange({ ...filters, voltage: newVoltages.length ? newVoltages : undefined });
  };

  const handleCRateChange = (value: number) => {
    const currentCRates = filters.cRate || [];
    const newCRates = currentCRates.includes(value)
      ? currentCRates.filter((c) => c !== value)
      : [...currentCRates, value];
    onFilterChange({ ...filters, cRate: newCRates.length ? newCRates : undefined });
  };

  const handleCellTypeChange = (value: 'LiPo' | 'Li-ion' | 'LiFePO4') => {
    const currentTypes = filters.cellType || [];
    const newTypes = currentTypes.includes(value)
      ? currentTypes.filter((t) => t !== value)
      : [...currentTypes, value];
    onFilterChange({ ...filters, cellType: newTypes.length ? newTypes : undefined });
  };

  const handleCapacityChange = (min: number, max: number) => {
    onFilterChange({ ...filters, capacityMin: min, capacityMax: max });
  };

  const clearFilters = () => {
    onFilterChange({});
  };

  const hasActiveFilters = Object.keys(filters).some(
    (key) => filters[key as keyof ProductFilters] !== undefined
  );

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Battery Finder</h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Voltage Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Voltage (S)</h4>
        <div className="space-y-2">
          {filterOptions.voltage.map((option) => (
            <label key={option.value} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.voltage?.includes(option.value) || false}
                onChange={() => handleVoltageChange(option.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Capacity Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Capacity (mAh)</h4>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.capacityMin || ''}
            onChange={(e) =>
              handleCapacityChange(
                parseInt(e.target.value) || 0,
                filters.capacityMax || filterOptions.capacity.max
              )
            }
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.capacityMax || ''}
            onChange={(e) =>
              handleCapacityChange(
                filters.capacityMin || filterOptions.capacity.min,
                parseInt(e.target.value) || filterOptions.capacity.max
              )
            }
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* C-Rate Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Discharge Rate (C)</h4>
        <div className="space-y-2">
          {filterOptions.cRate.map((option) => (
            <label key={option.value} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.cRate?.includes(option.value) || false}
                onChange={() => handleCRateChange(option.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Cell Type Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Cell Type</h4>
        <div className="space-y-2">
          {filterOptions.cellType.map((option) => (
            <label key={option.value} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.cellType?.includes(option.value as 'LiPo' | 'Li-ion' | 'LiFePO4') || false}
                onChange={() => handleCellTypeChange(option.value as 'LiPo' | 'Li-ion' | 'LiFePO4')}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={filters.category === category.slug}
                onChange={() => onFilterChange({ ...filters, category: category.slug })}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{category.name}</span>
            </label>
          ))}
          {filters.category && (
            <button
              onClick={() => onFilterChange({ ...filters, category: undefined })}
              className="text-sm text-blue-600 hover:text-blue-700 mt-2"
            >
              Clear category
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

interface ProductCardProps {
  product: StrapiProduct;
}

function ProductCard({ product }: ProductCardProps) {
  const categorySlug = product.category?.slug || 'uncategorized';

  return (
    <Link
      href={`/products/${categorySlug}/${product.slug}`}
      className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="aspect-video bg-white flex items-center justify-center relative border-b border-gray-100">
        {(() => {
          const imageUrl = product.images?.[0]?.url ? getStrapiMedia(product.images[0].url) : null;
          return imageUrl ? (
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-contain p-4"
            />
          ) : (
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          );
        })()}
        {product.featured && (
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="text-xs text-blue-600 font-medium mb-1">{product.category?.name || 'Uncategorized'}</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.short_description}</p>

        {/* Quick Specs */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            {product.voltage}S
          </span>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            {product.capacity}mAh
          </span>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            {product.c_rate}C
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">SKU: {product.sku}</span>
          <span className="text-blue-600 font-medium text-sm group-hover:underline">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for products and categories from Strapi
  const [products, setProducts] = useState<StrapiProduct[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string; slug: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Parse filters from URL
  const initialFilters: ProductFilters = {
    voltage: searchParams.get('voltage')?.split(',').map(Number) || undefined,
    capacityMin: searchParams.get('capacityMin') ? parseInt(searchParams.get('capacityMin')!) : undefined,
    capacityMax: searchParams.get('capacityMax') ? parseInt(searchParams.get('capacityMax')!) : undefined,
    cRate: searchParams.get('cRate')?.split(',').map(Number) || undefined,
    cellType: searchParams.get('cellType')?.split(',') as ('LiPo' | 'Li-ion' | 'LiFePO4')[] | undefined,
    category: searchParams.get('category') || undefined,
  };

  const [filters, setFilters] = useState<ProductFilters>(initialFilters);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync filters with URL search params when they change (e.g., navigating from dropdown)
  useEffect(() => {
    const newFilters: ProductFilters = {
      voltage: searchParams.get('voltage')?.split(',').map(Number) || undefined,
      capacityMin: searchParams.get('capacityMin') ? parseInt(searchParams.get('capacityMin')!) : undefined,
      capacityMax: searchParams.get('capacityMax') ? parseInt(searchParams.get('capacityMax')!) : undefined,
      cRate: searchParams.get('cRate')?.split(',').map(Number) || undefined,
      cellType: searchParams.get('cellType')?.split(',') as ('LiPo' | 'Li-ion' | 'LiFePO4')[] | undefined,
      category: searchParams.get('category') || undefined,
    };
    setFilters(newFilters);
  }, [searchParams]);

  // Fetch products and categories from Strapi
  useEffect(() => {
    async function fetchData() {
      const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
      setLoading(true);
      setError(null);

      try {
        // 1. Fetch Products
        try {
          const productsRes = await fetch(`${strapiUrl}/api/products?populate=*`);
          if (!productsRes.ok) throw new Error(`Products status: ${productsRes.status}`);
          const productsData = await productsRes.json();
          setProducts(productsData.data || []);
        } catch (prodErr) {
          console.error('Error fetching products:', prodErr);
          throw new Error('Failed to load products'); // Re-throw to trigger main error state
        }

        // 2. Fetch Categories (fail silently/gracefully)
        try {
          const categoriesRes = await fetch(`${strapiUrl}/api/categories`);
          if (!categoriesRes.ok) throw new Error(`Categories status: ${categoriesRes.status}`);
          const categoriesData = await categoriesRes.json();
          setCategories(
            (categoriesData.data || []).map((c: StrapiCategory) => ({
              id: String(c.id),
              name: c.name,
              slug: c.slug,
            }))
          );
        } catch (catErr) {
          console.warn('Error fetching categories, using fallback:', catErr);
          // Fallback to config categories
          setCategories(productCategories.map((c) => ({ id: c.id, name: c.name, slug: c.slug })));
        }

      } catch (err) {
        console.error('Critical error fetching data:', err);
        setError('Failed to load products. Using fallback data.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Update URL when filters change
  const handleFilterChange = (newFilters: ProductFilters) => {
    setFilters(newFilters);

    const params = new URLSearchParams();
    if (newFilters.voltage?.length) params.set('voltage', newFilters.voltage.join(','));
    if (newFilters.capacityMin) params.set('capacityMin', newFilters.capacityMin.toString());
    if (newFilters.capacityMax) params.set('capacityMax', newFilters.capacityMax.toString());
    if (newFilters.cRate?.length) params.set('cRate', newFilters.cRate.join(','));
    if (newFilters.cellType?.length) params.set('cellType', newFilters.cellType.join(','));
    if (newFilters.category) params.set('category', newFilters.category);

    const queryString = params.toString();
    router.push(queryString ? `/products?${queryString}` : '/products', { scroll: false });
  };

  // Filter products based on current filters
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (filters.voltage?.length && !filters.voltage.includes(product.voltage)) {
        return false;
      }
      if (filters.capacityMin && product.capacity < filters.capacityMin) {
        return false;
      }
      if (filters.capacityMax && product.capacity > filters.capacityMax) {
        return false;
      }
      if (filters.cRate?.length && !filters.cRate.some((c) => product.c_rate >= c)) {
        return false;
      }
      if (filters.cellType?.length && !filters.cellType.includes(product.cell_type)) {
        return false;
      }
      if (filters.category && product.category?.slug !== filters.category) {
        return false;
      }
      return true;
    });
  }, [filters, products]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Drone Battery Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            High-performance lithium batteries for every UAV application. Use our Battery Finder to filter by specifications.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Error message */}
          {error && (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* Mobile Filter Button */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden w-full bg-white shadow-md rounded-lg py-3 px-4 flex items-center justify-center mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter Products
          </button>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-28">
                <ProductFilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  categories={categories}
                />
              </div>
            </aside>

            {/* Mobile Filter Modal */}
            {mobileFiltersOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />
                <div className="absolute right-0 top-0 h-full w-80 bg-gray-50 overflow-y-auto">
                  <div className="p-4 flex justify-between items-center border-b bg-white">
                    <span className="font-semibold">Filters</span>
                    <button onClick={() => setMobileFiltersOpen(false)}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <ProductFilterSidebar
                      filters={filters}
                      onFilterChange={handleFilterChange}
                      categories={categories}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Product Grid */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  {loading ? (
                    'Loading products...'
                  ) : (
                    <>Showing <span className="font-medium">{filteredProducts.length}</span> products</>
                  )}
                </p>
                <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm">
                  <option>Sort by: Featured</option>
                  <option>Capacity: Low to High</option>
                  <option>Capacity: High to Low</option>
                  <option>Voltage: Low to High</option>
                  <option>Voltage: High to Low</option>
                </select>
              </div>

              {/* Loading State */}
              {loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                      <div className="aspect-video bg-gray-200" />
                      <div className="p-5 space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-1/4" />
                        <div className="h-6 bg-gray-200 rounded w-3/4" />
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="flex gap-2">
                          <div className="h-6 bg-gray-200 rounded w-12" />
                          <div className="h-6 bg-gray-200 rounded w-16" />
                          <div className="h-6 bg-gray-200 rounded w-10" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Products */}
              {!loading && filteredProducts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}

              {/* Empty State */}
              {!loading && filteredProducts.length === 0 && (
                <div className="text-center py-16 bg-white rounded-xl">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your filters to find what you&apos;re looking for.</p>
                  <button
                    onClick={() => handleFilterChange({})}
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Can&apos;t find what you need?</h2>
          <p className="text-blue-100 mb-6">We offer custom battery solutions tailored to your specific requirements.</p>
          <Link
            href="/customization"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Request Custom Battery
          </Link>
        </div>
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-4">
            <div className="h-48 bg-gray-200 rounded-xl"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-64 bg-gray-200 rounded-xl"></div>
              <div className="h-64 bg-gray-200 rounded-xl"></div>
              <div className="h-64 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
