import * as React from "react";
import type { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 13"
    {...props}
  >
    <path
      stroke="#009774"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.8}
      d="M11.4 6.5c0 .625-.253 1.224-.703 1.666-.45.443-1.06.69-1.697.69a2.42 2.42 0 0 1-1.697-.69A2.34 2.34 0 0 1 6.6 6.5c0-.625.253-1.225.703-1.667s1.06-.69 1.697-.69c.636 0 1.247.248 1.697.69S11.4 5.875 11.4 6.5"
    />
    <path
      stroke="#009774"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.8}
      d="M1 6.5C2.28 3.28 5.269 1 9 1s6.72 2.28 8 5.5C15.72 9.72 12.731 12 9 12S2.28 9.72 1 6.5"
    />
  </svg>
);
export default SvgEye;
