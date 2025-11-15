import * as React from "react";
import type { SVGProps } from "react";
const SvgMedal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 10 9"
    {...props}
  >
    <path
      fill="currentColor"
      d="M4.729 7.07a.643.643 0 1 0 0-1.285.643.643 0 0 0 0 1.285M1.586 0a.96.96 0 0 0-.862.533L.1 1.778a.97.97 0 0 0-.031.793h5.588a.08.08 0 0 0 .068-.038L7.243.123A.08.08 0 0 0 7.175 0z"
    />
    <path
      fill="currentColor"
      d="M9.35 1.779 8.727.534a.96.96 0 0 0-.659-.512l-1.604 2.55-.894 1.427a2.57 2.57 0 0 0-1.687 0l-.469-.747a.08.08 0 0 0-.068-.038H.611a.08.08 0 0 0-.067.124l1.661 2.585a2.571 2.571 0 1 0 5.042 0l2.051-3.191a.97.97 0 0 0 .052-.953M4.81 7.711a1.286 1.286 0 1 1-.168-2.566 1.286 1.286 0 0 1 .168 2.566"
    />
  </svg>
);
export default SvgMedal;
