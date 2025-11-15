"use client";

import { Table } from "@repo/ui";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="w-1/2">
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
      </div>
    </main>
  );
}
