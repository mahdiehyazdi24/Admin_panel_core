import * as React from "react";
import type { SVGProps } from "react";
const SvgTextInput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#566A7F"
    viewBox="0 0 34 18"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.5}
      d="M5.8 4.333h2.4m0 0h2.4m-2.4 0v9.334m0 0H5.8m2.4 0h2.4M4.2 1h25.6c.849 0 1.663.281 2.263.781S33 2.959 33 3.667v10.666c0 .708-.337 1.386-.937 1.886S30.649 17 29.8 17H4.2c-.849 0-1.663-.281-2.263-.781S1 15.041 1 14.333V3.667c0-.708.337-1.386.937-1.886S3.351 1 4.2 1"
    />
  </svg>
);
export default SvgTextInput;
