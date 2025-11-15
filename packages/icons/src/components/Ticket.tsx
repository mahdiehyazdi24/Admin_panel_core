import * as React from "react";
import type { SVGProps } from "react";
const SvgTicket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#48D1AA"
    strokeWidth={2}
    viewBox="0 0 19 14"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.244 10.219C1 9.438 1 8.847 1 6.333s0-3.771 1.244-4.552C3.49 1 5.494 1 9.5 1s6.01 0 7.255.781C17.999 2.563 18 3.82 18 6.333s0 3.105-1.245 3.886C15.51 11 13.507 11 9.5 11c-2.133 0-3.23 1.159-5.1 2v-2.141c-.93-.109-1.614-.3-2.156-.64"
    />
  </svg>
);
export default SvgTicket;
