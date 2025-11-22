import { IconKeys } from "@repo/icons";

export interface SubMenuItem {
  title: string;
  href: string;
}

export interface MenuItem {
  title: string;
  icon: IconKeys;
  href?: string;
  children?: SubMenuItem[];
}

export interface SidebarProps {
  locale: "fa" | "en" | string;
  projectTitle: string;
  projectIcon?: React.ReactNode;
  menuItems: MenuItem[];
}
