import { Package } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Orders | Nelo Blossom Empire',
};

export default function OrdersPage() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-[60vh]">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">My Orders</h1>
      <div className="py-24 text-center border rounded-xl bg-muted/10 flex flex-col items-center justify-center gap-4">
        <Package className="h-16 w-16 text-muted-foreground/30" />
        <h3 className="text-xl font-semibold">No orders yet</h3>
        <p className="text-muted-foreground">Once you place an order, it will appear here.</p>
      </div>
    </div>
  );
}
