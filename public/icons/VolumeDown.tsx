import * as React from "react";
import { SVGProps } from "react";

const VolumeDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <path
      stroke={props.color ? props.color : "#897F73"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15.5 6-5.833 4.667H5v7h4.667l5.833 4.666V6Zm5.297 4.037a5.833 5.833 0 0 1 0 8.248"
    />
  </svg>
);
export default VolumeDownIcon;
