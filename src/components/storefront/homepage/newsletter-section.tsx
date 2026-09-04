'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Join the Nelo Blossom Community</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for exclusive offers, wellness tips, and early access to new arrivals.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1"
              required 
              aria-label="Email Address for Newsletter"
            />
            <Button type="submit" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
