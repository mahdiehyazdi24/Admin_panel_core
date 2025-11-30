"use client";

import { Input, Tag } from "@repo/ui";
import { Icon } from "@repo/icons";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { PulseLoader } from "react-spinners";
import FormCheckBoxGroup from "./checkboxGroup";

type Props = {
  options: { label: string; value: string }[];
  name: string;
  loaderRef: React.RefObject<HTMLDivElement>;
  hasMore: boolean;
};

const GridBoxMultiSelect: React.FC<Props> = props => {
  return (
    <div className="w-full">
      <SelectedItems name={props.name} options={props.options} />
      <Options {...props} />
    </div>
  );
};

type SelectedItemsProps = Pick<Props, "options" | "name">;

const SelectedItems: React.FC<SelectedItemsProps> = ({ name, options }) => {
  const form = useFormContext();
  const { watch, setValue } = form;
  const items = watch(name) as string[];

  return (
    <div className="rounded-xs mb-2 flex min-h-10 flex-wrap items-center gap-2 border border-gray-300 p-1">
      {items?.length ? (
        items.map((value, index) => (
          <Tag
            key={index}
            onClick={() => {
              setValue(
                name,
                items.filter(item => item !== value),
              );
            }}
            label={options?.find(item => item.value == value)?.label || "-"}
          />
        ))
      ) : (
        <p className="text-neutral-300">انتخاب کنید</p>
      )}
    </div>
  );
};

const Options: React.FC<Props> = ({ hasMore, loaderRef, name, options }) => {
  const [search, setSearch] = useState("");
  const filteredOptions = options.filter(e => e.label.includes(search));
  return options ? (
    <>
      <div className="relative mb-1">
        <Icon
          src="Search"
          className="absolute right-4 top-2/4 -translate-y-2/4"
        />
        <Input
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="h-10 pr-8"
        />
      </div>
      <div className="rounded-xs [&>:nth-child(even)]:bg-primary/15 md:[&>:nth-child(4n)]:!bg-primary/15 md:[&>:nth-child(4n-1)]:bg-primary/15 flex flex-col max-h-72 gap-2 overflow-y-auto border  md:[&>:nth-child(even)]:bg-transparent">
        <FormCheckBoxGroup
          key={name}
          // firstMeansAll
          name={name}
          className="rounded-xs w-full grid md:grid-cols-2 gap-3 p-1"
          options={filteredOptions}
        />
        {hasMore && (
          <div ref={loaderRef} className="flex items-center justify-center p-2">
            <PulseLoader color="#7557e9" size={5} />
          </div>
        )}
      </div>
    </>
  ) : (
    <div className="my-20 flex items-center justify-center">
      <PulseLoader color="#7557e9" />
    </div>
  );
};

export default GridBoxMultiSelect;
