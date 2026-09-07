import { getProductBySlug } from "@/lib/supabase/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/storefront/add-to-cart-button";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: 'Product Not Found | Nelo Blossom Empire' };
  
  return {
    title: `${product.name} | Nelo Blossom Empire`,
    description: product.description || `Buy ${product.name} at Nelo Blossom Empire.`,
  };
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  
  if (!product || !product.is_published) {
    notFound();
  }

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

  const categorySlug = product.categories && product.categories.length > 0 
    ? product.categories[0].slug 
    : "#";

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-8 text-muted-foreground">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><span>/</span></li>
          <li><Link href={`/category/${categorySlug}`} className="hover:text-primary transition-colors">{primaryCategory}</Link></li>
          <li><span>/</span></li>
          <li className="text-foreground font-medium truncate max-w-[200px] sm:max-w-xs">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Product Image Gallery Placeholder */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-muted/30 rounded-2xl overflow-hidden flex items-center justify-center border">
            {product.images && product.images.length > 0 ? (
              <Image 
                src={product.images[0].url} 
                alt={product.images[0].alt_text || product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground/30">
                <Image 
                  src="/assets/logo.jpg"
                  alt="Nelo Blossom Empire"
                  width={120}
                  height={120}
                  className="opacity-20 grayscale"
                />
                <span className="text-sm font-medium tracking-wider uppercase">Image Coming Soon</span>
              </div>
            )}
            
            {product.is_bestseller && (
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground hover:bg-primary z-10">
                Best Seller
              </Badge>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-start">
          <div className="mb-2">
            <Link href={`/category/${categorySlug}`} className="text-sm font-medium text-primary hover:underline uppercase tracking-wider">
              {primaryCategory}
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-6">
             <span className="text-2xl md:text-3xl font-semibold">{formatPrice(product.price)}</span>
             {product.sale_price && product.sale_price < product.price && (
               <span className="text-lg text-muted-foreground line-through">
                 {formatPrice(product.price)}
               </span>
             )}
          </div>

          <div className="prose prose-sm sm:prose-base text-muted-foreground mb-8">
            <p>{product.description || "Premium product from Nelo Blossom Empire. Formulated for your well-being."}</p>
          </div>

          {/* Add to Cart Actions */}
          <div className="space-y-4 pt-6 border-t">
            <AddToCartButton product={product} className="w-full text-lg h-14" />
            <p className="text-sm text-center text-muted-foreground">
              Secure payments. Fast nationwide delivery.
            </p>
          </div>

          {/* Product Accordions / Details */}
          <div className="mt-12 space-y-6">
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Benefits</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Formulated to support your natural beauty and wellness goals. Integrates seamlessly into your daily self-care routine.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Directions for Use</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Please follow the recommended usage guidelines on the product packaging for optimal results.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
