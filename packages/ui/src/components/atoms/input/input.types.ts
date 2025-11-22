import type { ComponentPropsWithoutRef, ElementType } from "react";

export type InputBaseProps<T extends ElementType = "input"> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export type InputVariant = "default" | "ghost";
export type InputSize = "sm" | "md" | "lg";