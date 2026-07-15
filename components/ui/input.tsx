import * as React from "react";

import { cn } from "@/lib/utils";

type InputProps =
  React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      className,
      type,
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors",
          "placeholder:text-muted-foreground",
          "focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };