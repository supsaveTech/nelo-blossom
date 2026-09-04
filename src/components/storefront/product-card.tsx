import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProductCard() {
  return (
    <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Image Placeholder */}
      <CardHeader className="p-0">
        <div className="relative aspect-[4/5] bg-muted w-full overflow-hidden flex items-center justify-center">
          <div className="text-muted-foreground/30 text-sm font-medium">
            [ Product Image ]
          </div>
          {/* Example isolated placeholder badge */}
          <Badge className="absolute top-3 left-3 bg-white text-black hover:bg-white/90">
            New
          </Badge>
        </div>
      </CardHeader>
      
      {/* Details */}
      <CardContent className="p-4 flex-1 flex flex-col gap-1">
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          Category Placeholder
        </div>
        <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          Product Name Skeleton
        </h3>
        <div className="mt-auto pt-2 flex items-center gap-2">
          <span className="font-semibold">₦0,000</span>
          {/* Example of old price / sale price logic placeholder */}
          <span className="text-sm text-muted-foreground line-through">₦0,000</span>
        </div>
      </CardContent>
    </Card>
  );
}
