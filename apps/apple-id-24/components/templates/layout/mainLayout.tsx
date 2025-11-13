"use client";

import React from "react";
import { Header, Sidebar } from "../../organisms";
import { ScaleLoader } from "react-spinners";
import { twMerge } from "tailwind-merge";

interface Role {
  is_client?: boolean;
  [key: string]: any;
}

interface MainLayoutProps {
  children: React.ReactNode;
  loading: boolean | null;
  role?: Role | null;
  locale: "fa" | "en" | string;
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

  const menuItems = [
    {
      title: "Dashboard",
      icon: <div>icon</div>,
      href: "/admin",
    },
    {
      title: "Users",
      icon: <div>icon</div>,
      children: [
        { title: "All Users", href: "/admin/users" },
        { title: "Roles", href: "/admin/users/roles" },
      ],
    },
    {
      title: "Settings",
      icon: <div>icon</div>,
      href: "/admin/settings",
    },
  ];

  return (
    <div
      className={twMerge(
        "flex min-h-screen bg-gray-50 text-gray-800",
        locale === "fa" ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Sidebar
        locale={locale}
        projectTitle="پنل ادمین"
        projectIcon={<div>project icon</div>}
        menuItems={menuItems}
      />
      <div className="flex w-full flex-col">
        <Header />
        <main
          className={twMerge(
            "m-5 mb-0 md:m-10",
            locale === "fa" ? "lg:mr-0" : "lg:ml-0"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
