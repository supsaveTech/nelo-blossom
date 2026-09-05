"use client";

import * as React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: "brand",
    headline: "Your Beauty, Wellness & Self-Care Destination",
    description: "Discover our curated collection of premium products designed to elevate your everyday routine.",
    primaryCta: { text: "Shop Now", href: "/#" },
    secondaryCta: { text: "Explore Collections", href: "/#" },
    // A temporary gradient to simulate a hero image, structured for easy replacement with next/image
    bgClass: "bg-gradient-to-r from-primary/10 to-secondary/10",
    imagePlaceholderText: "[ Brand Visual Placeholder ]"
  },
  {
    id: "wellness",
    headline: "Support Your Wellness Journey",
    description: "Discover natural herbal teas and wellness supplements for a balanced life.",
    primaryCta: { text: "Shop Wellness", href: "/#" },
    bgClass: "bg-gradient-to-r from-emerald-900/10 to-teal-900/10",
    imagePlaceholderText: "[ Wellness Visual Placeholder ]"
  },
  {
    id: "feminine-care",
    headline: "Empowering Feminine Confidence",
    description: "Gentle, effective, and refreshing intimate care for your daily routine.",
    primaryCta: { text: "Shop Feminine Care", href: "/#" },
    bgClass: "bg-gradient-to-r from-pink-900/10 to-rose-900/10",
    imagePlaceholderText: "[ Feminine Care Visual Placeholder ]"
  },
  {
    id: "beauty",
    headline: "Radiate Natural Beauty",
    description: "Premium skincare and beauty essentials to highlight your natural glow.",
    primaryCta: { text: "Shop Beauty", href: "/#" },
    bgClass: "bg-gradient-to-r from-amber-900/10 to-orange-900/10",
    imagePlaceholderText: "[ Beauty Visual Placeholder ]"
  },
];

export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  const handleMouseEnter = React.useCallback(() => {
    plugin.current.stop();
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    plugin.current.reset();
  }, []);

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-muted">
      <Carousel
        // eslint-disable-next-line react-hooks/refs
        plugins={[plugin.current]}
        className="w-full h-full"
        opts={{
          loop: true,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CarouselContent className="h-full ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0 h-full relative w-full flex items-center justify-center">
              {/* Visual Placeholder Slot */}
              <div className={cn("absolute inset-0 z-0 flex items-center justify-center", slide.bgClass)}>
                 {/* Later, this will be an Image component */}
                 <div className="text-muted-foreground/30 font-medium text-lg tracking-widest uppercase">
                   {slide.imagePlaceholderText}
                 </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 container px-4 mx-auto flex flex-col items-center text-center space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl">
                  {slide.headline}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto justify-center">
                  <Link href={slide.primaryCta.href} className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
                    {slide.primaryCta.text}
                  </Link>
                  {slide.secondaryCta && (
                    <Link href={slide.secondaryCta.href} className={buttonVariants({ size: "lg", variant: "outline", className: "w-full sm:w-auto bg-background/50 backdrop-blur-sm" })}>
                      {slide.secondaryCta.text}
                    </Link>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block absolute bottom-12 right-12 z-20 flex items-center gap-4">
          <CarouselPrevious className="static translate-y-0 mr-2 bg-background/50 backdrop-blur-sm" />
          <CarouselNext className="static translate-y-0 bg-background/50 backdrop-blur-sm" />
        </div>
      </Carousel>
    </section>
  );
}
