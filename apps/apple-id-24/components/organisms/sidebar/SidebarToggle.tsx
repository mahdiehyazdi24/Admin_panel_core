import React from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "@repo/icons";

interface Props {
  isRTL: boolean;
  minimize: boolean;
  setMinimize: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarToggle: React.FC<Props> = ({ isRTL, minimize, setMinimize }) => {
  return (
    <button
      onClick={() => setMinimize((x) => !x)}
      className={twMerge(
        "bg-primary absolute flex items-center justify-center rounded-full max-lg:hidden transition",
        minimize ? "top-8 h-7 w-7" : "top-7 h-10 w-10",
        isRTL
          ? minimize
            ? "-left-4"
            : "-left-5 rotate-180"
          : minimize
            ? "-right-4 rotate-180"
            : "-right-5"
      )}
    >
      <Icon
        src="ArrowLeftBold"
        className="fill-white stroke-white"
        width={minimize ? 8 : 12}
      />
    </button>
  );
};

export default SidebarToggle;
