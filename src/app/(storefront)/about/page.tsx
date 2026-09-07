import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Nelo Blossom Empire',
  description: 'Our story and mission at Nelo Blossom Empire.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-8 tracking-tight">Our Story</h1>
      <div className="prose prose-lg text-muted-foreground">
        <p>Welcome to Nelo Blossom Empire.</p>
        <p>Our journey began with a simple mission: to provide premium, natural, and effective wellness and beauty products that empower individuals to look and feel their absolute best.</p>
        <p>We believe that self-care is not a luxury, but a necessity. That's why every product in our curated collection—from our signature supplement gummies to our intimate care line—is carefully selected to support your holistic wellness journey.</p>
        <p>Thank you for trusting us to be part of your daily routine. We are committed to your glow, your health, and your confidence.</p>
      </div>
    </div>
  );
}
