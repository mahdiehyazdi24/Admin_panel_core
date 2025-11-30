"use client";

import React from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Error, Radio } from "@repo/ui";

type Option = { label: string; value: string };

type FormRadioButtonProps = Omit<UseControllerProps, "control"> & {
  options: Option[];
  className?: string;
};

const FormRadioButton: React.FC<FormRadioButtonProps> = ({
  name,
  options,
  rules,
  className,
}) => {
  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <div className={twMerge("flex flex-col gap-1", className)}>
          <div className="flex flex-col gap-2">
            {options.map((opt) => (
              <label key={opt.value} className="flex items-center gap-2">
                <Radio
                  checked={value === opt.value}
                  onChange={() => onChange(opt.value)}
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>

          {error && <Error>{error.message || ""}</Error>}
        </div>
      )}
    />
  );
};

export default FormRadioButton;
