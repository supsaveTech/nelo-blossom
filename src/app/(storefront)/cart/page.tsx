'use client';

import { useCartStore } from '@/lib/store/cart';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

function formatPrice(amount: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(amount);
}

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getSubtotal } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-[60vh]">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Your Cart</h1>
        <div className="flex items-center justify-center py-24">
          <div className="animate-pulse text-muted-foreground">Loading cart...</div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-[60vh]">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Your Cart</h1>
        <div className="py-24 text-center border rounded-xl bg-muted/10 flex flex-col items-center justify-center gap-6">
          <ShoppingBag className="h-16 w-16 text-muted-foreground/30" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-6">Looks like you haven&apos;t added anything yet.</p>
          </div>
          <Link href="/shop">
            <Button size="lg" className="gap-2">
              Continue Shopping <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = getSubtotal();

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 min-h-[60vh]">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Your Cart</h1>
        <Button variant="ghost" size="sm" onClick={clearCart} className="text-muted-foreground hover:text-destructive">
          Clear Cart
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => {
            const effectivePrice = item.sale_price && item.sale_price < item.price ? item.sale_price : item.price;
            return (
              <div key={item.id} className="flex gap-4 sm:gap-6 p-4 border rounded-xl bg-background">
                {/* Image */}
                <Link href={`/product/${item.slug}`} className="shrink-0">
                  <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-lg bg-muted/30 overflow-hidden">
                    {item.image_url ? (
                      <Image
                        src={item.image_url}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Image src="/assets/logo.jpg" alt="Nelo Blossom" width={40} height={40} className="opacity-20 grayscale" />
                      </div>
                    )}
                  </div>
                </Link>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <Link href={`/product/${item.slug}`} className="font-semibold text-sm sm:text-base hover:text-primary transition-colors line-clamp-2">
                      {item.name}
                    </Link>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-semibold">{formatPrice(effectivePrice)}</span>
                      {item.sale_price && item.sale_price < item.price && (
                        <span className="text-sm text-muted-foreground line-through">{formatPrice(item.price)}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 border rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    {/* Remove */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 border rounded-xl p-6 bg-muted/10 space-y-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium text-primary">Calculated at checkout</span>
              </div>
            </div>

            <div className="border-t pt-4 flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <Link href="/checkout" className="block">
              <Button size="lg" className="w-full text-lg h-14 gap-2">
                Checkout <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>

            <Link href="/shop" className="block">
              <Button variant="outline" className="w-full" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
