import * as React from "react";
import type { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 20 17"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M20 8.25a8 8 0 0 1-8 8H6a6 6 0 0 1-.975-11.922A8 8 0 0 1 20 8.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloud;
