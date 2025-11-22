import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Icon } from "@repo/icons";
import SidebarSubmenu from "./SidebarSubmenu";
import { MenuItem } from "./types";

interface Props {
  item: MenuItem;
  isRTL: boolean;
  minimize: boolean;
  pathname: string;
  openMenus: Record<string, boolean>;
  toggleMenu: (title: string) => void;
  closeSidebarMobile: () => void;
}

const SidebarItem: React.FC<Props> = ({
  item,
  isRTL,
  minimize,
  pathname,
  openMenus,
  toggleMenu,
  closeSidebarMobile,
}) => {
  const active =
    pathname === item.href ||
    item.children?.some((sub) => pathname === sub.href);

  const hasChildren = !!item.children?.length;
  const isOpen = openMenus[item.title];

  const baseClasses = twMerge(
    "flex items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-100 transition cursor-pointer",
    active && "bg-primary/10 text-primary font-semibold",
    isRTL ? "flex-row-reverse" : "flex-row"
  );

  const content = (
    <div
      className={twMerge(
        "flex items-center gap-3",
        isRTL ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Icon
        src={item.icon}
        className={twMerge("size-5", active && "stroke-primary")}
      />
      {!minimize && <span>{item.title}</span>}
    </div>
  );

  const arrow = hasChildren && !minimize && <Icon src="ArrowBottom" />;

  return (
    <li>
      {/* Item behavior */}
      {hasChildren ? (
        <div className={baseClasses} onClick={() => toggleMenu(item.title)}>
          {content}
          {arrow}
        </div>
      ) : (
        <Link
          href={item.href!}
          onClick={closeSidebarMobile}
          className={baseClasses}
        >
          {content}
          {arrow}
        </Link>
      )}

      {/* Submenu */}
      {hasChildren && (
        <SidebarSubmenu
          isRTL={isRTL}
          minimize={minimize}
          isOpen={Boolean(isOpen)}
          pathname={pathname}
          childrenItems={item.children!}
          closeSidebarMobile={closeSidebarMobile}
        />
      )}
    </li>
  );
};

export default SidebarItem;
