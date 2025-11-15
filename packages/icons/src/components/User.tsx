import * as React from "react";
import type { SVGProps } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#566A7F"
    viewBox="0 0 13 13"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeWidth={0.8}
      d="M13 12.495c-.353-.86-1.134-1.621-2.219-2.163C9.698 9.789 8.368 9.495 7 9.495s-2.697.294-3.782.837S1.353 11.634 1 12.495M7 6.495a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </svg>
);
export default SvgUser;
