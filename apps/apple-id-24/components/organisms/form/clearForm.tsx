import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type Props = {
  label?: string;
  className?: string;
};

const ClearForm: FC<Props> = ({ label, className }) => {
  const { watch, reset, formState } = useFormContext();
  const values = watch();

  const hasValues = Object.values(values).some((value) => {
    if (value === undefined || value === null) return false;
    if (value === "") return false;
    if (Array.isArray(value) && value.length === 0) return false;
    return true;
  });

  const handleReset = () => {
    reset(formState.defaultValues ?? {});
  };

  return (
    <>
      {hasValues && (
        <button
          type="button"
          onClick={handleReset}
          className={twMerge(
            "text-primary hover:decoration-primary text-xs underline decoration-transparent transition-all duration-200 cursor-pointer",
            className
          )}
        >
          {label || "پاک کردن فیلتر ها"}
        </button>
      )}
    </>
  );
};

export default ClearForm;
