import { Icon, IconKeys } from "@repo/icons";
import React from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children?: React.ReactNode;
  icon?: IconKeys;
  title?: string;
  className?: string;
  extraOptions?: React.ReactNode;
};

const Container = ({
  children,
  icon,
  title,
  className = "",
  extraOptions,
}: ContainerProps) => {
  return (
    <div className={twMerge("rounded-md bg-white p-6 shadow-lg", className)}>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-1">
          {icon && <Icon src={icon} />}
          {title && (
            <h3 className="text-xs font-bold text-gray-200">{title}</h3>
          )}
        </div>
        {extraOptions && (
          <div className="shrink-0 md:max-w-[50%]">{extraOptions}</div>
        )}
      </div>
      {children}
    </div>
  );
};

export default Container;
