"use client";

import { forwardRef, SelectHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: boolean;
};

 const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    const baseClasses =
      "w-full px-3 py-2 rounded-lg border bg-white text-sm outline-none cursor-pointer transition-all";

    const stateClasses = error
      ? "border-red-500 focus:border-red-600"
      : "border-gray-300 focus:border-primary";

    return (
      <select
        ref={ref}
        className={twMerge(baseClasses, stateClasses, className)}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = "Select";

export default Select
