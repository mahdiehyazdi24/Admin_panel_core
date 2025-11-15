import * as React from "react";
import type { SVGProps } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 42 43"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M14.486 14.496C14.486 10.908 17.402 8 21 8s6.514 2.908 6.514 6.496v1.79C30.624 16.777 33 19.462 33 22.7v5.47c0 3.587-2.916 6.496-6.514 6.496H15.514C11.917 34.667 9 31.758 9 28.17V22.7c0-3.239 2.377-5.924 5.486-6.415zm2.057 1.71h8.914v-1.71A4.45 4.45 0 0 0 21 10.05a4.45 4.45 0 0 0-4.457 4.445zm-1.029 2.05a4.45 4.45 0 0 0-4.457 4.445v5.47a4.45 4.45 0 0 0 4.457 4.444h10.972a4.45 4.45 0 0 0 4.457-4.444V22.7a4.45 4.45 0 0 0-4.457-4.445zm4.457 8.547v-2.735h2.058v2.735c0 .567-.46 1.026-1.029 1.026-.568 0-1.029-.46-1.029-1.026"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLock;
