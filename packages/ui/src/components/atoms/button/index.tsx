"use client";
import React, { ElementType, forwardRef, LegacyRef } from "react";
import { PulseLoader } from "react-spinners";
import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./button.type";
import { ButtonBase } from "./ButtonBase";
import { buttonStyleMap } from "./constants";
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "./generic-as-prop";

export type ButtonPropsWithAs<T extends React.ElementType = "button"> =
  PolymorphicComponentPropWithRef<T, ButtonProps>;

type ButtonComponentType = (<C extends ElementType = "button">(
  props: ButtonPropsWithAs<C>
) => React.JSX.Element) & {
  displayName?: string;
};

const Button = forwardRef<PolymorphicRef<"button">, ButtonPropsWithAs>(
  (
    {
      inverted,
      pill,
      outline,
      variant = "primary",
      className,
      children,
      loading = false,
      ...rest
    },
    ref
  ) => {
    const { base, invertedStyles, outlineStyles, loaderColor } =
      buttonStyleMap[variant];

    const selectedInverted = inverted && invertedStyles;
    const selectedOutlined = outline && outlineStyles;
    const selectedPillClassName = pill && "rounded-full";

    const mergedClassName = twMerge(
      "cursor-pointer px-4 py-2 text-sm font-bold rounded-md flex items-center justify-center transition-all duration-200",
      base,
      selectedInverted,
      selectedOutlined,
      selectedPillClassName,
      className
    );

    return (
      <ButtonBase
        ref={ref as LegacyRef<ElementType>}
        className={mergedClassName}
        {...rest}
      >
        {loading ? <PulseLoader size={5} color={loaderColor} /> : children}
      </ButtonBase>
    );
  }
) as ButtonComponentType;

Button.displayName = "Button";

export default Button;
