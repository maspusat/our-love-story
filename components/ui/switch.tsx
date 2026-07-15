"use client";

import * as React from "react";
import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "relative inline-flex h-7 w-12 cursor-pointer items-center rounded-full bg-gray-300 transition-colors data-[checked]:bg-rose-500",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "block h-5 w-5 translate-x-1 rounded-full bg-white shadow transition-transform data-[checked]:translate-x-6"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };