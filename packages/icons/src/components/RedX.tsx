import * as React from "react";
import type { SVGProps } from "react";
const SvgRedX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <rect width={28} height={28} fill="#FA243C" rx={14} />
    <path stroke="#fff" strokeLinecap="round" d="m9 10 9 9m0-9-9 9" />
  </svg>
);
export default SvgRedX;
