"use client";

import services, { useRequest } from "@/services";
import { Container, Table } from "@repo/ui";
import { useEffect } from "react";

export default function Page() {
  useRequest(services.userControllerGetUsersAsyncThunk, {
    firstCall: { query: { page: 1, limit: 10 } },
  });
  useEffect(() => {
    services.userControllerGetUsers();
  }, []);
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="w-1/2">
        <Container icon="Calendar" title="سلام خوبی؟">
          <Table
            headers={[
              "شسیشسیز",
              "شطزضص",
              "ظطزززظش",
              "شیضص یس ",
              "ضص ش سی",
              " سشیصی ",
              "ضفغتغعن",
            ]}
            rows={new Array(10).fill(null).map(() => ({
              1: "شسیشسزسی",
              2: "یببذلذلذ",
              3: "یز ظطزظطزظ",
              4: "د بلسیظط",
              5: "ظطزطظزظط",
              6: "ظطزظطزش",
              7: "یشسیشسی",
            }))}
          />
        </Container>
      </div>
    </main>
  );
}
