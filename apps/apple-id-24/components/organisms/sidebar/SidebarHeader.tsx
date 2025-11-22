import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  isRTL: boolean;
  minimize: boolean;
  projectIcon?: React.ReactNode;
  projectTitle: string;
}

const SidebarHeader: React.FC<Props> = ({
  isRTL,
  minimize,
  projectIcon,
  projectTitle,
}) => {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center gap-2 border-b border-gray-200 p-4 text-xl font-bold text-primary",
        isRTL ? "flex-row-reverse" : "flex-row"
      )}
    >
      {projectIcon && <span>{projectIcon}</span>}
      {!minimize && <span>{projectTitle}</span>}
    </div>
  );
};

export default SidebarHeader;
