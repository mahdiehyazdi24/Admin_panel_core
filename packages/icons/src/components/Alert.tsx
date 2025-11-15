import * as React from "react";
import type { SVGProps } from "react";
const SvgAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 27 25"
    {...props}
  >
    <path
      stroke="#566A7F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.5}
      strokeWidth={1.5}
      d="M11.74 2.259c.756-1.4 2.764-1.4 3.52 0l10.147 18.79c.72 1.333-.246 2.951-1.76 2.951H3.353c-1.514 0-2.48-1.618-1.76-2.95zM14 8v9M14 20v.01"
    />
  </svg>
);
export default SvgAlert;
