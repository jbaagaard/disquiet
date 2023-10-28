import * as React from "react";
import { SVGProps } from "react";

const ChefronRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 21"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={props.color ? props.color : "#897F73"}
        d="M11.46 10.172c0-.293-.116-.563-.339-.774L1.84.305A1.09 1.09 0 0 0 1.066 0C.47 0 0 .457 0 1.066c0 .293.117.563.305.762l8.53 8.344-8.53 8.344a1.089 1.089 0 0 0-.305.761c0 .61.469 1.067 1.066 1.067.305 0 .563-.106.774-.317l9.281-9.082c.223-.222.34-.48.34-.773Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h11.461v20.355H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ChefronRightIcon;
