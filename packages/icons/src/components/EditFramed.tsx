import * as React from "react";
import type { SVGProps } from "react";
const SvgEditFramed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path d="M17 9.889v6.222a.89.89 0 0 1-.889.889H1.89A.89.89 0 0 1 1 16.111V1.89A.89.89 0 0 1 1.889 1H8.11" />
    <path d="M4.555 10.209v3.235h3.252L17 4.248 13.753 1z" />
  </svg>
);
export default SvgEditFramed;
