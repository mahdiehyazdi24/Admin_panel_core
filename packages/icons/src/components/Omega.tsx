import * as React from "react";
import type { SVGProps } from "react";
const SvgOmega = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#000"
    strokeWidth={1.2}
    viewBox="0 0 16 13"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1 12h4.901Q2.4 9.748 2.4 6.5C2.4 3.25 4.856 1 8.003 1S13.6 3.406 13.6 6.5q0 3.093-3.498 5.5H15"
    />
  </svg>
);
export default SvgOmega;
