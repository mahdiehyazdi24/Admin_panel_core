import * as React from "react";
import type { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 17 19"
    {...props}
  >
    <path d="M0 9c0 .505.422.917.917.917h6.666v6.666c0 .495.412.917.917.917a.935.935 0 0 0 .927-.917V9.917h6.656A.926.926 0 0 0 17 9a.935.935 0 0 0-.917-.927H9.427V1.417A.935.935 0 0 0 8.5.5a.926.926 0 0 0-.917.917v6.656H.917A.935.935 0 0 0 0 9" />
  </svg>
);
export default SvgPlus;
