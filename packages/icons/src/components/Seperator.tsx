import * as React from "react";
import type { SVGProps } from "react";
const SvgSeperator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 28 23"
    {...props}
  >
    <rect
      width={7.115}
      height={5.692}
      y={7}
      fill="#566A7F"
      fillOpacity={0.5}
      rx={1}
    />
    <rect
      width={7.115}
      height={5.692}
      x={20}
      y={7}
      fill="#566A7F"
      fillOpacity={0.5}
      rx={1}
    />
    <path
      stroke="#566A7F"
      strokeDasharray="2 2"
      strokeOpacity={0.5}
      strokeWidth={1.5}
      d="M13.75 0v23"
    />
  </svg>
);
export default SvgSeperator;
