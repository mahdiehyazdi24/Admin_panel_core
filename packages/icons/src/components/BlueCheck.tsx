import * as React from "react";
import type { SVGProps } from "react";
const SvgBlueCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <rect width={28} height={28} fill="#007AFF" rx={14} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={3}
      d="m5 12.444 7.083 8.068a.498.498 0 0 0 .79-.049C14.172 18.529 18.722 11.77 22 7"
    />
  </svg>
);
export default SvgBlueCheck;
