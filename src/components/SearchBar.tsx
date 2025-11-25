'use client';

import { useProductStore } from '@/store/useProductStore';

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useProductStore();

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
