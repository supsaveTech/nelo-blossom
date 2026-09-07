'use client';

import { useCartStore } from '@/lib/store/cart';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function CartIndicator() {
  const getItemCount = useCartStore((s) => s.getItemCount);
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mounted) {
      setCount(getItemCount());
    }
  }, [mounted, getItemCount]);

  if (!mounted) {
    return (
      <Link href="/cart" className="relative inline-flex items-center justify-center h-9 w-9 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground" aria-label="Cart">
        <ShoppingBag className="h-5 w-5" />
      </Link>
    );
  }

  return (
    <Link href="/cart" className="relative inline-flex items-center justify-center h-9 w-9 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground" aria-label="Cart">
      <ShoppingBag className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground animate-in zoom-in-50">
          {count}
        </span>
      )}
    </Link>
  );
}
