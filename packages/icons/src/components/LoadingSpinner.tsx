import * as React from "react";
import type { SVGProps } from "react";
const SvgLoadingSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <rect width={28} height={28} fill="#636366" rx={14} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.876 22.554a9 9 0 0 1-2.48-.969M15.876 5a9.003 9.003 0 0 1 0 17.554M6.455 18.87a9 9 0 0 1-1.227-2.592M5 12.277c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A9 9 0 0 1 11.876 5"
    />
  </svg>
);
export default SvgLoadingSpinner;
