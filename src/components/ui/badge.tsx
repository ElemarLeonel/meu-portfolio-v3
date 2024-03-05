import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-slate-200 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-orange-500 to-orange-300 px-6 py-1.5 text-base text-orange-900 font-medium font-circularstd border-[1.5px] border-orange-600 rounded-full",
        outline:
          "bg-blue-900 text-white uppercase font-medium px-6 py-1.5 text-base font-circularstd border border-orange-600 rounded-full",
        icon: "bg-blue-600 text-white font-circularstd px-6 py-3 border-[3px] border-blue-600 rounded-full px-6 py-3 gap-2.5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
