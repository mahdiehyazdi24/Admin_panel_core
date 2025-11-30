"use client";
import { Button } from "../../atoms";
import { ButtonPropsWithAs } from "../../atoms/button";
import React from "react";

export type UploadButtonProps = Omit<
  ButtonPropsWithAs,
  "children" | "onChange" | "value"
> & {
  render: (selected: boolean) => React.ReactNode;
  onChange?: (file: File | null) => void;
  value?: File | null;
  accept?: string;
};

const UploadButton: React.FC<UploadButtonProps> = ({
  render,
  onChange,
  value,
  accept,
  ...props
}) => {
  const ref = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onChange?.(file);
  };

  const openPicker = () => {
    if (ref.current) {
      // allow selecting the same file again
      ref.current.value = "";
      ref.current.click();
    }
  };

  return (
    <>
      <Button {...props} onClick={openPicker}>
        {render(!!value)}
      </Button>

      <input
        ref={ref}
        className="hidden"
        type="file"
        accept={accept}
        onChange={handleChange}
      />
    </>
  );
};

export default UploadButton;
