"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type SwitchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label?: string;
};

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label
        className={twMerge(
          "relative flex items-center gap-2 cursor-pointer",
          className
        )}
      >
        <input type="checkbox" ref={ref} className=" sr-only peer" {...props} />

        <div
          className={twMerge(
            " w-12 h-6 rounded-full bg-gray-300 transition-colors",
            "peer-checked:bg-primary"
          )}
        />

        <div
          className={twMerge(
            "absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform transform",
            "peer-checked:translate-x-6"
          )}
        />

        {label && <span className="text-sm">{label}</span>}
      </label>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
