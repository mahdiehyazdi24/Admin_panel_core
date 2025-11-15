import * as React from "react";
import type { SVGProps } from "react";
const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#566A7F"
    viewBox="0 0 20 15"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.5}
      d="M18.547 11.563V3.437A2.435 2.435 0 0 0 16.115 1H3.147A2.435 2.435 0 0 0 .715 3.438v8.124A2.435 2.435 0 0 0 3.147 14h12.968a2.435 2.435 0 0 0 2.432-2.437M8.063 12h2.097"
    />
  </svg>
);
export default SvgTablet;
