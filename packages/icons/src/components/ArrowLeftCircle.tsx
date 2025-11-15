import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 29 29"
    {...props}
  >
    <rect width={28} height={28} x={0.469} rx={14} />
    <path
      fill="currentColor"
      d="M21.469 14.004c0-.565-.375-.954-.934-.954h-8.708l-1.595.069 1.97-1.808 1.646-1.724a1 1 0 0 0 .272-.68c0-.518-.368-.907-.882-.907-.243 0-.47.1-.662.298l-4.82 4.996c-.184.183-.287.45-.287.71a1 1 0 0 0 .286.702l4.821 4.997a.9.9 0 0 0 .662.297c.514 0 .882-.39.882-.908a1 1 0 0 0-.272-.679l-1.646-1.716-1.97-1.808 1.595.06h8.708c.559 0 .934-.38.934-.945"
    />
  </svg>
);
export default SvgArrowLeftCircle;
