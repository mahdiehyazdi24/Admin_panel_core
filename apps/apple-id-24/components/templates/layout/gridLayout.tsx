"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "@repo/icons";

type GridLayoutProps = {
  division?: 2 | 3;            // 2 or 3 part layout
  children: React.ReactNode;   // first is left panel, second is main content
  flexColReverse?: boolean;    // mobile column reverse
};

const GridLayout = ({
  children,
  division = 3,
  flexColReverse = false,
}: GridLayoutProps) => {
  const childrenArray = React.Children.toArray(children);
  const [open, setOpen] = useState(true);

  const handleToggle = () => setOpen((prev) => !prev);

  const isThreePart = division === 3;

  return (
    <div
      className={twMerge(
        flexColReverse
          ? "flex flex-col-reverse xl:grid xl:grid-cols-12"
          : "grid grid-cols-12",
        open ? "lg:gap-12" : "lg:gap-0",
        "gap-3 md:gap-4 overflow-x-clip transition-all duration-300"
      )}
    >
      {/* LEFT PANEL */}
      <div
        className={twMerge(
          "col-span-12 transition-all duration-300",
          isThreePart
            ? open
              ? "xl:col-span-3"
              : "xl:col-span-1"
            : "xl:col-span-6"
        )}
      >
        {/* Slide / collapse container */}
        <div
          className={twMerge(
            "relative transition-all duration-300 ease-linear",
            !open && "xl:translate-x-full"
          )}
        >
          {/* COLLAPSE BUTTON ONLY FOR 3-PANEL MODE */}
          {isThreePart && (
            <button
              onClick={handleToggle}
              className={twMerge(
                "absolute hidden xl:flex items-center justify-center xl:-left-7 xl:top-0 xl:py-10",
                open
                  ? "h-full w-10 rounded-l-md bg-linear-to-r from-white/50 to-white"
                  : "h-fit w-7 bg-white rounded-l-xs"
              )}
            >
              <Icon
                src="ArrowRightBold"
                className={twMerge(
                  "scale-75 stroke-gray-200 transition-transform duration-300",
                  !open && "rotate-180"
                )}
              />
            </button>
          )}

          {/* Left content */}
          <div className="overflow-x-clip xl:p-5">{childrenArray[0]}</div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div
        className={twMerge(
          "col-span-12 min-w-[200px] md:min-w-full transition-all duration-300",
          isThreePart
            ? open
              ? "xl:col-span-9"
              : "xl:col-span-11"
            : "xl:col-span-6"
        )}
      >
        {childrenArray[1]}
      </div>
    </div>
  );
};

export default GridLayout;
