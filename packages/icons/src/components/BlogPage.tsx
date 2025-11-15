import * as React from "react";
import type { SVGProps } from "react";
const SvgBlogPage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#F5F5F5"
    strokeOpacity={0.46}
    strokeWidth={3}
    viewBox="0 0 95 77"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M27.439 2v20.884a4.67 4.67 0 0 1-4.672 4.555H2M27.439 2h61.227a4.67 4.67 0 0 1 4.672 4.555v63.773A4.67 4.67 0 0 1 88.666 75H6.672A4.67 4.67 0 0 1 2 70.328V27.439M27.439 2 2 27.439m37.867 33.008h41.137m-41.137-44.01h41.137M39.867 38.442h41.137m-59.148 1.635a10.185 10.185 0 0 1 0 20.37 10 10 0 0 1-9.835-10.185 10 10 0 0 1 9.835-10.185"
    />
  </svg>
);
export default SvgBlogPage;
