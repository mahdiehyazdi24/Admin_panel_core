"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  icon: React.ReactNode;
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

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const handleToggleMobile = () => setIsMobileOpen((p) => !p);

  // Detect and open submenu if current path belongs to it
  React.useEffect(() => {
    const activeParent = menuItems.find((item) =>
      item.children?.some((sub) => pathname.startsWith(sub.href))
    );
    if (activeParent && !openMenus[activeParent.title]) {
      setOpenMenus((prev) => ({ ...prev, [activeParent.title]: true }));
    }
  }, [pathname]);

  const isRTL = locale === "fa";

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={handleToggleMobile}
        className="absolute top-4 z-50 block rounded-lg p-2 text-gray-600 hover:bg-gray-200 md:hidden"
      >
        {isMobileOpen ? <div>arrow x icon</div> : <div>arrow menu icon</div>}
      </button>

      {/* Sidebar Container */}
      <aside
        className={twMerge(
          "fixed min-w-[300px] z-40 flex h-full flex-col bg-white shadow-md transition-all duration-300 md:static md:translate-x-0 md:w-64",
          isRTL ? "right-0" : "left-0",
          isMobileOpen
            ? "translate-x-0"
            : isRTL
              ? "translate-x-full"
              : "-translate-x-full"
        )}
      >
        {/* Header / Logo */}
        <div className={twMerge("flex items-center justify-center gap-2 border-b border-gray-200 p-4 text-xl font-bold text-primary" , isRTL ? "flex-row-reverse" : "flex-row")}>
          {projectIcon && <span className="text-primary">{projectIcon}</span>}
          <span>{projectTitle}</span>
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
                  {/* Parent Menu Item */}
                  <div
                    className={twMerge(
                      "flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-gray-700 transition hover:bg-gray-100",
                      isActive && "bg-primary/10 text-primary font-semibold",
                      isRTL ? "text-right flex-row-reverse" : "text-left"
                    )}
                    onClick={() =>
                      hasChildren ? toggleMenu(item.title) : undefined
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-primary">{item.icon}</span>
                      {item.href ? (
                        <Link href={item.href} className="block w-full">
                          {item.title}
                        </Link>
                      ) : (
                        <span>{item.title}</span>
                      )}
                    </div>

                    {hasChildren && (
                      <span>
                        {isOpen ? (
                          isRTL ? (
                            <div>arrow top icon</div>
                          ) : (
                            <div>arrow down icon</div>
                          )
                        ) : isRTL ? (
                          <div>arrow left icon</div>
                        ) : (
                          <div>arrow right icon</div>
                        )}
                      </span>
                    )}
                  </div>

                  {/* Submenu */}
                  {hasChildren && (
                    <div
                      className={twMerge(
                        "overflow-hidden transition-all duration-300",
                        isOpen ? "max-h-96" : "max-h-0"
                      )}
                    >
                      <ul className="mt-1 space-y-1 border-r border-gray-100 pr-4">
                        {item.children!.map((sub) => {
                          const subActive = pathname === sub.href;
                          return (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className={twMerge(
                                  "block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100",
                                  subActive &&
                                    "bg-primary/10 text-primary font-medium"
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
