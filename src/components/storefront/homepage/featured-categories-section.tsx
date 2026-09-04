import Link from "next/link";

export function FeaturedCategoriesSection() {
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
          {/* Skeleton placeholders for UI structure only */}
          {[1, 2, 3, 4].map((i) => (
            <Link 
              key={i} 
              href={`/category/placeholder-${i}`}
              className="group relative overflow-hidden rounded-xl aspect-square flex items-center justify-center bg-muted hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              
              <div className="text-muted-foreground/30 font-medium z-0">
                [ Image {i} ]
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="font-semibold text-lg md:text-xl group-hover:translate-y-[-4px] transition-transform duration-300">
                  Category Name
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
