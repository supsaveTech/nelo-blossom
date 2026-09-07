import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { User, Package, MapPin, LogIn } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Account | Nelo Blossom Empire',
};

export default function AccountPage() {
  // In production: check Supabase auth session server-side
  // For now, show a guest-friendly account page
  return (
    <div className="container mx-auto px-4 py-16 min-h-[60vh]">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">My Account</h1>

      {/* Unauthenticated state */}
      <div className="max-w-md mx-auto text-center mb-12 p-8 border rounded-xl bg-muted/10">
        <User className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Welcome</h2>
        <p className="text-muted-foreground mb-6">Sign in to view your orders, manage addresses, and more.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/login">
            <Button className="gap-2"><LogIn className="h-4 w-4" /> Sign In</Button>
          </Link>
          <Link href="/register">
            <Button variant="outline">Create Account</Button>
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
        <Link href="/account/orders" className="border rounded-xl p-6 text-center hover:border-primary transition-colors group">
          <Package className="h-8 w-8 mx-auto text-muted-foreground group-hover:text-primary transition-colors mb-3" />
          <h3 className="font-semibold mb-1">My Orders</h3>
          <p className="text-sm text-muted-foreground">Track and manage orders</p>
        </Link>
        <Link href="/track-order" className="border rounded-xl p-6 text-center hover:border-primary transition-colors group">
          <MapPin className="h-8 w-8 mx-auto text-muted-foreground group-hover:text-primary transition-colors mb-3" />
          <h3 className="font-semibold mb-1">Track Order</h3>
          <p className="text-sm text-muted-foreground">Check delivery status</p>
        </Link>
        <Link href="/contact" className="border rounded-xl p-6 text-center hover:border-primary transition-colors group">
          <User className="h-8 w-8 mx-auto text-muted-foreground group-hover:text-primary transition-colors mb-3" />
          <h3 className="font-semibold mb-1">Help & Support</h3>
          <p className="text-sm text-muted-foreground">Get in touch with us</p>
        </Link>
      </div>
    </div>
  );
}
