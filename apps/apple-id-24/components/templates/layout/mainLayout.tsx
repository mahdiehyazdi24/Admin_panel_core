"use client";

import React from "react";
import type { MenuItem } from "../../organisms/sidebar";
import { Header, Sidebar } from "../../organisms";
import { ScaleLoader } from "react-spinners";
import { twMerge } from "tailwind-merge";
import { Icon } from "@repo/icons";

interface Role {
  is_client?: boolean;
  [key: string]: any;
}

interface MainLayoutProps {
  children: React.ReactNode;
  loading: boolean | null;
  role?: Role | null;
  locale: "fa" | "en" | string;
  menuItems: MenuItem[]
}

const pushToClient = () => {
  if (typeof window !== "undefined") {
    window.location.replace("/");
  }
};

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  loading,
  role,
  locale,
  menuItems,
}) => {
  React.useEffect(() => {
    if (!loading && role?.is_client && window.location.pathname !== "/") {
      setTimeout(pushToClient, 1000);
    }
  }, [loading, role]);

  if (loading === null || !role) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <ScaleLoader color="#7557e9" className="scale-[2] md:scale-[3]" />
      </div>
    );
  }

  if (role.is_client) {
    return (
      <div className="container my-20">
        {/* <Alert title="خطای دسترسی" variant="danger" className="bg-error text-white">
          <div className="flex flex-col items-start justify-between gap-y-3 sm:flex-row sm:items-center">
            شما دسترسی لازم برای استفاده از سایت ادمین را ندارید.
            <Button
              onClick={pushToClient}
              variant="warning"
              className="bg-yellow-500 font-bold text-white"
            >
              بازگشت
            </Button>
          </div>
        </Alert> */}
        شما دسترسی لازم برای استفاده از سایت ادمین را ندارید.
      </div>
    );
  }

  

  return (
    <div
      className={twMerge(
        "flex min-h-screen bg-gray-100 text-gray-800 lg:p-10 gap-5 lg:gap-10",
        locale === "fa" ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Sidebar
        locale={locale}
        projectTitle="اپل آیدی ۲۴"
        projectIcon={<Icon src="Apple" className="scale-150 fill-primary" />}
        menuItems={menuItems}
      />
      <div className="flex w-full flex-col gap-10 lg:gap-20">
        <Header locale={locale} />
        <main className={twMerge("", locale === "fa" ? "lg:mr-0" : "lg:ml-0")}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
