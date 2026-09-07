import { ProductCard } from "@/components/storefront/product-card";
import { getProductsByCategory, getCategoryBySlug } from "@/lib/supabase/queries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = await getCategoryBySlug(params.slug);
  if (!category) return { title: 'Category Not Found | Nelo Blossom Empire' };
  
  return {
    title: `${category.name} | Nelo Blossom Empire`,
    description: category.description || `Browse our collection of ${category.name}.`,
  };
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await getCategoryBySlug(params.slug);
  if (!category || !category.is_active) {
    notFound();
  }

  const products = await getProductsByCategory(params.slug);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{category.name}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {category.description || `Explore our premium ${category.name} collection.`}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0 space-y-8 hidden md:block">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Categories</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/shop" className="hover:text-primary transition-colors">Shop All</a></li>
              <li><a href="/category/supplement-gummies" className={params.slug === 'supplement-gummies' ? "text-primary font-medium" : "hover:text-primary transition-colors"}>Supplement Gummies</a></li>
              <li><a href="/category/herbal-wellness" className={params.slug === 'herbal-wellness' ? "text-primary font-medium" : "hover:text-primary transition-colors"}>Herbal Wellness</a></li>
              <li><a href="/category/feminine-hygiene" className={params.slug === 'feminine-hygiene' ? "text-primary font-medium" : "hover:text-primary transition-colors"}>Feminine Care</a></li>
              <li><a href="/category/beauty-and-self-care" className={params.slug === 'beauty-and-self-care' ? "text-primary font-medium" : "hover:text-primary transition-colors"}>Beauty & Self-Care</a></li>
              <li><a href="/category/weight-management" className={params.slug === 'weight-management' ? "text-primary font-medium" : "hover:text-primary transition-colors"}>Weight Management</a></li>
            </ul>
          </div>
        </aside>

        <div className="flex-1">
          {products.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center border rounded-xl bg-muted/10 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">We couldn't find any products in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
