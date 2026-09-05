import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function PromotionalBannerSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden bg-primary/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16">
          
          <div className="z-10 max-w-xl text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Special Promotion Placeholder
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Structural copy for the promotional banner. This area will be used for campaigns, special discounts, or highlighted product pushes, driven by database settings.
            </p>
            <Link href="/#" className={buttonVariants({ size: "lg" })}>Shop Deals</Link>
          </div>

          <div className="z-10 w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="aspect-[4/3] w-full max-w-sm rounded-lg bg-muted flex items-center justify-center border border-border/50">
               <span className="text-muted-foreground/30 font-medium">
                 [ Promo Visual Placeholder ]
               </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
