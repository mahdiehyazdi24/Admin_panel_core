import { Icon } from "@repo/icons";
import React from "react";
import { twMerge } from "tailwind-merge";

export type TagProps = {
  onClick?: () => void;
  label: string;
};


const Tag: React.FC<TagProps> = ({ label, onClick }) => {
  return (
    <div
      onClick={e => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
      className={twMerge(
        "rounded-xs bg-primary/15 group flex h-fit items-center gap-1 p-1 text-xs text-gray-600 transition-all duration-200",
        onClick && "hover:bg-error/15 hover:text-error cursor-pointer",
      )}
    >
      {label}
      {onClick && (
        <Icon
          src="Close"
          width={10}
          height={10}
          className="fill-primary group-hover:fill-error transition-all duration-200"
        />
      )}
    </div>
  );
};

export default Tag;
