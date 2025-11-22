"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { RadioBase } from "./radioBase";
import type { RadioProps } from "./radio.types";

const sizeMap = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
} as const;

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ id, label, size = "md", className, ...props }, ref) => {
    const finalId =
      id ??
      (label ? `radio-${Math.random().toString(36).slice(2, 9)}` : undefined);

    return (
      <label
        htmlFor={finalId}
        className={twMerge("flex items-center gap-2 cursor-pointer", className)}
      >
        <span
          className={twMerge(
            "relative flex items-center justify-center rounded-full border bg-white transition-all",
            sizeMap[size],
            props.checked ? "border-primary" : "border-gray-400"
          )}
        >
          
          <RadioBase
            ref={ref}
            id={finalId}
            {...props}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />

          {props.checked && (
            <span className="block bg-primary rounded-full w-2 h-2 transition-all" />
          )}
        </span>

        {label && <span className="text-sm">{label}</span>}
      </label>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
