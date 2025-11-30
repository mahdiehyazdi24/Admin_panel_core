"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  useClick,
  useHover,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react";

interface DropdownProps {
  label: React.ReactNode;
  children: React.ReactNode;
  locale?: "fa" | "en" | string;
  align?: "left" | "right";
  trigger?: "hover" | "click";
  className?: string;
}

const Dropdown: React.FC<DropdownProps> & {
  Item: React.FC<DropdownItemProps>;
} = ({
  label,
  children,
  locale = "fa",
  align = "right",
  trigger = "click",
  className
}: DropdownProps) => {
  const isRTL = locale === "fa";
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [offset(6), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
    placement:
      align === "right"
        ? isRTL
          ? "bottom-end"
          : "bottom-start"
        : isRTL
          ? "bottom-start"
          : "bottom-end",
  });

  const click = useClick(context, { enabled: trigger === "click" });
  const hover = useHover(context, {
    enabled: trigger === "hover",
    delay: { open: 100, close: 100 },
  });
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    hover,
    dismiss,
    role,
  ]);

  return (
    <div className={twMerge("w-full relative inline-block text-left",className)}>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className="w-full focus:outline-none"
      >
        {label}
      </button>

      <FloatingPortal>
        {open && (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className={twMerge(
              "mt-2 w-48 rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-2 z-50 transition"
            )}
          >
            {children}
          </div>
        )}
      </FloatingPortal>
    </div>
  );
};

interface DropdownItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  locale?: "fa" | "en" | string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  onClick,
  icon,
  locale = "fa",
  className,
}) => {
  const isRTL = locale === "fa";

  return (
    <button
      onClick={onClick}
      type="button"
      className={twMerge(
        "w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 transition",
        isRTL ? "flex-row-reverse gap-3" : "flex-row gap-3",
        className
      )}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

Dropdown.Item = DropdownItem;

export default Dropdown;
