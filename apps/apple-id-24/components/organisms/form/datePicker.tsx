"use client";

import { Error, Label } from "@repo/ui";
import gregorian from "react-date-object/calendars/gregorian";
import persian from "react-date-object/calendars/persian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import persian_fa from "react-date-object/locales/persian_fa";

import { Controller, UseControllerProps } from "react-hook-form";
import DatePicker, { DateObject } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { twMerge } from "tailwind-merge";

import ClearField from "./clearField";

export interface FormDatePickerProps extends Omit<UseControllerProps, "control"> {
  label?: string;
  ISO?: boolean;
  clear?: boolean;
  range?: boolean;
  withTime?: boolean;
  isGregorian?: boolean;
}

const FormDatePicker = ({
  name,
  label,
  rules,
  ISO = false,
  clear = false,
  range = false,
  withTime = false,
  isGregorian = false,
}: FormDatePickerProps) => {
  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const hasValue =
          range && Array.isArray(value) ? value.length > 0 : Boolean(value);

        return (
          <div className="my-1 flex w-full items-end">
            <div className="group relative flex w-full flex-col">
              <DatePicker
                name={name}
                value={
                  range
                    ? Array.isArray(value)
                      ? value.map((v) => new Date(v))
                      : []
                    : value
                      ? new Date(value)
                      : ""
                }
                onChange={(e) => {
                  if (!e) return onChange("");

                  if (range) {
                    const mapped = (e as DateObject[]).map((d) =>
                      ISO
                        ? d
                            .convert(gregorian, gregorian_en)
                            .toDate()
                            .toISOString()
                        : d
                            .convert(gregorian, gregorian_en)
                            .format(
                              withTime ? "YYYY/MM/DD-HH:mm:ss" : "YYYY-MM-DD"
                            )
                    );
                    return onChange(mapped);
                  }

                  const formatted = ISO
                    ? (e as DateObject)
                        .convert(gregorian, gregorian_en)
                        .toDate()
                        .toISOString()
                    : (e as DateObject)
                        .convert(gregorian, gregorian_en)
                        .format(
                          withTime ? "YYYY/MM/DD-HH:mm:ss" : "YYYY-MM-DD"
                        );

                  onChange(formatted);
                }}
                calendar={isGregorian ? gregorian : persian}
                locale={isGregorian ? gregorian_fa : persian_fa}
                format={withTime ? "YYYY/MM/DD-HH:mm:ss" : "YYYY/MM/DD"}
                range={range}
                placeholder="انتخاب کنید"
                portal
                zIndex={99999}
                plugins={
                  withTime
                    ? [
                        <TimePicker
                          key="time"
                          hideSeconds={false}
                          position="bottom"
                        />,
                      ]
                    : []
                }
                inputClass={twMerge(
                  "!bg-white !border !border-gray-300 rounded-xs h-[33px] w-full px-3 pt-2 py-[0.32rem] font-ultra-black leading-[1.6] outline-none transition-all duration-200 focus:!border-primary",
                  "placeholder-transparent",
                  error && "!border-error text-error placeholder:!text-error/50"
                )}
              />

              {label && (
                <Label
                  htmlFor={name}
                  //   error={error}
                  className={twMerge(
                    "absolute right-2 top-2.5 bg-white px-1 text-right text-gray-500 transition-all duration-200",
                    "-translate-y-5 text-xs"
                  )}
                >
                  {label}
                </Label>
              )}

              {error && <Error>{error.message || ""}</Error>}
            </div>

            <ClearField
              show={clear && hasValue}
              onCLick={() => onChange(range ? [] : "")}
            />
          </div>
        );
      }}
    />
  );
};

export default FormDatePicker;
