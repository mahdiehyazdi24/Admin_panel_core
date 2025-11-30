"use client";

import React from "react";
import {Button} from "@repo/ui";
import { twMerge } from "tailwind-merge";

export interface SubmitProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  label?: string;
}

const FormSubmit: React.FC<SubmitProps> = ({
  loading = false,
  label = "ثبت",
  className,
  ...props
}) => {
  return (
    <Button
      type="submit"
      disabled={loading}
      className={twMerge("w-full", className)}
      {...props}
    >
      {loading ? "لطفاً صبر کنید..." : label}
    </Button>
  );
};

export default FormSubmit;
