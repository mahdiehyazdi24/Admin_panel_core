import * as React from "react";
import type { SVGProps } from "react";
const SvgExcel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#20744A"
      fillRule="evenodd"
      d="M15.303 1.366H9.515V0L0 1.47v12.89L9.515 16v-2.024h5.788a.66.66 0 0 0 .697-.627V1.992a.664.664 0 0 0-.697-.626m.092 12.087h-5.9l-.01-1.081h1.422v-1.259H9.475l-.007-.743h1.439V9.11h-1.45l-.007-.743h1.457V7.108H9.446v-.743h1.46v-1.26h-1.46v-.743h1.46V3.103h-1.46V1.96h5.949z"
      clipRule="evenodd"
    />
    <path
      fill="#20744A"
      d="M12 3h2v1.222h-2zm0 1.945h2v1.221h-2zm0 1.944h2v1.222h-2zm0 1.945h2v1.222h-2zm0 1.944h2V12h-2z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m2.124 5.227 1.446-.07.91 2.11L5.553 5.07 7 5 5.244 7.996 7 11l-1.53-.087-1.032-2.29-1.033 2.203L2 10.72l1.632-2.653z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExcel;
