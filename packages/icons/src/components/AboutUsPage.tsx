import * as React from "react";
import type { SVGProps } from "react";
const SvgAboutUsPage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M33.063 30.848h2.218a2.22 2.22 0 0 1 2.218 2.218v17.749a2.22 2.22 0 0 0 2.219 2.218h2.218M37.5 21.973h.045"
    />
    <path d="M43.666 72.464A35.5 35.5 0 0 0 57.86 8.42 35.5 35.5 0 1 0 17.14 66.582a35.5 35.5 0 0 0 26.526 5.882Z" />
  </svg>
);
export default SvgAboutUsPage;
