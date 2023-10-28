import * as React from "react";
import { SVGProps } from "react";

const ChefronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 21"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={props.color ? props.color : "#897F73"}
        d="M0 10.172c0 .293.105.55.328.773l9.293 9.082c.2.211.457.317.762.317.61 0 1.078-.457 1.078-1.067 0-.304-.129-.562-.316-.761l-8.532-8.344 8.532-8.344c.187-.2.316-.469.316-.762C11.46.457 10.992 0 10.383 0a1.04 1.04 0 0 0-.762.305L.328 9.398c-.223.211-.328.48-.328.774Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h11.461v20.355H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ChefronLeftIcon;
