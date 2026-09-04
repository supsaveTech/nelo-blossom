import { ShieldCheck, Truck, ThumbsUp, Heart } from "lucide-react";

const features = [
  {
    icon: ThumbsUp,
    title: "Quality-Focused Products",
    description: "Carefully curated selections to ensure premium standards.",
  },
  {
    icon: Truck,
    title: "Convenient Shopping",
    description: "Reliable and fast delivery to your doorstep.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    description: "Your data and payments are safely processed and protected.",
  },
  {
    icon: Heart,
    title: "Customer Support",
    description: "Dedicated assistance whenever you need help.",
  },
];

export function WhyChooseNeloSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose Nelo Blossom</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing you with the best experience and the highest quality products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/30 border border-border/50">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
