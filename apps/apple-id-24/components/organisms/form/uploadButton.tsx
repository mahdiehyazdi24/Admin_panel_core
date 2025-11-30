"use client";
import React from "react";
import  { UploadButton as FileUpload  } from "@repo/ui";
import { UploadButtonProps } from "../../../../../packages/ui/src/components/molecules/uploadButton";
import { Controller, ControllerProps, useFormContext } from "react-hook-form";

export type FormUploadButtonProps = Omit<ControllerProps, "control" | "render"> &
  Omit<UploadButtonProps, "value" | "onChange">;

const UploadButton: React.FC<FormUploadButtonProps> = ({
  name,
  rules,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { invalid } }) => (
        <FileUpload
          {...props}
          variant={invalid ? "error" : props.variant}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};

export default UploadButton;
