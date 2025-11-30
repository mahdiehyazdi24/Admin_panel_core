"use client";

import React from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import FormInput from "./input";
import FormTextarea from "./textarea";
import FormSelect from "./select";
import FormCheckbox from "./checkbox";
import FormCheckboxGroup from "./checkboxGroup";
import FormRadioButton from "./radio";
import FormSwitch from "./switch";
import FormDatePicker from "./datePicker";
import FormSubmit from "./submit";
import FileInput from "./fileInput";
import ClearForm from "./clearForm";
import UploadButton from "./uploadButton";
import Title from "./title";
import NumericInput from "./numericInput";
import GroupSelect from "./groupSelect";
import GridBoxMultiSelect from "./gridBoxMultiSelect";
import { twMerge } from "tailwind-merge";

export interface FormProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  onSubmit?: (data: TFieldValues) => void;
}

const Form = <TFieldValues extends FieldValues>({
  form,
  children,
  onSubmit,
  className,
  ...props
}: React.PropsWithChildren<FormProps<TFieldValues>> &
  Omit<React.HTMLAttributes<HTMLFormElement>, "onSubmit">) => {
  const onSubmitWrapper = (values: TFieldValues) => {
    onSubmit?.(values);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitWrapper)}
        className={twMerge("flex flex-col gap-5", className)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Object.assign(Form, {
  Input: FormInput,
  Select: FormSelect,
  Checkbox: FormCheckbox,
  CheckboxGroup: FormCheckboxGroup,
  Radio: FormRadioButton,
  Textarea: FormTextarea,
  Switch: FormSwitch,
  DatePicker: FormDatePicker,
  Submit: FormSubmit,
  File:FileInput,
  Clear:ClearForm,
  UploadButton,
  Title,
  NumericInput,
  GroupSelect,
  GridBoxMultiSelect
});
