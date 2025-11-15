import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 35 22"
    {...props}
  >
    <path
      stroke="#566A7F"
      strokeOpacity={0.5}
      strokeWidth={1.5}
      d="M11 2.25h24M11 12.25h24M11 21.25h24"
    />
    <rect width={8} height={8} fill="#566A7F" fillOpacity={0.5} rx={1} />
    <rect width={8} height={8} y={14} fill="#566A7F" fillOpacity={0.5} rx={1} />
    <rect width={4} height={4} x={2} y={2} fill="#fff" rx={1} />
    <path
      fill="#fff"
      d="M5.684 16.078a.614.614 0 0 0-.835.239l-1.14 2.055-.653-.653a.615.615 0 1 0-.868.87l1.228 1.23c.116.117.273.181.434.181l.085-.006a.61.61 0 0 0 .452-.31l1.536-2.77a.617.617 0 0 0-.239-.837"
    />
  </svg>
);
export default SvgCheckbox;
