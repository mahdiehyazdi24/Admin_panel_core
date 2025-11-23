import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { SubMenuItem } from "./types";

interface Props {
  isRTL: boolean;
  minimize: boolean;
  isOpen: boolean;
  pathname: string;
  childrenItems: SubMenuItem[];
  closeSidebarMobile: () => void;
}

const SidebarSubmenu: React.FC<Props> = ({
  isRTL,
  minimize,
  isOpen,
  pathname,
  childrenItems,
  closeSidebarMobile,
}) => {
  return (
    <div
      className={twMerge(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96" : "max-h-0",
        minimize && "hidden"
      )}
    >
      <ul
        className={twMerge(
          "mt-2 space-y-2 px-4 border-gray-100",
          isRTL ? "border-r" : "border-l"
        )}
      >
        {childrenItems.map((sub) => {
          const active = pathname === sub.href;

          return (
            <li key={sub.href}>
              <Link
                href={sub.href}
                onClick={closeSidebarMobile}
                className={twMerge(
                  "flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm hover:bg-gray-100 transition",
                  active && "bg-primary/10 text-primary font-semibold",
                  isRTL ? "flex-row-reverse text-right" : "flex-row text-left"
                )}
              >
                <span
                  className={twMerge(
                    "h-2 w-2 rounded-full",
                    active ? "bg-primary" : "bg-gray-400"
                  )}
                />
                <span className="flex-1">{sub.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarSubmenu;
