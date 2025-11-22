import { JSX } from "react";

export type CheckboxSize = "sm" | "md" | "lg";

export type CheckboxProps = {
  id?: string;
  label?: string;
  size?: CheckboxSize;
  variant?:"tick" | "square"
  className?: string;
} & Omit<JSX.IntrinsicElements["input"], "size" | "type">;
