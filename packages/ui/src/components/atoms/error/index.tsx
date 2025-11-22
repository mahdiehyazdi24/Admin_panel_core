"use client";

import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type ErrorProps = HTMLAttributes<HTMLParagraphElement>;

 const ErrorMessage = ({ className, children, ...props }: ErrorProps) => {
  if (!children) return null;

  return (
    <p
      className={twMerge("text-red-600 text-xs mt-1 leading-tight", className)}
      {...props}
    >
      {children}
    </p>
  );
};

export default ErrorMessage