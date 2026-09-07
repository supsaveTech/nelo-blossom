"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: "brand",
    headline: "Your Beauty, Wellness & Self-Care Destination",
    description: "Discover our curated collection of premium products designed to elevate your everyday routine.",
    primaryCta: { text: "Shop Now", href: "/shop" },
    secondaryCta: { text: "Explore Collections", href: "/category/supplement-gummies" },
    imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: "wellness",
    headline: "Support Your Wellness Journey",
    description: "Discover natural herbal teas and wellness supplements for a balanced life.",
    primaryCta: { text: "Shop Wellness", href: "/category/herbal-wellness" },
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: "feminine-care",
    headline: "Empowering Feminine Confidence",
    description: "Gentle, effective, and refreshing intimate care for your daily routine.",
    primaryCta: { text: "Shop Feminine Care", href: "/category/feminine-hygiene" },
    imageUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: "weight-management",
    headline: "Achieve Your Goals",
    description: "Premium weight management solutions to highlight your natural glow.",
    primaryCta: { text: "Shop Weight Management", href: "/category/weight-management" },
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1920&auto=format&fit=crop"
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
              <div className="absolute inset-0 z-0">
                 <Image 
                   src={slide.imageUrl} 
                   alt={slide.headline} 
                   fill 
                   className="object-cover brightness-[0.6]" 
                   priority={slide.id === 'brand'} 
                 />
              </div>
              
              {/* Content */}
              <div className="relative z-10 container px-4 mx-auto flex flex-col items-center text-center space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl drop-shadow-md">
                  {slide.headline}
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
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
