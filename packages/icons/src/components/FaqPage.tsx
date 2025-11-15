import * as React from "react";
import type { SVGProps } from "react";
const SvgFaqPage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#F5F5F5"
    strokeOpacity={0.46}
    strokeWidth={3}
    viewBox="0 0 75 75"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M37.5 73C57.106 73 73 57.106 73 37.5S57.106 2 37.5 2 2 17.894 2 37.5 17.894 73 37.5 73"
    />
    <path strokeLinejoin="round" d="M37.5 53.278h.04v.04h-.04z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M31.582 20.09c1.538-1.539 3.89-2.308 5.9-2.312a7.9 7.9 0 0 1 5.594 2.311 7.87 7.87 0 0 1 2.312 5.578c0 2.02-.77 4.039-2.312 5.577a7.9 7.9 0 0 1-5.593 2.312v7.889"
    />
  </svg>
);
export default SvgFaqPage;
