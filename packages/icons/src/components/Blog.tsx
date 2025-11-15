import * as React from "react";
import type { SVGProps } from "react";
const SvgBlog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#566A7F"
    viewBox="0 0 18 13"
    {...props}
  >
    <path
      strokeWidth={0.58}
      d="M13.857.436H3.143C1.959.436 1 1.068 1 1.847v9.177c0 .78.96 1.412 2.143 1.412h10.714c1.184 0 2.143-.633 2.143-1.412V1.847c0-.78-.96-1.411-2.143-1.411Z"
    />
    <path
      strokeLinecap="round"
      strokeWidth={0.58}
      d="M6 3.709h6.25M6 6.435h6.25M6 9.163h4.167"
    />
  </svg>
);
export default SvgBlog;
