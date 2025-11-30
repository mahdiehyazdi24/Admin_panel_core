"use client";

import { Error, Input as AtomInput, Label } from "@repo/ui";
import ClearField from "./clearField";
import { Controller, UseControllerProps } from "react-hook-form";
import React from "react";
import { twMerge } from "tailwind-merge";

type FormInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "size"
> &
  Omit<UseControllerProps, "control"> & {
    label?: string;
    inputClass?: string;
    clear?: boolean;
    wrapperClass?: string;
  };

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  rules,
  type = "text",
  className,
  inputClass,
  clear = false,
  wrapperClass,
  ...props
}) => {
  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const hasValue = Boolean(value && String(value).trim().length > 0);

        return (
          <div className={twMerge("relative my-1 flex w-full flex-col", wrapperClass)}>
            <div className="group relative w-full">
              {/* ATOM input */}
              <AtomInput
                id={name}
                name={name}
                type={type}
                value={value ?? ""}
                onChange={onChange}
                className={twMerge(
                  `peer w-full rounded-sm border border-gray-300 p-2 pr-5 
                   placeholder-transparent outline-none transition-all duration-200
                   focus:border-primary`,
                  error && "border-error text-error placeholder:text-error/50",
                  inputClass
                )}
                {...props}
              />

              {/* floating label */}
              {label && (
                <Label
                  htmlFor={name}
                //   error={error}
                  className={twMerge(
                    `pointer-events-none absolute right-2 top-2.5 origin-right 
                     transform bg-white px-1 text-gray-500 transition-all duration-200
                     peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-primary`,
                    hasValue && "-translate-y-5 text-xs"
                  )}
                >
                  {label}
                </Label>
              )}

              {/* Clear button */}
              {clear && (
                <div className="absolute left-2 top-2.5">
                  <ClearField show={hasValue} onCLick={() => onChange("")} />
                </div>
              )}
            </div>

            {/* error */}
            {error && <Error  >{error.message || ""}</Error>}
          </div>
        );
      }}
    />
  );
};

export default FormInput;
