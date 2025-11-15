import * as React from "react";
import type { SVGProps } from "react";
const SvgTinyLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 11 13"
    {...props}
  >
    <path
      stroke="#DE4444"
      strokeLinecap="round"
      strokeOpacity={0.7}
      d="M2.832 5.278V3.444a2.444 2.444 0 0 1 4.889 0v1.834"
    />
    <path
      stroke="#DE4444"
      strokeLinejoin="round"
      strokeOpacity={0.7}
      d="M1 5.278h8.556v5.5A1.22 1.22 0 0 1 8.333 12h-6.11A1.22 1.22 0 0 1 1 10.778z"
    />
  </svg>
);
export default SvgTinyLock;
