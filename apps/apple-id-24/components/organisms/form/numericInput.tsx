"use client";

import React, { useId } from "react";
import {
  Controller,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { twMerge } from "tailwind-merge";

import { Label, Error } from "@repo/ui";
import { InputBase } from "../../../../../packages/ui/src/components/atoms/input/inputBase";
import ClearField from "./clearField";

type Props = NumericFormatProps &
  Omit<UseControllerProps, "control"> & {
    label?: string;
    clear?: boolean;
    percent?: boolean;
    stringValue?: boolean;
    className?: string; // wrapper class
    inputClass?: string; // input class forwarded to atom
  };

const NumericInput: React.FC<Props> = ({
  name,
  rules,
  defaultValue,
  className,
  inputClass,
  label,
  percent = false,
  clear = false,
  stringValue = false,
  ...props
}) => {
  const { control } = useFormContext();
  const reactId = useId();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const hasValue =
          value !== undefined &&
          value !== null &&
          String(value).toString().trim().length > 0;

        return (
          <div className={twMerge("relative my-1 flex items-end", className)}>
            <div className={twMerge("relative flex w-full flex-col")}>
              <div className="relative w-full">
                <NumericFormat
                  // ensure left-to-right numeric input for numbers
                  dir="ltr"
                  // allow numeric separators (you can adjust if needed)
                  allowedDecimalSeparators={[".", ","]}
                  // percent suffix if needed
                  suffix={percent ? "%" : undefined}
                  // when user types, update RHF
                  onValueChange={({ floatValue, value: strValue }) => {
                    // handle percent constraint (0 - 100)
                    if (percent) {
                      if (
                        floatValue === undefined ||
                        (floatValue >= 0 && floatValue <= 100)
                      ) {
                        onChange(stringValue ? strValue : (floatValue ?? null));
                      }
                    } else {
                      onChange(stringValue ? strValue : (floatValue ?? null));
                    }
                  }}
                  // allow/disallow values
                  isAllowed={({ floatValue }) =>
                    percent
                      ? floatValue === undefined ||
                        (floatValue >= 0 && floatValue <= 100)
                      : true
                  }
                  value={value ?? ""}
                  id={`${name}-${reactId}`}
                  name={name}
                  // use your atom Input for visuals
                  customInput={InputBase}
                  // placeholder empty so peer works
                  placeholder=""
                  className={twMerge(
                    `peer placeholder-transparent transition-colors peer w-full rounded-sm border border-gray-300 p-2 pr-5 
                    outline-none duration-200
                   focus:border-primary`,
                    inputClass
                  )}
                  {...(props as NumericFormatProps)}
                />

                {/* Floating Label */}
                {label && (
                  <Label
                    htmlFor={`${name}-${reactId}`}
                    // error={error}
                    className={twMerge(
                      "pointer-events-none absolute right-2 top-2.5 origin-right transform bg-white px-1 text-right transition-all duration-200 ease-out",
                      hasValue || value === 0 ? "-translate-y-5 text-xs" : "",
                      "peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-primary"
                    )}
                  >
                    {label}
                  </Label>
                )}
              </div>

              {/* Error */}
              {error && <Error>{error.message || ""}</Error>}
            </div>

            {/* ClearField */}
            <div className="ml-2">
              <ClearField
                show={clear && !!hasValue}
                onCLick={() => onChange("")}
              />
            </div>
          </div>
        );
      }}
    />
  );
};

export default NumericInput;
