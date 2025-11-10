import { ButtonHTMLAttributes } from "react";

export type ButtonVariants = "primary" | "secondary";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariants;
  outline?: boolean;
  inverted?: boolean;
  pill?: boolean;
  loading?: boolean;
};

export type VariantStyleMap = {
  base?: string;
  outlineStyles?: string;
  invertedStyles?: string;
  loaderColor?: string;
};

export type ButtonStyleMap = Record<ButtonVariants, VariantStyleMap>;
