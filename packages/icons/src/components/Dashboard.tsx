import * as React from "react";
import type { SVGProps } from "react";
const SvgDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#000"
    viewBox="0 0 17 12"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.8}
      d="M8.445.445C4.333.445 1 3.605 1 7.505c0 1.845.638 3.682 1.861 4.94H14.03c1.223-1.258 1.861-3.095 1.861-4.94 0-3.9-3.333-7.06-7.445-7.06"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.8}
      d="M8.446 9.975c.822 0 1.489-.632 1.489-1.412s-.667-1.412-1.489-1.412-1.489.632-1.489 1.412.667 1.412 1.489 1.412M8.443 5.034v2.118m0-4.942v.706M2.86 7.858h.745m.744-3.53.527.5m8.407 3.03h.745m-1.861-3.03.526-.5"
    />
  </svg>
);
export default SvgDashboard;
