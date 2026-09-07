import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nelo Blossom Empire',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-8 tracking-tight">Privacy Policy</h1>
      <div className="prose prose-lg text-muted-foreground">
        <p>At Nelo Blossom Empire, we are committed to protecting your privacy and ensuring the security of your personal information.</p>
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Information We Collect</h3>
        <p>We collect information that you provide directly to us when you create an account, make a purchase, sign up for our newsletter, or contact customer support. This may include your name, email address, shipping address, and phone number.</p>
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">How We Use Your Information</h3>
        <p>We use the information we collect to process transactions, communicate with you about your orders, and send promotional offers (if you have opted in).</p>
      </div>
    </div>
  );
}
