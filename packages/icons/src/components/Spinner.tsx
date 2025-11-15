import * as React from "react";
import type { SVGProps } from "react";
const SvgSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <circle cx={20} cy={20} r={14.142} transform="rotate(-90 20 20)" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M22.305 6.047a14.142 14.142 0 1 1-15.51 19.016"
    />
  </svg>
);
export default SvgSpinner;
