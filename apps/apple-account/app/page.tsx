"use client";

import { useAppSelector } from "@/redux/hooks";
import services, { useRequest } from "@/services";
import { Container, Table } from "@repo/ui";
import { twMerge } from "tailwind-merge";

export default function Page() {
  const data = useAppSelector((store) => store.users.list);
  useRequest(services.userControllerGetUsersAsyncThunk, {
    firstCall: { query: { page: 1, limit: 10 } },
  });

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="w-2/3">
        <Container icon="User" title="لیست کاربران">
          <Table
            headers={[
              "شماره همراه",
              "نام و نام خانوادگی",
              "عملیات",
              "تاریخ عضویت",
              "وضعیت",
              "موجودی",
              "نقش",
            ]}
            rows={
              data?.users.map((user) => ({
                0: user.phone_number,
                1: `${user.name || ""} ${user.family || ""}`.trim() || "ناشناس",
                2: <div></div>,
                3: user.created_at,
                4: (
                  <p className={twMerge(!user.is_active && "text-red-500")}>
                    {user.is_active ? "فعال" : "بن"}
                  </p>
                ),
                5: user.wallet.balance,
                6: user.role.title,
              })) || []
            }
          />
        </Container>
      </div>
    </main>
  );
}
