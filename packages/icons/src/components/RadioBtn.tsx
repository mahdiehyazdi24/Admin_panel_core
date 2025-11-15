import * as React from "react";
import type { SVGProps } from "react";
const SvgRadioBtn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 31 22"
    {...props}
  >
    <path
      stroke="#566A7F"
      strokeOpacity={0.5}
      strokeWidth={1.5}
      d="M13.477 4.427h17.526M13.477 17.368h17.526"
    />
    <circle cx={5} cy={5} r={5} fill="#566A7F" fillOpacity={0.5} />
    <circle cx={5} cy={17} r={5} fill="#566A7F" fillOpacity={0.5} />
    <circle cx={5} cy={17} r={3} fill="#fff" />
    <circle cx={5} cy={5} r={3} fill="#fff" />
    <circle cx={5} cy={5} r={2} fill="#566A7F" fillOpacity={0.5} />
  </svg>
);
export default SvgRadioBtn;
