import * as React from "react";
import type { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 22 15"
    {...props}
  >
    <rect width={22} height={3} rx={1.5} />
    <rect width={22} height={3} y={11} rx={1.5} />
  </svg>
);
export default SvgMenu;
