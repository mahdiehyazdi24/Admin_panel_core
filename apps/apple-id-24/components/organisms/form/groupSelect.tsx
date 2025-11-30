"use client";

import { Input, Label, Tag, Dropdown } from "@repo/ui";
import { Icon } from "@repo/icons";
import React, {
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useState,
} from "react";
import { useFormContext } from "react-hook-form";
import { PulseLoader } from "react-spinners";
import { twMerge } from "tailwind-merge";
import Form from ".";
import ClearField from "./clearField";

type GroupSelectProps = {
  options: {
    label: string;
    value: string;
    className?: string;
    disabled?: boolean;
    component?: ReactNode;
  }[];
  name: string;
  label: string;
  className?: string;
  loaderRef?: RefObject<HTMLDivElement>;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  clear?: boolean;
  tagView?: boolean;
  searchable?: boolean;
};

const GroupSelect: React.FC<GroupSelectProps> = ({
  label,
  name,
  options,
  loaderRef,
  className,
  setOpen: externalSetOpen,
  clear = false,
  tagView = false,
  searchable = true,
}) => {
  const [open, setOpen] = useState(false);
  const { watch, setValue } = useFormContext();
  const [search, setSearch] = useState("");

  const selectedOptions = (watch(name) || []) as string[];
  const hasValue = selectedOptions.length > 0;

  const filterOptions = () => {
    if (!search) return options;
    return options.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className={twMerge("w-full relative m-1", className)}>
      <Dropdown
        trigger="click"
        align="right"
        label={
          <div className="group relative flex w-full items-end">
            <div
              className={twMerge(
                "rounded-xs peer relative flex h-fit min-h-10 max-h-20 w-full flex-wrap items-center gap-2 overflow-y-auto border border-gray-300 bg-white px-3 pb-1 pr-8 pt-2.5 text-sm leading-[1.6] text-black outline-none transition-all duration-200",
                open && "border-primary"
              )}
            >
              {hasValue ? (
                tagView ? (
                  selectedOptions.map((value) => (
                    <Tag
                      key={value}
                      label={
                        options.find((option) => option.value === value)
                          ?.label || ""
                      }
                      onClick={() =>
                        setValue(
                          name,
                          selectedOptions.filter((option) => option !== value)
                        )
                      }
                    />
                  ))
                ) : (
                  <p>
                    {selectedOptions
                      .map(
                        (value) =>
                          options.find((option) => option.value === value)
                            ?.label || ""
                      )
                      .join(", ")}
                  </p>
                )
              ) : null}

              <Icon
                className={twMerge(
                  "absolute left-2 top-1/2 -translate-y-1/2 rotate-0 transition-all duration-200",
                  open && "rotate-180"
                )}
                src="ArrowBottom"
                width={10}
              />
            </div>

            {label && (
              <Label
                htmlFor={name}
                className={twMerge(
                  `group-focus-within:text-primary pointer-events-none absolute right-2 top-2.5 origin-right transform bg-white text-right transition-all duration-200 ease-out group-focus-within:-translate-y-5 group-focus-within:text-xs`,
                  (hasValue || open) && "-translate-y-5 text-xs"
                )}
              >
                {label}
              </Label>
            )}

            <ClearField
              show={clear && hasValue}
              onCLick={() => setValue(name, [])}
            />
          </div>
        }
      >
        {searchable && (
          <div className="w-full relative">
            <Icon
              src="Search"
              className="absolute right-1 top-2/4 -translate-y-2/4"
            />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10"
            />
          </div>
        )}

        <Form.CheckboxGroup
          name={name}
          className="p-1"
          options={filterOptions()}
        />

        {loaderRef && (
          <div ref={loaderRef} className="flex items-center justify-center p-3">
            <PulseLoader color="#7557e9" size={5} />
          </div>
        )}
      </Dropdown>
    </div>
  );
};

export default GroupSelect;
