import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProductWithCategory } from "@/lib/supabase/queries";

interface ProductCardProps {
  product: ProductWithCategory;
}

export function ProductCard({ product }: ProductCardProps) {
  // Fail safely if product shouldn't be visible
  if (!product.is_published) return null;

  // Formatting currency safely
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const primaryCategory = product.categories && product.categories.length > 0 
    ? product.categories[0].name 
    : "Product";
  
  const hasValidPrice = product.price > 0;
  
  // Use first image if available
  const mainImage = product.images && product.images.length > 0 
    ? product.images[0].url 
    : null;

  return (
    <Link href={`/product/${product.slug}`} className="block h-full">
      <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-md transition-all duration-300 flex flex-col h-full">
        {/* Image / Fallback */}
        <CardHeader className="p-0">
          <div className="relative aspect-[4/5] bg-muted/30 w-full overflow-hidden flex items-center justify-center">
            {mainImage ? (
              <Image 
                src={mainImage} 
                alt={product.images![0]?.alt_text || product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            ) : (
              <div className="text-muted-foreground/30 text-sm font-medium flex flex-col items-center gap-2">
                <Image 
                  src="/assets/logo.jpg"
                  alt="Nelo Blossom Empire"
                  width={60}
                  height={60}
                  className="opacity-20 grayscale"
                />
                <span className="text-xs tracking-wider uppercase">No Image Available</span>
              </div>
            )}
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.is_bestseller && (
                <Badge className="bg-primary text-primary-foreground hover:bg-primary">
                  Best Seller
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        
        {/* Details */}
        <CardContent className="p-4 flex-1 flex flex-col gap-1">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {primaryCategory}
          </div>
          <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="mt-auto pt-2 flex items-center gap-2">
            {hasValidPrice ? (
              <>
                <span className="font-semibold">{formatPrice(product.price)}</span>
                {product.sale_price && product.sale_price < product.price && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(product.price)}
                  </span>
                )}
              </>
            ) : (
              <span className="text-sm font-medium text-muted-foreground italic">Price Unavailable</span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
