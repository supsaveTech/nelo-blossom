export const MOCK_CATEGORIES = [
  { id: 'cat-1', name: 'Supplement Gummies', slug: 'supplement-gummies', image_url: '/assets/supplements.jpg', is_active: true, display_order: 1 },
  { id: 'cat-2', name: 'Herbal Wellness', slug: 'herbal-wellness', image_url: '/assets/wellness.jpg', is_active: true, display_order: 2 },
  { id: 'cat-3', name: 'Feminine Hygiene & Intimate Care', slug: 'feminine-hygiene', image_url: '/assets/feminine.jpg', is_active: true, display_order: 3 },
  { id: 'cat-4', name: 'Beauty & Self-Care', slug: 'beauty-self-care', image_url: '/assets/beauty.jpg', is_active: true, display_order: 4 },
  { id: 'cat-5', name: 'Weight Management', slug: 'weight-management', image_url: '/assets/weight.jpg', is_active: true, display_order: 5 }
];

export const MOCK_PRODUCTS = [
  // Supplement Gummies
  { id: 'prod-1', name: 'Glutathione 13-in-1 Gummies', slug: 'glutathione-13-in-1', price: 15000, sale_price: 13500, is_published: true, is_bestseller: true, is_featured: true, created_at: '2026-09-01T00:00:00Z', category_id: 'cat-1' },
  { id: 'prod-2', name: 'L-Glutathione Gummies', slug: 'l-glutathione', price: 12000, sale_price: null, is_published: true, is_bestseller: false, is_featured: false, created_at: '2026-09-02T00:00:00Z', category_id: 'cat-1' },
  { id: 'prod-3', name: 'Evening Primrose Oil', slug: 'evening-primrose', price: 14000, sale_price: null, is_published: true, is_bestseller: true, is_featured: false, created_at: '2026-09-03T00:00:00Z', category_id: 'cat-1' },
  { id: 'prod-4', name: 'Cranberry Gummies', slug: 'cranberry-gummies', price: 11000, sale_price: null, is_published: true, is_bestseller: false, is_featured: false, created_at: '2026-09-04T00:00:00Z', category_id: 'cat-1' },
  { id: 'prod-5', name: 'Probiotic Gummies', slug: 'probiotic-gummies', price: 13500, sale_price: null, is_published: true, is_bestseller: true, is_featured: true, created_at: '2026-09-05T00:00:00Z', category_id: 'cat-1' },
  { id: 'prod-6', name: 'Collagen Gummies', slug: 'collagen-gummies', price: 16000, sale_price: 14500, is_published: true, is_bestseller: true, is_featured: false, created_at: '2026-09-06T00:00:00Z', category_id: 'cat-1' },
  { id: 'prod-7', name: 'Horny Goat Weed Man Power Gummies', slug: 'man-power-gummies', price: 18000, sale_price: null, is_published: true, is_bestseller: false, is_featured: false, created_at: '2026-09-07T00:00:00Z', category_id: 'cat-1' },
  { id: 'prod-8', name: 'Kito + ACV Weight Loss Gummies', slug: 'kito-acv-gummies', price: 15500, sale_price: null, is_published: true, is_bestseller: true, is_featured: true, created_at: '2026-09-08T00:00:00Z', category_id: 'cat-1' },
  { id: 'prod-9', name: 'Apple Cider Vinegar Gummies', slug: 'acv-gummies', price: 12500, sale_price: null, is_published: true, is_bestseller: false, is_featured: false, created_at: '2026-09-09T00:00:00Z', category_id: 'cat-1' },

  // Herbal Wellness
  { id: 'prod-10', name: 'Weight Loss Tea', slug: 'weight-loss-tea', price: 8000, sale_price: null, is_published: true, is_bestseller: true, is_featured: false, created_at: '2026-09-10T00:00:00Z', category_id: 'cat-2' },
  { id: 'prod-11', name: 'Maca Powder', slug: 'maca-powder', price: 9500, sale_price: null, is_published: true, is_bestseller: false, is_featured: false, created_at: '2026-09-11T00:00:00Z', category_id: 'cat-2' },
  { id: 'prod-12', name: 'Maca + Booty Tea', slug: 'maca-booty-tea', price: 11000, sale_price: null, is_published: true, is_bestseller: true, is_featured: true, created_at: '2026-09-12T00:00:00Z', category_id: 'cat-2' },

  // Feminine Hygiene & Intimate Care
  { id: 'prod-13', name: 'Nelo\'s Intimate Wash', slug: 'intimate-wash', price: 6000, sale_price: null, is_published: true, is_bestseller: true, is_featured: true, created_at: '2026-09-13T00:00:00Z', category_id: 'cat-3' },
  { id: 'prod-14', name: 'Yoni Oil', slug: 'yoni-oil', price: 5500, sale_price: null, is_published: true, is_bestseller: true, is_featured: false, created_at: '2026-09-14T00:00:00Z', category_id: 'cat-3' },
  { id: 'prod-15', name: 'WAP Drip', slug: 'wap-drip', price: 7000, sale_price: null, is_published: true, is_bestseller: false, is_featured: false, created_at: '2026-09-15T00:00:00Z', category_id: 'cat-3' },
  { id: 'prod-16', name: 'Vagina Tightening Gel', slug: 'tightening-gel', price: 8500, sale_price: null, is_published: true, is_bestseller: false, is_featured: false, created_at: '2026-09-16T00:00:00Z', category_id: 'cat-3' },
  { id: 'prod-17', name: 'Boric Acid Gel', slug: 'boric-acid-gel', price: 9000, sale_price: null, is_published: true, is_bestseller: true, is_featured: false, created_at: '2026-09-17T00:00:00Z', category_id: 'cat-3' },
  { id: 'prod-18', name: 'Feminine Steaming Herbs', slug: 'steaming-herbs', price: 7500, sale_price: null, is_published: true, is_bestseller: false, is_featured: false, created_at: '2026-09-18T00:00:00Z', category_id: 'cat-3' },
  { id: 'prod-19', name: 'Foldable Feminine Steaming Seat', slug: 'steaming-seat', price: 12000, sale_price: null, is_published: true, is_bestseller: false, is_featured: false, created_at: '2026-09-19T00:00:00Z', category_id: 'cat-3' }
].map(p => ({
  ...p,
  sku: `NB-${p.id}`,
  images: [{ url: `https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop`, alt_text: p.name }],
  categories: [MOCK_CATEGORIES.find(c => c.id === p.category_id)].filter(Boolean).map(c => ({ name: c!.name, slug: c!.slug }))
}));
