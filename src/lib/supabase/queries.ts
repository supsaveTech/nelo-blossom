import { createClient } from './server';

export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  price: number;
  sale_price: number | null;
  is_published: boolean;
  is_bestseller: boolean;
  is_featured: boolean;
  created_at: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image_url: string | null;
  is_active: boolean;
  description?: string;
}

export interface ProductWithCategory extends Product {
  categories?: { name: string, slug: string }[];
  images?: { url: string, alt_text: string | null }[];
}

/**
 * Fetch featured categories for the homepage.
 * Strictly respects is_active = true.
 */
export async function getFeaturedCategories() {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })
    .limit(4);

  if (error) {
    console.error('Error fetching featured categories:', error);
    return [];
  }

  return data;
}

/**
 * Fetch best sellers for the homepage.
 * strictly respects is_published = true and is_bestseller = true.
 */
export async function getBestSellers() {
  const supabase = await createClient();
  
  // Notice we fetch related categories and images to display in the ProductCard
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      categories:product_categories(
        category:categories(name, slug)
      ),
      images:product_images(url, alt_text)
    `)
    .eq('is_published', true)
    .eq('is_bestseller', true)
    .order('created_at', { ascending: false })
    .limit(4);

  if (error) {
    console.error('Error fetching best sellers:', error);
    return [];
  }

  // Transform nested relations for easier consumption
  return (data as unknown as ProductWithCategory[]).map(product => ({
    ...product,
    categories: product.categories?.map((pc: unknown) => (pc as { category: { name: string, slug: string } }).category) || [],
    images: product.images || [],
  })) as ProductWithCategory[];
}

/**
 * Fetch new arrivals for the homepage.
 * strictly respects is_published = true.
 */
export async function getNewArrivals() {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      categories:product_categories(
        category:categories(name, slug)
      ),
      images:product_images(url, alt_text)
    `)
    .eq('is_published', true)
    .order('created_at', { ascending: false })
    .limit(4);

  if (error) {
    console.error('Error fetching new arrivals:', error);
    return [];
  }

  return (data as unknown as ProductWithCategory[]).map(product => ({
    ...product,
    categories: product.categories?.map((pc: unknown) => (pc as { category: { name: string, slug: string } }).category) || [],
    images: product.images || [],
  })) as ProductWithCategory[];
}


export async function getAllProducts() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      categories:product_categories(
        category:categories(name, slug)
      ),
      images:product_images(url, alt_text)
    `)
    .eq('is_published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching all products:', error);
    return [];
  }

  return (data as unknown as ProductWithCategory[]).map(product => ({
    ...product,
    categories: product.categories?.map((pc: unknown) => (pc as { category: { name: string, slug: string } }).category) || [],
    images: product.images || [],
  })) as ProductWithCategory[];
}


export async function getProductsByCategory(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      categories:product_categories!inner(
        category:categories!inner(name, slug)
      ),
      images:product_images(url, alt_text)
    `)
    .eq('is_published', true)
    .eq('categories.category.slug', slug)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }

  return (data as unknown as ProductWithCategory[]).map(product => ({
    ...product,
    categories: product.categories?.map((pc: unknown) => (pc as { category: { name: string, slug: string } }).category) || [],
    images: product.images || [],
  })) as ProductWithCategory[];
}

export async function getCategoryBySlug(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching category:', error);
    return null;
  }

  return data as Category;
}


export async function getProductBySlug(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      categories:product_categories(
        category:categories(name, slug)
      ),
      images:product_images(url, alt_text)
    `)
    .eq('is_published', true)
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching product by slug:', error);
    return null;
  }

  const product = data as unknown as ProductWithCategory;
  return {
    ...product,
    categories: product.categories?.map((pc: unknown) => (pc as { category: { name: string, slug: string } }).category) || [],
    images: product.images || [],
  } as ProductWithCategory;
}


export async function searchProducts(query: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      categories:product_categories(
        category:categories(name, slug)
      ),
      images:product_images(url, alt_text)
    `)
    .eq('is_published', true)
    .ilike('name', `%${query}%`)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error searching products:', error);
    return [];
  }

  return (data as unknown as ProductWithCategory[]).map(product => ({
    ...product,
    categories: product.categories?.map((pc: unknown) => (pc as { category: { name: string, slug: string } }).category) || [],
    images: product.images || [],
  })) as ProductWithCategory[];
}
