"use client";

import { FC, SVGProps } from "react";
import { IconKeys, IconObj } from "./types";

interface Props {
  src: IconKeys;
}

export const Icon: FC<Props & SVGProps<SVGSVGElement>> = ({ src, ...rest }) => {
  const Output = IconObj[src];
  return <Output {...rest} />;
};

export default Icon;
