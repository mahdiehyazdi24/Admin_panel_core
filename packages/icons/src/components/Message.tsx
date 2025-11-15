import * as React from "react";
import type { SVGProps } from "react";
const SvgMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#566A7F"
    viewBox="0 0 17 10"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.58}
      d="M2.098 8.216C1 7.566 1 7.074 1 4.98s0-3.143 1.098-3.794c1.1-.65 2.867-.65 6.402-.65s5.303 0 6.401.65C16 1.836 16 2.884 16 4.98s0 2.587-1.099 3.237c-1.097.652-2.865.652-6.401.652-1.883 0-2.85.965-4.5 1.666V8.75c-.82-.09-1.424-.25-1.902-.534"
    />
  </svg>
);
export default SvgMessage;
