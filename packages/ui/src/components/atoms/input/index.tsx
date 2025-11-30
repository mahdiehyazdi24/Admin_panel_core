"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { InputBase } from "./inputBase";
import type { InputSize, InputVariant } from "./input.types";

export type InputProps = {
  variant?: InputVariant;
  size?: InputSize;
  className?: string;
  label?: string;
  id?: string;
} & React.ComponentPropsWithoutRef<"input">;

const sizeMap: Record<InputSize, string> = {
  sm: "text-sm px-2 py-1",
  md: "text-base px-3 py-2",
  lg: "text-lg px-4 py-3",
};

const variantMap: Record<InputVariant, string> = {
  default:
    "bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary rounded-md",
  ghost: "bg-transparent border-none focus:outline-none",
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { variant = "default", size = "md", className, label, id, ...props },
    ref
  ) => {
    const finalId =
      id ??
      (label ? `input-${Math.random().toString(36).slice(2, 9)}` : undefined);

    const inputClass = twMerge(
      "transition-colors placeholder:text-gray-400",
      sizeMap[size as InputSize],
      variantMap[variant],
      className
    );

    if (label) {
      return (
        <div className="flex flex-col space-y-1">
          <label
            htmlFor={finalId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <InputBase id={finalId} ref={ref} className={inputClass} {...props} />
        </div>
      );
    } else
      return (
        <InputBase id={finalId} ref={ref} className={inputClass} {...props} />
      );
  }
);

Input.displayName = "Input";

export default Input;
