'use client';

import { useCartStore } from '@/lib/store/cart';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';
import { useEffect, useState } from 'react';

function formatPrice(amount: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(amount);
}

export default function CheckoutPage() {
  const { items, getSubtotal } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-[60vh]">
        <div className="animate-pulse text-muted-foreground text-center">Loading...</div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-[60vh] text-center">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p className="text-muted-foreground mb-8">Your cart is empty.</p>
        <Link href="/shop"><Button>Continue Shopping</Button></Link>
      </div>
    );
  }

  const subtotal = getSubtotal();

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 min-h-[60vh]">
      <Link href="/cart" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Cart
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Delivery Form */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email address</label>
                <input type="email" className="w-full rounded-md border bg-background px-3 py-2.5 text-sm" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone number</label>
                <input type="tel" className="w-full rounded-md border bg-background px-3 py-2.5 text-sm" placeholder="+234 000 000 0000" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First name</label>
                  <input type="text" className="w-full rounded-md border bg-background px-3 py-2.5 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last name</label>
                  <input type="text" className="w-full rounded-md border bg-background px-3 py-2.5 text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <input type="text" className="w-full rounded-md border bg-background px-3 py-2.5 text-sm" placeholder="Street address" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input type="text" className="w-full rounded-md border bg-background px-3 py-2.5 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">State</label>
                  <input type="text" className="w-full rounded-md border bg-background px-3 py-2.5 text-sm" placeholder="e.g. Lagos" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="sticky top-24 border rounded-xl p-6 bg-muted/10 space-y-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="space-y-4 max-h-64 overflow-y-auto">
              {items.map((item) => {
                const effectivePrice = item.sale_price && item.sale_price < item.price ? item.sale_price : item.price;
                return (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{item.name}</p>
                      <p className="text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-medium ml-4">{formatPrice(effectivePrice * item.quantity)}</span>
                  </div>
                );
              })}
            </div>

            <div className="border-t pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium text-primary">Free</span>
              </div>
            </div>

            <div className="border-t pt-4 flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <Button size="lg" className="w-full text-lg h-14 gap-2">
              <Lock className="h-4 w-4" /> Pay with Paystack
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Your payment is secured and processed by Paystack. We never store your card details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
