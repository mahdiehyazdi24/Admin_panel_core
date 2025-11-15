import * as React from "react";
import type { SVGProps } from "react";
const SvgDashboardPage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#F5F5F5"
    strokeOpacity={0.46}
    strokeWidth={3}
    viewBox="0 0 88 89"
    {...props}
  >
    <rect width={38} height={38} x={1.5} y={1.5} rx={3.5} />
    <rect width={38} height={38} x={48.5} y={1.5} rx={3.5} />
    <rect width={38} height={38} x={48.5} y={49.5} rx={3.5} />
    <rect width={38} height={38} x={1.5} y={49.5} rx={3.5} />
  </svg>
);
export default SvgDashboardPage;
