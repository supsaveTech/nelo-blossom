import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Nelo Blossom Empire',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-8 tracking-tight">Terms of Service</h1>
      <div className="prose prose-lg text-muted-foreground">
        <p>By accessing and placing an order with Nelo Blossom Empire, you confirm that you are in agreement with and bound by the terms of service contained herein.</p>
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Products and Services</h3>
        <p>We reserve the right to modify or discontinue any product at any time. Prices for our products are subject to change without notice.</p>
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Medical Disclaimer</h3>
        <p>The products and information provided on this site are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional before starting any new supplement.</p>
      </div>
    </div>
  );
}
