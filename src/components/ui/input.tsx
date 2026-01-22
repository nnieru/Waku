import * as React from "react";
import { cn } from "~/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 w-full min-w-0 px-3 py-1 text-base transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default:
          "border-input h-9 rounded-md border shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        brutalist:
          "border-2 border-foreground h-14 rounded-xl font-bold bg-background focus:shadow-[4px_4px_0px_0px_var(--foreground)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface InputProps
  extends React.ComponentProps<"input">, VariantProps<typeof inputVariants> {}

function Input({ className, variant, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Input };
