import * as React from "react";
import type { SVGProps } from "react";
const SvgSort = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#566A7F"
    viewBox="0 0 15 11"
    {...props}
  >
    <path d="M1 1h6M1 5h4.5M1 9h3M10.5 10 13 7.5M10.5 10 8 7.5m2.5 2.5V0" />
  </svg>
);
export default SvgSort;
