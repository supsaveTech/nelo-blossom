import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Nelo Blossom Empire',
  description: 'Get in touch with the Nelo Blossom Empire team.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-8 tracking-tight">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">We'd love to hear from you</h2>
          <p className="text-muted-foreground mb-6">Whether you have a question about our products, need assistance with an order, or just want to share your wellness journey, our team is here to help.</p>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>Email:</strong> support@neloblossom.com</p>
            <p><strong>WhatsApp:</strong> +234 (0) 000 000 0000</p>
            <p><strong>Business Hours:</strong> Monday - Friday, 9am - 5pm WAT</p>
          </div>
        </div>
        <div className="bg-muted/30 p-8 rounded-xl border">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" className="w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea className="w-full rounded-md border bg-background px-3 py-2 text-sm min-h-[120px]" placeholder="How can we help?"></textarea>
            </div>
            <button type="button" className="w-full rounded-md bg-primary text-primary-foreground px-4 py-2 font-medium hover:bg-primary/90">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
