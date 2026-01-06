'use client';

import { useState } from 'react';
import InquiryModal from './InquiryModal';

interface InquiryButtonProps {
  productName?: string;
  productSku?: string;
  productUrl?: string;
  className?: string;
  buttonText?: string;
}

export default function InquiryButton({
  productName,
  productSku,
  productUrl,
  className = '',
  buttonText = 'Request Quote',
}: InquiryButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-md ${className}`}
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        {buttonText}
      </button>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={productName}
        productSku={productSku}
        productUrl={productUrl}
      />
    </>
  );
}
