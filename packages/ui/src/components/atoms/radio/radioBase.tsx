"use client";

import React from "react";

export const RadioBase = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ ...props }, ref) => {
  return <input ref={ref} type="radio" {...props} />;
});

RadioBase.displayName = "RadioBase";
