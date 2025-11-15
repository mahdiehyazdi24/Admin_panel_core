import * as React from "react";
import type { SVGProps } from "react";
const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#566A7F"
    strokeWidth={0.8}
    viewBox="0 0 20 23"
    {...props}
  >
    <path d="M16.171 1H3.53C2.132 1 1 2.088 1 3.43v15.79c0 1.342 1.132 2.43 2.529 2.43H16.17c1.397 0 2.529-1.088 2.529-2.43V3.43C18.7 2.087 17.568 1 16.171 1Z" />
    <path
      strokeLinecap="round"
      d="M6.059 7.074h7.585M6.06 11.933h7.585M6.06 16.79h5.057"
    />
  </svg>
);
export default SvgList;
