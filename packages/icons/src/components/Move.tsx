import * as React from "react";
import type { SVGProps } from "react";
const SvgMove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="#566A7F"
    viewBox="0 0 14 16"
    {...props}
  >
    <path d="m7 16-2.975-3.4.997-1.14L6.3 12.92V8.8H2.713l1.277 1.44-1.015 1.16L0 8l2.958-3.38.997 1.14-1.26 1.44H6.3V3.08L5.023 4.54 4.024 3.4 7 0l2.975 3.4-.998 1.14L7.7 3.08V7.2h3.587L10.01 5.76l1.015-1.16L14 8l-2.975 3.4-.998-1.14 1.278-1.46H7.7v4.1l1.26-1.46 1.015 1.16z" />
  </svg>
);
export default SvgMove;
