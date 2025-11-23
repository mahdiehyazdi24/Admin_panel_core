"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { CheckboxBase } from "./checkboxBase";
import type { CheckboxProps } from "./checkbox.types";

const sizeMap = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
} as const;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      size = "md",
      variant = "tick",
      className,
      ...props
    },
    ref
  ) => {
    const finalId =
      id ??
      (label ? `checkbox-${Math.random().toString(36).slice(2, 9)}` : undefined);

    const baseStyle = twMerge(
      "relative inline-flex items-center justify-center rounded-sm border bg-white transition-all",
      sizeMap[size],
      props.checked ? "border-primary" : "border-gray-400"
    );

    return (
      <label
        htmlFor={finalId}
        className={twMerge("flex items-center gap-2 cursor-pointer", className)}
      >
        <span className={baseStyle}>

          <CheckboxBase
            ref={ref}
            id={finalId}
            {...props}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />

          {variant === "tick" && props.checked && (
            <svg
              className="pointer-events-none text-primary"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          {variant === "square" && props.checked && (
            <span className="block bg-primary w-2.5 h-2.5 rounded-sm" />
          )}
        </span>

        {label && <span className="text-sm">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
