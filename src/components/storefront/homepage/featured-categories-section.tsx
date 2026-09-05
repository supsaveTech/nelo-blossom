import Link from "next/link";
import { getFeaturedCategories } from "@/lib/supabase/queries";
import Image from "next/image";

export async function FeaturedCategoriesSection() {
  const categories = await getFeaturedCategories();

  if (!categories || categories.length === 0) {
    return (
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Shop by Category</h2>
          <div className="py-12 flex flex-col items-center justify-center text-muted-foreground">
            <p>Categories Coming Soon</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need to support your wellness journey, organized perfectly for you.
          </p>
        </div>
        
        {/* Responsive Grid for Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/category/${category.slug}`}
              className="group relative overflow-hidden rounded-xl aspect-square flex items-center justify-center bg-muted hover:shadow-lg transition-all duration-300"
            >
              {category.image_url ? (
                <Image 
                  src={category.image_url} 
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 z-0"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              ) : (
                <div className="absolute inset-0 bg-muted flex items-center justify-center z-0">
                   <Image 
                    src="/assets/logo.jpg"
                    alt="Nelo Blossom Empire"
                    width={80}
                    height={80}
                    className="opacity-10 grayscale"
                  />
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="font-semibold text-lg md:text-xl group-hover:translate-y-[-4px] transition-transform duration-300">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
