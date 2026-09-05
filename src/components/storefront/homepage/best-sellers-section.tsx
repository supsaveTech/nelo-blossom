import Link from "next/link";
import { ProductCard } from "@/components/storefront/product-card";
import { getBestSellers } from "@/lib/supabase/queries";

export async function BestSellersSection() {
  const products = await getBestSellers();

  if (!products || products.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Best Sellers</h2>
          <div className="py-12 border border-dashed rounded-xl bg-muted/10 flex flex-col items-center justify-center text-muted-foreground">
            <p>Products Coming Soon</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Best Sellers</h2>
            <p className="text-muted-foreground">Our most loved and highly rated products.</p>
          </div>
          <Link href="/shop/best-sellers" className="hidden md:inline-flex text-sm font-medium text-primary hover:underline underline-offset-4">
            View All Best Sellers
          </Link>
        </div>
        
        {/* Responsive Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/shop/best-sellers" className="inline-flex text-sm font-medium text-primary hover:underline underline-offset-4">
            View All Best Sellers
          </Link>
        </div>
      </div>
    </section>
  );
}
