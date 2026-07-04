import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-sm shadow-blue-600/20 hover:shadow-md hover:shadow-blue-600/30 hover:-translate-y-0.5",
        secondary:
          "bg-white text-slate-700 border border-slate-200 shadow-sm hover:border-blue-300 hover:text-blue-600 hover:-translate-y-0.5",
        ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
        outline:
          "border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-6",
        icon: "h-9 w-9 shrink-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
