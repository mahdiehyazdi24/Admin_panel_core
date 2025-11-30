"use client";

import React from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Error, Checkbox } from "@repo/ui";

type FormCheckboxProps = Omit<UseControllerProps, "control"> & {
  label?: string;
  className?: string;
};

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  name,
  rules,
  label,
  className,
}) => {
  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <div className={twMerge("flex flex-col gap-1", className)}>
          <div className="flex items-center gap-2">
            <Checkbox checked={!!value} onChange={onChange} />
            {label && <span className="text-sm">{label}</span>}
          </div>

          {error && <Error>message={error.message || ""}</Error>}
        </div>
      )}
    />
  );
};

export default FormCheckbox;
