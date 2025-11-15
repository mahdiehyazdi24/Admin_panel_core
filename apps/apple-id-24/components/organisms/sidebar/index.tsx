"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Icon, IconKeys } from "@repo/icons";

interface SubMenuItem {
  title: string;
  href: string;
}

export interface MenuItem {
  title: string;
  icon: IconKeys;
  href?: string;
  children?: SubMenuItem[];
}

interface SidebarProps {
  locale: "fa" | "en" | string;
  projectTitle: string;
  projectIcon?: React.ReactNode;
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({
  locale,
  projectTitle,
  projectIcon,
  menuItems,
}) => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = React.useState<Record<string, boolean>>({});
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [minimize, setMinimize] = React.useState(false);
  const sidebarRef = React.useRef<HTMLDivElement>(null);

  const isRTL = locale === "fa";

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const closeSidebarMobile = () => {
    if (window.innerWidth < 768) setIsMobileOpen(false);
  };

  // Close on click outside (mobile only)
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
    const activeParent = menuItems.find((item) =>
      item.children?.some((sub) => pathname.startsWith(sub.href))
    );
    if (activeParent && !openMenus[activeParent.title]) {
      setOpenMenus((prev) => ({ ...prev, [activeParent.title]: true }));
    }
  }, [pathname, menuItems, openMenus]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="absolute top-4 z-50 block rounded-lg p-2 text-gray-600 hover:bg-gray-200 md:hidden"
      >
        {!isMobileOpen && <Icon src="Menu" />}
      </button>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={twMerge(
          "fixed  z-40 flex h-full flex-col bg-white shadow-md transition-all duration-300 md:static md:translate-x-0  lg:rounded-2xl",
          isRTL ? "right-0" : "left-0",
          isMobileOpen
            ? "translate-x-0"
            : isRTL
              ? "translate-x-full"
              : "-translate-x-full",
          minimize ? "w-fit" : "min-w-[300px] md:w-64"
        )}
      >
        {minimize ? (
          <button
            onClick={() => setMinimize((x) => !x)}
            className={twMerge(
              "bg-primary absolute top-8 flex h-7 w-7 items-center justify-center rounded-full max-lg:hidden",
              locale === "fa" ? "-left-4" : "-right-4 rotate-180"
            )}
          >
            <Icon
              src="ArrowLeftBold"
              className="fill-white stroke-white"
              width={8}
            />
          </button>
        ) : (
          <button
            onClick={() => setMinimize((x) => !x)}
            className={twMerge(
              "bg-primary absolute top-7 flex h-10 w-10 items-center justify-center rounded-full max-lg:hidden",
              locale === "fa" ? "-left-5 rotate-180" : "-right-5"
            )}
          >
            <Icon
              src="ArrowLeftBold"
              className="fill-white stroke-white"
              width={12}
            />
          </button>
        )}
        {/* Header */}
        <div
          className={twMerge(
            "flex items-center justify-center gap-2 border-b border-gray-200 p-4 text-xl font-bold text-primary",
            isRTL ? "flex-row-reverse" : "flex-row"
          )}
        >
          {projectIcon && <span>{projectIcon}</span>}
          <span className={twMerge(minimize ? "hidden" : "")}>
            {projectTitle}
          </span>
        </div>

        {/* Menu List */}
        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const isActive =
                pathname === item.href ||
                item.children?.some((sub) => pathname === sub.href);

              const hasChildren = !!item.children?.length;
              const isOpen = openMenus[item.title];

              return (
                <li key={item.title}>
                  {/* Parent item */}
                  <div
                    className={twMerge(
                      "flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-100 transition",
                      isActive && "bg-primary/10 text-primary font-semibold",
                      isRTL ? "flex-row-reverse" : "flex-row"
                    )}
                    onClick={() => {
                      if (hasChildren) toggleMenu(item.title);
                      else closeSidebarMobile();
                    }}
                  >
                    <div
                      className={twMerge(
                        "flex items-center gap-3",
                        isRTL ? "flex-row-reverse" : "flex-row"
                      )}
                    >
                      <Icon
                        src={item.icon}
                        className={twMerge(
                          "size-5 transition",
                          isActive ? " stroke-primary" : ""
                        )}
                      />

                      {item.href ? (
                        <Link
                          href={item.href}
                          className={twMerge(
                            "block w-full",
                            minimize ? "hidden" : ""
                          )}
                          onClick={closeSidebarMobile}
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <span className={twMerge(minimize ? "hidden" : "")}>
                          {item.title}
                        </span>
                      )}
                    </div>

                    {hasChildren && (
                      <Icon
                        src="ArrowBottom"
                        className={twMerge(minimize ? "hidden" : "")}
                      />
                    )}
                  </div>

                  {/* Submenu */}
                  {hasChildren && (
                    <div
                      className={twMerge(
                        "overflow-hidden transition-all duration-300",
                        isOpen ? "max-h-96" : "max-h-0",
                        minimize ? "hidden" : ""
                      )}
                    >
                      <ul
                        className={twMerge(
                          "mt-2 space-y-2 px-4 border-gray-100",
                          isRTL ? "border-r" : "border-l"
                        )}
                      >
                        {item.children?.map((sub) => {
                          const subActive = pathname === sub.href;

                          return (
                            <li
                              key={sub.href}
                              className={twMerge(
                                "flex items-center gap-3",
                                isRTL ? "flex-row-reverse" : "flex-row"
                              )}
                            >
                              <span
                                className={twMerge(
                                  "h-2 w-2 rounded-full",
                                  subActive ? "bg-primary" : "bg-gray-400"
                                )}
                              ></span>

                              <Link
                                href={sub.href}
                                onClick={closeSidebarMobile}
                                className={twMerge(
                                  "block rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 flex-1",
                                  subActive &&
                                    "bg-primary/10 text-primary font-semibold",
                                  isRTL ? "text-right" : "text-left"
                                )}
                              >
                                {sub.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
