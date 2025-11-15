import * as React from "react";
import type { SVGProps } from "react";
const SvgFalse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 10 14"
    {...props}
  >
    <path
      stroke="#DE4444"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 1 1 13M1 1l8 12"
    />
  </svg>
);
export default SvgFalse;
