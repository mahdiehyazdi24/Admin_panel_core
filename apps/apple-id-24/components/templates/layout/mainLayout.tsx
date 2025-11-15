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

  const menuItems: MenuItem[] = [
    {
      title: "داشبورد",
      icon: "Dashboard",
      href: "/",
    },

    {
      title: "مدیریت کاربران",
      icon: "User",
      href: "/users",
    },

    {
      title: "مدیریت نقش‌ها",
      icon: "Users",
      href: "/roles",
    },

    {
      title: "مدیریت سفارشات",
      icon: "Headphone",
      children: [
        { title: "لیست سفارشات", href: "/orders" },
        { title: "سفارشات تکمیل‌شده (0)", href: "/orders/completed" },
        { title: "در حال بررسی (0)", href: "/orders/under-review" },
        { title: "نیاز به اطلاعات (0)", href: "/orders/get-info" },
        { title: "برچسب‌ها", href: "/orders/labels" },
      ],
    },

    {
      title: "مدیریت نظرات",
      icon: "Messages",
      children: [
        { title: "نظرات بلاگ", href: "/comments/blogs" },
        { title: "نظرات محصولات", href: "/comments/product" },
      ],
    },

    {
      title: "مدیریت محتوا",
      icon: "Blog",
      children: [
        { title: "بلاگ‌ها", href: "/posts/blogs" },
        { title: "اخبار", href: "/posts/news" },
        { title: "تگ‌ها", href: "/posts/tags" },
        { title: "دسته‌بندی‌ها", href: "/posts/categories" },
        { title: "سوالات متداول", href: "/posts/faq" },
        { title: "درباره ما", href: "/posts/about-us" },
      ],
    },

    {
      title: "مدیریت محصولات",
      icon: "WidgetAdd",
      children: [
        { title: "لیست محصولات", href: "/products" },
        { title: "دسته‌بندی محصولات", href: "/products/categories" },
        { title: "محصولات پیشنهادی", href: "/products/suggested" },
        { title: "لیست تخفیف‌ها", href: "/products/discounts" },
        { title: "هشدارها", href: "/products/alerts" },
      ],
    },

    {
      title: "مدیریت اپل آیدی",
      icon: "Apple",
      children: [
        { title: "لیست اپل آیدی", href: "/apple-ids" },
        { title: "دسته‌بندی کشورها", href: "/apple-ids/categories" },
        { title: "افزودن اپل آیدی", href: "/apple-ids/add" },
        { title: "لاگ‌ها", href: "/apple-ids/logs" },
        { title: "سوالات امنیتی", href: "/apple-ids/questions" },
      ],
    },

    {
      title: "مدیریت مالی",
      icon: "WidgetAdd",
      children: [
        { title: "پکیج‌های پیشنهادی", href: "/financial/suggested-packages" },
        { title: "مدیریت کیف پول کاربران", href: "/financial/wallets" },
        { title: "مدیریت تراکنش‌ها", href: "/financial/transactions" },
        { title: "مدیریت فروش", href: "/financial/sale" },
      ],
    },

    {
      title: "تماس با ما",
      icon: "Phone",
      href: "/tickets",
    },

    {
      title: "مدیریت سایت",
      icon: "Permission",
      children: [
        { title: "لیست فرم‌ها", href: "/management/forms" },
        { title: "ایجاد فرم جدید", href: "/management/forms/create/structure" },
        { title: "لاگ‌های ادمین", href: "/management/admins" },
        { title: "گزارشات زمانی", href: "/management/timing/dashboard" },
      ],
    },

    {
      title: "تنظیمات سایت",
      icon: "Setting",
      href: "/settings",
    },
  ];

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
