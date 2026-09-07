import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Confirmed | Nelo Blossom Empire',
};

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="bg-primary/10 rounded-full p-6 mb-8">
        <CheckCircle className="h-16 w-16 text-primary" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Thank You!</h1>
      <p className="text-lg text-muted-foreground mb-2 max-w-md">
        Your order has been placed successfully. You&apos;ll receive an email confirmation shortly.
      </p>
      <p className="text-sm text-muted-foreground mb-8">
        Check your email for your order ID and tracking details.
      </p>
      <div className="flex gap-4">
        <Link href="/shop">
          <Button size="lg">Continue Shopping</Button>
        </Link>
        <Link href="/track-order">
          <Button variant="outline" size="lg">Track Order</Button>
        </Link>
      </div>
    </div>
  );
}
