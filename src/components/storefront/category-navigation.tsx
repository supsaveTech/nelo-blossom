'use client';

import Link from 'next/link';

// NOTE: This interface is a mock for Phase 2A and prepares the component 
// to receive dynamic data from Supabase in Phase 2C.
export interface Category {
  id: string;
  name: string;
  slug: string;
  parent_id: string | null;
}

interface CategoryNavigationProps {
  categories?: Category[];
}

export function CategoryNavigation({ categories = [] }: CategoryNavigationProps) {
  // Mock data for visual scaffolding only, isolated to be replaced easily.
  const mockCategories: Category[] = [
    { id: '1', name: 'New Arrivals', slug: 'new-arrivals', parent_id: null },
    { id: '2', name: 'Skincare', slug: 'skincare', parent_id: null },
    { id: '3', name: 'Wellness', slug: 'wellness', parent_id: null },
    { id: '4', name: 'Haircare', slug: 'haircare', parent_id: null },
  ];

  const displayCategories = categories.length > 0 ? categories : mockCategories;

  return (
    <nav className="hidden md:flex items-center gap-6">
      {displayCategories.map((category) => (
        <Link 
          key={category.id} 
          href={`/category/${category.slug}`}
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          {category.name}
        </Link>
      ))}
      <Link 
        href="/shop"
        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
      >
        Shop All
      </Link>
    </nav>
  );
}
