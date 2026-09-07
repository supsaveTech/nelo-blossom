import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Returns Policy | Nelo Blossom Empire',
};

export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-8 tracking-tight">Returns & Refunds</h1>
      <div className="prose prose-lg text-muted-foreground">
        <p>We want you to be completely satisfied with your purchase from Nelo Blossom Empire. If for any reason you are not, we accept returns of unused and unopened products within 7 days of delivery.</p>
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Conditions for Returns</h3>
        <ul>
          <li>Items must be in their original packaging and unused.</li>
          <li>Intimate care and consumable products (supplements, teas) cannot be returned once the seal is broken for health and safety reasons.</li>
          <li>Original shipping fees are non-refundable.</li>
        </ul>
        <p>To initiate a return, please contact our support team with your order number.</p>
      </div>
    </div>
  );
}
