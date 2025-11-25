'use client';

import { useProductStore } from '@/store/useProductStore';

type FilterType = 'all' | 'liked';

interface ProductFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export default function ProductFilter({ activeFilter, onFilterChange }: ProductFilterProps) {
  const { products } = useProductStore();

  const likedProductsCount = products.filter(p => p.isLiked).length;

  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-4 py-2 rounded-lg transition-colors ${
          activeFilter === 'all'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        All Products ({products.length})
      </button>
      <button
        onClick={() => onFilterChange('liked')}
        className={`px-4 py-2 rounded-lg transition-colors ${
          activeFilter === 'liked'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Liked ({likedProductsCount})
      </button>
    </div>
  );
}
