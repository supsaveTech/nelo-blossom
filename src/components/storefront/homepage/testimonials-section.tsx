import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover why people love Nelo Blossom Empire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              id: 1,
              name: "Amara O.",
              review: "The Glutathione 13-in-1 Gummies are amazing! I've noticed such a difference in my skin's glow after just two weeks.",
              avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&auto=format&fit=crop"
            },
            {
              id: 2,
              name: "Chika E.",
              review: "Nelo's Intimate Wash is by far the best I've used. It's so gentle and refreshing, perfect for my daily routine.",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
            },
            {
              id: 3,
              name: "Sarah M.",
              review: "The Maca + Booty Tea tastes great and gives me that extra energy boost I need for my workouts. Highly recommend!",
              avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop"
            }
          ].map((testimonial) => (
            <Card key={testimonial.id} className="bg-card border-border/50 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4 text-primary">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary" />
                  ))}
                </div>
                <p className="text-foreground italic mb-6 min-h-[80px]">
                  &quot;{testimonial.review}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 relative rounded-full bg-muted overflow-hidden">
                    <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">Verified Buyer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
