"use client";

import { Error, Label } from "@repo/ui";
import React from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type TextareaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value" | "onChange"
> &
  Omit<UseControllerProps, "control"> & {
    label?: string;
    textareaClass?: string;
  };

const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  rules,
  className,
  textareaClass,
  ...props
}) => {
  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const hasValue = Boolean(value && String(value).trim().length > 0);

        const maxLength =
          typeof rules?.maxLength === "object"
            ? rules.maxLength.value
            : rules?.maxLength;

        return (
          <div className={twMerge("relative my-1 flex w-full flex-col", className)}>
            <div className="group relative w-full">
              {/* textarea */}
              <textarea
                id={name}
                name={name}
                rows={5}
                value={value || ""}
                onChange={onChange}
                className={twMerge(
                  `peer w-full resize-none rounded-sm border border-gray-300 
                   p-2 pr-9 pt-6 placeholder-transparent outline-none transition-all
                   duration-200 focus:border-primary`,
                  error && "border-error! text-error placeholder:text-error/50!",
                  textareaClass
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

            </div>

            {/* maxLength counter */}
            {maxLength && (
              <p
                className={twMerge(
                  "text-2xs w-full text-end text-gray-300",
                  value?.length > maxLength - 20 && "text-orange",
                  value?.length > maxLength && "text-error"
                )}
              >
                {value?.length || 0} از {maxLength} کاراکتر
              </p>
            )}

            {/* error message */}
            {error && <Error >{error.message || ""}</Error>}
          </div>
        );
      }}
    />
  );
};

export default Textarea;
