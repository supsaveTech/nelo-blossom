import { ProductCard } from "@/components/storefront/product-card";
import { searchProducts } from "@/lib/supabase/queries";
import { Search } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Products | Nelo Blossom Empire",
  description: "Search for premium wellness, beauty, and feminine care products.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";
  const products = query ? await searchProducts(query) : [];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 min-h-[60vh]">
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">Search</h1>
        
        <form action="/search" method="GET" className="relative flex items-center w-full">
          <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search products..."
            className="w-full pl-12 pr-4 py-4 rounded-full border bg-background text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            autoFocus
          />
          <button type="submit" className="absolute right-2 px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
            Search
          </button>
        </form>
      </div>

      <div className="max-w-7xl mx-auto">
        {query && (
          <div className="mb-8">
            <h2 className="text-xl font-medium">
              Results for &quot;{query}&quot; ({products.length})
            </h2>
          </div>
        )}

        {query && products.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : query ? (
          <div className="py-24 text-center border rounded-xl bg-muted/10 flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or browse our categories.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
