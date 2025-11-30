"use client";

import React from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Error, Checkbox } from "@repo/ui";

type Option = { label: string; value: string };

type FormCheckboxGroupProps = Omit<UseControllerProps, "control"> & {
  options: Option[];
  className?: string;
};

const FormCheckboxGroup: React.FC<FormCheckboxGroupProps> = ({
  name,
  rules,
  options,
  className,
}) => {
  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field: { value = [], onChange }, fieldState: { error } }) => {
        const toggle = (val: string) => {
          if (value.includes(val)) {
            onChange(value.filter((v: string) => v !== val));
          } else {
            onChange([...value, val]);
          }
        };

        return (
          <div className="flex flex-col gap-1">
            <div className={twMerge("flex flex-col gap-2", className)}>
              {options.map((opt) => (
                <label key={opt.value} className="flex items-center gap-2">
                  <Checkbox
                    checked={value.includes(opt.value)}
                    onChange={() => toggle(opt.value)}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>

            {error && <Error>{error.message || ""}</Error>}
          </div>
        );
      }}
    />
  );
};

export default FormCheckboxGroup;
