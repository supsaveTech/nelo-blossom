import { ProductCard } from "@/components/storefront/product-card";
import { getAllProducts } from "@/lib/supabase/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All Products | Nelo Blossom Empire",
  description: "Browse our complete collection of premium wellness, beauty, and feminine care products.",
};

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Shop All</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Discover our curated collection of premium products designed to elevate your everyday routine.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar Placeholder */}
        <aside className="w-full md:w-64 shrink-0 space-y-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Categories</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/category/supplement-gummies" className="hover:text-primary transition-colors">Supplement Gummies</a></li>
              <li><a href="/category/herbal-wellness" className="hover:text-primary transition-colors">Herbal Wellness</a></li>
              <li><a href="/category/feminine-hygiene" className="hover:text-primary transition-colors">Feminine Care</a></li>
              <li><a href="/category/beauty-and-self-care" className="hover:text-primary transition-colors">Beauty & Self-Care</a></li>
              <li><a href="/category/weight-management" className="hover:text-primary transition-colors">Weight Management</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Price</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Under ₦10,000</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">₦10,000 - ₦20,000</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Over ₦20,000</a></li>
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
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
              <p className="text-muted-foreground">We couldn't find any products at this time.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
