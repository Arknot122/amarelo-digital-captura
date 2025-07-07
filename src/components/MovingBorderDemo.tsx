import React from "react";
import { Button } from "@/components/ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <Button
        borderRadius="1.75rem"
        className="bg-background/90 text-foreground border-border hover:bg-card/90 transition-colors"
        containerClassName="w-48 h-12"
        duration={3000}
      >
        Borders are cool
      </Button>
    </div>
  );
}