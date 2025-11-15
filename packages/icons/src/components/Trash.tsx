import * as React from "react";
import type { SVGProps } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 13 15"
    {...props}
  >
    <path
      fill="#DE4444"
      d="M2.43 15q-.625 0-1.063-.449a1.5 1.5 0 0 1-.438-1.087V1.684H0V.732h3.714V0h5.572v.732H13v.952h-.929v11.78q0 .656-.429 1.097T10.571 15zm8.713-13.316H1.857v11.78q0 .255.16.42a.55.55 0 0 0 .412.165h8.143q.213 0 .393-.183a.56.56 0 0 0 .178-.403zM4.465 12.147h.928V3.585h-.928zm3.142 0h.928V3.585h-.928z"
    />
  </svg>
);
export default SvgTrash;
