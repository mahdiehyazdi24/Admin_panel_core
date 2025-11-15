import * as React from "react";
import type { SVGProps } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M4 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1" />
    <path
      fillRule="evenodd"
      d="M16.654 4.588a2 2 0 0 0-2.829 0L6.92 11.494l-.918 4.504 4.504-.918 6.906-6.906a2 2 0 0 0 0-2.828zM12.41 3.174a4 4 0 0 1 5.657 0l.757.757a4 4 0 0 1 0 5.657l-6.906 6.906c-.277.278-.63.467-1.015.546l-4.503.918a2 2 0 0 1-2.36-2.36l.918-4.503a2 2 0 0 1 .546-1.015z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEdit;
