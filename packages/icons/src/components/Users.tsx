import * as React from "react";
import type { SVGProps } from "react";
const SvgUsers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#566A7F"
    viewBox="0 0 15 12"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeWidth={0.8}
      d="M9.972 10.637C9.708 9.97 9.125 9.38 8.314 8.96c-.811-.42-1.805-.648-2.828-.648S3.47 8.54 2.66 8.96 1.264 9.97 1 10.637M15.58 11.218c-.264-.667-.848-1.837-1.659-2.258-.81-.42-1.805-.648-2.827-.648M5.485 5.987c1.24 0 2.243-1.04 2.243-2.324S6.724 1.338 5.485 1.338s-2.243 1.04-2.243 2.325c0 1.284 1.004 2.324 2.243 2.324ZM11.094 5.987c1.239 0 2.243-1.04 2.243-2.324s-1.004-2.325-2.243-2.325"
    />
  </svg>
);
export default SvgUsers;
