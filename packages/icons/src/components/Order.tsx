import * as React from "react";
import type { SVGProps } from "react";
const SvgOrder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#6B45F5"
    viewBox="0 0 21 26"
    {...props}
  >
    <path
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.733 5H2.267C1.567 5 1 5.497 1 6.111V23.89C1 24.503 1.567 25 2.267 25h16.466c.7 0 1.267-.497 1.267-1.111V6.11C20 5.497 19.433 5 18.733 5Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.75 1v2.654M17.25 1v2.654M5 10.43h14M5 14.714h10.5M5 19h7"
    />
  </svg>
);
export default SvgOrder;
