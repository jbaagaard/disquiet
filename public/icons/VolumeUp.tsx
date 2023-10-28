import * as React from "react";
import { SVGProps } from "react";

const VolumeUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.833 5.833 7 10.5H2.333v7H7l5.833 4.667V5.833Zm9.415-.081a11.667 11.667 0 0 1 0 16.496M18.13 9.87a5.833 5.833 0 0 1 0 8.248"
    />
  </svg>
);
export default VolumeUpIcon;
