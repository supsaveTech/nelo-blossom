import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shipping Policy | Nelo Blossom Empire',
};

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-8 tracking-tight">Shipping Policy</h1>
      <div className="prose prose-lg text-muted-foreground">
        <p>All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Domestic Shipping Rates and Estimates</h3>
        <p>Shipping charges for your order will be calculated and displayed at checkout.</p>
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">How do I check the status of my order?</h3>
        <p>When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.</p>
      </div>
    </div>
  );
}
