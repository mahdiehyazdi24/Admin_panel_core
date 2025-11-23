"use client";

import  { forwardRef, createElement, type ForwardedRef, type ElementType } from "react";
import type { InputBaseProps } from "./input.types";

export const InputBase = forwardRef(
  <T extends ElementType = "input">(
    { as: Component, ...props }: InputBaseProps<T>,
    ref: ForwardedRef<T>
  ) => {
    const Base = Component || "input";
    return createElement(Base, { ref, ...props });
  }
);

InputBase.displayName = "InputBase";
