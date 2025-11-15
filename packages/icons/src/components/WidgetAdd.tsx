import * as React from "react";
import type { SVGProps } from "react";
const SvgWidgetAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#566A7F"
    viewBox="0 0 16 14"
    {...props}
  >
    <rect
      width={5.982}
      height={5.409}
      x={0.29}
      y={0.772}
      strokeWidth={0.58}
      rx={0.71}
    />
    <rect
      width={5.982}
      height={5.409}
      x={0.29}
      y={8.473}
      strokeWidth={0.58}
      rx={0.71}
    />
    <rect
      width={5.982}
      height={5.409}
      x={8.727}
      y={0.772}
      strokeWidth={0.58}
      rx={0.71}
    />
    <path
      strokeLinecap="round"
      strokeWidth={0.58}
      d="M11.719 9.039v5.133M15 11.605H8.438"
    />
  </svg>
);
export default SvgWidgetAdd;
