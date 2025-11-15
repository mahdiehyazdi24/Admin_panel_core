import * as React from "react";
import type { SVGProps } from "react";
const SvgTickCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 90 90"
    {...props}
  >
    <path
      stroke="#007AFF"
      strokeLinecap="round"
      strokeWidth={3}
      d="M28.375 45.75 39.818 59c.217.251.61.23.793-.046C42.336 56.346 49.877 44.952 55.25 37m31.25 7.5C86.5 67.972 67.472 87 44 87S1.5 67.972 1.5 44.5 20.528 2 44 2s42.5 19.028 42.5 42.5Z"
    />
  </svg>
);
export default SvgTickCircle;
