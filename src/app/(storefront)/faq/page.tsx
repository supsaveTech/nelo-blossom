import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Nelo Blossom Empire',
  description: 'Frequently Asked Questions',
};

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-8 tracking-tight">Frequently Asked Questions</h1>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">How long does shipping take?</h3>
          <p className="text-muted-foreground">Standard delivery typically takes 2-5 business days depending on your location. We process all orders within 24 hours.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Are your supplements safe to use with medication?</h3>
          <p className="text-muted-foreground">While our products are made from natural ingredients, we always recommend consulting with your healthcare provider before starting any new supplement regimen, especially if you are pregnant, nursing, or taking medications.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Do you offer international shipping?</h3>
          <p className="text-muted-foreground">Currently, we primarily ship nationwide. For international inquiries, please contact our support team via WhatsApp.</p>
        </div>
      </div>
    </div>
  );
}
