import * as React from "react";
import type { SVGProps } from "react";
const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="#7557E9"
    stroke="#7557E9"
    viewBox="0 0 19 17"
    {...props}
  >
    <rect
      width={17.2}
      height={15.2}
      x={0.4}
      y={0.4}
      fill="none"
      strokeWidth={0.8}
      rx={1.6}
    />
    <path
      stroke="none"
      d="M13.283 8.283a.4.4 0 0 0 0-.566l-2.546-2.545a.4.4 0 0 0-.565.565L12.434 8l-2.262 2.263a.4.4 0 0 0 .565.565zM0 8.4h13v-.8H0z"
    />
  </svg>
);
export default SvgLogout;
