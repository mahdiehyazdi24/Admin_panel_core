import React from "react";
import { Icon } from "@repo/icons";

interface Props {
  isMobileOpen: boolean;
  setIsMobileOpen: (v: boolean) => void;
}

const SidebarMobileButton: React.FC<Props> = ({
  isMobileOpen,
  setIsMobileOpen,
}) => (
  <button
    onClick={() => setIsMobileOpen(true)}
    className="absolute top-4 z-50 block rounded-lg p-2 text-gray-600 hover:bg-gray-200 md:hidden"
  >
    {!isMobileOpen && <Icon src="Menu" />}
  </button>
);

export default SidebarMobileButton;
