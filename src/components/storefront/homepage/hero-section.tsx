import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-muted">
      {/* Visual Placeholder Slot */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
         {/* Later, this will be an Image component */}
         <div className="text-muted-foreground/30 font-medium text-lg tracking-widest uppercase">
           [ Hero Visual Placeholder ]
         </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container px-4 mx-auto flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl">
          Your Beauty, Wellness & Self-Care Destination
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Discover our curated collection of premium products designed to elevate your everyday routine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
          <Link href="/#" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>Shop Now</Link>
          <Link href="/#" className={buttonVariants({ size: "lg", variant: "outline", className: "w-full sm:w-auto bg-background/50 backdrop-blur-sm" })}>Explore Collections</Link>
        </div>
      </div>
    </section>
  );
}
