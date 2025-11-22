"use client";

import React from "react";

export const CheckboxBase = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => {
  return <input ref={ref} type="checkbox" className={className} {...props} />;
});

CheckboxBase.displayName = "CheckboxBase";
