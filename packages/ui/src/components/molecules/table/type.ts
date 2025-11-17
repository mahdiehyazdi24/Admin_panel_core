import { ReactNode } from "react";

export type TableProps = {
  headers: (string | ReactNode)[];
  rows: { href?: string; [key: string]: ReactNode }[];
  className?: string;
  colSpan?: number[];
  limitedHeight?: string;
  mini?: boolean;
};
