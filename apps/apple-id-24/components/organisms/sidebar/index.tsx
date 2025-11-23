"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

import SidebarHeader from "./SidebarHeader";
import SidebarMobileButton from "./SidebarMobileButton";
import SidebarToggle from "./SidebarToggle";
import SidebarItem from "./SidebarItem";

import { SidebarProps, MenuItem } from "./types";

const Sidebar: React.FC<SidebarProps> = ({
  locale,
  projectTitle,
  projectIcon,
  menuItems,
}) => {
  const pathname = usePathname();
  const isRTL = locale === "fa";

  const [openMenus, setOpenMenus] = React.useState<Record<string, boolean>>({});
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [minimize, setMinimize] = React.useState(false);
  const sidebarRef = React.useRef<HTMLDivElement>(null);

  const toggleMenu = (title: string) =>
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));

  const closeSidebarMobile = () => {
    if (window.innerWidth < 768) setIsMobileOpen(false);
  };

  // Close on outside click (mobile only)
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        window.innerWidth < 768 &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Auto-open active submenu
  React.useEffect(() => {
    const parent = menuItems.find((item) =>
      item.children?.some((sub) => pathname.startsWith(sub.href))
    );

    if (parent && !openMenus[parent.title]) {
      setOpenMenus((prev) => ({ ...prev, [parent.title]: true }));
    }
  }, [pathname, menuItems, openMenus]);

  return (
    <>
      {/* Mobile toggle button */}
      <SidebarMobileButton
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={twMerge(
          "fixed z-40 flex h-full flex-col bg-white shadow-md transition-all duration-300 md:static md:translate-x-0 lg:rounded-2xl",
          isRTL ? "right-0" : "left-0",
          isMobileOpen
            ? "translate-x-0"
            : isRTL
              ? "translate-x-full"
              : "-translate-x-full",
          minimize ? "w-fit" : "min-w-[300px] md:w-64"
        )}
      >
        <SidebarToggle
          isRTL={isRTL}
          minimize={minimize}
          setMinimize={setMinimize}
        />

        <SidebarHeader
          isRTL={isRTL}
          minimize={minimize}
          projectIcon={projectIcon}
          projectTitle={projectTitle}
        />

        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            {menuItems.map((item: MenuItem) => (
              <SidebarItem
                key={item.title}
                item={item}
                isRTL={isRTL}
                minimize={minimize}
                pathname={pathname}
                openMenus={openMenus}
                toggleMenu={toggleMenu}
                closeSidebarMobile={closeSidebarMobile}
              />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
