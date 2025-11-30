"use client";
import React, { useRef } from "react";
import {
  useController,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";

export interface FileInputProps
  extends Omit<UseControllerProps<any>, "control"> {
  renderTrigger: (props: {
    openFilePicker: () => void;
    file?: File | File[] | null;
    error?: string;
    clearFile: () => void;
  }) => React.ReactNode;

  accept?: string;
  multiple?: boolean;
}

const FileInput: React.FC<FileInputProps> = ({
  name,
  renderTrigger,
  accept,
  multiple,
  rules,
}) => {
  const { control, formState, setValue } = useFormContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    field: { value, onChange },
  } = useController({ name, control, rules });

  const openFilePicker = () => inputRef.current?.click();

  const clearFile = () => {
    setValue(name, multiple ? [] : null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <>
      {renderTrigger({
        openFilePicker,
        file: value,
        error: formState.errors?.[name]?.message as string,
        clearFile,
      })}

      <input
        type="file"
        ref={inputRef}
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => {
          const files = e.target.files;
          if (!files || files.length === 0) {
            onChange(multiple ? [] : null);
            return;
          }
          onChange(multiple ? Array.from(files) : files[0]);
        }}
      />
    </>
  );
};

export default FileInput;
