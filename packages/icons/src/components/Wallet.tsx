import * as React from "react";
import type { SVGProps } from "react";
const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="#566A7F"
    viewBox="0 0 16 14"
    {...props}
  >
    <path d="M15 2.667H1.667a1 1 0 0 1 0-2H13A.333.333 0 1 0 13 0H1.667A1.667 1.667 0 0 0 0 1.667v10.666A1.666 1.666 0 0 0 1.667 14H15a1 1 0 0 0 1-1V3.667a1 1 0 0 0-1-1M15.333 13a.333.333 0 0 1-.333.333H1.667a1 1 0 0 1-1-1V3c.288.217.639.334 1 .333H15a.333.333 0 0 1 .333.334zm-2.666-5a.666.666 0 1 1-1.333 0 .666.666 0 0 1 1.333 0" />
  </svg>
);
export default SvgWallet;
