'use client';

import { useState, useRef, useEffect } from 'react';

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // If no images, show placeholder
    if (!images || images.length === 0) {
        return (
            <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center border border-gray-100">
                <svg className="w-32 h-32 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
        );
    }

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 100; // Approximate width of a thumbnail + gap
            const newScrollLeft =
                direction === 'left'
                    ? scrollContainerRef.current.scrollLeft - scrollAmount
                    : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-xl flex items-center justify-center overflow-hidden border border-gray-100 relative group">
                <img
                    src={images[selectedIndex]}
                    alt={`${productName} - View ${selectedIndex + 1}`}
                    className="w-full h-full object-contain p-4 transition-opacity duration-300"
                />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="relative group/thumbs">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md text-gray-600 rounded-full p-1.5 opacity-0 group-hover/thumbs:opacity-100 transition-opacity disabled:opacity-0"
                        aria-label="Previous images"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Thumbnail Strip */}
                    <div
                        ref={scrollContainerRef}
                        className="flex space-x-3 overflow-x-auto scrollbar-hide py-1 px-1"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedIndex(idx)}
                                className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${selectedIndex === idx
                                        ? 'border-blue-600 ring-2 ring-blue-100'
                                        : 'border-transparent hover:border-gray-300 bg-gray-50'
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className="w-full h-full object-contain p-1"
                                />
                            </button>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md text-gray-600 rounded-full p-1.5 opacity-0 group-hover/thumbs:opacity-100 transition-opacity"
                        aria-label="Next images"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}
