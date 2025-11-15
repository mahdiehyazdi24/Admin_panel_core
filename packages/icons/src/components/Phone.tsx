import * as React from "react";
import type { SVGProps } from "react";
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#566A7F"
    strokeWidth={0.58}
    viewBox="0 0 15 16"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.89 2.813c-.108 2.245-.947 4.492-2.43 6.506-1.481 2.014-3.551 3.722-5.993 4.945-1.88.937-3.935.022-4.375-1.62l-.2-.743c-.11-.41.22-.85.719-1.028A11.7 11.7 0 0 0 3.95 9.737l1.714.751c2.062-1.497 3.518-3.476 4.127-5.61l-1.714-.75c.14-.717.162-1.434.065-2.133-.059-.422.263-.865.776-1.003l.929-.248c2.052-.55 4.124.343 4.044 2.07"
    />
  </svg>
);
export default SvgPhone;
