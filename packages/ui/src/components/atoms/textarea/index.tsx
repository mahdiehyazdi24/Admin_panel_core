"use client";

import { forwardRef, TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    const baseClasses =
      "w-full px-3 py-2 rounded-lg border bg-white text-sm outline-none transition-all";

    const stateClasses = error
      ? "border-red-500 focus:border-red-600"
      : "border-gray-300 focus:border-primary";

    return (
      <textarea
        ref={ref}
        className={twMerge(baseClasses, stateClasses, className)}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
