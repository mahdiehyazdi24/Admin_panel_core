import * as React from "react";
import type { SVGProps } from "react";
const SvgExport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <path
      fill="#7557E9"
      d="M0 16V0h16v3h-1V1H1v14h14v-2h1v3zm12.712-3.712-.689-.688 3.056-3.1H5.385v-1h9.694l-3.056-3.1.689-.688L17 8z"
    />
  </svg>
);
export default SvgExport;
