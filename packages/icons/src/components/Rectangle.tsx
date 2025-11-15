import * as React from "react";
import type { SVGProps } from "react";
const SvgRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#566A7F"
    viewBox="0 0 27 12"
    {...props}
  >
    <rect
      width={24.349}
      height={9.633}
      x={1.18}
      y={1.166}
      strokeOpacity={0.5}
      rx={1.5}
    />
  </svg>
);
export default SvgRectangle;
