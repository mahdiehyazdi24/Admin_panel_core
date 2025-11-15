import * as React from "react";
import type { SVGProps } from "react";
const SvgAddContent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#566A7F"
    viewBox="0 0 30 28"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.5}
      strokeWidth={1.5}
      d="M25.5 7.933H1M1 1h24.5m-8.75 13.867H1M1 21.8h10.5m12.25-5.2V27m-5.25-5.2H29"
    />
  </svg>
);
export default SvgAddContent;
