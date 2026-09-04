import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
          {/* Skeleton placeholders for Testimonials */}
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-card border-border/50 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4 text-primary">
                  {/* Generic star rating structure */}
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary" />
                  ))}
                </div>
                <p className="text-foreground italic mb-6">
                  &quot;This is a placeholder for actual verified customer reviews. It demonstrates the structural layout without fabricating data.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground/30 text-xs">IMG</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Customer Name</h4>
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
