"use client";

import React from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Error, Switch } from "@repo/ui";

type FormSwitchProps = Omit<UseControllerProps, "control"> & {
  label?: string;
  className?: string;
};

const FormSwitch: React.FC<FormSwitchProps> = ({
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
          <Switch
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
            label={label}
          />

          {error && <Error>{error.message || ""}</Error>}
        </div>
      )}
    />
  );
};

export default FormSwitch;
