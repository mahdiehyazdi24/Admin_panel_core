"use client";

import React, { useRef, useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface DropdownProps {
  label: React.ReactNode;
  children: React.ReactNode;
  locale?: "fa" | "en" | string;
  align?: "left" | "right";
  trigger?: "hover" | "click"; 
}

const Dropdown: React.FC<DropdownProps> & {
  Item: React.FC<DropdownItemProps>;
} = ({ label, children, locale = "fa", align = "right", trigger = "click" }: DropdownProps) => {
  const isRTL = locale === "fa";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger !== "click") return;

    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [trigger]);

  return (
    <div
      ref={ref}
      className="relative inline-block text-left"
      onMouseEnter={() => trigger === "hover" && setOpen(true)}
      onMouseLeave={() => trigger === "hover" && setOpen(false)}
    >
      <button
        onClick={() => trigger === "click" && setOpen((prev) => !prev)}
        className="focus:outline-none"
      >
        {label}
      </button>

      {open && (
        <div
          className={twMerge(
            "absolute mt-2 w-48 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-2 z-50 transition",
            align === "right"
              ? isRTL
                ? "right-0"
                : "left-0"
              : isRTL
                ? "left-0"
                : "right-0"
          )}
        >
          {children}
        </div>
      )}
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
  className
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
