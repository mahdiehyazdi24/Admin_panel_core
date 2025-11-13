import type { FunctionComponent, SVGProps } from "react";
export type SvgComponentType = FunctionComponent<SVGProps<SVGSVGElement>>;


import AddContentImport from "./components/AddContent";

export const IconObj = {
  AddContent: AddContentImport as SvgComponentType,
};

export type IconKeys = keyof typeof IconObj;
