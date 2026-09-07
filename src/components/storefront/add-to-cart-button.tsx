'use client';

import { Button } from '@/components/ui/button';
import { ShoppingCart, Check } from 'lucide-react';
import { useCartStore } from '@/lib/store/cart';
import { useState } from 'react';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    sale_price: number | null;
    images?: { url: string; alt_text: string | null }[];
  };
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export function AddToCartButton({ product, size = 'lg', className }: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      sale_price: product.sale_price,
      image_url: product.images?.[0]?.url || null,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Button
      size={size}
      className={className}
      onClick={handleAdd}
      aria-label={added ? 'Added to cart' : 'Add to cart'}
    >
      {added ? (
        <>
          <Check className="mr-2 h-5 w-5" /> Added!
        </>
      ) : (
        <>
          <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
        </>
      )}
    </Button>
  );
}
