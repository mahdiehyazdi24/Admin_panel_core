import * as React from "react";
import type { SVGProps } from "react";
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 12"
    {...props}
  >
    <path
      fill="#EC1C24"
      d="M17 8.766c0 1.613-.896 2.922-2.656 2.922H2.656C.896 11.688 0 10.379 0 8.766V2.922C0 1.308.896 0 2.656 0h11.688C16.104 0 17 1.308 17 2.922z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M10.567 7.523A2.865 2.865 0 0 1 7.35 8.689a2.88 2.88 0 0 1-2.049-2.9c.07-1.32 1.06-2.442 2.35-2.67 1.364-.242 2.46.49 2.929 1.256-.555-.546-1.2-.791-1.956-.705a2.22 2.22 0 0 0-1.473.787c-.758.882-.73 2.206.061 3.038a2.26 2.26 0 0 0 1.671.734c.659.005 1.218-.244 1.686-.705"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="m11.75 4.887.538.5.72-.16-.31.67.374.633-.73-.088-.489.552-.141-.723-.677-.293.643-.357z"
    />
  </svg>
);
export default SvgFlag;
