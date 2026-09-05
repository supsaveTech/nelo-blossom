'use client';

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
        <span 
          key={category.id} 
          className="text-sm font-medium text-muted-foreground/50 cursor-default"
        >
          {category.name}
        </span>
      ))}
      <span 
        className="text-sm font-medium text-primary/50 cursor-default"
      >
        Shop All
      </span>
    </nav>
  );
}
