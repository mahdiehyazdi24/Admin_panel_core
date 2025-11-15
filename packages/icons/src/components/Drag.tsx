import * as React from "react";
import type { SVGProps } from "react";
const SvgDrag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#009774"
    strokeWidth={0.8}
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6 1 1m5 5 5-5M6 6l-5 5m5-5 5 5M1 1v2.5M1 1h2.5M11 1v2.5M11 1H8.5M1 11V8.5M1 11h2.5m7.5 0V8.5m0 2.5H8.5"
    />
  </svg>
);
export default SvgDrag;
