import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function PromotionalBannerSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden bg-primary/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16">
          
          <div className="z-10 max-w-xl text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get 20% Off Your First Order
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Subscribe to our newsletter and receive a special discount on premium feminine care and wellness products.
            </p>
            <Link href="/shop" className={buttonVariants({ size: "lg" })}>Shop Deals</Link>
          </div>

          <div className="z-10 w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative aspect-[4/3] w-full max-w-sm rounded-lg overflow-hidden border border-border/50">
               <Image 
                 src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop" 
                 alt="Nelo Blossom Promotion" 
                 fill 
                 className="object-cover" 
               />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
