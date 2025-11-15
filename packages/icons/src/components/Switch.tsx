import * as React from "react";
import type { SVGProps } from "react";
const SvgSwitch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6m6-4a4 4 0 1 0 0 8h8a4 4 0 0 0 0-8z"
      clipRule="evenodd"
    />
    <path fill="#000" d="M18 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
  </svg>
);
export default SvgSwitch;
