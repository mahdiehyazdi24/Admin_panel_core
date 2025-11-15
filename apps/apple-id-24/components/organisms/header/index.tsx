import React from "react";
import { Icon } from "@repo/icons";
import { Button, Dropdown } from "@repo/ui";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  locale: "fa" | "en" | string;
}

const Header: React.FC<HeaderProps> = ({ locale }) => {
  const isRTL = locale === "fa";
  return (
    <div
      className={twMerge(
        "w-full flex items-center justify-between py-3 px-5 rounded-2xl bg-white",
        isRTL ? "flex-row-reverse  max-lg:pr-8" : "flex-row  max-lg:pl-8"
      )}
    >
      <Dropdown
        locale={locale}
        label={
          <div
            className={twMerge(
              "flex items-center gap-6 group cursor-pointer", 
              isRTL ? "flex-row-reverse" : "flex-row"
            )}
          >
            <div className="size-10 rounded-full bg-amber-300 text-center flex items-center justify-center">
              <span>ع ع</span>
            </div>

            <Icon
              src="ArrowBottom"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
          </div>
        }
      >
        <Dropdown.Item
          locale={locale}
          icon={<Icon src="User" />}
          onClick={() => console.log("Profile clicked")}
        >
          پروفایل
        </Dropdown.Item>

        <Dropdown.Item
          locale={locale}
          className="text-red-300 hover:bg-red-300/20"
          icon={<Icon src="Logout"  className="fill-red-500 stroke-red-500"  />}
          onClick={() => console.log("Logout clicked")}
        >
          خروج
        </Dropdown.Item>
      </Dropdown>

      <div
        className={twMerge(
          "flex items-center gap-6",
          isRTL ? "flex-row" : "flex-row-reverse"
        )}
      >
        <button>
          <Icon src="Setting" className="scale-150" />
        </button>
        <Button> پاک کردن کش</Button>
        <Button
          className={twMerge(
            "flex gap-2",
            isRTL ? "flex-row-reverse" : "flex-row"
          )}
        >
          <Icon src="Globe" className="fill-white" />
          <span className="max-md:hidden">انتخاب زبان</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
