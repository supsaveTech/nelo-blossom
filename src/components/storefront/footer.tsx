'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/assets/logo.jpg" 
                alt="Nelo Blossom Empire" 
                width={200} 
                height={200} 
                className="object-contain h-16 md:h-20 w-auto mb-2" 
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your ultimate destination for beauty, wellness, and self-care. We curate the finest products for your daily routine.
            </p>
            {/* Social Links (UI only, to be DB driven) */}
            <div className="flex items-center gap-4 pt-2">
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><span className="text-sm text-muted-foreground/50 cursor-default">Shop All (Coming Soon)</span></li>
              <li><span className="text-sm text-muted-foreground/50 cursor-default">Our Story (Coming Soon)</span></li>
              <li><span className="text-sm text-muted-foreground/50 cursor-default">Contact Us (Coming Soon)</span></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">Support</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted-foreground/50 cursor-default">FAQ (Coming Soon)</span></li>
              <li><span className="text-sm text-muted-foreground/50 cursor-default">Shipping &amp; Returns (Coming Soon)</span></li>
              <li><span className="text-sm text-muted-foreground/50 cursor-default">Track Order (Coming Soon)</span></li>
              <li><span className="text-sm text-muted-foreground/50 cursor-default">Privacy Policy (Coming Soon)</span></li>
              <li><span className="text-sm text-muted-foreground/50 cursor-default">Terms of Service (Coming Soon)</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">Stay Connected</h4>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for exclusive offers and wellness tips.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background"
                aria-label="Email address"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Nelo Blossom Empire. All rights reserved.
          </p>
          {/* Trust/Payment Indicators area (UI only for now) */}
          <div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all">
             <span className="text-xs font-semibold uppercase tracking-wider">Secure Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
