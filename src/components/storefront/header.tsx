'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, User } from 'lucide-react';
import { CartIndicator } from './cart-indicator';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { CategoryNavigation } from './category-navigation';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Mobile Menu & Logo */}
        <div className="flex items-center md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" aria-label="Open Menu" />}>
                <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left text-primary">Nelo Blossom</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">Home</Link>
                <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">Shop All</Link>
                <Link href="/category/supplement-gummies" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">Supplements</Link>
                <Link href="/category/feminine-hygiene" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">Feminine Care</Link>
                <Link href="/category/beauty-and-self-care" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">Beauty</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/assets/logo.jpg" 
            alt="Nelo Blossom Empire" 
            width={200} 
            height={200} 
            className="object-contain h-10 sm:h-11 md:h-12 lg:h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <CategoryNavigation />

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link href="/search" className={buttonVariants({ variant: "ghost", size: "icon", className: "hidden sm:inline-flex" })} aria-label="Search">
            <Search className="h-5 w-5" />
          </Link>
          <Link href="/account" className={buttonVariants({ variant: "ghost", size: "icon", className: "hidden sm:inline-flex" })} aria-label="Account">
            <User className="h-5 w-5" />
          </Link>
          <CartIndicator />
        </div>
      </div>
    </header>
  );
}
