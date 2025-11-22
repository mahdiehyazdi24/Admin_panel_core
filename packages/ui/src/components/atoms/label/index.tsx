"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import type { LabelProps, LabelVariant, LabelSize } from "./label.types";

const variantMap: Record<LabelVariant, string> = {
  default: "text-gray-700",
  muted: "text-gray-500",
  error: "text-red-600",
};

const sizeMap: Record<LabelSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

 const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={twMerge(
          "font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          variantMap[variant],
          sizeMap[size],
          className
        )}
        {...props}
      />
    );
  }
);

Label.displayName = "Label";

export default Label
