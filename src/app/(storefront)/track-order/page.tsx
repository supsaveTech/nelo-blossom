import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Track Your Order | Nelo Blossom Empire',
  description: 'Track your Nelo Blossom Empire order using your order ID.',
};

export default function TrackOrderPage() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-[60vh]">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Track Your Order</h1>
        <p className="text-muted-foreground mb-8">Enter your order ID or the email address associated with your order.</p>

        <form className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium mb-1">Order ID</label>
            <input
              type="text"
              className="w-full rounded-md border bg-background px-4 py-3 text-sm"
              placeholder="e.g. NB-20260905-XXXXX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              className="w-full rounded-md border bg-background px-4 py-3 text-sm"
              placeholder="your@email.com"
            />
          </div>
          <Button type="button" size="lg" className="w-full gap-2">
            <Search className="h-4 w-4" /> Track Order
          </Button>
        </form>

        <div className="mt-12 p-8 border rounded-xl bg-muted/10 text-center">
          <p className="text-muted-foreground text-sm">
            Order tracking will display here. If you need immediate assistance, please contact us on WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
