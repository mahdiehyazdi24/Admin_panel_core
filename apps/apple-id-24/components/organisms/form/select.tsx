"use client";

import React from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Label, Error, Select as AtomSelect } from "@repo/ui";
import ClearField from "./clearField";

type Option = { label: string; value: any };

type FormSelectProps = UseControllerProps & {
  label?: string;
  options: Option[];
  clear?: boolean;
  disabled?: boolean;
  className?: string;
  selectClass?: string;
};

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  label,
  rules,
  options,
  clear = false,
  disabled,
  className,
  selectClass,
}) => {
  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        const hasValue = Boolean(value && String(value).trim().length > 0);

        return (
          <div
            className={twMerge("relative my-1 flex w-full flex-col", className)}
          >
            <div className="relative group">
              {/* Select */}
              <AtomSelect
                id={name}
                name={name}
                value={value ?? ""}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                error={!!error}
                className={twMerge(
                  "peer w-full rounded-sm border border-gray-300 bg-white px-3",
                  "focus:border-primary outline-none transition-all",
                  error && "border-error text-error",
                  selectClass
                )}
              >
                <option value="" disabled hidden />
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </AtomSelect>

              {/* Floating Label */}
              {label && (
                <Label
                  htmlFor={name}
                  className={twMerge(`
            absolute right-3 top-0
            text-xs text-gray-600
            bg-white px-1
            -translate-y-2
            pointer-events-none
          `)}
                >
                  {label}
                </Label>
              )}

              {/* Clear button */}
              {clear && value && (
                <div className="absolute left-2 top-1/2 -translate-y-1/2">
                  <ClearField show onCLick={() => onChange("")} />
                </div>
              )}
            </div>

            {/* Error */}
            {error && <Error>{error.message || ""}</Error>}
          </div>
        );
      }}
    />
  );
};

export default FormSelect;
